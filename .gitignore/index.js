const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("$")

bot.on('ready', function() {
    bot.user.setActivity("$help | V 1.1.2 | Multiples corrections / ajouts");
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
            .addField("__**Fun**__","`$8ball` \n `$avatar` \n `$say`", true)
            .addField("__**Epic Seven**__","`$personnages` \n `$site` \n `$tierlist`", true)
            .setColor("RANDOM")
            .setFooter("Page d'aide générée suite à une demande de "+ message.author.username)
            .setThumbnail("https://static.smilegatemegaport.com/event/live/epic7/brand/assets/images/common/bi.png")
        message.channel.sendEmbed(embed);
        console.log("Page d'aide générée suite à la demande de " + message.author.username);
	
    }

    if (message.content === prefix +"e7"){
    message.channel.send("Utilisation correcte : $e7 <personnage> | Si tu ne connais pas les personnages disponible, utilise la commande $personnages.")
    
    }
     
    module.exports.run = (bot, message, args) => {
	      
    let rock2 = ["Paper! I win!", "Scissors! You win!"]
    let rock1 = Math.floor(Math.random() * rock2.length);
  
    let paper2 = ["Rock! You win!", "Scissors! I win!"]
    let paper1 = Math.floor(Math.random() * paper2.length);
  
    let scissors2 = ["Rock! I win!", "Paper! You win!"]
    let scissors1 = Math.floor(Math.random() * scissors2.length);
  
  let rock = new Discord.RichEmbed()
  .setAuthor("Rock, Paper, Scissors")
  .setColor("#6b5858")
  .addField("You Chose", `${args[0]}`)
  .addField("I choose", rock2[rock1])
  
  let paper = new Discord.RichEmbed()
  .setAuthor("Rock, Paper, Scissors")
  .setColor("#6b5858")
  .addField("You Chose", `${args[0]}`)
  .addField("I choose", paper2[paper1])
  
  let scissors = new Discord.RichEmbed()
  .setAuthor("Rock, Paper, Scissors")
  .setColor("#6b5858")
  .addField("You Chose", `${args[0]}`)
  .addField("I choose", scissors2[scissors1])
  
  
  if (message.content === "+rps rock") message.channel.send(rock)
  if (message.content === "+rps Rock") message.channel.send(rock)
  if (message.content === "+rps r") message.channel.send(rock)
  
  if (message.content === "+rps paper") message.channel.send(paper)
  if (message.content === "+rps Paper") message.channel.send(paper)
  if (message.content === "+rps p") message.channel.send(paper)
  
  if (message.content === "+rps scissors") message.channel.send(scissors)
  if (message.content === "+rps Scissors") message.channel.send(scissors)
  if (message.content === "+rps s") message.channel.send(scissors)
  
  
  if (message.content === "+rps") message.channel.send("Options: ``Rock``, ``Paper``, ``Scissors``. *Usage: +rps <option>*")
    }

    if (message.content.startsWith (prefix + "warn")){

module.exports.run = async (bot, message, args) => { // Run the command when a command is called

    var Discord = require('discord.js');
    var db = require('quick.db')
    var send = require('quick.hook')

    try {
    if (!message.member.hasPermission('KICK_MEMBERS')) return send(message.channel, "Sorry, but you do not have valid permissions! If you believe this is an error, contact an owner.", {
        name: 'Warn Error',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })
    const modlog = message.guild.channels.find(channel => channel.name === 'mod-log');
    const warnlog = message.guild.channels.find(channel => channel.name === 'warnings');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!args[0]) return send(message.channel, 'Please specify a person & reason for the warn! `-!warn <Zinx#9129> <reason>`', {
        name: 'Warn Error',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!reason) return send(message.channel, 'Please specify a person & reason for the warn!', {
        name: 'Warn Error',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })
    const casenumbers = new db.table('CASENUMBERs')
    const guildcasenumber = await casenumbers.fetch(`case_${message.guild.id}`)
    const a = guildcasenumber
    const b = a + 1
    casenumbers.set(`case_${message.guild.id}`, b)
    //  console.log(guildcasenumber)
    const numberwarn = new db.table('WARNNUMBERs')
    const num1 = await numberwarn.fetch(`user_${user.id}_${message.guild.id}`)
    const y = 1
    const m = y + num1
    numberwarn.set(`user_${user.id}_${message.guild.id}`, m)
    // console.log(num1)


    if(!guildcasenumber == Number) {
        casenumbers.set(`case_${message.guild.id}`, 1)
    }

    if(!num1 == Number) {
        db.set(`user_${user.id}_${message.guild.id}`, 1)
    }

    if (!modlog) return message.channel.send('**Please create a channel with the name `mod-log`**')
    if (!warnlog) return message.channel.send('**Please create a channel with the name `warnings`**')
    
        //user.kick({ reason: `${reason}`})
        const userwarn = new db.table('USERWARNINGs')
        const num2 = await numberwarn.fetch(`user_${user.id}_${message.guild.id}`)
        const warns = await userwarn.fetch(`warn_${user.id}_${num2}_${message.guild.id}`)
        userwarn.set(`warn_${user.id}_${num2}_${message.guild.id}`, reason)

    if (user) {

        if (!user) return send(message.channel, "Couldn't find user.", {
            name: 'Warn Error',
            icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
        })
        if (user.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return send(message.channel, "The user you are trying to warn is either an Admin or someone who has Administration Rights", {
            name: 'Warn Error',
            icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
        })

        if (num2 == 3){
            const kickEmbed = new Discord.RichEmbed()
            .setAuthor('Warn')
            .setDescription(`**Case Number**: ${guildcasenumber}\n\nUser <@${user.id}> Has Been Kicked Due To Recieving 3 Warnings.\n**Reason**: ${reason}`)
            .setColor('DARK_RED')
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL)
            .setFooter(`Staff UID ${mod.id} | Staff User ${mod.tag}`)
            send(modlog, kickEmbed, {
                name: 'Warn',
                icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
            }) .catch(() => message.reply("Cannot post in your mod-log! Have you set my permissions correctly?"));
            const kickEmbedpub = new Discord.RichEmbed()
            .setAuthor('Warn')
            .setDescription(`**Case Number**: ${guildcasenumber}\n\nUser <@${user.id}> Has Been Kicked Due To Recieving 3 Warnings.\n**Reason**: ${reason}`)
            .setColor('DARK_RED')
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL)
            .setFooter(`Contact Staff If You Think This Is An Error`)
            send(warnlog, kickEmbedpub, {
                name: 'Warn',
                icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
            }) .catch(() => message.reply("Cannot post in your warn-log! Have you set my permissions correctly?"));
        user.send(`You have been warned & kicked in ${message.guild.name}\n**Reason**: ${reason}\n\nTotal Warnings: ${num2}`) .catch(() => message.reply("Cannot Send Direct Message To "+user));
        message.guild.member(user).kick(reason)
        } else if (num2 >= 4) {
            const banEmbed = new Discord.RichEmbed()
            .setAuthor('Warn')
            .setDescription(`**Case Number**: ${guildcasenumber}\n\nUser <@${user.id}> Has Been Banned Due To Recieving 4 Warnings.\n**Reason**: ${reason}`)
            .setColor('DARK_RED')
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL)
            .setFooter(`Staff UID: ${mod.id} | Staff User: ${mod.tag}`)
            send(modlog, banEmbed, {
                name: 'Warn',
                icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
            }) .catch(() => message.reply("Cannot post in your mod-log! Have you set my permissions correctly?"));
            const banEmbedpub = new Discord.RichEmbed()
            .setAuthor('Warn')
            .setDescription(`**Case Number**: ${guildcasenumber}\n\nUser <@${user.id}> Has Been Banned Due To Recieving 4 Warnings.\n**Reason**: ${reason}\n\n`)
            .setColor('DARK_RED')
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL)
            .setFooter(`Contact Staff If You Think This Is An Error`)
            send(warnlog, banEmbedpub, {
                name: 'Warn',
                icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
            }) .catch(() => message.reply("Cannot post in your warn-log! Have you set my permissions correctly?"));
        user.send(`You have been banned in ${message.guild.name}\n**Reason**: ${reason}\n\nTotal Warnings: ${num2}`) .catch(() => message.reply("Cannot Send Direct Message To "+user));
        numberwarn.set(`user_${user.id}_${message.guild.id}`, 0)
        message.guild.member(user).ban(reason).catch(() => message.reply("Cannot Ban "+user+ "! Give me permissions!"));
        } else {

        const warnEmbed = new Discord.RichEmbed()
            .setAuthor('Warn')
            .setDescription(`**Case Number**: ${guildcasenumber}\n\nUser <@${user.id}> Has Been Warned\n**Reason**: ${reason}\n\nTotal Warnings: ${num2}`)
            .setColor('DARK_RED')
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL)
            .setFooter(`Staff UID: ${mod.id} | Staff User: ${mod.tag}`)
        send(modlog, warnEmbed, {
            name: 'Warn',
            icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
        }) .catch(() => message.reply("Cannot post in your mod-log! Have you set my permissions correctly?"));
        const warnEmbedpub = new Discord.RichEmbed()
            .setAuthor('Warn')
            .setDescription(`**Case Number**: ${guildcasenumber}\n\nUser <@${user.id}> Was Warned\n**Reason**: ${reason}\n\nTotal Warnings: ${num2}`)
            .setColor('DARK_RED')
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL)
            .setFooter(`Contact Admins If You Think This Is An Error`)
        send(warnlog, warnEmbedpub, {
            name: 'Warn',
            icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
        }) .catch(() => message.reply("Cannot post in your warn-log! Have you set my permissions correctly?"));
        user.send(`You have been warned in ${message.guild.name}, Total Warnings: ${num2}\n**Reason**: ${reason}`) .catch(() => message.reply("Cannot Send Direct Message To "+user));
        }}
    }catch(err) {console.log(`Error with Warnings ${err}`)}}
        console.log("Warn envoyé suite à la demande de " + message.author.username);

    
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
       message.channel.send("Lien de la tierlist : <https://docs.google.com/spreadsheets/d/1oy8rZpwc66oC6Zxcrw3DRlMV5CNuO4dq8uOy6Uu3IOs/htmlview?sle=true#>")

    }


    if (message.content === prefix + "site"){ //Site Epic 7 guide
       message.channel.send("Lien du site : <http://epic7guide.pcriot.com>")
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
            return message.channel.send("Pose moi une question " + message.author.username + "! :8ball:")};

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
