import ytdl from 'ytdl-core'; 
 import fs from 'fs'; 
 import os from 'os'; 
  
 let limit = 500; 
 let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => { 
   if (!args || !args[0]) throw `⚠️ Example:\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`; 
   if (!args[0].match(/youtu/gi)) throw `Hey parth! Ush link ko verified karo be`; 
  
   let chat = global.db.data.chats[m.chat]; 
   m.react(rwait); 
   try { 
     const info = await ytdl.getInfo(args[0]); 
     const format = ytdl.chooseFormat(info.formats, { quality: 'highest' }); 
     if (!format) { 
       throw new Error('अरे पार्थ! कोई मान्य स्वरूप नहीं मिला'); 
     } 
  
     if (format.contentLength / (1024 * 1024) >= limit) { 
       return m.reply(`⚠️ *GMX YouTube video download*\n\n▢ *⚖️Size*: ${format.contentLength / (1024 * 1024).toFixed(2)}MB\n▢ *🎞️Quality*: ${format.qualityLabel}\n\nHey parth! फ़ाइल डाउनलोड सीमा से अधिक है*+${limit} MB*`); 
     } 
  
     const tmpDir = os.tmpdir(); 
     const fileName = `${tmpDir}/${info.videoDetails.videoId}.mp4`; 
  
     const writableStream = fs.createWriteStream(fileName); 
     ytdl(args[0], { 
       quality: format.itag, 
     }).pipe(writableStream); 
  
     writableStream.on('finish', () => { 
       conn.sendFile( 
         m.chat, 
         fs.readFileSync(fileName), 
         `${info.videoDetails.videoId}.mp4`, 
         `⚠️ *GMX YouTube download ©*
            
           ✼ Title: ${info.videoDetails.title} 
           ✼ Duration: ${info.videoDetails.lengthSeconds} seconds 
           ✼ Views: ${info.videoDetails.viewCount} 
           ✼ Upload: ${info.videoDetails.publishDate} 
           ✼ Link: ${args[0]} 
            
           Hey parth! Aapka din shubh ho ✼`, 
         m, 
         false, 
         { asDocument: chat.useDocument } 
       ); 
  
       fs.unlinkSync(fileName); // Delete the temporary file 
       m.react(done); 
     }); 
  
     writableStream.on('error', (error) => { 
       console.error(error); 
       m.reply('अरे पार्थ! वीडियो डाउनलोड करने का प्रयास करते समय त्रुटि. कृपया पुन: प्रयास करें.'); 
     }); 
   } catch (error) { 
     console.error(error); 
     m.reply('अरे पार्थ! वीडियो संसाधित करने का प्रयास करते समय त्रुटि. कृपया पुन: प्रयास करें.'); 
   } 
 }; 
  
 handler.help = ['ytmp4 <yt-link>']; 
 handler.tags = ['downloader']; 
 handler.command = ['ytmp4', 'video']; 
 handler.diamond = true; 
  
 export default handler;
