const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json');

client.on("ready",() => {
  console.log('I\'m Online\nI\'m Online');
});

var prefix = "camp!"
var chat = "fr!"
client.on('message', message => {
  if (!message.content.startsWith(prefix) && !message.content.startsWith(chat)) return;
  console.log('Message received!');
  if (message.author === client.user) return;
  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage('pong');
  } else

  //messages asking for clem's campster lines
  if (message.content.startsWith(chat + 'clem')) {
    var clemline = Math.floor(Math.random() * 4); // returns a number
    message.channel.sendMessage(clemline);
    message.channel.sendMessage('Clem Foote said:');
    if (clemline === 0) {
      message.channel.sendMessage("Speck of dust?\nOn 6/17/2003");
    } else

    if (clemline === 1) {
      message.channel.sendMessage("From a mile away!\nOn 6/17/2003");
    } else

    if (clemline === 2) {
      message.channel.sendMessage("Ants suck! J.T. Rocks!\nOn 6/17/2003");
    } else

    if (clemline === 3) {
      message.channel.sendMessage("Yeah, it will be awesome!!!!!!!!\
      If we get enough cheers together, maybe someone will start a sports\
      team for us to cheer on.\nOn 6/9/2003");
    }
  } else

  if (message.content.startsWith(prefix + 'foo')) {
    message.channel.sendMessage('bar');
  }
});

client.login(settings.token);
