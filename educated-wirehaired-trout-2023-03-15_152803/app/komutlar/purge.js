const Discord = require('discord.js');

module.exports = {
    name: 'purge',
    description: 'Belirtilen sayıda mesajı siler',
    execute(message, args) {
        // Kullanıcının "Mesajları Yönet" yetkisine sahip olup olmadığını kontrol edin
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.reply('Bu komutu kullanmak için gerekli izne sahip değilsin!');
        }

        // Silinecek mesaj sayısını alın
        const deleteCount = parseInt(args[0], 10);

        // Silinecek mesaj sayısı geçerli bir sayı değilse veya 2-100 aralığında değilse hata verin
        if (!deleteCount || deleteCount < 2 || deleteCount > 100) {
            return message.reply('Lütfen 2-100 aralığında bir sayı girin!');
        }

        // Mesajları toplamak için channel.messages metodunu kullanın
        message.channel.messages.fetch({ limit: deleteCount })
            .then(messages => {
                // bulkDelete fonksiyonunu çağırarak mesajları silin
                message.channel.bulkDelete(messages);
            })
            .catch(error => {
                console.error('Mesajları silerken hata oluştu:', error);
                message.reply('Mesajları silerken bir hata oluştu!');
            });
    },
};
