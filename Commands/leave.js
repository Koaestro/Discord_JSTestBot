const Discord = require("discord.js");

module.exports = class leave {

    constructor(){
        this.name = "leave",
        this.alias = "l",
        this.usage = ">leave"
    }

    run(bot, message, args) {

        if (!message.guild.voiceConnection) return console.log("!message.guild.voiceConnection");

        message.guild.voiceConnection.disconnect();

    }
}
