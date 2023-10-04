//GMX-BOT
/*import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) throw 'HEY PARTH mujhe koi number provide karo.';

  try {
    let res = await fetch(`https://inrl-web.onrender.com/api/truecaller?number=${text}`);

    if (!res.ok) {
      throw new Error(`API request failed ho gaya vo bhi ishke sath status ${res.status}`);
    }

    let json = await res.json();

    if (!json.data || !json.data.length) {
      throw new Error('hey parth mujhe API response ke liye koi bhi data nhi mila hai.');
    }

    // Focus on the first object inside the data array.
    let data = json.data[0];

    // Add custom property.
    data.creator = 'Arju-sonwani';

    let response = '';

    // Add details directly to the response
    response += `𝑁𝑎𝑚𝑒: ${data.name}\n`;
    response += `𝙶𝚎𝚗𝚍𝚎𝚛: ${data.gender}\n`;
    response += `𝚂𝚌𝚘𝚛𝚎: ${data.score}\n`;
    response += `𝚂𝚌𝚘𝚛𝚎: ${data.access}\n`;
    response += `𝙴𝚗𝚑𝚊𝚗𝚌𝚎𝚍: ${data.enhanced}\n`;

    // Handle phone details
    if (data.phones && data.phones.length > 0) {
      let phone = data.phones[0];
      response += `𝙿𝚑𝚘𝚗𝚎:\n`;
      response += `  - 𝙚164𝙁𝙤𝙧𝙢𝙖𝙩: ${phone.e164Format}\n`;
      response += `  - 𝙣𝙪𝙢𝙗𝙚𝙧𝙏𝙮𝙥𝙚: ${phone.numberType}\n`;
      response += `  - 𝙣𝙖𝙩𝙞𝙤𝙣𝙖𝙡𝙁𝙤𝙧𝙢𝙖𝙩: ${phone.nationalFormat}\n`;
      response += `  - 𝙙𝙞𝙖𝙡𝙞𝙣𝙜𝘾𝙤𝙙𝙚: ${phone.dialingCode}\n`;
      response += `  - 𝙘𝙤𝙪𝙣𝙩𝙧𝙮𝘾𝙤𝙙𝙚: ${phone.countryCode}\n`;
      response += `  - 𝙘𝙖𝙧𝙧𝙞𝙚𝙧: ${phone.carrier}\n`;
      response += `  - 𝙩𝙮𝙥𝙚: ${phone.type}\n`;
    }

    // Handle address details
    if (data.addresses && data.addresses.length > 0) {
      let address = data.addresses[0];
      response += `𝘈𝘥𝘥𝘳𝘦𝘴𝘴𝘦𝘴:\n`;
      response += `  - 𝗮𝗱𝗱𝗿𝗲𝘀𝘀: ${address.address}\n`;
      response += `  - 𝘀𝘁𝗿𝗲𝗲𝘁: ${address.street}\n`;
      response += `  - 𝘇𝗶𝗽𝗖𝗼𝗱𝗲: ${address.zipCode}\n`;
      response += `  - 𝗰𝗶𝘁𝘆: ${address.city}\n`;
      response += `  - 𝗰𝗼𝘂𝗻𝘁𝗿𝘆𝗖𝗼𝗱𝗲: ${address.countryCode}\n`;
      response += `  - 𝘁𝗶𝗺𝗲𝗭𝗼𝗻𝗲: ${address.timeZone}\n`;
      response += `  - 𝘁𝘆𝗽𝗲: ${address.type}\n`;
    }

    // Add 'creator' property to the response
    response += `𝗖𝗥𝗘𝗔𝗧𝗢𝗥: Arju-sonwani`;

    m.reply(response);
  } catch (error) {
    console.error(error);
    m.reply('hey parth mujhe kaam karte wakt ek problem ho rahi hai aap badme try kar lena.');
  }
};

handler.help = ['true'];
handler.tags = ['tools'];
handler.command = /^(true|caller)$/i;

export default handler;*/
import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) throw 'HEY PARTH mujhe number dedo!';

  try {
    let res = await fetch(`https://inrl-web.onrender.com/api/truecaller?number=${text}`);

    if (!res.ok) {
      throw new Error(`API request failed ho gaya PARTH vo bhi ishke sath status ${res.status}`);
    }

    let json = await res.json();

    console.log('JSON response:', json);

    
    json.creator = 'Arju-sonwani';

    let milf = '';
    for (let prop in json) {
      milf += `• *${prop}:* ${json[prop]}\n`;
    }

    m.reply(milf);
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }
};

handler.help = ['true'];
handler.tags = ['tools'];
handler.command = /^(true|caller)$/i;

export default handler;
