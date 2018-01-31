const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json');

client.on("ready",() => {
  console.log('I\'m Online\nI\'m Online');
});

var prefix = "camp!"
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  console.log('Message received!');
  if (message.author === client.user) return;
  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage('pong');
  } else

  if (message.content.startsWith(prefix + 'foo')) {
    message.channel.sendMessage('bar');
  }
});

client.login(settings.token);
