const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'emojiler',
  description: 'Sunucudaki tüm emojileri listeler',
  execute(message) {
    const emojis = message.guild.emojis.cache;
    const embed = new MessageEmbed()
      .setTitle(`Sunucuda ${emojis.size} emoji var`)
      .setColor('RANDOM');

    if (emojis.size < 1) {
      embed.setDescription('Sunucuda emoji yok');
      return message.channel.send(embed);
    }

    embed.setDescription(emojis.map((emoji) => emoji.toString()).join(' '));
    message.channel.send(embed);
  },
};
