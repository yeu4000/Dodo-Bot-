const Discord = require('discord.js');

module.exports = {
  name: 'kick',
  description: 'Belirtilen kullanıcıyı sunucudan atar',
  execute(message, args) {
    // Kick işlemini gerçekleştirebilmek için "Üyeleri At" yetkisine sahip olmak gerekiyor
    if (!message.member.hasPermission('KICK_MEMBERS')) {
      return message.reply('Bu komutu kullanmak için gerekli izne sahip değilsin!');
    }

    // Kullanıcının belirtilip belirtilmediğini kontrol edin
    if (!message.mentions.users.size) {
      return message.reply('Lütfen atmak istediğiniz kullanıcıyı etiketleyin!');
    }

    // Kullanıcıyı sunucudan atın
    const taggedUser = message.mentions.users.first();
    message.guild.member(taggedUser).kick()
      .then(() => {
        message.channel.send(`${taggedUser.tag} başarıyla sunucudan atıldı!`);
      })
      .catch(error => {
        console.error('Bir kullanıcı atılırken hata oluştu:', error);
        message.reply('Kullanıcı atılırken bir hata oluştu!');
      });
  },
};
