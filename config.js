import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['201284329186', '𝑨𝑳 𝑺𝑯𝑨𝑹𝑸𝑨𝑾𝑰', true],
  ['201284329186']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['20124329186', '20124329186']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = '𝑩𝒊𝒍𝒍𝒊𝒆ᴮᴼᵀ' 
global.author = '𝑨𝑳 𝑺𝑯𝑨𝑹𝑸𝑨𝑾𝑰' 

//--info FG
global.botName = '𝑩𝒊𝒍𝒍𝒊𝒆ᴮᴼᵀ'
global.fgig = 'https://whatsapp.com/channel/0029VabUzsj2phHROVO8bW3v' 
global.fgsc = 'https://whatsapp.com/channel/0029VabUzsj2phHROVO8bW3v' 
global.fgyt = 'https://whatsapp.com/channel/0029VabUzsj2phHROVO8bW3v'
global.fgpyp = 'https://whatsapp.com/channel/0029VabUzsj2phHROVO8bW3v'
global.fglog = 'https://whatsapp.com/channel/0029VabUzsj2phHROVO8bW3v' 

//--- Grupos WA
global.id_canal = '120363177092661333@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VabUzsj2phHROVO8bW3v'
global.bgp = 'https://whatsapp.com/channel/0029VabUzsj2phHROVO8bW3v'
global.bgp2 = 'https://whatsapp.com/channel/0029VabUzsj2phHROVO8bW3v'
global.bgp3 = 'https://whatsapp.com/channel/0029VabUzsj2phHROVO8bW3v' //--GP NSFW

global.wait = '*‹⏳› جـاري الـتـحـمـيـل...*\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
