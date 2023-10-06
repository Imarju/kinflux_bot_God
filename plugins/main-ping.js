
import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");
          m.reply(`${ssd}⚠️ MIZUHARA CHIZURU (𝐓𝐇𝐄-𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋-𝐆𝐌𝐗-𝐌𝐃) SPEED PERFORMANCE* : ${latensi.toFixed(4)} _ms_`);
            });
}
handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed']

export default handler
