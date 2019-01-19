const Discord = require("discord.js");
const bot = new Discord.Client();
const tokenfile = require("./tokenfile.json");
// const fs = require("fs");
const { CommandHandler } = require(`djs-commands`);
const CH = new CommandHandler({

    folder: __dirname + "/commands/",
    prefix: ['>']

});


// bot.commands = new Discord.Collection();
//
// fs.readdir("./commands/", (err, files) => {
//
//     if (err) console.log(err);
//
//     let jsfile = files.filter(f => f.split(".").pop() === "js");
//
//     if (jsfile.length <= 0) {
//
//         console.log ("Could not find commands.");
//         return;
//
//     }
//
//     jsfile.forEach((f, i) => {
//
//     let props = require(`./commands/${f}`);
//     console.log(`${f} loaded`);
//
//     bot.commands.set(props.help.name, props);
//     });
//
// });


bot.on("ready", () => {
  console.log("\nReady!");

  bot.channels.find(channel => channel.name === "status").send(bot.user.username + " Connected!")
});

bot.on("message", (message) => {

    if (message.author.bot) return;

    let args = message.content.split(" ");
    let command = args[0];

    let cmd = CH.getCommand(command);

    if (!cmd) return;

    try{
        cmd.run(bot, message, args)
    } catch(e){
        console.log(e);
    }

    // let commandFile = bot.commands.get(cmd.slice(prefix.length));
    //
    // if (commandFile) commandFile.run(bot, message, args);

})

bot.login(tokenfile.token);
