import axios from 'axios'
import cheerio from 'cheerio'


let handler = async (m, { text }) => {
	if (!text) throw `✳️ ${mssg.search('Wikipedia')}` 
	
    try {
	const link =  await axios.get(`https://es.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	m.reply(`▢ *ويكيبيديا*

‣ ${resulw}`)
} catch (e) {
  m.reply(`⚠️ ${mssg.searchError}`)
}
}
handler.help = ['ويكبيديا']
handler.tags = ['الادوات']
handler.command = ['ويكا','ويكيبيديا'] 


export default handler
