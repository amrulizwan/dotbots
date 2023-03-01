import {
    smsg
} from './lib/simple.js'
import {
    plugins
} from './lib/plugins.js'
import Connection from './lib/connection.js'
import printMessage from './lib/print.js'
import Helper from './lib/helper.js'
import db, {
    loadDatabase
} from './lib/database.js'
import {
    format
} from 'util'
import {
    fileURLToPath
} from 'url'
import path, {
    join
} from 'path'
import {
    watch
} from 'fs'
import chalk from 'chalk'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import request from "request"

const isNumber = x => typeof x === 'number' && !isNaN(x)
global.delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function() {
    clearTimeout(this)
    resolve()
}, ms))

/**
 * Handle messages upsert
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} chatUpdate
 */
export async function handler(chatUpdate) {
    this.msgqueque = this.msgqueque || []
    if (!chatUpdate)
        return
//    this.pushMessage(chatUpdate.messages).catch(console.error)
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    global.image = await (await fetch(img)).buffer()
    global.namabot = this.user.name
    global.uptime = clockString(process.uptime() * 1000)
    global.mRandom = mRandom
    global.linkgc = mRandom(['https://chat.whatsapp.com/L508viIjjPwHpYEqgTxqj6', 'https://chat.whatsapp.com/JsDLZeKb0YLDyrYc1L28sk'])
    global.emojiStringToArray = function(str) {
        var spl = str.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/);
        var arr = [];
        for (var i = 0; i < spl.length; i++) {
            var char = spl[i]
            if (char !== "") {
                arr.push(char);
            }
        }
        return arr;
    };
    global.mRandomUrl = fetchRandomJson
    global.numb = mRandom([400000271, 400000271])
    global.done = mRandom(["Sukses Sayang.. ", "Done", "Sukses"])
    global.eror = mRandom([
        'Error',
        'Astagfirullah Error',
        'Nice Error',
        'Salah Format Keknya :v',
        'error bro',
        'Kocak Error :v',
        'Wtf Error :v',
        'Ciaaa error',
        'Error cuyy',
        'Dahlah (emot batu) Error',
        'Kyaa Error',
        'Error Sayangg',
        'Error Mengcapek Keknya Aku',
        'Astoge Error, Yok Bisa Yok',
        'Buset Error :)',
        'Lah Gabisa, Kurang Donasi Aku Ni Keknya'
    ])
    global.wait = mRandom([
        '\n「 ⏱️ 」 *Tunggu Sedang di Proses...*\n',
        '\n      「 ⏱️ 」 *Loading...*\n',
        '\n    *bentar lagi badmood Aku*\n',
        '\n    *Iya lagi diproses*\n',
        '\n          *sabar ya*\n',
        '\n    *Bentar aku usahain dlu*\n',
        '\n  *Mulai dari nol yahh say*\n',
        '\n *Tunggu bentar, jangan kemana-mana ya*\n',
        '\n     「 ⏱️ 」 *Wait a minute*\n',
        '\n     「 ⏱️ 」 *Wait a second*\n',
        '\n  *Iya iyaaa bntar sayang*\n',
        '\n *Iya bentar lagi, jangan spam ya*\n',
        '\n *Lagi di proses, kurang cepet? Donasi om, jangan pake doang, huhuu*\n'
    ])
    global.fla = mRandom([
        'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
        'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
        'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
        'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
        'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
        'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
    ])
    //global.ucapan = ucapan()
    if (!m)
        return
    if (db.data == null)
        await loadDatabase()
    try {
        m = smsg(this, m) || m
        if (!m)
            return
        m.exp = 0
        m.limit = false
        try {
            // TODO: use loop to insert data instead of this
            let user = db.data.users[m.sender]
            global.userr = user
            if (typeof user !== 'object')
                db.data.users[m.sender] = {}
            if (user) {
                //==== START ANU DATA
                if (!isNumber(user.warning))
                    user.warning = 0
                if (!isNumber(user.pc))
                    user.pc = 0
                if (!isNumber(user.exp))
                    user.exp = 0
                if (!isNumber(user.limit))
                    user.limit = 10
                if (!isNumber(user.joincount))
                    user.joincount = 0
                if (!isNumber(user.premiumTime))
                    user.premiumTime = 0
                if (!('premium' in user))
                    user.premium = false
                if (!('registered' in user))
                    user.registered = false
                if (!user.registered) {
                    if (!('name' in user))
                        user.name = m.name
                    if (!isNumber(user.age))
                        user.age = -1
                    if (!isNumber(user.regTime))
                        user.regTime = -1
                }
                if (!isNumber(user.afk))
                    user.afk = -1
                if (!('afkReason' in user))
                    user.afkReason = ''
                if (!('pacar' in user))
                    user.pacar = ''
                if (!('language' in user))
                    user.language = 'en'
                if (!('banned' in user))
                    user.banned = false
                if (!isNumber(user.warn))
                    user.warn = 0
                if (!isNumber(user.level))
                    user.level = 0
                if (!('role' in user))
                    user.role = 'Beginner'
                if (!('autolevelup' in user))
                    user.autolevelup = true
                //==== END ANU DATA
                //==== START RPG DATA
                if (!isNumber(user.duidharam))
                    user.duidharam = 1000
                // -- LAST CLAIM DLL DATA
                if (!isNumber(user.lastclaim))
                    user.lastclaim = 0
                if (!isNumber(user.lastslot))
                    user.lastslot = 0
                if (!isNumber(user.lastistighfar))
                    user.lastistighfar = new Date() * 1
            } else
                db.data.users[m.sender] = {
                    //==== START ANU DATA
                    warning: 0,
                    pc: 0,
                    exp: 0,
                    limit: 10,
                    joincount: 0,
                    premiumTime: 0,
                    premium: false,
                    registered: false,
                    name: m.name,
                    age: -1,
                    regTime: -1,
                    afk: -1,
                    afkReason: '',
                    pacar: '',
                    banned: false,
                    warn: 0,
                    level: 0,
                    role: 'Beginner',
                    autolevelup: true,
                    language: 'en',
                    //===== END ANU
                    //==== RPG START
                    duidharam: 1000,
                    //==== END RPG
                    // -- END LAST CLAIM DSB
                    lastclaim: 0,
                    lastslot: 0,
                    lastistighfar: new Date() * 1,
                    // -- END LAST CLAIM DSB
                }
            let chat = db.data.chats[m.chat]
            global.chatss = chat
            if (typeof chat !== 'object')
                db.data.chats[m.chat] = {}
            if (chat) {
                if (!('isBanned' in chat))
                    chat.isBanned = false
                if (!('badword' in chat))
                    chat.badword = true
                if (!('deletemedia' in chat))
                    chat.deletemedia = true
                if (!isNumber(chat.deletemediaTime))
                    chat.deletemediaTime = (new Date() * 1) + 3600000 * 1
                if (!('welcome' in chat))
                    chat.welcome = false
                if (!('detect' in chat))
                    chat.detect = false
                if (!('sWelcome' in chat))
                    chat.sWelcome = ''
                if (!('sBye' in chat))
                    chat.sBye = ''
                if (!('sPromote' in chat))
                    chat.sPromote = ''
                if (!('sDemote' in chat))
                    chat.sDemote = ''
                if (!('delete' in chat))
                    chat.delete = true
                if (!('antiLink' in chat))
                    chat.antiLink = true
                if (!('viewonce' in chat))
                    chat.viewonce = false
                if (!('antiToxic' in chat))
                    chat.antiToxic = false
                if (!isNumber(chat.expired))
                    chat.expired = 0
            } else
                db.data.chats[m.chat] = {
                    isBanned: false,
                    badword: true,
                    deletemedia: true,
                    deletemediaTime: (new Date() * 1) + 3600000 * 1,
                    welcome: false,
                    detect: false,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '',
                    sDemote: '',
                    delete: true,
                    antiLink: true,
                    viewonce: false,
                    antiToxic: true,
                    expired: 0,
                }
            let settings = db.data.settings[this.user.jid]
            global.settingss = settings
            if (typeof settings !== 'object') db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!('self' in settings)) settings.self = false
                if (!('react' in settings)) settings.react = true
                if (!('autoread' in settings)) settings.autoread = false
                if (!('readsw' in settings)) settings.readsw = true
                if (!('restrict' in settings)) settings.restrict = true
                if (!('getsw' in settings)) settings.getsw = true
                if (!('publicJoin' in settings)) settings.publicJoin = true
                if (!('unavailable' in settings)) settings.unavailable = true
                if (!('statusUpdate' in settings)) settings.statusUpdate = true
                if (!('backupDB' in settings)) settings.backupDB = true
                if (!isNumber(settings.backupDBTime)) settings.backupDBTime = 0
                if (!('mature' in settings)) settings.mature = false
                if (!('autotyping' in settings)) settings.autotyping = false
                if (!isNumber(settings.status)) settings.status = 0
            } else db.data.settings[this.user.jid] = {
                self: false,
                autoread: false,
                readsw: true,
                react: true,
                restrict: true,
                getsw: true,
                unavailable: true,
                statusUpdate: true,
                backupDB: true,
                backupDBTime: 0,
                mature: false,
                publicJoin: true,
                status: 0,
                autotyping: false
            }
        } catch (e) {
            console.error(e)
        }
        if (opts['nyimak'])
            return
        if (!m.fromMe && opts['self'])
            return
        if (opts['pconly'] && m.chat.endsWith('g.us'))
            return
        if (opts['gconly'] && !m.chat.endsWith('g.us'))
            return
        if (opts['swonly'] && m.chat !== 'status@broadcast')
            return
        if (typeof m.text !== 'string')
            m.text = ''

        const isROwner = [this.decodeJid(this.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isOwner = isROwner || m.fromMe
        const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPrems = isROwner || db.data.users[m.sender].premium

        if (opts['queque'] && m.text && !(isMods || isPrems)) {
            let queque = this.msgqueque,
                time = 1000 * 5
            const previousID = queque[queque.length - 1]
            queque.push(m.id || m.key.id)
            setInterval(async function() {
                if (queque.indexOf(previousID) === -1) clearInterval(this)
                await delay(time)
            }, time)
        }

        if (m.isBaileys)
            return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = db.data && db.data.users && db.data.users[m.sender]

        const groupMetadata = (m.isGroup ? await Connection.store.fetchGroupMetadata(m.chat, this.groupMetadata) : {}) || {}
        const participants = (m.isGroup ? groupMetadata.participants : []) || []
        const user = (m.isGroup ? participants.find(u => this.decodeJid(u.id) === m.sender) : {}) || {} // User Data
        const bot = (m.isGroup ? participants.find(u => this.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
        const isRAdmin = user?.admin == 'superadmin' || false
        const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
        const isBotAdmin = bot?.admin || false // Are you Admin?

        const ___dirname = path.join(path.dirname(fileURLToPath(
            import.meta.url)), './plugins')
        for (let name in plugins) {
            let plugin = plugins[name]
            if (!plugin)
                continue
            if (plugin.disabled)
                continue
            const __filename = join(___dirname, name)
            if (typeof plugin.all === 'function') {
                try {
                    await plugin.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                } catch (e) {
                    // if (typeof e === 'string') continue
                    console.error(e)
                    for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await this.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                            m.reply(`*Plugin:* ${m.plugin}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\``.trim(), data.jid)
                    }
                    let txt = `*Plugin:* ${name}
 *Sender:* ${m.sender}
 *Chat:* ${m.chat}
 *Command:* ${m.text}
 *Error* : 
 ${format(e)}`
                    request({
                        uri: `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${idTel}&text=${txt}`,
                        followRedirect: function(response) {
                            console.log(`Redirecting to ${response.headers.location}`)
                            return uri
                        },
                        function(error, response, body) {
                            if (!error && response.statusCode == 200) {
                                console.log(body)
                            }
                        }
                    })
                }
            }
            if (!opts['restrict'])
                if (plugin.tags && plugin.tags.includes('admin')) {
                    // global.dfail('restrict', m, this)
                    continue
                }
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix : this.prefix ? this.prefix : global.prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [
                    [_prefix.exec(m.text), _prefix]
                ] :
                Array.isArray(_prefix) ? // Array?
                _prefix.map(p => {
                    let re = p instanceof RegExp ? // RegExp in Array?
                        p :
                        new RegExp(str2Regex(p))
                    return [re.exec(m.text), re]
                }) :
                typeof _prefix === 'string' ? // String?
                [
                    [new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]
                ] : [
                    [
                        [], new RegExp
                    ]
                ]
            ).find(p => p[1])
            if (typeof plugin.before === 'function')
                if (await plugin.before.call(this, m, {
                        match,
                        conn: this,
                        participants,
                        groupMetadata,
                        user,
                        bot,
                        isROwner,
                        isOwner,
                        isRAdmin,
                        isAdmin,
                        isBotAdmin,
                        isPrems,
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    }))
                    continue
            if (typeof plugin !== 'function')
                continue
            if ((usedPrefix = (match[0] || '')[0])) {
                let noPrefix = m.text.replace(usedPrefix, '')
                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                args = args || []
                let _args = noPrefix.trim().split` `.slice(1)
                let text = _args.join` `
                command = (command || '').toLowerCase()
                let fail = plugin.fail || global.dfail // When failed
                let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ? // Array?
                    plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                        cmd.test(command) :
                        cmd === command
                    ) :
                    typeof plugin.command === 'string' ? // String?
                    plugin.command === command :
                    false

                if (!isAccept)
                    continue
                m.plugin = name
                if (m.chat in db.data.chats || m.sender in db.data.users) {
                    let chat = db.data.chats[m.chat]
                    let user = db.data.users[m.sender]
                    if (name != 'owner-unbanchat.js' && chat?.isBanned)
                        return // Except this
                    if (name != 'owner-unbanchat.js' && user?.banned)
                        return
                }
                if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.rowner && !isROwner) { // Real Owner
                    fail('rowner', m, this)
                    continue
                }
                if (plugin.soon && !isROwner) { // Real Owner
                    fail('soon', m, this)
                    continue
                }
                if (plugin.owner && !isOwner) { // Number Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.mods && !isMods) { // Moderator
                    fail('mods', m, this)
                    continue
                }
                if (plugin.premium && !isPrems) { // Premium
                    fail('premium', m, this)
                    continue
                }
                if (plugin.group && !m.isGroup) { // Group Only
                    fail('group', m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                    fail('botAdmin', m, this)
                    continue
                } else if (plugin.admin && !isAdmin) { // User Admin
                    fail('admin', m, this)
                    continue
                }
                if (plugin.private && m.isGroup) { // Private Chat Only
                    fail('private', m, this)
                    continue
                }
                if (plugin.register == true && _user.registered == false) { // Butuh daftar?
                    fail('unreg', m, this)
                    continue
                }
                if (plugin.mature && !db.data.settings[this.user.jid].mature) { // Mode Dewasa 18+
                    fail('mature', m, this)
                    continue
                }
                if (plugin.indo && !m.sender.startsWith('62')) { //org indo saja
                    fail('indo', m, this)
                }

                m.isCommand = true
                let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                if (xp > 200)
                    m.reply('Ngecit -_-') // Hehehe
                else
                    m.exp += xp
                if (!isPrems && plugin.limit && db.data.users[m.sender].limit < plugin.limit * 1) {
                    this.reply(m.chat, `Limit anda habis, silahkan beli melalui *${usedPrefix}buy*`, m)
                    continue // Limit habis
                }
                if (plugin.level > _user.level) {
                    this.reply(m.chat, `diperlukan level ${plugin.level} untuk menggunakan perintah ini. Level kamu ${_user.level}`, m)
                    continue // If the level has not been reached
                }
                let extra = {
                    match,
                    usedPrefix,
                    noPrefix,
                    _args,
                    args,
                    command,
                    text,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }
                try {
                    await plugin.call(this, m, extra)
                    if (!isPrems)
                        m.limit = m.limit || plugin.limit || false
                } catch (e) {
                    // Error occured
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(global.APIKeys))
                            text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                        if (e.name) {
                            /*for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                                let data = (await this.onWhatsApp(jid))[0] || {}
                                if (data.exists)
                                    m.reply(`*Plugin:* ${m.plugin}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\``.trim(), data.jid)
                            }*/
                            let txt = `*Plugin:* ${name}
 *Sender:* ${m.sender}
 *Chat:* ${m.chat}
 *Command:* ${m.text}
 *Error* : 
 ${format(e)}`
                            request({
                                uri: `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${idTel}&text=${txt}`,
                                followRedirect: function(response) {
                                    console.log(`Redirecting to ${response.headers.location}`)
                                    return uri
                                },
                                function(error, response, body) {
                                    if (!error && response.statusCode == 200) {
                                        console.log(body)
                                    }
                                }
                            })
                        }
                        m.replyv2(text)
                    }
                } finally {
                    // m.reply(util.format(_user))
                    if (typeof plugin.after === 'function') {
                        try {
                            await plugin.after.call(this, m, extra)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    if (m.limit)
                        m.reply(+m.limit + ' Limit terpakai')
                }
                break
            }
        }
    } catch (e) {
        console.error(e)
    } finally {
        if (opts['queque'] && m.text) {
            const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (quequeIndex !== -1)
                this.msgqueque.splice(quequeIndex, 1)
        }
        //console.log(db.data.users[m.sender])
        let user, stats = db.data.stats
        if (m) {
            if (m.sender && (user = db.data.users[m.sender])) {
                user.exp += m.exp
                user.limit -= m.limit * 1
            }

            let stat
            if (m.plugin) {
                let now = +new Date
                if (m.plugin in stats) {
                    stat = stats[m.plugin]
                    if (!isNumber(stat.total))
                        stat.total = 1
                    if (!isNumber(stat.success))
                        stat.success = m.error != null ? 0 : 1
                    if (!isNumber(stat.last))
                        stat.last = now
                    if (!isNumber(stat.lastSuccess))
                        stat.lastSuccess = m.error != null ? 0 : now
                } else
                    stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                stat.total += 1
                stat.last = now
                if (m.error == null) {
                    stat.success += 1
                    stat.lastSuccess = now
                }
            }
        }

        try {
            if (!opts['noprint']) await printMessage(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
        if (opts['autoread'])
            await this.chatRead(m.chat, m.isGroup ? m.sender : undefined, m.id || m.key.id).catch(() => {})
        if (db.data.settings[this.user.jid].readsw) await this.chatRead('status@broadcast', m.key.participant, m.id || m.key.id).catch(() => {})
        if (db.data.settings[this.user.jid].unavailable) await this.sendPresenceUpdate('unavailable', m.chat)
        if (db.data.settings[this.user.jid].autotyping) await this.sendPresenceUpdate('composing', m.chat)
        /*if (db.data.settings[this.user.jid].statusUpdate) {
            if (new Date() * 1 - settings.status > 1000) {
                await this.setStatus(`Aktif selama ${clockString(process.uptime() * 1000)} | ${Object.keys(db.data.users).length} User | ${name} by ${owner[0][1]}`).catch(_ => _)
                settings.status = new Date() * 1
            }
        }*/
    }
}
/**
 * Handle groups participants update
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
    if (opts['self'])
        return
    if (this.isInit)
        return
    if (db.data == null)
        await loadDatabase()
    let chat = db.data.chats[id] || {}
    let text = ''
    switch (action) {
        case 'add':
        case 'remove':
            if (chat.welcome) {
                let groupMetadata = await Connection.store.fetchGroupMetadata(id, this.groupMetadata)
                for (let user of participants) {
                    let pp = './src/avatar_contact.png'
                    try {
                        pp = await this.profilePictureUrl(user, 'image')
                    } catch (e) {
                    } finally {
                        text = (action === 'add' ? (chat.sWelcome || this.welcome || Connection.conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc?.toString() || 'unknow') :
                            (chat.sBye || this.bye || Connection.conn.bye || 'Bye, @user!')).replace('@user', '@' + user.split('@')[0])
                        this.sendFile(id, pp, 'pp.jpg', text, null, false, { mentions: [user] })
                    }
                }
            }
            break
        case 'promote':
            text = (chat.sPromote || this.spromote || Connection.conn.spromote || '@user ```is now Admin```')
        case 'demote':
            if (!text)
                text = (chat.sDemote || this.sdemote || Connection.conn.sdemote || '@user ```is no longer Admin```')
            text = text.replace('@user', '@' + participants[0].split('@')[0])
            if (chat.detect)
                this.sendMessage(id, { text, mentions: this.parseMention(text) })
            break
    }
}

/**
 * Handle groups update
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate) {
    if (opts['self'])
        return
    for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = db.data.chats[id], text = ''
        if (!chats?.detect) continue
        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || Connection.conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || Connection.conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || Connection.conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || Connection.conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
        if (!text) continue
        await this.sendMessage(id, { text, mentions: this.parseMention(text) })
    }
}

/**
 * @this {import('./lib/connection').Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.delete']} message 
 */
export async function deleteUpdate(message) {
    if (message.keys && Array.isArray(message.keys)) {
        try {
            for (const key of message.keys) {
                if (key.fromMe) continue
                const msg = Connection.store.loadMessage(key.id)
                if (!msg) continue
                let chat = db.data.chats[msg.key.remoteJid]
                if (!chat || chat.delete) continue
                const participant = msg.participant || msg.key.participant || msg.key.remoteJid
                await this.reply(msg.key.remoteJid, `
Terdeteksi @${participant.split`@`[0]} telah menghapus pesan
Untuk mematikan fitur ini, ketik
*.enable delete*
`.trim(), msg, {
                    mentions: [participant]
                })
                this.copyNForward(msg.key.remoteJid, msg).catch(e => console.log(e, msg))
            }
        } catch (e) {
            console.error(e)
        }
    }
}

global.dfail = async (type, m, conn) => {
    let msg = {
        soon: `*Akses Di Tolak*

Hay, *${m.name}* 👋
Fitur ini masih dalam tahap penggembangan
silahkan coba lagi nanti!!`,
        mt: `*Akses Di Tolak*

Hay, *${m.name} 👋
Fitur ini sedang dalam perbaikan...
silahkan coba lagi nanti!!`,
        rowner: `*Akses Di Tolak*

Hay, *${m.name}* 👋
Fitur ini hanya untuk developer bot!!`,
        owner: `*Akses Di Tolak*
 
Hay, *${m.name}* 👋
Fitur ini hanya untuk owner bot!!`,
        mods: `*Akses Di Tolak*

Hay, *${m.name}* 👋
Fitur ini hanya untuk moderator bot!!`,
        premium: `*Akses Di Tolak*

Hay, *${m.name}* 👋
Fitur ini hanya untuk pengguna premium!!`,
        group: `*Akses Di Tolak*

Hay, *${m.name}* 👋
Fitur ini hanya dapat digunakan didalam grup!!`,
        private: `*Akses Di Tolak*

Hay, *${m.name}* 👋
Fitur ini hanya dapat digunakan didalam chat pribadi!!`,
        admin: `*Akses Di Tolak*

Hay, *${m.name}* 👋
Fitur ini hanya untuk admin grup!!`,
        botAdmin: `*Akses Di Tolak*

Hay, *${m.name}* 👋
Fitur ini dapat digunakan jika bot menjadi admin grup!!`,
        unreg: `*Akses Di Tolak*

Hay, *${m.name}* 👋
Silahkan daftar terlebih dahulu
untuk menggunakan fitur ini.

contoh:
#register *${m.name}.15*`,
        mature: `*18+*

Hay, *${m.name}* 👋
Fitur Dewasa Tidak Aktif.`,
        indo: `*Akses Di Tolak*

Hay, *${m.name}* 👋
Fitur Ini hanya bisa di gunakan oleh nomor +62 (indonesia).`,
        restrict: 'Fitur ini di *disable*!'
    } [type]
    if (msg) await this.sendList(m.chat, msg, wm, [
        [await this.sendTr('Pemilik'), '#owner', await this.sendTr('List kontak whatsapp pemilik ' + global.name), '─────「 1 」'],
        [await this.sendTr('Kecepatan'), '#speed', await this.sendTr('Lihat Kecepatan ' + global.name), '─────「 2 」'],
        [await this.sendTr('Kembali ke menu utama'), '#menu', 'Menu ' + global.name, '─────「 3 」'],
        [await this.sendTr('Panduan'), '#panduan', await this.sendTr('Jika kamu membutuhkan panduan tentang ' + global.name), '─────「 4 」']
    ], m)
}

let file = Helper.__filename(
    import.meta.url, true)
const watcher = watch(file, async () => {
    watcher.close()
    console.log(chalk.redBright("Update 'handler.js'"))
    if (Connection.reload) console.log(await Connection.reload(await Connection.conn))
})

function mRandom(x) {
    return x[Math.floor(x.length * Math.random())]
}

function fetchRandomJson(url, options) {
    return new Promise(async (resolve, reject) => {
        fetch(url, options)
            .then(res => res.json())
            .then(res => {
                const json = JSON.parse(JSON.stringify(res))
                const index = Math.floor(Math.random() * json.length)
                const random = json[index]
                resolve(random)
            })
            .catch((e) => {
                reject(e)
            })
    })
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}