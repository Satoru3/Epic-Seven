const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("$")

bot.on('ready', function() {
    bot.user.setActivity("$help | V 1.3.5 | $e7 daily (en dev)");
    console.log("Je suis connecté !");

});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){ //Commande d'aide
        var embed = new Discord.RichEmbed()
            .setTitle(":black_small_square: **Page d'aide** :black_small_square:")
            .setDescription("Voici les différentes catégories de la page d'aide")
            .addField("__**Modération**__","`$kick` \n ~~$mute~~ \n `$ban` \n `$purge`", true)
            .addField("__**Utilitaires**__","`$help` \n `$botinfos` \n ~~$userinfos~~", true)
            .addField("__**Fun**__","`$26ball` \n `$avatar` \n `$say` \n `$quizz` [**New**] \n ~~$e7 daily~~ \n ~~$e7 roll~~ ", true)
            .addField("__**Epic Seven**__","`$personnages` \n `$site` \n `$tierlist` \n `$catalyst` \n `$artefacts` \n `$camp` \n `$calc` \n `$mapraid`", true)
            .setColor("RANDOM")
            .setFooter(`Page d'aide générée suite à une demande de ${message.author.tag}`)
            .setThumbnail("https://static.smilegatemegaport.com/event/live/epic7/brand/assets/images/common/bi.png")
        message.channel.sendEmbed(embed);
        console.log("Page d'aide générée suite à la demande de " + message.author.username);
	
    }

    if (message.content === prefix + "personnages"){ //Commande relative aux personnages d'Epic Seven
        var embed = new Discord.RichEmbed()
            .setTitle(":black_small_square: **Personnages** :black_small_square:")
            .addField("**$sez**","5 <:etoile:580331911608664084> <:e7assassin:506111331473031188> <:elementeau:506109829455282176>", true)
            .addField("**$iseria**","5 <:etoile:580331911608664084> <:e7tireur:506111368135442435> <:elementbroccoli:506109743694086154>", true)
            .addField("**$yuna**","5 <:etoile:580331911608664084> <:e7tireur:506111368135442435> <:elementeau:506109829455282176>", true)
            .addField("**$tywin**","5 <:etoile:580331911608664084> <:e7chevalier:506111403489230868> <:elementeau:506109829455282176>", true)
            .addField("**$karin**","En cours. 4 <:etoile:580331911608664084> <:e7assassin:506111331473031188> <:elementeau:506109829455282176>", true)
            .addField("**$ras**","3 <:etoile:580331911608664084> <:e7chevalier:506111403489230868> <:elementfeu:506109794608742401>", true)
            .setColor("RANDOM")
            .setFooter("Page d'aide générée suite à une demande de "+ message.author.username)
            .setThumbnail("https://static.smilegatemegaport.com/event/live/epic7/brand/assets/images/common/bi.png")
	message.channel.sendEmbed(embed);
        console.log("Page de personnage générée suite à une demande de " + message.author.username);

    }
	
        if (message.content === prefix + "artefacts"){ //Commande relative aux artefacts d'Epic Seven
        var embed = new Discord.RichEmbed()
            .setTitle(":black_small_square: **Artefacts** :black_small_square:")
            .addField("**$sigurd**","Sigurd Scythe 5 <:etoile:580331911608664084> <:e7combattant:506111308635308032>", true)
            .addField("**$durandal**","Durandal 5 <:etoile:580331911608664084> <:e7combattant:506111308635308032>", true)
            .addField("**$uberius**","Uberius's Tooth 5 <:etoile:580331911608664084> <:e7combattant:506111308635308032>", true)
            .addField("**$border**","Border Coin 5 <:etoile:580331911608664084> <:e7combattant:506111308635308032>", true)
            .addField("**$junkyard**","Junkyard Dog 5 <:etoile:580331911608664084> <:e7combattant:506111308635308032> <:arkyriche:528289398521987102>", true)
	    .addField("**$holy**","Holy Sacrifice 5 <:etoile:580331911608664084> <:e7chevalier:506111403489230868>", true)
            .addField("**$elbris**","Elbris Ritual Sword 5 <:etoile:580331911608664084> <:e7chevalier:506111403489230868>", true)
	    .addField("**$noble**","Noble Oath 5 <:etoile:580331911608664084> <:e7chevalier:506111403489230868>", true)
	    .addField("<:arkyriche:528289398521987102>","Artéfact limité, disponible pendant une certaine période.", true)
            .setColor("RANDOM")
            .setFooter("Page d'Artefacts 1/1 " + "Actualisé le 16/05/19")
            .setThumbnail("https://static.smilegatemegaport.com/event/live/epic7/brand/assets/images/common/bi.png")
	message.channel.sendEmbed(embed);
        console.log("Page de personnage générée suite à une demande de " + message.author.username);
		
    }

   if (message.content === prefix + "E7 faq"){
       var embed = new Discord.RichEmbed()
           .setTitle("Foire aux Questions [FAQ] Partie 1")
           .addField("__**Jeu**__","Questions concernant le jeu en lui-même.")
           .addField("Qu'est-ce que la Readiness et l'Effectiveness ?","La Readiness, c'est la vitesse d'attaque que vous trouvez pendant vos combats à gauche (la barre avec les personnages). Plus vous en avez, plus votre personnage tapera souvent (sa vitesse de tour sera supérieure). L'effectiveness est une stat qui réduit la stat 'Effect Resistance' du personnage en face. (Par exemple, si Silk a 80% de chance de proc son débuff sur l'adversaire, et que l'adversaire a 40% d'effect resistance, si celle-ci a 20% d'effectiveness, l'effect resistance de l'adversaire va être diminué de 20%. Ce qui nous donnera donc 80 - 20%, Silk aura 60% de chance d'appliquer son débuff.)")
           .addField("Comment puis-je accéder au rerolling ?","La fonctionnalité de reroll est débloqué après avoir terminé le stage 1-10.")
           .addField("Comment marche le système de reroll ?","Après avoir terminé le stage 1-10, quand vous irez à la taverne, vous serez notifié d'une icone violette à droite de l'écran. Après avoir cliquer sur cette icone, vous pourrez vous initier au système de reroll. Le système est simple, vous avez 30 chances pour avoir 11 unités. Vous pouvez décliner un pull à tout moment mais une fois arrivé à la 30e chance, ça s'arrêtera avec ce que vous avez. Vous ne pouvez pas revenir en arrière donc si vous déclinez un pull, il sera perdu à tout jamais.")
           .addField("J'ai reroll plus de 50 fois, mais je n'ai toujours pas eu la fille trop canon avec la faux, que faire ?","C'est tout à fait normal, les unités de type Dark et Light sont réservés à l'end-game. Tant que vous n'avez pas terminé le stage 10-10, vous ne pourrez pas accéder au portail des Dark et Light.")
           .addField("Quelles sont les unités importantes à avoir pour bien commencer le jeu ?","Rendez-vous sur cette page : http://epic7guide.pcriot.com/unites-importantes/")
           .addField("Où est-ce que je peux trouver des Molagorago(s) [Rouge] ?","Depuis une mise à jour, cette molagora est unique disponible au Shop contre 4 Molagoras normales.")
           .addField("Je viens juste d'apercevoir Huchi dans le labyrinthe, où est-il maintenant ?","Huchi apparaît au même endroit tous les jours. Il est également possible de lui rendre visite sans gaspiller de *Labyrinth Compass* en abandonnant, au lieu de prendre un *Clear Portal*. *Oui, vous gardez les objets achetés.*")
           .addField("Qu'est-ce que l'option 'Purify' dans l'Abyss ?","C'est une fonction qui utilise une de vos tentatives quotidiennes contre les récompenses affichées en bas à gauche. Plus vous êtes à un étage supérieur dans l'abysse, plus les récompenses seront meilleures.")
           .addField("Quand dois-je utiliser cette fonction ?","Quand tu ne peux pas avancez plus loin dans l'Abyss, alors utilise cette fonction. Utilise également cette fonction si tu constates que tu n'as plus le temps d'avancer avant le reset quotidien !")
           .addField("Est-ce qu'utiliser la fonction 'Purify' réinitialise l'Abyss ?","Non, l'Abyss ne se réinitialise jamais.")
           .addBlankField()
           .addField("__**Communauté**__","Questions sur la partie communautaire.")
           .addField("Il y a t-il un site proposant des guides sur le jeu ?","Nous avons créé un site proposant divers guides traduit en français. Celui-ci sera souvent mis à jour. http://epic7guide.pcriot.com/")
           .addField("Qu'est-ce que les @Guide de Ritania ?","Les @Guide de Ritania sont chargés de vous aider, si vous avez besoin d'aide, n'hésitez pas à leur demander de l'aide grâce au ping du rôle dans le salon #astuces-questions. Tous abus du ping sera sanctionné.")
           .addField("Il y a t-il des bots disponibles dédié à Epic Seven ?","Oui, il y a actuellement 2 bots sur Epic Seven disponible sur le discord. Le premier est @Iseria Bot qui est mis à jour très souvent, sa seule commande pour le moment est *7character* <NAME>. L'autre est en français mais étant donné la masse de traduction à faire les mises à jour sont plus rares, pour en savoir plus effectuez la commande *$personnages* ou *$help*")
           .addField("J'ai un compte où je ne joue plus dessus / que j'abandonne, j'aimerais le donner/vendre, est-ce possible ?","Bien ce que ce discord ne soit pas officiel, nous sommes en respect des ToS de Epic Seven, par conséquent, les dons / ventes de compte sont totalement interdites, nous ne voulons rien voir concernant ceux-ci sur le discord.")
           .addField("Est-ce un discord officiel ?","Non, nous ne sommes en aucun cas affilié a Smilegate Megaport ou même a Super Creative. Nous sommes de simple fans essayant de faire vivre la communauté française du jeu. Pour toute demande officielle, merci de contactez le support du jeu.")
           .addField("Je cherche le lien de la tierlist / du guide des catalysts, où puis-je les trouver ?","Effectuez les commandes *$tierlist* &/ou *$catalyst*, cela vous procurera les liens !")
           .addField("Comment postuler dans une guilde ?","Pour postuler dans une guilde sur le discord, faite une demande de recrutement en détaillant votre compte autant que possible, et vous-même dans #recherche-guilde. Vous pouvez également regardez le #recrutement-guilde et MP les chefs / recruteurs des guildes qui sont actuellement en train de recruter.")
           .setFooter("Partie I FAQ du Discord Epic Seven FR. Mise à jour le 02/01/19.")
        message.channel.sendEmbed(embed);

       var bembed = new Discord.RichEmbed()
           .setTitle("Foire aux Questions [FAQ] Partie 2")
           .addField("__**Divers**__","Questions diverses sur le jeu, sur la communauté, etc.")
           .addField("Est-il possible de jouer à Epic 7 sur émulateur ?","Oui, il est possible de jouer au jeu sur la plupart des émulateurs.")
           .addField("Je joue sur Nox, et j'ai des carrés blanc qui apparaissent, qu'est-ce que je dois faire ?","Il y a actuellement un problème avec tous les émulateurs avec le mode de graphique DirectX, pour régler ce problème vous devez faire tourner votre émulateur sur OpenGL (Cela risque toutefois d'être légèrement moins rapide). Ce bug peut rester même après avoir changé de mode graphique, dans ce cas-là, supprimez cette instance de votre émulateur, et re-créez en une !")
           .addField("Comment optimisez les FPS et la fluidité de son jeu sur __Android__","Aller dans vos paramètres > Tout en bas 'À propos' > Numéro de version (vous cliquez 7 fois pour activer le mode développeur) > Revenez dans vos paramètres > Options développeurs > Cocher la case 'Forcer MSAA 4x'")
           .setFooter("Partie II FAQ du Discord Epic Seven FR. Mise à jour le 02/01/19.")
       message.channel.sendEmbed(bembed);
	   
    }
	
        // Epic Seven Héros = Ras
    if (message.content === prefix + "ras"){
        var embed = new Discord.RichEmbed()
            .setTitle("Ras Elclare :black_small_square: <:elementfeu:506109794608742401> :black_small_square: <:e7chevalier:506111403489230868> :black_small_square: Balance :black_small_square: 3<:etoile:580331911608664084>")
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
	message.channel.sendEmbed(embed)

	console.log("La commande de l'Héros Ras viens d'être effectuée.");

    }

        // Epic Seven Héros = Yuna
    if (message.content === prefix + "yuna"){
        var embed = new Discord.RichEmbed()
            .setTitle("Yuna Woo :black_small_square: <:elementeau:506109829455282176> :black_small_square: <:e7tireur:506111368135442435> :black_small_square: Lion :black_small_square: 5<:etoile:580331911608664084>")
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
	message.channel.sendEmbed(embed)

	console.log("La commande de l'Héros Yuna viens d'être effectuée.");

    }

        // Epic Seven Héros = Iseria
    if (message.content === prefix + "iseria"){
        var embed = new Discord.RichEmbed()
            .setTitle("Iseria Arisophodel :black_small_square: <:elementbroccoli:506109743694086154> :black_small_square: <:e7tireur:506111368135442435> :black_small_square: Lion :black_small_square: 5<:etoile:580331911608664084>")
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
	message.channel.sendEmbed(embed)

	console.log("La commande de l'Héroïne Iseria viens d'être effectuée.");

    }

        // Epic Seven Héros = Sez
    if (message.content === prefix + "sez"){
        var embed = new Discord.RichEmbed()
            .setTitle("Sez Gaien :black_small_square: <:elementeau:506109829455282176> :black_small_square: <:e7assassin:506111331473031188> :black_small_square: Vierge :black_small_square: 5<:etoile:580331911608664084>")
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
	message.channel.sendEmbed(embed)

	console.log("La commande de l'Héros Sez viens d'être effectuée.");

    }

        // Epic Seven Héros = Tywin
    if (message.content === prefix + "tywin"){
        var embed = new Discord.RichEmbed()
            .setTitle("Tywin Herad :black_small_square: <:elementeau:506109829455282176> :black_small_square: <:e7chevalier:506111403489230868> :black_small_square: Bélier :black_small_square: 5<:etoile:580331911608664084>")
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
	message.channel.sendEmbed(embed)
	    
	console.log("La commande de l'Héros Tywin viens d'être effectuée.");
	    
    }


        // Epic Seven Héros = Karin
    if (message.content === prefix + "karin"){
        var embed = new Discord.RichEmbed()
            .setTitle("Karin Fantaria :black_small_square: <:elementeau:506109829455282176> :black_small_square: <:e7assassin:506111331473031188> :black_small_square: Lion :black_small_square: 4<:etoile:580331911608664084>")
            .setDescription("Alors que le clair de lune révélait un personnage tenant une faux, les spectateurs étonnés s'exclamèrent 'Le Dieu de la Mort est descendu !'")
            .setColor("RANDOM")
            .setFooter("Artefact Sigurd Scythe " + message.author.username + ". " + "Fiche mise à jour le 25/11.")
            .setThumbnail("https://static.smilegatemegaport.com/event/live/epic7/world/brand/images/character/karin/karin_0000.png")
            .setImage("https://j.gifs.com/kZGmrv.gif")
            .addField(":speech_balloon: Citation :", "Non connue.", false)
            .addField(":crossed_swords: Compétence 1: Sequential Cutter", "En traduction.", false)
            .addField(":crossed_swords: Compétence 2: Blade Art: Flash", "En traduction.", false)
            .addField(":crossed_swords: Compétence 3: Blade Art: Thunder", "En traduction.", false)
            .addField(":comet: Vidéo d'introduction du personnage", ":arrow_down:", true)
	message.channel.sendEmbed(embed)
	    
	console.log("La commande de l'Héroïne Karin viens d'être effectuée.");

    }
	
	        // Epic Seven Artefact = Sigurd Scythe
    if (message.content === prefix + "sigurd"){
        var embed = new Discord.RichEmbed()
            .setTitle("Sigurd Scythe :black_small_square: <:e7combattant:506111308635308032> :black_small_square: 5<:etoile:580331911608664084>")
            .setDescription("Alors que le clair de lune révélait une personne tenant une faux, les spectateurs étonnés s'exclamèrent 'Le Dieu de la Mort est descendu !'")
            .setColor("RANDOM")
            .setFooter("Artefact Sigurd Scythe demandé par " + message.author.username + ". " + "Fiche mise à jour le 21/05/19.")
            .setThumbnail("https://www.zupimages.net/up/19/01/wchj.jpg")
            .addField(":crossed_swords: Compétence Niv.1", "Lorsque la vie du lanceur est inférieure à 50%, augmente l'attaque de 25% et absorbe **25%** des dégâts infligés pour les convertir en vie.", false)
            .addField(":crossed_swords: Compétence Niv.Max", "Lorsque la vie du lanceur est inférieure à 50%, augmente l'attaque de 25% et absorbe **50%** des dégâts infligés pour les convertir en vie.", false)
            .addField(":crossed_swords: Statistiques basique", "Attaque : **21** | Vie : **32**", false)
	    .addField(":crossed_swords: Statistiques Niv.Max", "Attaque : **273** | Vie : **416**", false)
	    .addField(":crossed_swords: Notes", "PVE : **S** | PVP : **SS**", false)
	    .addField(":crossed_swords: Quelques personnages pouvant l'utiliser", "Ravi, Ken...", false)
	    .addField(":crossed_swords: Commentaires", "Un des meilleurs artefacts tanky réservé au warrior. Utilisable sur Ravi, et sur les warriors n'ayant pas de vol de vie comme Ken. Ne pas utilisez sur des warrior comme Sigret, Yufine et tous les warriors n'étant pas très résistant à cause de l'exigence des -50% de vie. Bonne synergie avec le set Lifesteal. Peut soigner votre personnage proche de la mort totalement ou presque. Peut faire de gros dégâts. ", false)
	message.channel.sendEmbed(embed)

    }
	
		        // Epic Seven Artefact = Durandal
    if (message.content === prefix + "durandal"){
        var embed = new Discord.RichEmbed()
            .setTitle("Durandal :black_small_square: <:e7combattant:506111308635308032> :black_small_square: 5<:etoile:580331911608664084>")
            .setDescription("La lueur émise par l'épée protège son propriétaire de toutes blessures.")
            .setColor("RANDOM")
            .setFooter("Artefact Durandal demandé par " + message.author.username + ". " + "Fiche mise à jour le 21/05/19.")
            .setThumbnail("https://www.zupimages.net/up/19/01/fzpf.jpg")
            .addField(":crossed_swords: Compétence Niv.1", "Si la vie du lanceur est inférieure à 75%, la Combat Readiness augmente de **8%** quand celui-ci est attaqué.", false)
            .addField(":crossed_swords: Compétence Niv.Max", "Si la vie du lanceur est inférieure à 75%, la Combat Readiness augmente de **16%** quand celui-ci est attaqué", false)
            .addField(":crossed_swords: Statistiques basique", "Attaque : **18** | Vie : **43**", false)
	    .addField(":crossed_swords: Statistiques Niv.Max", "Attaque : **234** | Vie : **559**", false)
	message.channel.sendEmbed(embed)

    }
	
			        // Epic Seven Artefact = Uberious's Tooth
    if (message.content === prefix + "uberius"){
        var embed = new Discord.RichEmbed()
            .setTitle("Uberius's Tooth :black_small_square: <:e7combattant:506111308635308032> :black_small_square: 5<:etoile:580331911608664084>")
            .setDescription("Trésor de la famille royale de Wintenberg fabriqué à partir des restes du dragon Uberius. On dit qu'il est capable de déchirer une armure de dragon.")
            .setColor("RANDOM")
            .setFooter("Artefact Uberius's Tooth demandé par " + message.author.username + ". " + "Fiche mise à jour le 21/05/19.")
            .setThumbnail("https://zupimages.net/up/19/01/b7ks.jpg")
            .addField(":crossed_swords: Compétence Niv.1", "**50%** de chance d'infliger des dégâts supplémentaires si un coup critique est infligé lors d'une attaque basique. Les dégâts supplémentaires sont proportionnels à l'attaque du lanceur.", false)
            .addField(":crossed_swords: Compétence Niv.Max", "**100%** de chance d'infliger des dégâts supplémentaires si un coup critique est infligé lors d'une attaque basique. Les dégâts supplémentaires sont proportionnels à l'attaque du lanceur.", false)
            .addField(":crossed_swords: Statistiques basique", "Attaque : **21** | Vie : **32**", false)
	    .addField(":crossed_swords: Statistiques Niv.Max", "Attaque : **273** | Vie : **416**", false)
	message.channel.sendEmbed(embed)

    }
	
				        // Epic Seven Artefact = Border Coin
    if (message.content === prefix + "border"){
        var embed = new Discord.RichEmbed()
            .setTitle("Border Coin :black_small_square: <:e7combattant:506111308635308032> :black_small_square: 5<:etoile:580331911608664084>")
            .setDescription("Face, je ferai comme si je n'avais rien vu et te laisserai partir, mais pile... D'innombrables personnes ont mis en jeu leur fortune sur cette ancienne pièce d'or.")
            .setColor("RANDOM")
            .setFooter("Artefact Border Coin demandé par " + message.author.username + ". " + "Fiche mise à jour le 21/05/19.")
            .setThumbnail("https://epic7x.com/wp-content/uploads/2019/03/zFjICyn.png")
            .addField(":crossed_swords: Compétence Niv.1", "Augmente l'attaque de **7,5%** lors de l'utilisation d'une compétence n'infligeant pas de dégâts. L'effet peut se cumuler jusqu'à 3 fois.", false)
            .addField(":crossed_swords: Compétence Niv.Max", "Augmente l'attaque de **15%** lors de l'utilisation d'une compétence n'infligeant pas de dégâts. L'effet peut se cumuler jusqu'à 3 fois.", false)
            .addField(":crossed_swords: Statistiques basique", "Attaque : **21** | Vie : **32**", false)
	    .addField(":crossed_swords: Statistiques Niv.Max", "Attaque : **273** | Vie : **416**", false)
	message.channel.sendEmbed(embed)
	    
    }
	
					        // Epic Seven Artefact = Junkyard Dog
    if (message.content === prefix + "junkyard"){
        var embed = new Discord.RichEmbed()
            .setTitle("Junkyard Dog :black_small_square: <:e7combattant:506111308635308032> :black_small_square: 5<:etoile:580331911608664084> :black_small_square: <:arkyriche:528289398521987102>")
            .setDescription("Une arme créée pour concratiser la capacité de l'Outrage. Il s'agit d'une combinaison du Fireseal et de la Flashing Tooth, qui est l'un des trésors sacrés détenu à l'origine par le Conclave sur la planète de Sol.(**Cet artéfact était limité, et disponible seulement pendant la collaboration avec Guilty Gear**)")
            .setColor("RANDOM")
            .setFooter("Artefact limité Junkyard Dog demandé par " + message.author.username + ". " + "Fiche mise à jour le 21/05/19.")
            .setThumbnail("https://epic7x.com/wp-content/uploads/2019/04/sol-badguy-artifact-full.png")
            .addField(":crossed_swords: Compétence Niv.1", "**25%** de chance de burn l'ennemi pendant 2 tours après avoir utilisé une compétence basique. (Compétence 1)", false)
            .addField(":crossed_swords: Compétence Niv.Max", "**50%** de chance de burn l'ennemi pendant 2 tours après avoir utilisé une compétence basique. (Compétence 1)", false)
            .addField(":crossed_swords: Statistiques basique", "Attaque : **21** | Vie : **32**", false)
	    .addField(":crossed_swords: Statistiques Niv.Max", "Attaque : **273** | Vie : **416**", false)
	message.channel.sendEmbed(embed)
	    
    }
	
				        // Epic Seven Artefact = Holy Sacrifice
    if (message.content === prefix + "holy"){
        var embed = new Discord.RichEmbed()
            .setTitle("Holy Sacrifice :black_small_square: <:e7chevalier:506111403489230868> :black_small_square: 5<:etoile:580331911608664084>")
            .setDescription("La Statue de la Grâce est donnée aux chevaliers qui gagnent la faveur de la déesse,  celle-ci les sauveras une fois avant de se briser en morçeaux. Écrit par Barrett [Trésor du Saint Empire, p15]")
            .setColor("RANDOM")
            .setFooter("Artefact Holy Sacrifice demandé par " + message.author.username + ". " + "Fiche mise à jour le 21/05/19.")
            .setThumbnail("https://www.zupimages.net/up/19/01/un9a.jpg")
            .addField(":crossed_swords: Compétence Niv.1", "**50%** de chance d'être réanimé avec 25% de vie après la mort. Ne peut-être utilisé qu'une seule fois par stage.", false)
            .addField(":crossed_swords: Compétence Niv.Max", "**100%** de chance d'être réanimé avec 25% de vie après la mort. Ne peut-être utilisé qu'une seule fois par stage.", false)
            .addField(":crossed_swords: Statistiques basique", "Attaque : **9** | Vie : **76**", false)
	    .addField(":crossed_swords: Statistiques Niv.Max", "Attaque : **117** | Vie : **988**", false)
	message.channel.sendEmbed(embed)

    }
	
				// Epic Seven Artefact = Elbris Ritual Sword
    if (message.content === prefix + "elbris"){
        var embed = new Discord.RichEmbed()
            .setTitle("Elbris Ritual Sword :black_small_square: <:e7chevalier:506111403489230868> :black_small_square: 5<:etoile:580331911608664084>")
            .setDescription("Épée de cérémonie transmise par les Elfes depuis des milliers d'années, la lame est imprégnée de plusieurs sources de magie. Celui possédant cette épée devient le roi des Elfes.")
            .setColor("RANDOM")
            .setFooter("Artefact Elbris Ritual Sword demandé par " + message.author.username + ". " + "Fiche mise à jour le 21/05/19.")
            .setThumbnail("https://zupimages.net/up/19/01/d1hj.jpg")
            .addField(":crossed_swords: Compétence Niv.1", "**10%** de chance de contre-attaquer quand un allié est attaqué.", false)
            .addField(":crossed_swords: Compétence Niv.Max", "**20%** de chance de contre-attaquer quand un allié est attaqué.", false)
            .addField(":crossed_swords: Statistiques basique", "Attaque : **15** | Vie : **54**", false)
	    .addField(":crossed_swords: Statistiques Niv.Max", "Attaque : **195** | Vie : **702**", false)
	message.channel.sendEmbed(embed)

    }
	
			  // Epic Seven Artefact = Noble Oath
    if (message.content === prefix + "noble"){
        var embed = new Discord.RichEmbed()
            .setTitle("Noble Oath :black_small_square: <:e7chevalier:506111403489230868> :black_small_square: 5<:etoile:580331911608664084>")
            .setDescription("Un emblème donné aux membres de l'Ordre d'Ezera après qu'ils se soient engagés à consacrer leur vie à la Déesse. Ceux donnés aux chevaliers ressemblent à un écusson, tandis que ceux donnés aux prêtres ressemblent à un chapelet.")
            .setColor("RANDOM")
            .setFooter("Artefact Noble Oath demandé par " + message.author.username + ". " + "Fiche mise à jour le 21/05/19.")
            .setThumbnail("https://zupimages.net/up/19/01/z2z8.jpg")
            .addField(":crossed_swords: Compétence Niv.1", "Quand la vie diminue, la défense et l'effect resistance augmente de **25%**", false)
            .addField(":crossed_swords: Compétence Niv.Max", "Quand la vie diminue, la défense et l'effect resistance augmente de **50%**", false)
            .addField(":crossed_swords: Statistiques basique", "Attaque : **9** | Vie : **76**", false)
	    .addField(":crossed_swords: Statistiques Niv.Max", "Attaque : **117** | Vie : **988**", false)
	message.channel.sendEmbed(embed)

    }

				  // Epic Seven Artefact = Justice for All
    if (message.content === prefix + "justice"){
        var embed = new Discord.RichEmbed()
            .setTitle("Justice for All :black_small_square: <:e7chevalier:506111403489230868> :black_small_square: 5<:etoile:580331911608664084>")
            .setDescription("Un gant fabriqué l'année de l'adoubement du premier chevalier de la famille Sharon. Il représente la quête de la Justice qui doit être partagé par tout ceux suivant la Déesse et le royaume, plutôt que simplement pour leur propre bien")
            .setColor("RANDOM")
            .setFooter("Artefact Justice for All demandé par " + message.author.username + ". " + "Fiche mise à jour le 21/05/19.")
            .setThumbnail("https://epic7x.com/wp-content/uploads/2019/03/justice-for-all-1.png")
            .addField(":crossed_swords: Compétence Niv.1", "**50%** de chance d'accorder un buff aléatoire au lanceur pendant 1 tour à la fin de son tour. (Parmi: Augmentation de l'Attaque, de la Défense, de la Vitesse ou des chances de coup Critique. Barrière, Immunité, Soins continus ou résistance au coup critique)", false)
            .addField(":crossed_swords: Compétence Niv.Max", "**100%** de chance d'accorder un buff aléatoire au lanceur pendant 1 tour à la fin de son tour. (Parmi: Augmentation de l'Attaque, de la Défense, de la Vitesse ou des chances de coup Critique. Barrière, Immunité, Soins continus ou résistance au coup critique)", false)
            .addField(":crossed_swords: Statistiques basique", "Attaque : **9** | Vie : **76**", false)
	    .addField(":crossed_swords: Statistiques Niv.Max", "Attaque : **117** | Vie : **988**", false)
	message.channel.sendEmbed(embed)
	    
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
       message.channel.send("```Lien de la tierlist :``` \n :arrow_right: <https://bit.ly/2GgJM1J> \n ```Autre tierlist :``` \n :arrow_right: <https://epic7x.com/tier-list/>")

    }


    if (message.content === prefix + "site"){ //Site EpicSevenFrance
       message.channel.send("```Lien du site :``` \n :arrow_right: <http://epicsevenfrance.pcriot.com/> \n Site malheureusement fermé, nous verrons pour une possible réouverture.")
    }

    if (message.content === prefix + "catalyst"){ //Guide Catalyst
       message.channel.send("Lien du guide des catalysts : <https://docs.google.com/spreadsheets/d/1UMIduFBIVc9OAoI-BeQ-LjPeihcziqXEzXw8n58bEd0/htmlview?usp=sharing&sle=true>")
    }
	
    if (message.content === prefix + "camp"){ //Moral labyrinthe
       message.channel.send("```Simulateur pour connaître les réponses et maximiser votre moral dans le camp en labyrinthe :``` \n :arrow_right: <https://epic7x.com/friendship-calculator/> \n ```Autre calculateur de moral``` \n :arrow_right: <http://ulmo18.phps.kr/epic7.php?L=en>")
   
    }

    if (message.content === prefix + "calc"){ //Calculateur équipement
       message.channel.send("```Calculateur d'équipement :``` \n :arrow_right: <https://epic7.lsdl.kr/index.php/coordinator>")

    }

    if (message.content === prefix + "mapraid"){
        var embed = new Discord.RichEmbed()
            .setTitle(":black_small_square: Raid normal :black_small_square:")
            .setDescription("Une map des monstres, des mini-boss et des boss. La carte pour la version Hell du Raid arrivera bientôt.")
            .setColor("RANDOM")
            .setFooter("Carte du Raid Labyrinth demandé par " + message.author.username + ". " + "Commande mise à jour le 15/05/19.")
            .setThumbnail("https://static.smilegatemegaport.com/event/live/epic7/brand/assets/images/common/bi.png")
	    .setImage("https://i.imgur.com/CFIBXxY.jpg")
	message.channel.sendEmbed(embed)
	    
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
        case "26ball":
        let args = message.content.split(" ").slice(1);
        let tte = args.join(" ")
        if (!tte){
            return message.channel.send("Utilisation correcte : $26ball <question> " )};

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
		"Je m'ennuie... Tu es si ennuyant !",
		".......... Pardon, tu m'as parlé ?",
		"...Désolé... ce n'est pas que tu ne m'intéresses pas, mais.. malheureusement si.",
		"Si tu veux, je vend des vies.",
		".....",
		"Simple question: Tu peux la mettre en veilleuse ?",
		"Tu ressembles à Enott...",
		"Tu fais parti de la Hurado Family ? Vu ta tronche, ça ne m'étonnerait même pas.",
                "Je pense que cela n'a pas d'importance.",
                "Tu n'avais vraiment rien d'autre à me demander ?",
                "Aucune idée. Et toi, connais-tu le synonyme de synonyme ?",
                
            ];

            let reponse = (replys[Math.floor(Math.random() * replys.length)])
            var bembed = new Discord.RichEmbed()
            .setDescription(" <a:peepo:617064653738082357> 26ball <a:peepo:617064653738082357>")
            .addField(message.author.username + " :", tte)
            .addField("Epic Bot :", reponse)
            .setThumbnail(message.author.avatarURL)
            .setTimestamp()
	    .setFooter("Demandé par " + message.author.username, "https://cdn.discordapp.com/attachments/432232468465188874/617755621889933390/464c39ed953419ae24d433d23eca3f0e.png")
            

        message.channel.sendEmbed(bembed)
        console.log("La commande 26ball viens d'être effectuée avec succès par " + message.author.username);

    }})

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "chaton":
        let args = message.content.split(" ").slice(1);
        let tte = args.join(" ")
        if (!tte){
            return message.channel.send("Désolé, tu dois rajouter un argument au pif derrière ta commande pour le moment. :cat:")};

            var replys = [
                "https://www.wanimo.com/veterinaire/images/articles/chat/chaton-diarrhee.jpg",
                "https://www.catizz.com/medias/common/miaulement%20chat%20.jpg",
                "https://jardinage.lemonde.fr/images/dossiers/2017-02/chaton-161407.jpg",
                "https://conseils-veto.com/wp-content/uploads/2018/02/chat-malade.png",
                "http://recueil-de-png.r.e.pic.centerblog.net/22f09c18.png",
                "https://static.wamiz.fr/images/articles/facebook/article/eduquer-un-chat-fb-59ad52663bd71.jpg",
                "https://jardinage.lemonde.fr/images/dossiers/2017-08/chaton-161238.jpg",
                "https://media.giphy.com/media/14v0b6U1vucP1m/giphy.gif",
                "https://thumbs.gfycat.com/WhirlwindHarshBighorn-size_restricted.gif",
                "https://img3.grazia.fr/var/grazia/storage/images/media/images/what-s-the-buzz/gifs-chats/gif3/13466158-1-fre-FR/Gif3_width545.gif",
                "https://static.mmzstatic.com/wp-content/uploads/2013/08/gifchat24.gif",
                "https://data.photofunky.net/output/image/b/7/9/9/b79903/photofunky.gif",
                "https://archzine.fr/wp-content/uploads/2016/01/le-plus-mignon-chaton-petit-chaton-mignon-chaton-image.jpg",
                "http://madame.legorafi.fr/wp-content/uploads/2016/10/iStock_68465967_MEDIUM-800x600.jpg",

       
            ];

            let reponse = (replys[Math.floor(Math.random() * replys.length)])
            var bembed = new Discord.RichEmbed()
            .setDescription("Whaow, un petit chat !")
            .setImage(reponse)
            .setTimestamp()
	    .setFooter("Demandé par " + message.author.username, "https://cdn.discordapp.com/attachments/432232468465188874/506295453239869440/Screenshot_11.png")
            


        message.channel.sendEmbed(bembed)
        console.log("La commande chaton viens d'être effectuée avec succès par " + message.author.username);

}});

bot.on("message", async message => {
 
  if(message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);  
  const command = args.shift().toLowerCase();
 
	
  let blacklist = ['https://privatepage.vip','https://nakedphotos.club','81ZH2Y'];
  let Texte = false;
      for (var i in blacklist) {
           if (message.content.toLowerCase().includes(blacklist[i].toLowerCase())) Texte = true;
    }
	
    if (Texte) {
        message.delete();
	message.channel.send(`Ce lien est **interdit** ${message.author.tag} !`).then(message => message.delete(15000));
        message.member.kick('Arky expulse les méchants bots !');
	message.channel.send(`Arky fais le ménage et à expulser le méchant bot ${message.author.tag} !`).then(message => message.delete(20000));
		
    }

    if(message.content === prefix + "quizz"){ //Total 95 questions.
 
 let quiz = [
    { q: 'De quel personnage cette phrase est-elle issue: Is it already over ? So boring.', a: ['Haste', 'haste'] },
    { q: 'De quel personnage cette phrase est-elle issue: I will... never miss !', a: ['Tywin', 'tywin'] },
    { q: 'De quel personnage cette phrase est-elle issue: You pitiful beings... death is your repentance !', a: ['Diene', 'diene'] },
    { q: 'De quel personnage cette phrase est-elle issue: The path once tread by the Goddess... **will be covered with your blood !**', a: ['Clarissa', 'clarissa'] },
    { q: "De quel personnage cette phrase est-elle issue: I'll kill you, and you, and you ! HAAHAHAHAHAHAHA", a: ['Clarissa', 'clarissa'] },
    { q: 'De quel personnage cette phrase est-elle issue: Dancing Blade !', a: ['Vildred', 'vildred'] },
    { q: 'De quel personnage cette phrase est-elle issue: Bones to sand... Blood to dust.', a: ['Baal & Sezan', 'baal et sezan'] },
    { q: 'De quel personnage cette phrase est-elle issue: Look at me... I said look at me !', a: ['Challenger Dominiel', 'ML Dominiel'] },
    { q: "De quel personnage cette phrase est-elle issue: I can feel my strength overflowing... This is amazing ! **I feel so stroooooong !!**", a: ['Guider Aither', 'ML Aither', 'ML Trap'] },
    { q: 'De quel personnage cette phrase est-elle issue: This will be the last moon they see.', a: ['Kise', 'kise'] },
    { q: "De quel personnage cette phrase est-elle issue: I can't stop now !", a: ['Sez', 'sez'] },
    { q: "De quel personnage cette phrase est-elle issue: A roaming heart, forever wandering.", a: ['Kayron', 'kayron'] },
    { q: 'De quel personnage cette phrase est-elle issue: Ashes to ashes, dust to dust.', a: ['Kayron', 'kayron'] },
    { q: "De quel personnage cette phrase est-elle issue: I present to you, the greatest magic.", a: ['Bellona', 'bellona'] },
    { q: "De quel personnage cette phrase est-elle issue: Hello ! It's me, ||Yuna|| !", a: ['Yuna', 'yuna'] },
    { q: 'De quel personnage cette phrase est-elle issue: With the light, disappear.', a: ['Ludwig', 'ludwig'] },
    { q: "De quel personnage cette phrase est-elle issue: Didn't I tell you? Just put your faith in me.", a: ['Vildred', 'vildred'] },
    { q: "De quel personnage cette phrase est-elle issue: I wanna save the world with the mercy of healing", a: ['Achates', 'achates'] },
    { q: "De quel personnage cette phrase est-elle issue: I'm still not strong enough but i'll keep doing my best.", a: ['Achates', 'achates'] },
    { q: "De quel personnage cette phrase est-elle issue: A new friendship begins with one, two, three, tada !", a: ['Shooting Star Achates', 'ML Achates'] },
    { q: "De quel personnage cette phrase est-elle issue: The lady of the swamp has arrived !", a: ['Charlotte', 'charlotte'] },
    { q: "De quel personnage cette phrase est-elle issue: My Goddess... give me the power to vanquish the evil.", a: ['Diene', 'diene'] },
    { q: 'De quel personnage cette phrase est-elle issue: May these evils... be punished.', a: ['Diene', 'diene'] },
    { q: "De quel personnage cette phrase est-elle issue: My lady... Stop calling me **fool** !", a: ['Baal & Sezan', 'baal et sezan'] },
    { q: "De quel personnage cette phrase est-elle issue: There is no salvation for those who fall in battle.", a: ['Kayron', 'kayron'] },
    { q: 'De quel personnage cette phrase est-elle issue: Everything disappears.', a: ['Kayron', 'kayron'] },
    { q: "De quel personnage cette phrase est-elle issue: You can't hide from my gun.", a: ['Schuri', 'schuri'] },
    { q: "De quel personnage cette phrase est-elle issue: Shadows, fall.", a: ['Ludwig', 'ludwig'] },
    { q: 'De quel personnage cette phrase est-elle issue: Shall we begin the fireworks show ?', a: ['Serila', 'serila'] },
    { q: "De quel personnage cette phrase est-elle issue: The hell scythe will slice you in two !", a: ['Haste', 'haste'] },
    { q: "De quel personnage cette phrase est-elle issue: Kal ! It's your turn !", a: ['Celestial Mercedes', 'ML Mercedes'] },
    { q: 'De quel personnage cette phrase est-elle issue: Ah ah ! Victory is mine !', a: ['Ravi', 'ravi'] },
    { q: "De quel personnage cette phrase est-elle issue: Are you prepare to die ?", a: ['Sez', 'sez'] },
    { q: "De quel personnage cette phrase est-elle issue: My turn to fight !", a: ['Sez', 'sez'] },
    { q: "De quel personnage cette phrase est-elle issue: I'm already prepared.", a: ['Sez', 'sez'] },
    { q: "De quel personnage cette phrase est-elle issue: This is my justice !", a: ['Vildred', 'vildred'] },
    { q: "De quel personnage cette phrase est-elle issue: Alright. Shall we clean up.", a: ['Vildred', 'vildred'] },
    { q: "De quel personnage cette phrase est-elle issue: It's my turn !", a: ['Vildred', 'vildred'] },
    { q: "De quel personnage cette phrase est-elle issue: Did you have nothing left to say ?", a: ['Vildred', 'vildred'] },
    { q: "De quel personnage cette phrase est-elle issue: Aaaah ! This is my victory.", a: ['Vildred', 'vildred'] },
    { q: "De quel personnage cette phrase est-elle issue: Queen Ceci...please don't leave me.", a: ['Shadow Rose', 'Ml Rose'] },
    { q: "De quel personnage cette phrase est-elle issue: Aaaah ! Blade Ascent !", a: ['Vildred', 'vildred'] },
    { q: "De quel personnage cette phrase est-elle issue: Haha. Uups. Sorry. Sorry... my bad.", a: ['Vildred', 'vildred'] },
    { q: "De quel personnage cette phrase est-elle issue: For Queen Ceci !", a: ['Shadow Rose', 'Ml Rose'] },
    { q: "De quel personnage cette phrase est-elle issue: Oh ! You need my help ! Cool let's go !", a: ['Yufine', 'yufine'] },
    { q: "De quel personnage cette phrase est-elle issue: Victory is always mine !", a: ['Yufine', 'yufine'] },
    { q: "De quel personnage cette phrase est-elle issue: Burn ! Bye bye !", a: ['Aramintha', 'aramintha'] },
    { q: "De quel personnage cette phrase est-elle issue: Rest in peace.", a: ['Aramintha', 'aramintha'] },
    { q: "De quel personnage cette phrase est-elle issue: Please to meet you. Let's work together.", a: ['Aramintha', 'aramintha'] },
    { q: "De quel personnage cette phrase est-elle issue: Leave it to me!", a: ['Aramintha', 'Tywin'] },
    { q: "De quel personnage cette phrase est-elle issue: Bring in on.", a: ['Aramintha', 'aramintha'] },
    { q: "De quel personnage cette phrase est-elle issue: Shall we begin.", a: ['Aramintha', 'aramintha'] },
    { q: "De quel personnage cette phrase est-elle issue: I will continue to do my best.", a: ['Tywin', 'tywin'] },
    { q: "De quel personnage cette phrase est-elle issue: Please forgive me.", a: ['Tywin', 'tywin'] },
    { q: "De quel personnage cette phrase est-elle issue: I'm always ready.", a: ['Tywin', 'tywin'] },
    { q: "De quel personnage cette phrase est-elle issue: Thank you. I will keep doing my best.", a: ['Cecilia', 'cecilia'] },
    { q: "De quel personnage cette phrase est-elle issue: I am ||Cecilia||, please feel free call me ||Ceci||.", a: ['Cecilia', 'cecilia'] },
    { q: "De quel personnage cette phrase est-elle issue: I will break you, I won’t be defeated", a: ['Cecilia', 'cecilia'] },
    { q: "De quel personnage cette phrase est-elle issue: Lance of Steel, now it’s time of judgment !", a: ['Cecilia', 'cecilia'] },
    { q: "De quel personnage cette phrase est-elle issue: Disappear, get out of my way !", a: ['Cecilia', 'cecilia'] },
    { q: "De quel personnage cette phrase est-elle issue: I will be victorious.", a: ['Cecilia', 'cecilia'] },
    { q: "De quel personnage cette phrase est-elle issue: Now it's the time of judgment.", a: ['Cecilia', 'cecilia'] },
    { q: "De quel personnage cette phrase est-elle issue: Light. Life.", a: ['Angelica', 'angelica'] },
    { q: "De quel personnage cette phrase est-elle issue: All is as the Goddess wills it", a: ['Angelica', 'angelica'] },
    { q: "De quel personnage cette phrase est-elle issue: Sense it's be a while, take care of me.", a: ['Angelica', 'angelica'] },
    { q: "De quel personnage cette phrase est-elle issue: Oh no. I lost. Well it can be out.", a: ['Angelica', 'angelica'] },
    { q: "De quel personnage cette phrase est-elle issue: The Goddess wills it.", a: ['Angelica', 'angelica'] },
    { q: "De quel personnage cette phrase est-elle issue: I'll do my best !", a: ['Montmorancy', 'montmorancy'] },
    { q: "De quel personnage cette phrase est-elle issue: Do you need some help ?", a: ['Montmorancy', 'montmorancy'] },
    { q: "De quel personnage cette phrase est-elle issue: We still have time to recover. Let's try again !", a: ['Ras', 'ras'] },
    { q: "De quel personnage cette phrase est-elle issue: By my command... Victory !", a: ['Ras', 'ras'] },
    { q: "De quel personnage cette phrase est-elle issue: You can't escape !", a: ['Ras', 'ras'] },
    { q: "De quel personnage cette phrase est-elle issue: I can't lose !", a: ['Ras', 'ras'] },
    { q: "De quel personnage cette phrase est-elle issue: I take you on.", a: ['Ras', 'ras'] },
    { q: "De quel personnage cette phrase est-elle issue: Fate is on my side.", a: ['Ras', 'ras'] },
    { q: "De quel personnage cette phrase est-elle issue: Yameteeeee !", a: ['Dizzy', 'dizzy'] },
    { q: "De quel personnage cette phrase est-elle issue: Look at my sword, not my face.", a: ['Violet', 'violet'] },
    { q: "De quel personnage cette phrase est-elle issue: I know I’m beautiful.", a: ['Violet', 'violet'] },
    { q: "De quel personnage cette phrase est-elle issue: Be grateful that you can fight with me.", a: ['Violet', 'violet'] },
    { q: "De quel personnage cette phrase est-elle issue: My sword will pierce your heart.", a: ['Violet', 'violet'] },
    { q: "De quel personnage cette phrase est-elle issue: Run ~ before it's too late.", a: ['Seaside Bellona', 'seaside bellona', 'ss bellona', 'bellona plage'] },
    { q: "De quel personnage cette phrase est-elle issue: Now. Bring in on.", a: ['Seaside Bellona', 'seaside bellona', 'ss bellona', 'bellona plage'] },
    { q: "De quel personnage cette phrase est-elle issue: Fine. I let you win, this time.", a: ['Seaside Bellona', 'seaside bellona', 'ss bellona', 'bellona plage'] },
    { q: "De quel personnage cette phrase est-elle issue: This is what you get ; for ruining my vacation !", a: ['Seaside Bellona', 'seaside bellona', 'ss bellona', 'bellona plage'] },
    { q: "De quel personnage cette phrase est-elle issue: Well. Shall we go back to the beach ?", a: ['Seaside Bellona', 'seaside bellona', 'ss bellona', 'bellona plage'] },
    { q: "De quel personnage cette phrase est-elle issue: Let's start with something light.", a: ['Seaside Bellona', 'seaside bellona', 'ss bellona', 'bellona plage'] },
    { q: "De quel personnage cette phrase est-elle issue: It's too late to backup now.", a: ['Seaside Bellona', 'seaside bellona', 'ss bellona', 'bellona plage'] },
    { q: "De quel personnage cette phrase est-elle issue: I'm getting tired of you. Bye bye now !", a: ['Seaside Bellona', 'seaside bellona', 'ss bellona', 'bellona plage'] },
    { q: "De quel personnage cette phrase est-elle issue: Unleash... my power !", a: ['Vivian', 'vivian'] },
    { q: "De quel personnage cette phrase est-elle issue: Distraction... answer my call !", a: ['Vivian', 'vivian'] },
    { q: "De quel personnage cette phrase est-elle issue: Forbidden spell... destroy all !", a: ['Vivian', 'vivian'] },
    { q: "De quel personnage cette phrase est-elle issue: Very... interesting.", a: ['Vivian', 'vivian'] },
    { q: "De quel personnage cette phrase est-elle issue: How dare you !", a: ['Vivian', 'vivian'] },
    { q: "De quel personnage cette phrase est-elle issue: All is done !", a: ['Vivian', 'vivian'] },
    { q: "De quel personnage cette phrase est-elle issue: You regret facing me !", a: ['Vivian', 'vivian'] },
    { q: "De quel personnage cette phrase est-elle issue: Can't you handle this ?", a: ['Vivian', 'vivian'] },
    { q: "De quel personnage cette phrase est-elle issue: ||Destina's|| protection !", a: ['Destina', 'destina'] },
    { q: "De quel personnage cette phrase est-elle issue: Luminescence... glory.", a: ['Destina', 'destina'] },












  ];
  let options = {
    max: 1,
    time: 34000,
    errors: ['time'],
  };

  let item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q);
  try {
    let collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    let winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                  .setAuthor(`Gagnant: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                  .setTitle(`Réponse correcte: \`${winnerMessage.content}\``)
                                  .setFooter(`Question: ${item.q}`)
                                  .setColor('RANDOM')
                                })

  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                  .setAuthor("La bonne réponse n'a pas été trouvée à temps.")
                                  .setTitle(`Réponse(s) correcte(s): \`${item.a}\``)
                                  .setFooter(`Question: ${item.q}`)
                                })

  }
	    
    }

			 
    if (command === "kick") {

    if(!message.member.roles.some(r=>["Club de Sécurité Publique (Mod)", "Moderator"].includes(r.name)) )
      return message.reply("Désolé, vous n'avez pas la permission d'effectuer cette action !");

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("s'il vous plaît, mentionnez un utilisateur valide de ce serveur.");
    if(!member.kickable) 
      return message.reply("je ne peux pas expulser cet utilisateur ! Peut-être a t-il un rôle plus élevé ? Avez-vous la permission d'expulser ?");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Aucune raison donnée.";
    
    await member.kick(reason)
      .catch(error => message.reply(`Désolé ${message.author}, je ne peux pas expulser cet utilisateur pour : ${error}`));
    message.reply(`${member.user.tag} à été expulsé du serveur par ${message.author.tag} pour : ${reason}`);

  }
  
  if(command === "ban") {
   
    if(!message.member.roles.some(r=>["Club de Sécurité Publique (Mod)"].includes(r.name)) )
      return message.reply(" désolé, tu n'as pas la permission d'effectuer cette action !");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("S'il te plaît, mentionne un utilisateur valide présent sur le serveur.");
    if(!member.bannable) 
      return message.reply("je ne peux pas bannir cet utilisateur ! Peut-être a t-il un rôle supérieur ? Avez-vous la permission de bannir ?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Aucune raison donnée.";
    
    await member.ban(reason)
      .catch(error => message.reply(`désolé, je ne peux pas le ban à cause de : ${error}`));
    message.reply(`${member.user.tag} à été banni par ${message.author.tag} pour : ${reason}`);
  }
  
  if(command === "purge") {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Désolé, mais tu n'as pas la permission de **gérer les messages** !")

    if (!args[0]) return message.channel.send('Tu dois spécifier un nombre de message.');
    if (args[0] < 1) return message.channel.send('Tu dois spécifier un nombre de message supérieur à 1.');
    if (args[0] > 100) return message.channel.send('Tu dois spécifier un nombre de message inférieur à 100.');
    if (isNaN(args[0])) return message.channel.send("S'il te plaît, rentre un nombre correct.");
	  
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`🗑 Kyaah ! Arky viens de faire le ménage et à supprimer **${args[0]}** messages.`).then(message => message.delete(10000));
    }).catch().catch((e) => message.channel.send('Tu ne peux pas supprimer de message de plus de 14 jours.'));
    message.delete();

}

});

client.on('message', message => {
    // Command handler, seen previously
    switch (command) {
            case 'stop': {
                    message.reply(`Le bot va s'éteindre.\n`
                            + `Confirmez l'action avec 'Oui' ou arrêtez celle-ci avec 'Non'.`);

                    // First argument is a filter function - which is made of conditions
                    // m is a 'Message' object
                    message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 1, time: 30000}).then(collected => {
                                    // only accept messages by the user who sent the command
                                    // accept only 1 message, and return the promise after 30000ms = 30s

                                    // first (and, in this case, only) message of the collection
                                    if (collected.first().content.toLowerCase() == 'Oui') {
                                            message.reply('Extinction des feux...');
                                            client.destroy();
                                    }

                                    else
                                            message.reply(`L'action a été annulée.`);      
                            }).catch(() => {
                                    message.reply(`Aucune réponse après 30 secondes, l'action a été abandonnée.`);
                            });
                    break;
            }  
    }
});
