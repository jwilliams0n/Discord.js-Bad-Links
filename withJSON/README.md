# Discord.js-Bad-Links - Delete/warn for harmful/malicious links using JSON.
Automatically delete messages that contain bad links and permanently mute the user for doing so, using a pre-defined json of links.

This code can work as a standalone bot, or can be added to your existing discord.js bot.

Instructions of how to set up the bot using a JSON list can be found below If you have any issues with setting up this code as a standalone bot, or merging it into your existing code, feel free to open an issue and I will be happy to assist

Note: I will not provide direct instructions on how to merge this code with your existing code, however I will provide advice in issues if needed.


#### This code was last tested & working with `discord.js v13.3.1` & `node.js v16.3.0`


### Prerequisites for this to work:
- You will need to of created your discord bot.
- Your discord bot must have the following permissions: `View channels`, `Manage roles`, `Send messages`, `Manage messages`, `Read message history` (This bot will work if the Administrator permission is granted, but this is not recommended).
- You must have a muted role set up in your discord server.


## How to set up as a standalone bot.
- Download code.
- Add your bot token into config.json.
- Add your mute role ID into config.json.
- Install required packages through `npm install`.
- Start your bot by typing `node index.js` in your terminal.


Credits:
- JSON List - reddit u/Killaxia


Last tested and working with `discord.js v13.3.1` & `node.js v16.3.0`
