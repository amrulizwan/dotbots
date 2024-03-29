import { spawn } from 'child_process'
import * as levelling from '../lib/levelling.js'
import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let user = db.data.users[m.sender]
    if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
        throw `
Level *${user.level} (${user.exp - min}/${xp})*
Not enough *${max - user.exp}* again!
`.trim()
    }
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
        if (before !== user.level) {
            let d = new Date(new Date + 3600000)
            let locale = 'id'
            let time = d.toLocaleTimeString(locale, {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            })
            let name = conn.getName(m.sender)
            let lvlnow = user.level
            let teks = `Selamat *${name}* naik 🧬level`
            let str = `
${teks} 

• Previous Level : ${before}
• New Level : ${lvlnow}

*_The more you interact with bots, the higher your level_*
`.trim()
            if (global.support.convert || global.support.magick || global.support.gm) {
                let fontLevel = 'src/level_c.otf'
                let fontTexts = 'src/texts.otf'
                let xtsx = 'src/lvlup_template.jpg'
                let bufs = []
                const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []),
                    'convert',
                    xtsx,
                    '-font',
                    fontTexts,
                    '-fill',
                    '#0F3E6A',
                    '-size',
                    '1024x784',
                    '-pointsize',
                    '68',
                    '-interline-spacing',
                    '-7.5',
                    '-annotate',
                    '+153+200',
                    teks,
                    //original together
                    '-font',
                    fontLevel,
                    '-fill',
                    '#0A2A48',
                    '-size',
                    '1024x784',
                    '-pointsize',
                    '140',
                    '-interline-spacing',
                    '-1.2',
                    '-annotate',
                    '+1370+260',
                    lvlnow,
                    '-append',
                    'jpg:-'
                ]
                spawn(_spawnprocess, _spawnargs)
                    .on('error', e => {
                        throw e
                    })
                    .on('close', () => {
                        conn.sendButton(m.chat, str, wm, image, [["Menu", "#menu"]], {quoted: m,  fromMe: false})
                    })
                    .stdout.on('data', chunk => bufs.push(chunk))

            } else {
                conn.replyv2(m.chat, str, m, {
                        mentions: [m.sender]
                })
            }
        }
}

handler.help = ['levelup']
handler.tags = ['rpg']

handler.command = /^levelup$/i
handler.register = true

export default handler