const Discord = require("discord.js")

module.exports = {
	run: async(client, message, args) => {
		let embed = new Discord.EmbedBuilder()
		.setColor("Random")
		.setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL()})
		.setDescription(`Olá ${message.author}, seu ping é de \`carregando...\`.`);

		let embed2 = new Discord.EmbedBuilder()
		.setColor("Random")
		.setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL()})
		.setDescription(`Olá ${message.author}, seu ping é de \`${client.ws.ping}\`.`);

		message.reply({ embeds: [embed]}).then(msg => {
			setTimeout( () => {
				msg.edit({ embeds: [embed2] })
			}, 3000)
		})
	}
};