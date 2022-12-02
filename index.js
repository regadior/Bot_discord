const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const bot = new Client({ intents: [GatewayIntentBits.Guilds] });

bot.once('ready', () => {
	console.log(`El bot esta listo ${bot.user.tag}`);
});

bot.login(token);