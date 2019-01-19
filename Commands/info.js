const Discord = require("discord.js");
const client = new Discord.Client();

exports.command = function (Discord, client, message) {
    let msgEmbed = new Discord.RichEmbed()
    .setDescription("JSTestBot Info")
    .setColor("#1c0eb7")
    .setThumbnail(client.user.displayAvatarURL)
    .addField("Name", client.user.username)
    .addField("Joined", client.user.createdAt);

    message.channel.send(msgEmbed);
}
