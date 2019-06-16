const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {


    let subreddits = [

        'https://media.giphy.com/media/Y6MPxbvvSvD6E/giphy.gif',
        'https://thumbs.gfycat.com/VeneratedZigzagIndigobunting-small.gif',
        'https://i.gifer.com/WOQM.gif',
        'https://media.giphy.com/media/Dfk1AQFFdt9As/giphy.gif',
        'https://i.pinimg.com/originals/f1/ba/c6/f1bac6c45744a5c60b93170bb46a329b.gif',




        ]

        let sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];


        let selfslap = [
          'https://cdn.cultofmac.com/wp-content/uploads/2015/12/kirk-slap.gif',
        ]



                let slapuser = message.mentions.members.first()
                if(!slapuser){
                    message.reply(`Who do you want to slap?`)
                  }

                    const selfembed = new Discord.RichEmbed()
                    .setColor(0xff0000)
                    .setDescription(`${message.author} is slapping themselves`)
                    .setImage(selfslap);

                const embed = new Discord.RichEmbed()
                    .setColor(0xff0000)
                    .setDescription(`${message.author} is slapping **${slapuser}**`)
                    .setImage(sub);
                message.channel.send({
                    embed
                });

}

module.exports.help = {
    name: "slap"
}
