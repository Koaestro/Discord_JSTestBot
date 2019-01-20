const Discord = require("discord.js");
const mongoose = require("mongoose");
const Report = require("../models/reports.js");

mongoose.connect('mongodb://localhost/Reports', {
    useNewUrlParser: true
});


module.exports = class report {

    constructor(){
        this.name = "report",
        this.alias = "r",
        this.usage = ">report"
    }

    async run(bot, message, args) {

        await message.delete();

        let rUser = message.mentions.members.first();
        if (!rUser) return message.reply("Couldn't find user");
        let rreason = args.slice(1).join(" ");
        if (!rreason) return message.reply("Please include a reason");

        const report = new Report({
            // _id: mongoose.Types.ObjectID(),
            username: rUser.user.username,
            userID: rUser.id,
            reason: rreason,
            rUsername: message.author.username,
            rID: message.author.id,
            time: message.createdAt
        });

        report.save()
        .then(result => console.log(result))
        .catch(err => console.log(err));

        message.reply("Report has been saved");

    }
}
