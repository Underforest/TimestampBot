const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('¡Sesión iniciada con éxito!');
});

client.on('message', message => {
    var regex = /([0-9][0-9]:[0-5][0-9]:[0-9][0-9][0-9])\s?\(?([\d,]+)?\)?\s?-?/;

 if (message.content.startsWith("?mod")) {
 if (message.content.match(regex)) {
	try {
            message.delete();
        } catch (e) {
           return;
        }
        var embed = new Discord.RichEmbed();
        var link = "https://forest.is-pretty.cool/54f1a3.html?data=" + new Buffer(message.content.match(regex)[0]).toString('base64');
        //cannot use osu! protocol, had to use a life hack instead lol
        console.log(message.content.match(regex)[0])
        embed.author = {icon_url: message.author.avatarURL, name: message.author.username + "#" + message.author.discriminator};
        embed.color = 0xff3f9f;
        embed.description = message.content.replace(message.content.match(regex)[0] + " ", "").replace("?mod", "");
        embed.title = message.content.match(regex)[0];
        embed.url = link;
        message.channel.send("", embed);
} else {
   message.channel.send("Asi no se usa el comando, y si me equivoco, entonces hubo un error")
}
  }
});

client.login('token');

