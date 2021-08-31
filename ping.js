const { SlashCommandBuilder } = require(`@discordjs/builders`)

module.exports = {
    data: new SlashCommandBuilder()
        .setName('Ping')
        .setDescription('Replies with pong!'),
    async execute(interaction){
        await interaction.reply('Pong!');
    },
    
}