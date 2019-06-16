const yt = require("ytdl-core");
const ffmpeg = require("ffmpeg");

exports.run = (client, message, args, ops) => {
    if (!message.member.voiceChannel) return message.reply('You are not in a voice channel!');

	if (!message.guild.me.voiceChannel) return message.channel.send("Sorry, the bot isn't connected to any voice channel!");
    client.user.setActivity(`i'll name this server later`, {type: "WATCHING"});
	message.guild.me.voiceChannel.leave();
    message.channel.send('Leaving channel!')
  }

  module.exports.help = {
    name:"leave"
  }
