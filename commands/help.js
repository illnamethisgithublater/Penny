const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Help Menu")
  .addField("I'm combat ready!", "I can help, give serverinfo, give botinfo, and report, answer your questions, send dog pics, you can change my prefix. Also I'm a welcomer bot");

  message.channel.send(helpembed);

  if(message.member.hasPermission("MANAGE_MESSAGES")){
  let modembed = new Discord.RichEmbed()
  .setDescription("Mod Help Menu")
  .setColor("#8300ff")
  .addField("Mod Commands", "addrole, removerole, kick, warn, warnlevel, ban, doggo, answer, prefix");

  try{
    await message.author.send(modembed);
    message.react("💰")
  }catch(e){
    message.reply("Your DMs are locked. I cannot send you the mod commands.")
  }
}

}

module.exports.help = {
  name: "help"
}
