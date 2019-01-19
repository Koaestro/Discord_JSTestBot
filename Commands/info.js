const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = class info {

    constructor(){
        this.name = "info",
        this.alias = "i",
        this.usage = ">info"
    }

    run(bot, message, args) {

        let msgEmbed = new Discord.RichEmbed()
             .setDescription("JSTestBot Info")
             .setColor("#1c0eb7")
             .setThumbnail(bot.user.displayAvatarURL)
             .addField("Name", bot.user.username)
             .addField("Joined", bot.user.createdAt);
             message.channel.send(msgEmbed);

    }
}
