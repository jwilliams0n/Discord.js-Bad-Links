# Discord.js-Bad-Links
Delete the message and mute a user for posting harmful links.

Note: You will need to provide your own API for this to work.

How to set up:
- Copy the contents of the index.js file into your existing index.js file. (The main file that runs your bot)
- Install the npm request package via **npm install request**
- Replace **"mute role id"** on line 11 of index.js with your discord muted role ID.
- Replace **"api link"** with your API link on like 5.


NOTE: This is not a fully working bot code. You will need to already have a working discord.js bot with an existing index.js code file for this to work.
      Your bot will need the correct permissions (listed below). Your bot role and muted role will need to be above your user roles in the Server Settings > Roles list.


Permissions Required for this to work:
- Manage Roles
- SendMessages 
- ManageMessages
- Read Message History



This was last tested & working with node.js v16.11.1
