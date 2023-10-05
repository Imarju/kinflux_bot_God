//to use this grouponly mustbe off(using a sigle prefix is preferred) 
 export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) { 
     // Ignore messages sent by the bot itself 
     if (m.isBaileys && m.fromMe) return true; 
  
     // Allow the owner's messages  
     if (isOwner) return true; 
  
     // Ignore messages sent in group chats 
     if (m.isGroup) return false; 
  
      const allowlist = global.allowed || []; 
     if (allowlist.includes(m.sender.split('@')[0])) return false; 
  
     // If the message is not sent in a group, it's a private message  
     if (!m.isGroup) { 
       // Fetch chat data and bot settings 
       let chat = global.db.data.chats[m.chat]; 
       let bot = global.db.data.settings[this.user.jid] || {}; 
  
       // Check if the "PM Blocker" feature is enabled, and the sender is not an owner or real owner 
       if (bot.pmblocker && !isOwner && !isROwner) { 
         // Block the sender unconditionally for any private message sent 
         await m.reply(`*Hey parth! @${m.sender.split`@`[0]}, Hey parth! बॉट को निजी रूप से संदेश भेजना वर्तमान में अक्षम है. आपको बॉट का उपयोग करने से ब्लॉक कर दिया गया है.*`, false, { mentions: [m.sender] }); 
         await this.updateBlockStatus(m.chat, 'block'); 
  
         // Return true to indicate that the private message should be blocked 
         return true; 
       } 
     } 
  
  
     return true; 
   } 
 