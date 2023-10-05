import fetch from 'node-fetch'; 
 import displayLoadingScreen from '../lib/loading.js' 
  
 const endpoint = 'https://v2-guru-indratensei.cloud.okteto.net/perplexity?query='; 
  
 let handler = async (m, { text, conn, usedPrefix, command }) => { 
   try { 
     if (!text && !(m.quoted && m.quoted.text)) { 
       throw `प्रतिक्रिया प्राप्त करने के लिए कृपया कुछ पाठ प्रदान करें या एक संदेश उद्धृत करें.`; 
     } 
  
     if (!text && m.quoted && m.quoted.text) { 
       text = m.quoted.text; 
     } else if (text && m.quoted && m.quoted.text) { 
       text = `${text} ${m.quoted.text}`; 
       if (m.quoted.text.includes('.aisearch')) { 
         text = text.replace('.aisearch', ''); //  
       } 
     } 
     await displayLoadingScreen(conn, m.chat) 
     conn.sendPresenceUpdate('composing', m.chat); 
     let emsg = await conn.sendMessage(m.chat, {text: 'सोच रहे...'}) 
     const prompt = encodeURIComponent(text); 
  
     const response = await fetch(endpoint + prompt); 
  
     if (!response.ok) { 
       throw `सर्वर से एक त्रुटि प्रतिक्रिया प्राप्त हुई: ${response.status} - ${response.statusText}`; 
     } 
  
     const data = await response.json(); 
     const result = data.response.trim();  
     await conn.relayMessage(m.chat, { 
         protocolMessage: { 
           key: emsg.key, 
           type: 14, 
           editedMessage: { 
             conversation: result  
           } 
         } 
       }, {}) 
   } catch (error) { 
     console.error('Error:', error); 
     m.reply(`आपके अनुरोध को संसाधित करते समय कोई त्रुटि उत्पन्न हुई. कृपया बाद में पुन: प्रयास करें.`); 
   } 
 }; 
 handler.help = ['aisearch'] 
 handler.tags = ['AI'] 
 handler.command = ['aisearch', 'ai2'];  
  
  
 export default handler;
