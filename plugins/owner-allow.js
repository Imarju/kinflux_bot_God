let handler = async (m, { conn, text, usedPrefix, command }) => { 
     let who 
         if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false 
         else who = m.chat 
         let user = global.db.data.users[who] 
         if (!who) throw `Hey parth! Tag or mention someone\n\n📌 Example : ${usedPrefix + command} @user` 
     if (global.allowed.includes(who.split`@`[0])) throw 'अरे पार्थ! उल्लिखित उपयोगकर्ता को पहले से ही डीएम में बॉट का उपयोग करने की अनुमति है।' 
     global.allowed.push(`${who.split`@`[0]}`) 
  
     conn.reply(m.chat, ` @${who.split`@`[0]} अरे पार्थ! डीएम में बॉट का उपयोग करने के लिए अंतिम पास मिला`, m, { mentions: [who] }) 
  
     } 
     handler.help = ['allow <@tag>'] 
     handler.tags = ['owner'] 
     handler.command = ['allow', 'makeallow', 'al']  
  
     handler.group = true 
     handler.rowner = true 
  
     export default handler
