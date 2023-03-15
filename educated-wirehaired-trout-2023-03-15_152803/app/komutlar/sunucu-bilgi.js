const Discord = require('discord.js');

module.exports = {
  name: 'sunucu-bilgi',
  description: 'Sunucu hakkında bilgi verir',
  execute(message, args) {
    const guild = message.guild;
    const memberCount = guild.memberCount;
    const createdAt = guild.createdAt.toLocaleDateString();

    const embed = new Discord.MessageEmbed()
      .setTitle(`${guild.name} Sunucusu`)
      .setThumbnail(guild.iconURL())
      .addField('Üye Sayısı', memberCount, true)
      .addField('Oluşturulma Tarihi', createdAt, true)
      .setColor('RANDOM')
      .setTimestamp();

    message.channel.send(embed);
  },
};
