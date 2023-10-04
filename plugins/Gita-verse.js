import fetch from 'node-fetch';

let gitaVerseHandler = async (m, { conn }) => {
  try {
    // Extract the verse number from the command text.
    let verseNumber = m.text.split(' ')[1];

    if (!verseNumber || isNaN(verseNumber)) {
      verseNumber = Math.floor(Math.random() * 700) + 1;
    }

    let res = await fetch(`https://gita-api.vercel.app/odi/verse/${verseNumber}`);

    if (!res.ok) {
      let error = await res.json(); 
      throw new Error(`स्थिति के साथ API अनुरोध विफल हुआ ${res.status} और संदेश ${error.detail[0].msg}`);
    }

    let json = await res.json();

    console.log('JSON response:', json);

    let gitaVerse = `
🕉 *भगवद गीता: पवित्र शिक्षाएं*\n
📜 *अध्याय ${json.chapter_no}: ${json.chapter_name}*\n
Verse ${json.verse_no}:\n
" ${json.verse} "\n
*❤️ अनुवाद:*\n
${json.translation}\n
*🔱 आध्यात्मिक अंतर्दृष्टि (अभिप्रूत):*\n
${json.purport}`;

    m.reply(gitaVerse);

   
    if (json.audio_link) {
      conn.sendFile(m.chat, json.audio_link, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true });
    }
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }
};

gitaVerseHandler.help = ['gita [verse_number]'];
gitaVerseHandler.tags = ['religion'];
gitaVerseHandler.command = ['gita', 'verse']

export default gitaVerseHandler;

