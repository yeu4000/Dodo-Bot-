const Discord = require("discord.js");
const figlet = require("figlet");

module.exports = {
  name: "ascii",
  description: "Girilen metni ASCII sanatına dönüştürür",
  async execute(message, args) {
    if (!args[0]) {
      return message.channel.send("Lütfen dönüştürülecek bir metin girin.");
    }

    const text = args.join(" ");

    figlet(text, function (err, data) {
      if (err) {
        console.log("Bir hata oluştu: ", err);
        return message.reply("Metin dönüştürülürken bir hata oluştu.");
      }

      message.channel.send("```" + data + "```");
    });
  },
};
