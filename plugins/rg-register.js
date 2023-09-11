//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `bro😑 you are already registered\n\nDo you want to re-register?\n\n 📌 Use this command to remove your record \n*${usedPrefix}unreg* <Serial number>`
  if (!Reg.test(text)) throw `🤡 format incorrect\n\n 👻 Use this command: *${usedPrefix + command} name.age*\n📌Exemple : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '😑bruhh the name cannot be empty'
  if (!age) throw '💀bruhh age cannot be empty'
  if (name.length >= 30) throw '💀💀💀💀💀abey ye kon sa naam hai itna lamba naam hai tumhara' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 arey dada jee Aapka toh umar ho gaya hai jao jaake dusri saadi kar lo'
  if (age < 5) throw 'arey tum toh abhi chhote ho tumhari lulli bhi chhoti hai jao jake lollipop khao 😑'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *GMX REGISTER* 」─
▢ *NUMBER:* ${name}
▢ *AGE* : ${age} years
▢ *SERIEL NUMBER* :
${sn}
└──────────────

 *${usedPrefix}help* to see menu
`.trim())
}
handler.help = ['reg'].map(v => v + ' <name.age>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler

