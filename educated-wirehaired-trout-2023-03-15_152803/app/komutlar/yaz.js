const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  // Botun yazması gereken kanalı alın
  const channel = message.guild.channels.cache.get("KANAL_ID");

  // Eğer kanal bulunamazsa hata verin
  if (!channel) return console.error("Belirtilen kanal bulunamadı");

  // Botun yazması gereken mesajı alın
  const msg = args.join(" ");

  // Eğer mesaj girilmediyse hata verin
  if (!msg) return message.reply("Lütfen bir mesaj girin!");

  // Mesajı belirtilen kanala yazdırın
  channel.send(msg);
};

exports.conf = {
  aliases: [],
  permLevel: 0,
  kategori: "Genel"
};

exports.help = {
  name: "yaz",
  description: "Belirtilen kanala belirtilen mesajı yazdırır.",
  usage: "yaz [mesaj]"
};
