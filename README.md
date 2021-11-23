# Discord.js-Bad-Links - Delete/mute for harmful/malicious links

### Now updated & working with discord.js v13!

Automatically delete messages that contain bad links and permanently mute the user for doing so.

This code can work as a standalone bot, or it can be added to your existing discord.js bot code.

Get a list of harmful links either through an API or provided JSON file.

Instructions of how to set up both of the bots can be found below, and in each of the code folders. If you have any issues with setting up this code as a standalone bot, or merging it into your existing code, feel free to open an issue and I will be happy to assist

Note: I will not provide direct instructions on how to merge this code with your existing code, however I will provide advice in issues if needed.

#### This code was last tested & working with `discord.js v13.3.1` & `node.js v16.3.0`.

### Prerequisites for this to work:
- You will need to of created your discord bot.
- If using the API version, you must have your own API URL to use.
- Your discord bot must have the following permissions: `View channels`, `Manage roles`, `Send messages`, `Manage messages`, `Read message history` (The bot will work if the Administrator permission is granted, but this is not recommended).
- You must have a muted role set up in your discord server.


## How to set up as standalone bot WITH API:
- Download code.
- Add your bot token into line 2 of config.json.
- Add your mute role ID into line 3 of config.json.
- Add your API link into line 4 of config.json.
- Install required packages through `npm install`.
- Start your bot by typing `node index.js` in your terminal.


## How to set up as a standalone bot WITH JSON:
- Download code.
- Add your bot token into config.json.
- Add your mute role ID into config.json.
- Install required packages through `npm install`.
- Start your bot by typing `node index.js` in your terminal.


Credits:
- JSON List - reddit u/Killaxia
