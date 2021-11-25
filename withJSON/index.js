const { Client, Intents } = require('discord.js');
const { botToken, muteRoleID } = require('./config.json');
const badLinks = require('./badLinks.json')
const client = new Client({ 
	intents: [
		Intents.FLAGS.GUILDS, 
		Intents.FLAGS.GUILD_MESSAGES
	] 
});

client.login(botToken);

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);
});


client.on("messageCreate", async (message) => { 

    function autoMute(userid, guildid, reason){
        const guild = client.guilds.cache.get(guildid)
        const member = guild.members.cache.get(userid)
        const role = member.guild.roles.cache.find(role => role.id === muteRoleID)
        member.roles.add(role)
    }

    if (message.author.id === client.user.id) {
        return;
    } else {
        if (badLinks.some(word => message.content.includes(word))) {
            autoMute(message.author.id, message.guild.id, "Bad Link Usage")
            message.reply("You have been muted for: **Bad Link Usage**")
            message.delete()
        }
    }
})
