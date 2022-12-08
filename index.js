const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const bot = new Client({ intents: [GatewayIntentBits.Guilds] });

bot.once('ready', () => {
	console.log(`El bot esta listo ${bot.user.tag}`);
});

bot.on("message", msg => {
	if (msg.content === "$inspire") {
	  getQuote().then(quote => msg.channel.send(quote))
	}
  
	if (sadWords.some(word => msg.content.includes(word))) {
	  const encouragement = encouragements[Math.floor(Math.random() * encouragements.length)]
	  msg.reply(encouragement)
	}
  
  })

bot.login(token);