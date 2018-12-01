const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("$")

bot.on('ready', function() {
    bot.user.setActivity("$help | V 1.1.2 | Multiples corrections / ajouts");
    console.log("Je suis connecté !");
})

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){ //Commande d'aide
        var embed = new Discord.RichEmbed()
            .setTitle(":black_small_square: **Page d'aide** :black_small_square:")
            .setDescription("Voici les différentes catégories de la page d'aide")
            .addField("__**Modération**__","~~$kick~~", true)
            .addField("__**Utilitaires**__","`$help` \n `$botinfos` \n ~~$userinfos~~", true)
            .addField("__**Fun**__","`$8ball` \n `$avatar` \n `$say`", true)
            .addField("__**Epic Seven**__","`$personnages` \n `$site` \n `$tierlist`", true)
            .setColor("RANDOM")
            .setFooter("Page d'aide générée suite à une demande de "+ message.author.username)
            .setThumbnail("https://static.smilegatemegaport.com/event/live/epic7/brand/assets/images/common/bi.png")
        message.channel.sendEmbed(embed);
        console.log("Page d'aide générée suite à la demande de " + message.author.username);

    }
