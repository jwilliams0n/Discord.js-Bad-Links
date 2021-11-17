const badLinks = require('./badLinks.json')

client.on("message", async message => {

    function autoMute(userid, guildid, reason){
        console.log(userid, guildid, reason)
        const guild = client.guilds.cache.get(guildid)
        const member = guild.members.cache.get(userid)
        const role = member.guild.roles.cache.find(role => role.id === "mute role id")
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
