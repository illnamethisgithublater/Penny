const Discord = require("discord.js");
const fs = require("fs");
const strength = require("../playerstats/strength.json");
const botconfig = require("../botconfig.json");
const questL = require("../questhandler/questcompleted.json");
const grimL = require("../playerstats/grim hunting.json");
const grimInv = require("../playerinventory/grim.json");
const purple = botconfig.purple;

module.exports.run = async (bot, message, args) => {

  if(!grimL[message.author.id]){
  grimL[message.author.id] = {
    level: 1,
    xp: 0
    };
  }
  if(!grimInv[message.author.id]){
    grimInv[message.author.id] = {
      grim: 0
    };
  }

  let curLevel = grimL[message.author.id].level;
  let curxp = grimL[message.author.id].xp;
  let curgrim = grimInv[message.author.id].grim;
  let chance = Math.ceil(Math.random() * 100);
  let xpgained = Math.ceil(Math.random() * 15);
  let grimgained = Math.floor(Math.random() * 3);
  let nxtLvl = curLevel * 300;
  let xpleft = nxtLvl - curxp;

  message.delete();

  if(grimgained === 0){
    let failembed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor(botconfig.red)
    .addField("Sorry", "You failed to kill any grim.");
    return message.channel.send(failembed)//.then(msg => {msg.delete(5000)});
  }

  grimInv[message.author.id].grim = curgrim + grimgained;
  fs.writeFile("./playerinventory/grim.json", JSON.stringify(grimInv),  (err) => {
    if (err) console.log(err)
  });



  grimL[message.author.id].xp = curxp + xpgained;
  fs.writeFile("./playerstats/griming.json", JSON.stringify(grimL),  (err) => {
  if (err) console.log(err)
});

  if(grimL[message.author.id].xp >= nxtLvl){

    grimL[message.author.id].level = curLevel + 1;
    fs.writeFile("./playerstats/griming.json", JSON.stringify(grimL),  (err) => {
      if (err) console.log(err)
    });
    let lvlup = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor(botconfig.green)
    .addField("Level Up!", `You are now level ${curLevel + 1} grim hunting.` );

    message.channel.send(lvlup)//.then(msg => {msg.delete(5000)});
  }

  let grimembed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setTitle("Grim Killed!")
  .setColor(botconfig.purple)
  .addField("Grim Killed", `${grimgained} grim killed.`, true)
  .addField("XP Gained", xpgained, true)
  .setFooter(`${xpleft} to next level`, message.author.displayAvatarURL);

  message.channel.send(grimembed)//.then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "grimhunt"
}
