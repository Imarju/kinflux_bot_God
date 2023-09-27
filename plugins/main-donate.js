
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *GMX DONATION*
ONLY WANT YOUR LOVE ❤️
Join my Whatsapp group => 
SUPPORT ME BY  MAKING 10 MILLION FOLLOWERS ON MY INSTAGRAM, THIS IS LINK https://instagram.com/gmx_grand_master_x?igshid=YTQwZjQ0NmI0OA==`
let pp = '/gmx.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
