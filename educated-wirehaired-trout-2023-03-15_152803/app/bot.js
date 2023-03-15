const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '!';

bot.on("ready", () => {
  console.log('Bot online!');
});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;

  const args = message.content.slice(PREFIX.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    message.channel.send('Pong!');
  } else if (command === 'coinflip') {
    const random = Math.floor(Math.random() * 3);
    if (random === 1) {
      message.channel.send('Yazı!');
    } else if (random === 2) {
      message.channel.send('Tura!');
    } else {
      message.channel.send('Atış başarısız oldu.');
    }
  }
});

bot.login('MTA4NTU2Mjc5Nzk4MDY2Mzg2OQ.GU53DT.Tc3V5OPGdXC4Ta2KlAd6d4DpMSDrZ8x_U_oX1I');
