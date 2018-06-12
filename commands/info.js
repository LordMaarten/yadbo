module.exports = {
	name: 'info',
	description: 'info!',
	execute(message, args) {
		message.channel.send('info about the bot');
	},
};