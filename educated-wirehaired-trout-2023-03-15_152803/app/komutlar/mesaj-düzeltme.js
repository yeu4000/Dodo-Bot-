const Discord = require('discord.js');

module.exports = {
  name: 'titlecase',
  description: 'Bir kelimenin ilk harfini büyük yapar ve diğer harfleri küçültür',
  execute(message, args) {
    // Eğer argüman yoksa hata mesajı gönderin
    if (!args[0]) {
      return message.reply('Lütfen bir kelime girin!');
    }

    // İlk harfi büyük yapmak için kelimenin ilk karakterini büyük harf yapın ve geri kalanını küçük harf yapın
    const titleCaseWord = args[0].charAt(0).toUpperCase() + args[0].slice(1).toLowerCase();

    // Sonucu gönderin
    return message.channel.send(`${titleCaseWord}`);
  },
};
