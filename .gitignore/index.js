const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("$")

bot.on('ready', function() {
    bot.user.setActivity("$help | V 1.1.2 | $rps supprimé suite à certains problèmes.");
    console.log("Je suis connecté !");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){ //Commande d'aide
        var embed = new Discord.RichEmbed()
            .setTitle(":black_small_square: **Page d'aide** :black_small_square:")
            .setDescription("Voici les différentes catégories de la page d'aide")
            .addField("__**Modération**__","~~$kick~~", true)
            .addField("__**Utilitaires**__","`$help` \n `$botinfos` \n ~~$userinfos~~", true)
            .addField("__**Fun**__","`$8ball` \n `$avatar` \n `$say` \n `$rps` En dev \n ~~$e7 daily~~ \n ~~$e7 roll~~ ", true)
            .addField("__**Epic Seven**__","`$personnages` \n `$site` \n `$tierlist` \n $catalyst Modif par imgs later \n ~~$artefacts~~", true)
            .setColor("RANDOM")
            .setFooter("Page d'aide générée suite à une demande de "+ message.author.username)
            .setThumbnail("https://static.smilegatemegaport.com/event/live/epic7/brand/assets/images/common/bi.png")
        message.channel.sendEmbed(embed);
        console.log("Page d'aide générée suite à la demande de " + message.author.username);
	
    }

    if (message.content === prefix +"e7"){
    message.channel.send("**Utilisation correcte** : $e7 <personnage> | Si tu ne connais pas les personnages disponible, utilise la commande $personnages.")
    
    }

    if (message.content === prefix + "personnages"){ //Commande relative aux personnages d'Epic Seven
        var embed = new Discord.RichEmbed()
            .setTitle(":black_small_square: **Personnages** :black_small_square:")
            .addField("**$e7 sez**","Fais apparaître la commande relative a Sez. | 5 :star: <:e7assassin:506111331473031188> <:elementeau:506109829455282176>", true)
            .addField("**$e7 iseria**","Commande relative a Iseria. En cours. | 5 :star: <:e7tireur:506111368135442435> <:elementbroccoli:506109743694086154>", true)
            .addField("**$e7 yuna**","Fais apparaître la commande relative a Yuna. | 5 :star: <:e7tireur:506111368135442435> <:elementeau:506109829455282176>", true)
            .addField("**$e7 tywin**","Commande relative a Tywin. En cours. | 5 :star <:e7chevalier:506111403489230868> <:elementeau:506109829455282176>", true)
            .addField("**$e7 karin**","Commande relative a Karin. En cours.", true)
            .addField("**$e7 ras**","Fais apparaître la commande relative a Ras. | 3 :star: <:e7chevalier:506111403489230868> <:elementfeu:506109794608742401>", true)
            .setColor("RANDOM")
            .setFooter("Page d'aide générée suite à une demande de "+ message.author.username + ". " + "Ajout des éléments, et des étoiles.")
            .setThumbnail("https://static.smilegatemegaport.com/event/live/epic7/brand/assets/images/common/bi.png")
	message.channel.sendEmbed(embed);
        console.log("Page de personnage générée suite à une demande de " + message.author.username);

    }

   if (message.content === prefix + "E7 faq"){
       var embed = new Discord.RichEmbed()
           .setTitle("Foire aux Questions [FAQ] __**Jeu**__")
           .addField("Qu'est-ce que la Readiness et l'Effectiveness ?","La Readiness, c'est la vitesse d'attaque que vous trouvez pendant vos combats à gauche (la barre avec les personnages). Plus vous en avez, plus votre personnage tapera souvent (sa vitesse de tour sera supérieure). L'effectiveness est une stat qui réduit la stat 'Effect Resistance' du personnage en face. (Par exemple, si Silk a 80% de chance de proc son débuff sur l'adversaire, et que l'adversaire a 40% d'effect resistance, si celle-ci a 20% d'effectiveness, l'effect resistance de l'adversaire va être diminué de 20%. Ce qui nous donnera donc 80 - 20%, Silk aura 60% de chance d'appliquer son débuff.)")
           .addField("Comment puis-je accéder au rerolling ?","La fonctionnalité de reroll est débloqué après avoir terminé le stage 1-10.")
           .addField("Comment marche le système de reroll ?","Après avoir terminé le stage 1-10, quand vous irez à la taverne, vous serez notifié d'une icone violette à droite de l'écran. Après avoir cliquer sur cette icone, vous pourrez vous initier au système de reroll. Le système est simple, vous avez 30 chances pour avoir 11 unités. Vous pouvez décliner un pull à tout moment mais une fois arrivé à la 30e chance, ça s'arrêtera avec ce que vous avez. Vous ne pouvez pas revenir en arrière donc si vous déclinez un pull, il sera perdu à tout jamais.")
           .addField("J'ai reroll plus de 50 fois, mais je n'ai toujours pas eu la fille trop canon avec la faux, que faire ?","C'est tout à fait normal, les unités de type Dark et Light sont réservés à l'end-game. Tant que vous n'avez pas terminé le stage 10-10, vous ne pourrez pas accéder au portail des Dark et Light.")
           .addField("Quelles sont les unités importantes à avoir pour bien commencer le jeu ?","Rendez-vous sur cette page : http://epic7guide.pcriot.com/unites-importantes/")
           .addField("Où est-ce que je peux trouver des Molagorago(s) [Rouge] ?","Il y a deux façons d'en obtenir. La première est d'aller dans le labyrinthe est de trouver *Huchi*. Il a un stock aléatoire chaque jour et la Molagorago n'est pas toujours disponible, néanmoins son prix est de 4 Molagora(s) pour 1 Molagorago. L'autre moyen est d'aller dans la ville du Chapitre 3-4, ensuite cherchez le marchand gobelin. Il demande 5 Molagora(s) pour 1 Molagorago.")
           .addField("Je viens juste d'apercevoir Huchi dans le labyrinthe, où est-il maintenant ?","Huchi apparaît au même endroit tous les jours. Il est également possible de lui rendre visite sans gaspiller de *Labyrinth Compass* en abandonnant, au lieu de prendre un *Clear Portal*. *Oui, vous gardez les objets achetés.*")
           .addBlankField()
           .addField("__**Communauté**__","Questions sur la partie communautaire.")
           .addField("Il y a t-il un site proposant des guides sur le jeu ?","Nous avons créé un site proposant divers guides traduit en français. Celui-ci sera souvent mis à jour. http://epic7guide.pcriot.com/")
           .addField("Qu'est-ce que les @Guide de Ritania ?","Les @Guide de Ritania sont chargés de vous aider, si vous avez besoin d'aide, n'hésitez pas à leur demander de l'aide grâce au ping du rôle dans le salon #astuces-questions. Tous abus du ping sera sanctionné.")
           .addField("Il y a t-il des bots disponibles dédié à Epic Seven ?","Oui, il y a actuellement 2 bots sur Epic Seven disponible sur le discord. Le premier est @Iseria Bot qui est mis à jour très souvent, sa seule commande pour le moment est *7character* <NAME>. L'autre est en français mais étant donné la masse de traduction à faire les mises à jour sont plus rares, pour en savoir plus effectuez la commande *$personnages* ou *$help*")
           .addField("J'ai un compte où je ne joue plus dessus / que j'abandonne, j'aimerais le donner/vendre, est-ce possible ?","Bien ce que ce discord ne soit pas officiel, nous sommes en respect des ToS de Epic Seven, par conséquent, les dons / ventes de compte sont totalement interdites, nous ne voulons rien voir concernant ceux-ci sur le discord.")
           .addField("Est-ce un discord officiel ?","Non, nous ne sommes en aucun cas affilié a Smilegate Megaport ou même a Super Creators. Nous sommes de simple fans essayant de faire vivre la communauté française du jeu. Pour toute demande officielle, merci de contactez le support du jeu.")
           .addField("Je cherche le lien de la tierlist / du guide des catalysts, où puis-je le trouver ?","Effectuez les commandes *$tierlist* &/ou *$catalysts*, cela vous procurera les liens !")
           .addBlankField()
           .addField("__**Divers**__","Questions diverses sur le jeu, sur la communauté, etc.")
           .addField("Est-il possible de jouer à Epic 7 sur émulateur ?","Oui, il est possible de jouer au jeu sur la plupart des émulateurs.")
           .addField("Je joue sur Nox, et j'ai des carrés blanc qui apparaissent, qu'est-ce que je dois faire ?","Il y a actuellement un problème avec tous les émulateurs avec le mode de graphique DirectX, pour régler ce problème vous devez faire tourner votre émulateur sur OpenGL (Cela risque toutefois d'être légèrement moins rapide). Ce bug peut rester même après avoir changé de mode graphique, dans ce cas-là, supprimez cette instance de votre émulateur, et re-créez en une !")
           .addField("Comment optimisez les FPS et la fluidité de son jeu sur __Android__","Aller dans vos paramètres > Tout en bas 'À propos' > Numéro de version (vous cliquez 7 fois pour activer le mode développeur) > Revenez dans vos paramètres > Options développeurs > Cocher la case 'Forcer MSAA 4x'")
           .setFooter("FAQ du Discord Epic Seven FR. Mise à jour le 09/12/18.")
        message.channel.sendEmbed(embed);

    }
	
        // Epic Seven Héros = Ras
    if (message.content === prefix + "e7 ras"){
        var embed = new Discord.RichEmbed()
            .setTitle("Ras Elclare :black_small_square: <:elementfeu:506109794608742401> :black_small_square: <:e7chevalier:506111403489230868> :black_small_square: Balance ")
            .setDescription("L'héritier de la Convention, qui a dormi dans le Sanctuaire pendant des centaines d'années après la création du septième monde. Un être créé par la déesse __Diche__ à partir de sa propre chair. __Ras__ a vécu dans 6 mondes, et il est par conséquent incapable de se rappeler de tous les détails des autres mondes. A plusieurs reprises, __Ras__ a combattu l'Archidémon __Anghraf__ et il se prépare de nouveau à la bataille sur le 7ème monde. Pour se préparer à cette bataille, il rassemble les héritiers et leurs gardiens, reconstruit le sanctuaire, et rassemble la force dispersée de la déesse en un unique endroit pour protéger le monde des attaques de l'Archidémon. C'est le devoir de __Ras__.")
            .setColor("RANDOM")
            .setFooter("Fiche de l'Héros Ras générée suite à une demande de " + message.author.username + ". " + "Fiche mise à jour le 24/11.")
            .setThumbnail("https://static.smilegatemegaport.com/event/live/epic7/world/brand/images/character/rass/rass_0000.png")
            .setImage("https://j.gifs.com/YvzDMp.gif")
            .addField(":speech_balloon: Citation :", "C'est mon devoir. De protéger la vie à la place de la Déesse !", false)
            .addField(":crossed_swords: Compétence 1: X-Slash", "Attaque l'ennemi avec une épée, les dégâts infligés augmentent par rapport à la santée maximale du lanceur.", false)
            .addField(":crossed_swords: Compétence 2: Command Strike", "Attaque l'ennemi à plusieurs reprises, et déclenche une attaque simultanée avec l'allié le plus fort.", false)
            .addField(":crossed_swords: Compétence 3: Sword of the Heir ", "Attaque tous les ennemis avec une tempête d'épée et récupère de la santée proportionnellement aux dégâts infligés. Les dégâts infligés augmentent proportionnellement à la santée maximale du lanceur.", false)
            .addField(":comet: Vidéo d'introduction du personnage", ":arrow_down:", true)
	message.channel.sendEmbed(embed).then(msg => {
        msg.react('❤')
        msg.react('💔');
	console.log("La commande du Héros Ras viens d'être effectuée.");

	})

    }

        // Epic Seven Héros = Yuna
    if (message.content === prefix + "e7 yuna"){
        var embed = new Discord.RichEmbed()
            .setTitle("Yuna Woo :black_small_square: <:elementeau:506109829455282176> :black_small_square: <:e7tireur:506111368135442435> :black_small_square: Lion ")
            .setDescription("Présidente du conseil des étudiants de Reingar. Toujours en bonne santé, et débordande de curiosité, __Yuna__ a gagné en popularité en dirigeant le conseil des étudiants en difficulté, et en faisant avancer les choses rapidement. Pourtant... Très peu de gens en dehors du conseil des étudiants savent qu'en réalité __Yuna__ préfère agir comme une étudiante, et est une fautrice de troubles occasionnel. Elle aime tout ce qui est métallique ou mécanique et fait de drôles d'expériences scientifiques. Mais elle n'aime pas les créatures à fourrure.")
            .setColor("RANDOM")
            .setFooter("Fiche de l'Héroïne Yuna générée suite à une demande de " + message.author.username + ". " + "Fiche mise à jour le 24/11.")
            .setThumbnail("https://static.smilegatemegaport.com/event/live/epic7/world/brand/images/character/yuna/yuna_0000.png")
            .setImage("https://nsa39.casimages.com/img/2018/11/07/181107071807674654.gif")
            .addField(":speech_balloon: Citation :", "Je vais tout réparer ! Si je ne casse pas tout d'abord !", false)
            .addField(":crossed_swords: Compétence 1: Homing Laser", "Attaque tous les ennemis avec un drone. L'état 'Préparation au combat' augmente de 6% par rapport aux nombres d'ennemis. A partir de 3 ennemis, moins il y en a, plus les dégâts infligés sont importants.", false)
            .addField(":crossed_swords: Compétence 2: Upgrade", "Augmente l'attaque de tous les alliés avec un drone pendant 2 tours.", false)
            .addField(":crossed_swords: Compétence 3: Meteor Cannon", "Attaque tous les ennemis avec un puissant canon géant infligeant d'énormes dégâts. A partir de 3 ennemis, moins il y en a, plus les dégâts infligés sont importants.", false)
            .addField(":comet: Vidéo d'introduction du personnage", ":arrow_down:", true)
	message.channel.sendEmbed(embed).then(msg => {
        msg.react('❤')
        msg.react('💔');
	console.log("La commande de l'Héroïne Yuna viens d'être effectuée.");

	})

    }

        // Epic Seven Héros = Iseria
    if (message.content === prefix + "e7 iseria"){
        var embed = new Discord.RichEmbed()
            .setTitle("Iseria Arisophodel :black_small_square: <:elementbroccoli:506109743694086154> :black_small_square: <:e7tireur:506111368135442435> :black_small_square: Lion ")
            .setDescription("Présidente du conseil des étudiants de Reingar. Toujours en bonne santé, et débordande de curiosité, __Yuna__ a gagné en popularité en dirigeant le conseil des étudiants en difficulté, et en faisant avancer les choses rapidement. Pourtant... Très peu de gens en dehors du conseil des étudiants savent qu'en réalité __Yuna__ préfère agir comme une étudiante, et est une fautrice de troubles occasionnel. Elle aime tout ce qui est métallique ou mécanique et fait de drôles d'expériences scientifiques. Mais elle n'aime pas les créatures à fourrure.")
            .setColor("RANDOM")
            .setFooter("Fiche de l'Héroïne Iseria générée suite à une demande de " + message.author.username + ". " + "Fiche mise à jour le 25/11.")
            .setThumbnail("https://static.smilegatemegaport.com/event/live/epic7/world/brand/images/character/yuna/yuna_0000.png")
            .setImage("https://nsa39.casimages.com/img/2018/11/07/181107071807674654.gif")
            .addField(":speech_balloon: Citation :", "Je vais tout réparer ! Si je ne casse pas tout d'abord !", false)
            .addField(":crossed_swords: Compétence 1: Homing Laser", "Attaque tous les ennemis avec un drone. L'état 'Préparation au combat' augmente de 6% par rapport aux nombres d'ennemis. A partir de 3 ennemis, moins il y en a, plus les dégâts infligés sont importants.", false)
            .addField(":crossed_swords: Compétence 2: Upgrade", "Augmente l'attaque de tous les alliés avec un drone pendant 2 tours.", false)
            .addField(":crossed_swords: Compétence 3: Meteor Cannon", "Inflige des dégâts mortels à l'ennemi. Moins la cible a de santé, plus les dégâts infligés sont importants. Si l'ennemi est défait, les dégâts relatifs à l'attaque du lanceur sont infligés à tous les ennemis.", false)
            .addField(":comet: Vidéo d'introduction du personnage", ":arrow_down:", true)
	message.channel.sendEmbed(embed).then(msg => {
        msg.react('❤')
        msg.react('💔');
	console.log("La commande de l'Héroïne Iseria viens d'être effectuée.");

	})

    }

        // Epic Seven Héros = Sez
    if (message.content === prefix + "e7 sez"){
        var embed = new Discord.RichEmbed()
            .setTitle("Sez Gaien :black_small_square: <:elementeau:506109829455282176> :black_small_square: <:e7assassin:506111331473031188> :black_small_square: Vierge ")
            .setDescription("Tueur en série en attente d'être exécuté, __Sez__ a été enrôlé dans l'Unité d'Extermination Inconnue en raison des pouvoirs obscurs qui lui avaient été donnés par le Roi Démon Il est calme et confiant, avec une tendance au cynisme. Prêt à tuer quiconque ou quoi que ce soit qu'il considère comme une menace, __Sez__ est une arme vivante. C'est ce trait de sa personnalité qui lui a valu le surnom de 'Berserker' lors de sa fuite. Il est habituellement calme, préférant être seul. Et bien qu'il soit méprisant envers ceux qui ne le connaissent pas bien, il écoute toujours leurs opinions.")
            .setColor("RANDOM")
            .setFooter("Fiche de l'Héros Sez générée suite à une demande de " + message.author.username + ". " + "Fiche mise à jour le 24/11.")
            .setThumbnail("https://static.smilegatemegaport.com/event/live/epic7/world/brand/images/character/sez/sez_0000.png")
            .setImage("https://j.gifs.com/kZGmrv.gif")
            .addField(":speech_balloon: Citation :", "Je vais te traîner dans l'abysse.", false)
            .addField(":crossed_swords: Compétence 1: Dark Shadow", "Pénètre l'ennemi avec une énergie sombre. 50% de chances de rendre l'ennemi impossible a heal pendant 1 tour. Moins la cible a de santé, plus les dégâts infligés sont importants.", false)
            .addField(":crossed_swords: Compétence 2: Encroach", "Si la santé d'un ennemi est inférieure à 50% après avoir été attaqué avec 'Dark Shadow', le lanceur effectue une seconde attaque qui frappe tous les ennemis. L'attaque supplémentaire a 50% de chances de rendre les cibles impossible a heal pendant 1 tour. Cet effet ne peut être activé qu'une seule fois au tour du lanceur.", false)
            .addField(":crossed_swords: Compétence 3: Death Sentence", "Inflige des dégâts mortels à l'ennemi. Moins la cible a de santé, plus les dégâts infligés sont importants. Si l'ennemi est défait, les dégâts relatifs à l'attaque du lanceur sont infligés à tous les ennemis.", false)
            .addField(":comet: Vidéo d'introduction du personnage", ":arrow_down:", true)
	message.channel.sendEmbed(embed).then(msg => {
        msg.react('❤')
        msg.react('💔');
	console.log("La commande de l'Héros Sez viens d'être effectuée.");

	})	    

    }

        // Epic Seven Héros = Tywin
    if (message.content === prefix + "e7 tywin"){
        var embed = new Discord.RichEmbed()
            .setTitle("Tywin Herad :black_small_square: <:elementeau:506109829455282176> :black_small_square: <:e7chevalier:506111403489230868> :black_small_square: Bélier ")
            .setDescription("En traduction.")
            .setColor("RANDOM")
            .setFooter("Fiche de l'Héros Tywin générée suite à une demande de " + message.author.username + ". " + "Fiche mise à jour le 25/11.")
            .setThumbnail("https://static.smilegatemegaport.com/event/live/epic7/world/brand/images/character/taiwin/taiwin_0000.png")
            .setImage("https://j.gifs.com/kZGmrv.gif")
            .addField(":speech_balloon: Citation :", "Je te suivrai de tout mon coeur.", false)
            .addField(":crossed_swords: Compétence 1: Sword Storm", "En traduction.", false)
            .addField(":crossed_swords: Compétence 2: Commanding Shout", "En traduction.", false)
            .addField(":crossed_swords: Compétence 3: Full-Scale Attack", "En traduction.", false)
            .addField(":comet: Vidéo d'introduction du personnage", ":arrow_down:", true)
	message.channel.sendEmbed(embed).then(msg => {
        msg.react('❤')
        msg.react('💔');
	console.log("La commande de l'Héros Tywin viens d'être effectuée.");

	})	    

    }

        // Epic Seven Héros = Karin
    if (message.content === prefix + "e7 karin"){
        var embed = new Discord.RichEmbed()
            .setTitle("Karin Fantaria :black_small_square: <:elementeau:506109829455282176> :black_small_square: <:e7assassin:506111331473031188> :black_small_square: Lion ")
            .setDescription("En traduction.")
            .setColor("RANDOM")
            .setFooter("Fiche de l'Héroïne Karin générée suite à une demande de " + message.author.username + ". " + "Fiche mise à jour le 25/11.")
            .setThumbnail("https://static.smilegatemegaport.com/event/live/epic7/world/brand/images/character/karin/karin_0000.png")
            .setImage("https://j.gifs.com/kZGmrv.gif")
            .addField(":speech_balloon: Citation :", "Sa Citation n'a pas été dévoilée.", false)
            .addField(":crossed_swords: Compétence 1: Sequential Cutter", "En traduction.", false)
            .addField(":crossed_swords: Compétence 2: Blade Art: Flash", "En traduction.", false)
            .addField(":crossed_swords: Compétence 3: Blade Art: Thunder", "En traduction.", false)
            .addField(":comet: Vidéo d'introduction du personnage", ":arrow_down:", true)
	message.channel.sendEmbed(embed).then(msg => {
        msg.react('❤')
        msg.react('💔');
	console.log("La commande de l'Héroïne Karin viens d'être effectuée.");

	})	    

    }
	
	// Commande d'avatar
    if (message.content.startsWith (prefix + "avatar")){
       let user = message.mentions.users.first() || message.author;
           var embed = new Discord.RichEmbed()
               .setColor("RANDOM")
               .setTitle("Avatar de " + user.username)
               .setImage(user.displayAvatarURL)
	message.channel.sendEmbed(embed).then(msg => {
        msg.react('❤')
        msg.react('💔');
	 
	})
   
    }
	
        // Commande de say
    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();
	
    if (command === 'say') {

      let say = args.join(' ');
      message.delete();
      message.channel.send(say);    
      console.log("La commande Say viens d'être effectué par " + message.author.username)

    }

    if (message.content === prefix + "tierlist"){ // Tier List
       message.channel.send("Lien de la tierlist : <https://docs.google.com/spreadsheets/d/1lkxK70iBsRzIq3Cw0x7UO15-Y9uR--KAKe4UKUM95iY/htmlview?usp=sharing&sle=true>")

    }


    if (message.content === prefix + "site"){ //Site Epic 7 guide
       message.channel.send("Lien du site : <http://epic7guide.pcriot.com>")
    }

    if (message.content === prefix + "catalyst"){ //Guide Catalyst
       message.channel.send("Lien du guide des catalysts : <https://docs.google.com/spreadsheets/d/1UMIduFBIVc9OAoI-BeQ-LjPeihcziqXEzXw8n58bEd0/htmlview?usp=sharing&sle=true>")
    }

    if (message.content === prefix + "botinfos"){ //Commande d'infos sur le bot
        let boticon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
            .setDescription("Informations du bot")
            .setColor("RANDOM")
            .setThumbnail(boticon)
            .addField("Nom du bot", bot.user.username)
            .addField("Bot créé le :", bot.user.createdAt)
            .addField("Nombre de serveurs :", bot.guilds.size)
	    .addField("Bot créé par : ","@Vanitas#7248", true)

    message.channel.send(botembed)
	    
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
            return message.channel.send("Utilisation correcte : $8ball <question> " )};

            var replys = [
                "Oui.",
                "Non.",
                "Peut-être.",
                "Je ne sais pas...",
                "Sûrement...",
                "Bien sûr.",
		"Bien entendu.",
		"Es-tu fou ?!",
                "Absolument pas !!",
                "Sérieusement... t'es qui en fait ?!",
                "..Je n'ai même pas envie de te répondre !",
                "Dois-je te dire la vérité ?",
                "Tu sais quoi ? Ferme-la !",
                "Je suis fatigué de te répondre...",
                "Tu es si magnifique... Tu m'éblouis !",
                
            ];

            let reponse = (replys[Math.floor(Math.random() * replys.length)])
            var bembed = new Discord.RichEmbed()
            .setDescription(":8ball: 8ball :8ball:")
            .addField(message.author.username + " :", tte)
            .addField("Epic Bot :", reponse)
            .setThumbnail(message.author.avatarURL)
            .setTimestamp()
	    .setFooter("Demandé par " + message.author.username, "https://cdn.discordapp.com/attachments/432232468465188874/506281367286448129/Screenshot_10.png")
            

        message.channel.sendEmbed(bembed)
        console.log("La commande 8ball viens d'être effectuée avec succès par " + message.author.username);

    }})
