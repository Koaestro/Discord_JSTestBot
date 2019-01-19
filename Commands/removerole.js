const Discord = require("discord.js");


module.exports = class addrole {

    constructor(){
        this.name = "removerole",
        this.alias = "rr",
        this.usage = ">removerole"
    }

    run(bot, message, args) {

        // >removerole @user <role>

        let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if (!rMember) return message.reply("Couldn't find user");

        let role = args.join(" ").slice(22);

        if (!role) return message.reply("Please specify a role");

        let gRole = message.guild.roles.find(`name`, role);

        if (!gRole) return message.reply("Couldn't find that role");

        if (rMember.roles.has(gRole.id));

        await (rMember.removeRole(gRole.id));

        try {

            rMember.send(`You lost the role ${gRole.name}`);

        } catch (e) {

            message.channel.send(`${rMember.id} lost the role ${gRole.name}, we tried to message them privately but their DMs are locked`);
        }
    }
}
