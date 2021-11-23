# Discord.js Bad Links with JSON.
Automatically delete messages that contain bad links and permanently mute the user for doing so, using a pre-defined json of links.
This code can work as a standalone bot, or can be added to your existing discord.js bot.


### Prerequisites for this to work:
- You will need to of created your discord bot.
- Your discord bot must have the following permissions: `View channels`, `Manage roles`, `Send messages`, `Manage messages`, `Read message history` (This bot will work if the Administrator permission is granted, but this is not recommended).
- You must have a muted role set up in your discord server.

There are pleanty of other tutorials on the internet of how to set up a discord bot and create roles in discord servers.


## How to set up as a standalone bot.
- Download code.
- Add your bot token into config.json.
- Add your mute role ID into config.json.
- Install required packages through `npm install`.
- Start your bot by typing `node index.js` in your terminal.

If you encounter any issues or require any assistance setting this up, create an issue and I will be more than happy to assist.

Credits:  JSON List - reddit u/Killaxia


Last tested and working with `discord.js v13.3.1` & `node.js v16.3.0`
