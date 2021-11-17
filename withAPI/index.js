const request = require('request');
let badLinks = '';

client.on("message", async message => {
    request("api link", function (error, response, body) {
        if (error === null) {} else { console.log(`request error: ${error}`)};
        badLinks = JSON.parse(body);
    });

    function autoMute(message, reason){
        const guild = client.guilds.cache.get(message.guild.id)
        const member = guild.members.cache.get(message.author.id)
        member.roles.add("mute role id").catch(err => console.error);
    }
    if (message.author.id === client.user.id) {
    } else {
        if (badLinks.some(word => message.content.includes(word))) {
            autoMute(message, "Bad Link Usage")
            message.reply("You have been muted for: **Bad Link Usage**")
            message.delete()
        }
    }
})
