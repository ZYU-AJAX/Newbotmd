require("./all/module.js")
global.owner = "6285136894028"//GANTI DENGAN NO LU
global.namabot = " ZyuStore"//GANTI AJA
global.della = "ZyuStore"//NAMA STORE ATAU NAMA LU
global.namaowner = "Dynz official"

//  GANTI DENGAN LIST LU
global.list = `*📮LIST STORE📮*


*List Sewa Bot WhatsApp*

1k 1 Hari ⚡
3k 5 Hari ⚡
5k 7 Hari ⚡
10k 1 bulan ⚡

🌀LIST PANEL DYNZ STORE 
> 📁RAM1𝗚𝗕 = 1𝗞
> 📁RAM2𝗚𝗕 = 2𝗞
> 📁RAM3𝗚𝗕 = 3𝗞
> 📁RAM4𝗚𝗕 = 4𝗞
> 📁RAM5𝗚𝗕 = 5𝗞
> 📁RAM6𝗚𝗕 = 6𝗞
> 📁RAM7𝗚𝗕 = 7𝗞
> 📁RAM8𝗚𝗕 = 8𝗞
> 📁RAM UNLI = 10K
BUY? PM : *6285815657097*
▬▭▬▭▬▭▬▭▬▭▬▭▬
_*⛔Setiap pembelian panel unlii*_

_*Free sc push kontak dan sc bug yang pastinya anti pasaran*_
▬▭▬▭▬▭▬▭▬▭▬▭▬`
/*~~~~~~~~~~ SETTINGAN LINK~~~~~~~~~~~*/
global.idsaluran = "120363312188523794@newsletter"//GANTI ID CH LU KALAU GK BISA CET 6285815657097
global.linkgc = 'https://chat.whatsapp.com/E98Ex9MmT3J2Gu8aZSx5ii'//GANTI LINK GC LU
global.linksaluran = "https://whatsapp.com/channel/0029VaimH5wHLHQYVZ9tdZ0H"//GANTI DENGAN LINK SALURAN LU
global.linkyt = "https://youtube.com/@Hoedev" //masukan link yt lu

global.packname = "WhatsApo Bot Dean"
global.author = "DYNZ OFFICIAL"

global.autoread = false 
global.anticall = true
/*~~~~~~~~~~ SETTINGS PANEL ~~~~~~~~~~*/
global.egg = "15"
global.loc = "1"
global.domain = "https://wyiiyandexmontok.pterodactyl-vvip.my.id"
global.apikey = "ptla_wWdyzAQcddrINSlXYSNjQCOK1X18TmPF4EhbyRDHUC0"
global.capikey = "ptlc_UBKgbeWmaYNaAYiXh1VHeaDLjBgiH5ahT9uqfm3kVVe"

/*~~~~~~~~~ SETTING MESSAGE ~~~~~~~~~~*/
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Berhasil mengambil data ✅", 
"wait": "🕧 Proses, Mohon Tunggu Sebentar", 
"group": "Fitur Ini Hanya Untuk Didalam Grup❗", 
"private": "Fitur Ini Hanya Untuk Didalam Private Chat❗", 
"admin": "Fitur Ini Hanya Untuk Admin Grup❗", 
"adminbot": "Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin❗", 
"owner": "Fitur Ini Hanya Untuk Owner Bot❗", 
"developer": "Fitur Ini Hanya Untuk Developer❗"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})