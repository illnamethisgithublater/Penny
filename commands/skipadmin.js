exports.run = async (client, message, args, ops) => {
  message.delete()
  let fetched = ops.active.get(message.guild.id);
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Only admins can use that command!')
  ops.active.set(message.guild.id, fetched);
    message.channel.send('Music Skipped!');
    fetched.dispatcher.emit('end');
}


module.exports.help = {
  name:"skipadmin"
}
