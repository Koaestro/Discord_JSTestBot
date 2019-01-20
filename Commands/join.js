const Discord = require("discord.js");
const YTDL = require(`ytdl-core`);

function Play (connection, message){

    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function(){
        if (server.queue[0]){
            Play(connection, message);
        } else{
            connection.disconnect();
        }
    });
}

module.exports = class join {

    constructor(){
        this.name = "join",
        this.alias = "j",
        this.usage = ">join"
    }

    run(bot, message, args) {

        if (!message.member.voiceChannel) return message.reply("Not in a voice channel.");

        // if (message.guild.voiceConnection) return console.log("message.guild.voiceConnection");

        if (!servers[message.guild.id]) {
            servers[message.guild.id] = {queue: []}
        }

        message.member.voiceChannel.join()
        .then(connection => {
            message.reply("Connected successfully")
            var server = servers[message.guild.id];
            console.log(String(args));
            server.queue.push(String(args));
            Play(connection, message)
        });

    }
}
