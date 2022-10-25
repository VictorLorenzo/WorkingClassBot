require("dotenv").config();
const fs = require('node:fs');
const path = require('node:path');
const Discord = require('discord.js');
const token = process.env.TOKEN_DISCORD; //Token that you saved in step 5 of this tutorial
const client = new Discord.Client({ 
	intents: [
		Discord.GatewayIntentBits.Guilds,
		Discord.GatewayIntentBits.MessageContent,
		Discord.GatewayIntentBits.GuildMessageTyping,
		Discord.GatewayIntentBits.GuildMessages
	] 
});
client.commands = new Discord.Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	const name = file.slice(0, -3)
	client.commands.set(name, command);
}

client.once(Discord.Events.ClientReady, () => {
	console.log('Ready!');
});

client.on(Discord.Events.MessageCreate, async (message) => {
	let prefix = process.env.PREFIX;
	if(message.author.bot) return;
	if(message.channel.type == "dm") return;
	if(!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
	
	const args = message.content.slice(prefix.length).trim().split(/ +/g);

	let cmd = args.shift().toLowerCase();
	if(cmd.length === 0) return;
	let command = client.commands.get(cmd);

	try{
		command.run(client, message, args)
	}catch (err) {
		console.error('Erro' + err);
	}
});

client.login(token);