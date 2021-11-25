const { Client, Intents } = require('discord.js');
const { botToken, muteRoleID, definedAPI } = require('./config.json');
const client = new Client({ 
	intents: [
		Intents.FLAGS.GUILDS, 
		Intents.FLAGS.GUILD_MESSAGES
	] 
});
const fetch = require('node-fetch');
let badLinks = ' ';

client.login(botToken);

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => { 

    function autoMute(message, reason){
        const guild = client.guilds.cache.get(message.guild.id)
        const member = guild.members.cache.get(message.author.id)
        member.roles.add(muteRoleID).catch(err => console.error);
    }
    const badLinks = await fetch(definedAPI).then(response => response.json());
    if (message.author.id === client.user.id) {
    } else {
        if (badLinks.some(word => message.content.includes(word))) {
            autoMute(message, "Bad Link Usage")
            message.channel.send(`${message.author.toString()} You have been muted for: **Bad Link Usage**`).catch(console.error).then(message.delete());
        }
    }
})
