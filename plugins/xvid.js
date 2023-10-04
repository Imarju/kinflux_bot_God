import { xvideosSearch, xvideosdl } from '../lib/scraper.js';

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let chat = global.db.data.chats[m.chat];
  if (!chat.nsfw) throw `😮‍💨 hey parth yah group gmx nsfw content ko support nhi karta hai.\n\nIshe on karne ke liye, type karo: *${usedPrefix}enable* nsfw`;
  let user = global.db.data.users[m.sender].age;
  if (user < 18) throw `🙂 hey parth tum abhi 18 saal se kam ke ho apni age ko badhao fir ish feature ko use karna.`;
  if (!text) throw `🤭 hey parth tum kya search karna chahte ho?\n📌 Usage: *${usedPrefix + command} <search>*\n\nExample: Hot desi bhabi yaa aap koi achha sa link bhi use kar sakte ho\nExample: .xnxx link *`;

  m.react('🙃');
    if (!text) throw '🙂 hey parth can u please provide me a search query or a valid Xvideos URL.';
  
    // Check if the input is a valid Xvideos URL
    const isURL = /^(https?:\/\/)?(www\.)?xvideos\.com\/.+$/i.test(text);
  
    try {
      if (isURL) {
        // If it's a valid URL, directly download the video
        const result = await xvideosdl(text);
        const { title, url } = result.result;
  
        // Send the video file
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
  
        conn.sendFile(
          m.chat,
          Buffer.from(buffer),
          `${title}.mp4`,
          `Here is your Xvideos video: ${title}`
        );
  
      } else {
        // If it's not a valid URL, perform a search and display the search results
        const results = await xvideosSearch(text);
        if (results.length === 0) {
          m.reply('😢 hey parth aapke dwara diya gaya query ke liye koi bhi search results nhi mile mujhe.');
        } else {
          const searchResults = results.map((result, index) => {
            return `${index + 1}. *${result.title}*\nDuration: ${result.duration}\nQuality: ${result.quality}\nURL: ${result.url}`;
          }).join('\n\n');
  
          m.reply(`*Search Results for "${text}":*\n\n${searchResults}`);
        }
      }
    } catch (error) {
      console.error(error);
      throw 'Failed to fetch Xvideos video details.';
    }
  };

  handler.help = ['xvid']
  handler.tags = ['nsfw']
handler.command = ['xvid'];
handler.group = true;
handler.premium = false;
handler.register = true;

handler.premium = false;

export default handler;
