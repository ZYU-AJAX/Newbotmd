require("./all/global");
const func = require("./all/place");
const readline = require("readline");
const yargs = require("yargs/yargs");
const _ = require("lodash");
const usePairingCode = true;
const question = _0x385075 => {
  const _0x52c0a6 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(_0x169934 => {
    _0x52c0a6.question(_0x385075, _0x169934);
  });
};
var low;
try {
  low = require("lowdb");
} catch (_0xdb19e1) {
  low = require("./all/lowdb");
}
const {
  Low,
  JSONFile
} = low;
const mongoDB = require("./all/mongoDB");
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
global.db = new Low(/https?:\/\//.test(opts.db || "") ? new cloudDBAdapter(opts.db) : /mongodb/.test(opts.db) ? new mongoDB(opts.db) : new JSONFile("./all/database/database.json"));
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise(_0x3554c0 => setInterval(function () {
      if (!global.db.READ) {
        clearInterval(this);
        _0x3554c0(global.db.data == null ? global.loadDatabase() : global.db.data);
      } else {
        null;
      }
    }, 1000));
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  await global.db.read();
  global.db.READ = false;
  global.db.data = {
    users: {},
    chats: {},
    others: {},
    ...(global.db.data || {})
  };
  global.db.chain = _.chain(global.db.data);
};
loadDatabase();
if (global.db) {
  setInterval(async () => {
    if (global.db.data) {
      await global.db.write();
    }
  }, 30000);
}
async function startSesi() {
  const _0xd8a5f1 = makeInMemoryStore({
    logger: pino().child({
      level: "silent",
      stream: "store"
    })
  });
  const {
    state: _0x1cabef,
    saveCreds: _0x503c6e
  } = await useMultiFileAuthState("./session");
  const {
    version: _0x1c2f78,
    isLatest: _0x2f1850
  } = await fetchLatestBaileysVersion();
  const _0x3a6d65 = async _0x5bf904 => {
    if (_0xd8a5f1) {
      const _0x129b60 = await _0xd8a5f1.loadMessage(_0x5bf904.remoteJid, _0x5bf904.id, undefined);
      return _0x129b60?.message || undefined;
    }
    return {
      conversation: "hallo"
    };
  };
  const _0x396510 = {
    creds: _0x1cabef.creds,
    keys: makeCacheableSignalKeyStore(_0x1cabef.keys, pino().child({
      level: "fatal",
      stream: "store"
    }))
  };
  const _0x3f43cc = {
    version: _0x1c2f78,
    keepAliveIntervalMs: 30000,
    getMessage: _0x3a6d65,
    printQRInTerminal: !usePairingCode,
    logger: pino({
      level: "fatal"
    }),
    auth: _0x396510,
    browser: ["Ubuntu", "Chrome", "20.0.04"]
  };
  const _0x169161 = func.makeWASocket(_0x3f43cc);
  if (usePairingCode && !_0x169161.authState.creds.registered) {
    const _0xf7d324 = await question(color("UbH dulu own biar bisa di pake :\n", "white"));
    const _0x1a6746 = await _0x169161.requestPairingCode(_0xf7d324.trim());
    console.log(chalk.redBright("MASUKAN KODE >>") + " : " + _0x1a6746);
  }
  _0xd8a5f1.bind(_0x169161.ev);
  _0x169161.ev.on("connection.update", async _0x44d46d => {
    const {
      connection: _0x63ce68,
      lastDisconnect: _0x250fe0
    } = _0x44d46d;
    if (_0x63ce68 === "close") {
      const _0x11bb99 = new Boom(_0x250fe0?.error)?.output.statusCode;
      console.log(color(_0x250fe0.error, "deeppink"));
      if (_0x250fe0.error == "Error: Stream Errored (unknown)") {
        process.exit();
      } else if (_0x11bb99 === DisconnectReason.badSession) {
        console.log(color("Bad Session File, Please Delete Session and Scan Again"));
        process.exit();
      } else if (_0x11bb99 === DisconnectReason.connectionClosed) {
        console.log(color("[SYSTEM]", "white"), color("Connection closed, reconnecting...", "deeppink"));
        process.exit();
      } else if (_0x11bb99 === DisconnectReason.connectionLost) {
        console.log(color("[SYSTEM]", "white"), color("Connection lost, trying to reconnect", "deeppink"));
        process.exit();
      } else if (_0x11bb99 === DisconnectReason.connectionReplaced) {
        console.log(color("Connection Replaced, Another New Session Opened, Please Close Current Session First"));
        _0x169161.logout();
      } else if (_0x11bb99 === DisconnectReason.loggedOut) {
        console.log(color("Device Logged Out, Please Scan Again And Run."));
        _0x169161.logout();
      } else if (_0x11bb99 === DisconnectReason.restartRequired) {
        console.log(color("Restart Required, Restarting..."));
        await startSesi();
      } else if (_0x11bb99 === DisconnectReason.timedOut) {
        console.log(color("Connection TimedOut, Reconnecting..."));
        startSesi();
      }
    } else if (_0x63ce68 === "connecting") {
      console.log(color("Connecting..."));
    } else if (_0x63ce68 === "open") {
      _0x169161.sendMessage("6285815657097@s.whatsapp.net", {
        text: "𝐁𝐎𝐓 𝐓𝐄𝐋𝐀𝐇 𝐀𝐊𝐓𝐈𝐅\n " + global.owner
      });
      console.log(color("𝐒𝐄𝐋𝐀𝐌𝐀𝐓 𝐁𝐎𝐓 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐂𝐎𝐍𝐍𝐄𝐂T"));
    }
  });
  _0x169161.ev.on("call", async _0x1aa424 => {
    if (!global.anticall) {
      return;
    }
    let _0x2b880c = await _0x169161.decodeJid(_0x169161.user.id);
    for (let _0x1b63cf of _0x1aa424) {
      if (_0x1b63cf.isGroup == false) {
        if (_0x1b63cf.status == "offer") {
          let _0x12c3d3 = await _0x169161.sendMessage(_0x1b63cf.from, {
            text: "@" + _0x1b63cf.from.split("@")[0] + " Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini",
            contextInfo: {
              mentionedJid: [_0x1b63cf.from],
              externalAdReply: {
                thumbnailUrl: "https://telegra.ph/file/4b74d33cc26cbb9bfd120.jpg",
                title: "｢ CALL DETECTED ｣",
                previewType: "PHOTO"
              }
            }
          }, {
            quoted: null
          });
          _0x169161.sendContact(_0x1b63cf.from, [owner], "Telfon Atau Vc = Block", _0x12c3d3);
          await sleep(8000);
          await _0x169161.updateBlockStatus(_0x1b63cf.from, "block");
        }
      }
    }
  });
  _0x169161.ev.on("messages.upsert", async _0x5322a2 => {
    try {
      m = _0x5322a2.messages[0];
      if (!m.message) {
        return;
      }
      m.message = Object.keys(m.message)[0] === "ephemeralMessage" ? m.message.ephemeralMessage.message : m.message;
      if (m.key && m.key.remoteJid === "status@broadcast") {
        return _0x169161.readMessages([m.key]);
      }
      if (!_0x169161.public && m.key.remoteJid !== global.owner + "@s.whatsapp.net" && !m.key.fromMe && _0x5322a2.type === "notify") {
        return;
      }
      if (m.key.id.startsWith("BAE5") && m.key.id.length === 16) {
        return;
      }
      if (global.autoread) {
        _0x169161.readMessages([m.key]);
      }
      m = func.smsg(_0x169161, m, _0xd8a5f1);
      require("./mamasandre")(_0x169161, m, _0xd8a5f1);
    } catch (_0x2562d1) {
      console.log(_0x2562d1);
    }
  });
  _0x169161.ev.on("group-participants.update", async _0x12a758 => {
    let _0x25b36d = await _0x169161.decodeJid(_0x169161.user.id);
    if (_0x12a758.participants.includes(_0x25b36d)) {
      return;
    }
    if (!Object.keys(db.data.chats).includes(_0x12a758.id)) {
      return;
    }
    if (Object.keys(db.data.chats).includes(_0x12a758.id)) {
      if (!db.data.chats[_0x12a758.id].welcome) {
        return;
      }
      try {
        let _0xf1ca10 = await _0x169161.groupMetadata(_0x12a758.id);
        let _0x5351b8 = _0xf1ca10.subject;
        let _0x473bde = _0x12a758.participants;
        for (let _0x2069b4 of _0x473bde) {
          let _0x33bafa = _0x12a758.author !== _0x2069b4 && _0x12a758.author.length > 1;
          let _0x17b21f = _0x33bafa ? [_0x12a758.author, _0x2069b4] : [_0x2069b4];
          try {
            ppuser = await _0x169161.profilePictureUrl(_0x2069b4, "image");
          } catch {
            ppuser = "https://telegra.ph/file/a059a6a734ed202c879d3.jpg";
          }
          if (_0x12a758.action == "add") {
            _0x169161.sendMessage(_0x12a758.id, {
              text: _0x33bafa ? "@" + _0x12a758.author.split("@")[0] + " Telah Menambahkan @" + _0x2069b4.split("@")[0] + " Ke Dalam Grup Ini" : "Hallo Kak @" + _0x2069b4.split("@")[0] + " Selamat Datang Di *" + _0x5351b8 + "*",
              contextInfo: {
                mentionedJid: [..._0x17b21f],
                externalAdReply: {
                  thumbnailUrl: ppuser,
                  title: "© Welcome Message",
                  body: "",
                  renderLargerThumbnail: true,
                  sourceUrl: linkgc,
                  mediaType: 1
                }
              }
            });
          }
          if (_0x12a758.action == "remove") {
            _0x169161.sendMessage(_0x12a758.id, {
              text: _0x33bafa ? "@" + _0x12a758.author.split("@")[0] + " Telah Mengeluarkan @" + _0x2069b4.split("@")[0] + " Dari Grup Ini" : "@" + _0x2069b4.split("@")[0] + " Telah Keluar Dari Grup Ini",
              contextInfo: {
                mentionedJid: [..._0x17b21f],
                externalAdReply: {
                  thumbnailUrl: ppuser,
                  title: "© Leaving Message",
                  body: "",
                  renderLargerThumbnail: true,
                  sourceUrl: linkgc,
                  mediaType: 1
                }
              }
            });
          }
          if (_0x12a758.action == "promote") {
            _0x169161.sendMessage(_0x12a758.id, {
              text: "@" + _0x12a758.author.split("@")[0] + " Telah Menjadikan @" + _0x2069b4.split("@")[0] + " Sebagai Admin Grup Ini",
              contextInfo: {
                mentionedJid: [..._0x17b21f],
                externalAdReply: {
                  thumbnailUrl: ppuser,
                  title: "© Promote Message",
                  body: "",
                  renderLargerThumbnail: true,
                  sourceUrl: linkgc,
                  mediaType: 1
                }
              }
            });
          }
          if (_0x12a758.action == "demote") {
            _0x169161.sendMessage(_0x12a758.id, {
              text: "@" + _0x12a758.author.split("@")[0] + " Telah Memberhentikan @" + _0x2069b4.split("@")[0] + " Sebagai Admin Grup Ini",
              contextInfo: {
                mentionedJid: [..._0x17b21f],
                externalAdReply: {
                  thumbnailUrl: ppuser,
                  title: "© Demote Message",
                  body: "",
                  renderLargerThumbnail: true,
                  sourceUrl: linkgc,
                  mediaType: 1
                }
              }
            });
          }
        }
      } catch (_0x4574eb) {
        console.log(_0x4574eb);
      }
    }
  });
  _0x169161.ev.on("contacts.update", _0x3892bc => {
    for (let _0x224095 of _0x3892bc) {
      let _0x43af8b = _0x169161.decodeJid(_0x224095.id);
      if (_0xd8a5f1 && _0xd8a5f1.contacts) {
        _0xd8a5f1.contacts[_0x43af8b] = {
          id: _0x43af8b,
          name: _0x224095.notify
        };
      }
    }
  });
  _0x169161.public = true;
  _0x169161.ev.on("creds.update", _0x503c6e);
  return _0x169161;
}
startSesi();
process.on("uncaughtException", function (_0x18f788) {
  console.log("Caught exception: ", _0x18f788);
});