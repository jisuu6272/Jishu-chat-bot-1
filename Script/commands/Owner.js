module.exports.config = {
 name: "owner",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
 description: "Owner information command with styled box",
 commandCategory: "Information",
 usages: "",
 cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
 const ownerInfo = 
`╔═════════════════════╗
║ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 
╠═════════════════════╣
║ 👤 𝗡𝗮𝗺𝗲 : 𝐉𝐈𝐒𝐔𝐔𝐔 𝐀𝐇𝐌𝐄𝐃
║ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : 𝐉𝐢𝐬𝐮𝐮
║ 🎂 𝗔𝗴𝗲 : 𝟐𝟓+
║ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝗦𝗶𝗻𝗴𝗹𝗲
║ 📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 𝐏𝐫𝐞𝐦 𝐚 𝐩𝐨𝐫𝐚
║ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : 𝐃𝐇𝐀𝐊𝐀
╠═════════════════════╣
║ 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦 
╠═════════════════════╣
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 
║ https://fb.com/100065661278836
║ 💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 : 
║ m.me/100065661278836
║ 📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 : 
║ 𝐧𝐮𝐦𝐛𝐞𝐫 𝐥𝐚𝐠𝐥𝐞 𝐢𝐧𝐛𝐨𝐱
║ ✈️ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 : 
║ 𝐡𝐚𝐫𝐚𝐦
╚═════════════════════╝`;

 return api.sendMessage(ownerInfo, event.threadID, event.messageID);