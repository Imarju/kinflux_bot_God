import fetch from "node-fetch"

let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
    let query = "Oops! I need an input text. Try something like this:\n.midjourney man kissing";
    let text;
    
    if (args.length >= 1) {
        text = args.slice(0).join(" ");
        m.reply(`hey parth, chalo dekhte hain gmx bot apne tool se kaise sapne purey karti hai vo bhi aapke dwara likhi gayi text se "${text}"...`);
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
        m.reply(`Hey parth! Using your quoted text, "${text}", let's generate an image...`);
    } else throw query;
    
    try {
        m.reply("Brewing up some gmx magic... 🧙‍♂️");
        await Draw(text).then((img) => {
            conn.sendFile(m.chat, img, text, `*[Ta-da! Here's your result:]*\n"${text}"`, m);
        });
    } catch (e) {
        throw 'Hey parth! Something went wrong while generating the image. 🥺';
    }
}

handler.help = ["imagine"];
handler.tags = ["AI"];
handler.command = /^imagine$/i;

export default handler;

async function Draw(prompt) {
    const Blobs = await fetch(
        "https://api-inference.huggingface.co/models/prompthero/openjourney-v2",
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer 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",
            },
            body: JSON.stringify({ inputs: prompt }),
        }
    ).then((res) => res.blob());
    
    const arrayBuffer = await Blobs.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return buffer;
}
