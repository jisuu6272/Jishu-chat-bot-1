module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.0",
    credits: "CYBER BOT TEAM",
    description: "Send message when bot is added to a group"
};

module.exports.run = async function({ api, event }) {
    const { threadID } = event;
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        const fs = require("fs");
        api.changeNickname(
            `[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "BOT" : global.config.BOTNAME}`,
            threadID,
            api.getCurrentUserID()
        );
        return api.sendMessage(
            {
                body: `╭•┄┅═══❁🌺❁═══┅┄•╮
   আসসালামু আলাইকুম-!!🖤💫
╰•┄┅═══❁🌺❁═══┅┄•╯

________________________

𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐬𝐨 𝐦𝐮𝐜𝐡 𝐟𝐨𝐫 𝐚𝐝𝐝𝐢𝐧𝐠 𝐦𝐞 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩 🖤🤗

𝐈 𝐰𝐢𝐥𝐥 𝐚𝐥𝐰𝐚𝐲𝐬 𝐬𝐞𝐫𝐯𝐞 𝐲𝐨𝐮 𝐢𝐧𝐬𝐡𝐚𝐚𝐥𝐥𝐚𝐡 🌺❤️

________________________

To view commands:
${global.config.PREFIX}help
${global.config.PREFIX}menu

BOT NAME: 𝐉𝐢𝐬𝐡𝐮𝐮 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 🎆
`,
                attachment: fs.createReadStream(__dirname + "/cache/Shahadat.mp4")
            },
            threadID
        );
    }
};