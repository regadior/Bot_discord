const { Client, GatewayIntentBits } = require('discord.js');
const { token, prefix } = require('./config.json');

const bot = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildMembers,
	GatewayIntentBits.DirectMessageTyping,
] });

bot.once('ready', () => {
	console.log('*********************************** ESTADO ***********************************');
	console.log(`El bot esta listo ${bot.user.tag}\nStatus ${bot.presence.status}`);
	console.log('******************************************************************************');

});
bot.on('messageCreate', msg =>{
    if(msg.content.startsWith(prefix+'ping')){
        msg.reply('pong');
    }
});
bot.login(token); 

