const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("*help | V 1.1 | Commande *avatar en patch");
    console.log("Je suis connecté !");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){ //Commande d'aide
        var embed = new Discord.RichEmbed()
            .setTitle(":black_small_square: **Page d'aide** :black_small_square:")
            .setDescription("Voici les différentes catégories de la page d'aide")
            .addField("__**Modération**__","~~*kick~~", true)
            .addField("__**Utilitaires**__","`*help` `*infosbot`", true)
            .addField("__**Fun**__","`*8ball` `*avatar` `*say`", true)
            .addField("__**Jeux**__","~~*help kc~~", true)
            .setColor("RANDOM")
            .setFooter("Page d'aide générée suite à une demande de"+" "+ message.author.username)
            .setThumbnail("https://image.prntscr.com/image/7_rvKMCDSQqIGx4GJo0s5Q.png")
        message.channel.sendEmbed(embed);
	    
    }
	
	//Knights Chronicle Héros = Ruby.
    if (message.content === prefix + "ruby"){
        var embed = new Discord.RichEmbed()
	    .setTitle(":black_small_square: Combattante téméraire - Ruby :black_small_square: SSR :black_small_square: Attaquante Vent :black_small_square: Vitesse de  base 599 :black_small_square: Unité Gacha :black_small_square: CV. Hiyori Kono")
	    .setDescription("Fille au sang chaud élevée par son père, le gérant d'un dojo dans une petite ville du Grand duché de Delcart. L'irritation que suscite chez elle l'injustice l'a poussée à se proclamer «médiatrice citoyenne». C'est vraiment super... mais attendez-vous tout de même à ce que ce soient ses poings plus que ses paroles qui règlent les différends ! Son père doit souvent rembourser les dégâts qu'elle cause, mais le fringant maître de dojo préfère tout prendre avec le sourire.")
	    .addField(":speech_balloon: **Compétence de chef: Nous sommes les meilleurs !**","Augmente de 60% l'ATQ des alliés de vent si le groupe est constitué de 5 héros de vent.", true)
            .addField(":thought_balloon: **Passif: C'est parti !**","80% de chances de supprimer les renforcements d'attaque et de défense au début du tour.", true)
	    .addField(":cyclone: **Passif Héroïque: C'est parti !**","50% de chances de réduire tous les temps de recharge des compétences de 1 tour en cas d'attaque. Rétablit 20% des PV lorsque le temps de recharge est réduit.", true)
	    .addField(":crossed_swords: **Compétence 1: Coup de pied rapide !**","Inflige des dégâts équivalents à 100% de l'ATQ à 1 cible. 40% de chances de réduire le temps de recharge de la compétence n°2 de 1 tour.", true)
	    .addField(":crossed_swords: **Compétence 2: Coup de pied rotatif !** :hourglass: **3 tours**","Inflige des dégâts équivalents à 200% de l'ATQ à 1 cible. 65% de chances de réduire le temps de recharge de la compétence n°3 de 1 tour.", true)
	    .addField(":crossed_swords: **Compétence 3: Coup de pied volant !** :hourglass: **5 tours**","Inflige des dégâts équivalents à 300% de l'ATQ à 1 cible.", true)
            .addField(":comet: **Visuel de l'animation de la compétence 3 :**",":arrow_down:", true)
            .setImage("https://images-ext-2.discordapp.net/external/nNTMTK1VA8FW7d1xBGTuKI_c9SLRkfSdvYEX7vYl6pQ/http/image.mobirum.com/GAME/knightschronicle_en/2018/06/28/1530154512052.gif")
            .setColor("RANDOM")
	    .setFooter("Toutes les compétences sont basées sur le Niv.1. Les skills Niv.2 à 6 arriveront ultérieurement. Le Héros est 6*." + " " + "Page de l'Héroïne Ruby générée suite à une demande de"+" "+ message.author.username + "." + " " + "Fiche mise à jour le 28/10")
	    .setThumbnail("https://cdn.discordapp.com/attachments/432232468465188874/505159626459840512/H6rbMsZcmISiAAAAAElFTkSuQmCC.png")
	message.channel.sendEmbed(embed);
	    
    }
	
        // Epic Seven Héros = Ras
    if (message.content === prefix + "e7 ras"){
        var embed = new Discord.RichEmbed()
            .setTitle("Ras Elclare :black_small_square: Feu :black_small_square: Chevalier :black_small_square: Balance ")
            .setDescription("L'héritier de la Convention, qui a dormi dans le Sanctuaire pendant des centaines d'années après la création du septième monde. Un être créé par la déesse __Diche__ à partir de sa propre chair. __Ras__ a vécu dans 6 mondes, et il est par conséquent incapable de se rappeler de tous les détails des autres mondes. A plusieurs reprises, __Ras__ a combattu l'Archidémon __Anghraf__ et il se prépare de nouveau à la bataille sur le 7ème monde. Pour se préparer à cette bataille, il rassemble les héritiers et leurs gardiens, reconstruit le sanctuaire, et rassemble la force dispersée de la déesse en un unique endroit pour protéger le monde des attaques de l'Archidémon. C'est le devoir de Ras.")
            .setColor("RANDOM")
            .setFooter("Fiche de l'Héros Ras générée suite à une demande de"+" "+ message.author.username + "." + " " + "Fiche mise à jour le 28/10.")
            .setThumbnail("https://static.smilegatemegaport.com/event/live/epic7/world/brand/images/character/rass/rass_0000.png")
            .setImage("https://j.gifs.com/YvzDMp.gif")
            .addField(":speech_balloon: Citation :", "C'est mon devoir. De protéger la vie à la place de la Déesse !", false)
            .addField(":crossed_swords: Compétence 1: X-Slash", "Attaque l'ennemi avec une épée, les dégâts infligés augmentent par rapport à la santée maximale du lanceur.", false)
            .addField(":crossed_swords: Compétence 2: Command Strike", "Attaque l'ennemi à plusieurs reprises, et déclenche une attaque simultanée avec l'allié le plus fort.", false)
            .addField(":crossed_swords: Compétence 3: Sword of the Heir ", "Attaque tous les ennemis avec une tempête d'épée et récupère de la santée proportionnellement aux dégâts infligés. Les dégâts infligés augmentent proportionnellement à la santée maximale du lanceur.", false)
            .addField(":comet: Vidéo d'introduction du personnage", ":arrow_down:", true)
	message.channel.sendEmbed(embed);
	console.log("La commande du Héros Ras viens d'être effectuée.");
	    
    }
	
	// Commande d'avatar (A patch, mention bugué)
    if (message.content === prefix + "avatar"){
       let user = message.mentions.users.first() || message.author;
           var embed = new Discord.RichEmbed()
               .setColor("RANDOM")
               .setTitle("Avatar de :" + " " + user.username)
               .setImage(user.displayAvatarURL)
      message.channel.sendEmbed(embed);
	    
    }
	
        // Commande de say
    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();
	
    if (command === 'say') {
	
      let say = args.join(' ');
      message.delete();
      message.channel.send(say);    

    }

    if (message.content === prefix + "infosbot"){
        let boticon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
            .setDescription("Informations du bot")
            .setColor("RANDOM")
            .setThumbnail(boticon)
            .addField("Nom du bot", bot.user.username)
            .addField("Bot créé le :", bot.user.createdAt)
            .addField("Nombre de serveurs :", bot.guilds.size)

    message.channel.send(botembed)
	    
    }
	
        // Commande tout à fait inutile.
    if (message.content === "Salut"){
        message.reply("Bonjour à toi ! =)");
        console.log("La commande Salut à été effectuée.");  
    }
    
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "8ball":
        let args = message.content.split(" ").slice(1);
        let tte = args.join(" ")
        if (!tte){
            return message.reply("Pose moi une question ! :8ball:")};

            var replys = [
                "Oui"+" " + message.author.username,
                "Non"+" " + message.author.username,
                "Peut-être"+" " + message.author.username,
                "Je ne sais pas"+" " + message.author.username + "!",
                "Sûrement"+" " + message.author.username + "...",
                "Bien sûr"+" " + message.author.username + "!",
		"Bien entendu"+" " + message.author.username,
		"Es-tu fou"+" " + message.author.username + "?!",
                "Absolument pas"+" " + message.author.username + "!",
            ];

            let reponse = (replys[Math.floor(Math.random() * replys.length)])
            var bembed = new Discord.RichEmbed()
            .setDescription(":8ball: 8ball")
            .addField("Question :", tte)
            .addField("Réponse :", reponse)
            .setThumbnail(message.author.avatarURL)
	    .setFooter("Demandé par "+" "+ message.author.username)
            


        message.channel.sendEmbed(bembed)

}})
