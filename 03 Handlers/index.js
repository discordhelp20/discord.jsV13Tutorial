const { Client, Collection } = require('discord.js');
const { prefix, color, ownerId } = require("./settings.json");
const client = new Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MEMBERS",
    "GUILD_PRESENCES"
  ]
});

client.pr_commands = new Collection();
client.sl_commands = new Collection();
client.aliases = new Collection();
client.settings = { prefix, color, ownerId };

for(let handler of  ["sl_command", "pr_command", "event"]) require(`./handlers/${handler}`)(client);

config = process.env;
client.login(config.token);

const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('I am online')
});
app.listen(3000, () => {
  console.log('connected to server');
});
