const Discord = require("discord.js");
const client = new Discord.Client();
const tokenfile = require("./tokenfile.json");

var prefix = ">";

function SearchForCommand(command, message) {

    switch (command){
        case "test":
            message.channel.send("Testing 1 2 3");
            break;

        case "info":
            require("./Commands/info.js").command(Discord, client, message);
            break;

        default:
            return "No command found.";
            break;
    }
}

client.on("ready", () => {
  console.log("I am ready!");

  client.channels.find(channel => channel.name === "status").send(client.user.username + " Connected!")
});

client.on("message", (message) => {
    if (message.content.startsWith(prefix)) {

        SearchForCommand(String(message).substring(1), message);

    }
})

client.login(tokenfile.token);
