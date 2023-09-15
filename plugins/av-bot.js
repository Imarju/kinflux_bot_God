
let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let av = `./src/mp3/${pickRandom(["Arju", "Arju1", "Arju2", "Arju3", "Arju4"])}.mp3`

m.reply( `Hello ${taguser} Do u want to use Official GMX BOT type /help and support me on Instagram and get your owe bot free my Instagram id : https://instagram.com/gmx_grand_master_x?igshid=YTQwZjQ0NmI0OA==`)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(bot|arju)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
