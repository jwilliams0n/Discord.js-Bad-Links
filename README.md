# Discord.js-Bad-Links
Delete and mute a user for posting links commonly found on hacked accounts.


How to set up:
- Download the code.
- Copy the contents of the downloaded index.js file into your existing index.js file. (The main file that runs your bot)
- Drag the badLinks.json file into the same folder as your existing index.js file.
- Replace "mute role id" on line 9 of index.js with your discord muted role ID.


NOTE: This is not a fully working bot code. You will need to already have a working discord.js bot with an existing index.js code file for this to work.
      Your bot will need the correct permissions (listed below). Your bot role and muted role will need to be above your user roles in the Server Settings > Roles list.


Permissions Required for this to work:
- Manage Roles
- SendMessages 
- ManageMessages
- Read Message History



This was last tested & working with node.js v16.11.1
