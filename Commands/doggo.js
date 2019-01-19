const Discord = require("discord.js");
const superagent = require ("superagent");

module.exports = class addrole {

    constructor(){
        this.name = "doggo",
        this.alias = "d",
        this.usage = ">doggo"
    }

    async run(bot, message, args) {

        let {body} = await superagent
        .get(`https://random.dog/woof.json`);

        let dogembed = new Discord.RichEmbed()
        .setColor("#1c0eb7")
        .setTitle("Doggo")
        .setThumbnail(bot.user.displayAvatarURL)
        .setImage(body.url);

        message.channel.send(dogembed);
    }
}
