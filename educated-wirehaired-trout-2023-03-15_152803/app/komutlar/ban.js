const Discord = require('discord.js');

module.exports = {
  name: 'ban',
  description: 'Belirtilen kullanıcıyı sunucudan yasaklar',
  execute(message, args) {
    // Kullanıcının "Üyeleri Yasakla" yetkisine sahip olup olmadığını kontrol edin
    if (!message.member.hasPermission('BAN_MEMBERS')) {
      return message.reply('Bu komutu kullanmak için gerekli izne sahip değilsin!');
    }
    
    // Yasaklanacak kullanıcının etiketini alın
    const member = message.mentions.members.first();

    // Eğer bir kullanıcı etiketi yoksa hata verin
    if (!member) {
      return message.reply('Lütfen yasaklamak istediğiniz kullanıcıyı etiketleyin!');
    }

    // Yasaklama nedenini belirleyin
    const reason = args.slice(1).join(' ') || 'Neden belirtilmedi';

    // Kullanıcının yasaklanıp yasaklanmadığını kontrol edin
    if (member.bannable) {
      member.ban({ reason: reason })
        .then(() => {
          message.channel.send(`${member.user.tag} başarıyla yasaklandı. Sebep: ${reason}`);
        })
        .catch(error => {
          console.error('Kullanıcı yasaklanırken bir hata oluştu:', error);
          message.reply('Kullanıcı yasaklanırken bir hata oluştu!');
        });
    } else {
      message.reply('Bu kullanıcı yasaklanamaz!');
    }
  },
};
