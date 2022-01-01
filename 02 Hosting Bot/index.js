const Discord = require('discord.js');
const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
});
// server //
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('I am online')
});
app.listen(3000, () => {
  console.log('connected to server');
});
// server //

config = process.env;

client.on('ready', () => {
  console.log('Ready!')
});
client.login(config.token);
