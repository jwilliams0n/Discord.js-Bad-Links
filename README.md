# Discord.js-Bad-Links
Delete the message and mute a user for posting harmful links.

Get a list of harmful links either through an API or json file.

# How to set up **with api**:
- Copy the contents of the index.js file into your existing index.js file (the main file that runs your bot).
- Install the npm request package via **npm install request**.
- Replace **"mute role id"** on line 11 of index.js with your discord muted role ID.
- Replace **"api link"** with your API link on like 5.

# How to set up **with JSON file**:
- Download the badLinks.json file.
- Move the badLinks.json file into the same folder as your existing index.js file.
- Add the contents of the index.js file into your existing index.js file (the main file that runs your bot).
- Replace the **"mute role id"** on like 9 of index.js with your discord muted role ID.
      
# Required Permissions for this to work:
- Manage Roles
- SendMessages 
- ManageMessages
- Read Message History

# NOTE:
- This is **NOT** a full bot code. Simply copying and pasting this will not give you a fully functioning discord.js bot.
- You will need to provide your own API if using the API version.
- You will need to create your own muted role and set up permissions for this to work.
- Ensure your bot has the correct permissions, as muting/deleting/sending messages will not work correctly.
- You may need to change the word `client` in this code. This will depend on the line of your code similar to `const client = new Discord.Client();` - If you have any issues with this, feel free to open an issue and I will be happy to assist.


Both versions were last tested & working with node.js v16.11.1


Credits:
JSON List - reddit u/Killaxia
