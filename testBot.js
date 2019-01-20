const Discord = require("discord.js");
const bot = new Discord.Client();
const tokenfile = require("./tokenfile.json");
const { CommandHandler } = require(`djs-commands`);
const CH = new CommandHandler({

    folder: __dirname + "/commands/",
    prefix: ['>']

});

global.servers = {};

bot.on("ready", () => {
  console.log("\nReady!");

  bot.channels.find(channel => channel.name === "status").send(bot.user.username + " Connected!")
});

bot.on("message", (message) => {

    if (message.author.bot) return;

    // Deletes users message
    /*
    switch(message.author.username){
        case "Koaestro":
            message.delete();
    }
    */

    let args = message.content.split(" ");
    let command = args[0];

    let cmd = CH.getCommand(command);

    if (!cmd) return;

    try{
        cmd.run(bot, message, args.slice(1))
    } catch(e){
        console.log(e);
    }

})

bot.login(tokenfile.token);
