const Discord = require("discord.js");
const bot = new Discord.Client();
var isReady = true;

const prefix = "s!"

//Příkazy

//Ahoj

bot.on("message", function(message){
 if(message.content === "Ahoj"){

    message.reply("Ahoj ! ");
 }

});
//konec "Ahoj"

//web
bot.on("message", function(message){
if(message.content === prefix+"web")

message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "MOJE WEBY",
    url: "",
    description: "Zde najdeš všechny moje weby",
    fields: [{
        name: "SorlíkDJ",
        value: "Stránka kde živě hraje Evropa 2 × http://sorlikdj.cf"
      },
      {
        name: "SorlikWeb",
        value: "Můj official web × http://sorlikweb.cf"
      },
      {
        name: "BestKawaii",
        value: "**[stránka se dodělává]** Kawaii obrázky pro Šárku × http://bestkawaii.cf"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "Foxíček © By Sorlík"
    }
  }
});
},);
//konec "web"

//Moje Officiální servery

bot.on("message", function(message){
  if(message.content === prefix+"server")
  
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "**Můj officiální server**",
    url: "https://discord.gg/qqyq59M",
    description: "Joinneš se kliknutím na nadpis :)",
      timestamp: new Date(),
      footer: {
        icon_url: bot.user.avatarURL,
        text: "Foxíček © By Sorlík"
      }
    }
  });
  },);
//konec "oficiální server"

//fun command . Kouření

  //konec kouření
  bot.on("message", function(message){
    if (message.content == prefix+"smoke")
    
        message.channel.send('**Chceš cígo ? :D**').then(async msg => {
            setTimeout(() => {
                msg.edit('🚬');
            }, 500);
            setTimeout(() => {
                msg.edit('🚬 ☁ ');
            }, 1000);
            setTimeout(() => {
                msg.edit('🚬 ☁☁ ');
            }, 1500);
            setTimeout(() => {
                msg.edit('🚬 ☁☁☁ ');
            }, 2000);
            setTimeout(() => {
                msg.edit('🚬 ☁☁');
            }, 2500);
            setTimeout(() => {
                msg.edit('🚬 ☁');
            }, 3000);
            setTimeout(() => {
                msg.edit('🚬 ');
            }, 3500);
            setTimeout(() => {
                msg.edit(`KONEC`);
            }, 4000);
        });
      },);
//avatar
bot.on('message', message => {

  if (message.content === prefix+'avatar') {

    message.reply(message.author.avatarURL);
  }
});
//konec avatar

bot.on('guildCreate', guild => {
  guild.systemChannel.send("**Právě jsem se připojil !!!**")

},);




//RIP
bot.on('message', message => {
  if (isReady && message.content === prefix+'evropa2')
  {
    message.channel.send("🎵 Právě hraje : Evropa 2 🎵")
  isReady = false;
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playStream('http://icecast3.play.cz/evropa2-128.mp3');
     dispatcher.on("end", end => {
       voiceChannel.leave();
       });
   }).catch(err => console.log(err));
   isReady = true;
  }
});

//konec RIP

//aktivita


  //konec aktivity

//ping

bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + 'ping')) {
      message.channel.sendMessage('Pong! Tvůj ping je  `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
  }
});

//konec ping

//8ball
bot.on('message', message => {
  if(message.content == prefix+"cookie")
  message.reply("tady je sušenka pro tebe :) 🥛🍪")

},);
//konec 8ball

//help
bot.on('message', message => {
  if(message.content == prefix+"help")

  message.author.send({embed: {
    color: 2384021,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Help - Nápověda ",
    url: "",
    description: "Zde jsou všechny příkazy :)",
    fields: [{
        name: "😋 | Zábavné Commandy \n Smí používat všichni",
        value : "`s!smoke` Zakouříš si se mnou :)   \n `s!web` Ukáže ti můj web \n `s!cookie` Dám ti sušenku \n `s!ping` Ukáže ti **tvůj** ping \n `s!evropa2` Hraji Evropu2 \n `s!server` Můj officiální server \n `s!avatar` Ukáže ti tvůj avatar \n `Ahoj` **[piš bez prefixu s velkým A]** Podravíme se \n `s!help` Pošlu ti nápovědu                              "
      },
      {
        name: "🔐 | Admin Commandy \n Smí používat jen Administrátoři ",
        value: "`Můj bot je jen na zábavu :) Sorry jako`"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© Sorlík Bot"
    }
  }
});
},);

//evropa2
const activities_list = [
  "si v Sorlíkově.", 
  "Developed by Sorlík",
  "Má rád Sorlíka", 
  "si u Sorlíka"
  ]; // creates an arraylist containing phrases you want your bot to switch through.

bot.on('ready', () => {
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
      bot.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
  }, 5000); // Runs this every 10 seconds.
});
//konec evropa2
bot.login("NTI0NjM0NTE5NjIyNTE2NzQy.DwU-ig.57g2rzBZf3LaDAiDWmLKBusGWwQ");