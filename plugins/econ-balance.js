
let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
    conn.reply(m.chat, `
┌───⊷ *BALANCE* ⊶
▢ *📌Number* : _@${who.split('@')[0]}_
▢ *💎Diamonds* : _${user.diamond}_
▢ *💎Gold* : _${user.gold}_
▢ *💎Rock* : _${user.rock}_
▢ *💎EMARALD* : _${user.emerald}_
▢ *💎Rank* : _${user.role}_
▢ *💎Health* : _${user.health}_
▢ *💎Wood* : _${user.wood}_
▢ *💎Potions* : _${user.potion}_
▢ *💎Iron* : _${user.iron}_
▢ *💎Money* : _${user.money}_
▢ *⬆️XP* : _Total ${user.exp}_
└──────────────

*NOTE :* 
😊❤️ If you follow our team on Instagram, you will be given 500 diamonds absolutely free. ❤️And our team will also answer you every question, if you want a bot, you will also get it, our team will deploy the bot for you. ❤️ This is Instagram id : https://instagram.com/gmx_grand_master_x?igshid=YTQwZjQ0NmI0OA==

Or

You can buy 💎 diamonds using the commands*
❏ *${usedPrefix}todiamond* <amount>
❏ *${usedPrefix}todiamondall*`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 

export default handler
