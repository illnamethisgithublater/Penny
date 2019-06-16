const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("You can't do that.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo");
  let warnlevel = warns[wUser.id].warns;

  let warnlevelembed = new Discord.RichEmbed()
  .setDescription("Warn Level")
  .setColor(orange)
  .addField(`User:`, `${wUser}`)
  .addField("# of warns", warnlevel);

  message.channel.send(warnlevelembed);

}

module.exports.help = {
  name: "warnlevel"
}
