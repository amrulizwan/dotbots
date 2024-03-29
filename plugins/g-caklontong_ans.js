import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*calo/i.test(m.quoted.contentText)) return !0
    this.caklontong = this.caklontong ? this.caklontong : {}
    if (!(id in this.caklontong)) return m.replyv2('Soal itu telah berakhir')
    if (['.calo', 'Bantuan', ''].includes(m.text)) return !0
    if (m.quoted.id == this.caklontong[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.caklontong[id][1]))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.caklontong[id][2]
            await this.sendButton(m.chat, `*Benar!* +${this.caklontong[id][2]} XP\n${json.deskripsi}`, wm, null, [['Cak Lontong', '.caklontong']], m)
            clearTimeout(this.caklontong[id][3])
            delete this.caklontong[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.replyv2(`*Dikit Lagi!*`)
        else m.replyv2(`*Salah!*`)
    }
    return !0
}
handler.exp = 0
handler.register = true
handler.indo = true
export default handler
