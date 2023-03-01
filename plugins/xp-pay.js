import db from '../lib/database.js'

let pajak = 0.02
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let fail = `perintah ini buat ngasih XP ke pengguna lain\n\ncontoh:\n#pay @628882611841 10\natau balas pesan doi dengan perintah: #pay 10`
  let who
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  else who = m.chat
  if (!who || !args[0]) {
    conn.reply(m.chat, fail, m, { mentions: ['628882611841@s.whatsapp.net'] })
    throw false
  }
  if (typeof db.data.users[who] == "undefined") {
    db.data.users[who] = {
      exp: 0,
      limit: 10,
      lastclaim: 0,
      registered: false,
      name: conn.getName(m.sender),
      age: -1,
      regTime: -1,
      afk: -1,
      afkReason: '',
      banned: false,
      level: 0,
      call: 0,
      role: 'Warrior V',
      autolevelup: false,
      pc: 0,
    }
  }
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) {
    conn.reply(m.chat, fail, m, { mentions: [owner[0]+'@s.whatsapp.net'] })
    throw false
  }
  if (isNaN(txt)) throw 'Hanya angka'
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
  if (exp < 1) throw 'minimal 1'
  let users = db.data.users
  if (exp > users[m.sender].exp) throw 'Exp tidak mencukupi untuk mentransfer, ada pajaknya juga'
  users[m.sender].exp -= exp
  users[who].exp += xp

  m.replyv2(`(${-xp} XP) + (${-pjk} XP (Pajak 2%)) = ( ${-exp} XP)`)
  conn.fakeReply(m.chat, `+${xp} XP`, who, m.text)
}
handler.help = ['pay @user <jumlah>']
handler.tags = ['xp']
handler.command = /^pay$/
handler.register = true

export default handler