const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/neko`);

  let nekoembed = new Discord.RichEmbed()
  .setColor("#3a0be7")
  .setTitle(`Nya~!`)
  .setImage(body.url);

  message.channel.send(nekoembed);

}

module.exports.help = {
  name: "neko"
}
