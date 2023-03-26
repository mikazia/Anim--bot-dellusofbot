const Dellubot = require('dellusofbot');

// on definie bot comme une instance Dellubot

const bot = new Dellubot();

// Token de bot Discord

const TOKEN = 'TOKEN OF YOUR BOT';

// Connexion du bot sur DISCORD

bot.botToken(TOKEN);
const activities = ['💓💗 animé bot / F+help 💗', '💗💓❣️💗❣️ Animé bot ♥️', '💙💝 crée en dellusofbot 💝💙', '💙💘💙💘💝💘💘💝💘💝'];

const time = 12000
bot.MultiAct(activities, time);
bot.CommandsStart('F+', {
  'help': message => {
const Embed = bot.createEmbed('💘💝HELP ANIMÉ BOT 💝💘💘', "LISTE DES COMMANDES : prefix : F+ / images : animegirl,cielmanga, animé,gio /aide et autres : help / commandes random : 8ball,love 💓💝💗♥️❣️", 'RANDOM', 'https://zupimages.net/up/23/12/9rjo.png');

bot.BotSendMsg(message.channel, Embed);

  },

});
bot.CommandsStart('F+', {
'animegirl': message => {
const Embed = bot.createEmbed('une fille danime ❣️❣️💓❣️💓❣️💓❣️💓♥️💓♥️💓♥️💓♥️💓♥️💓♥️💝💝❣️💝❣️', '❣️💙❣️💙❣️💙❣️💙', 'RANDOM', 'https://zupimages.net/up/23/11/fa8c.jpg');

bot.BotSendMsg(message.channel, Embed);

  },

});
bot.CommandsStart('F+', {

  'cielmanga': message => {

    const Embed = bot.createEmbed('ciel manga', '💙💙💙💙💙💙💙💙💙💙💙', 'RANDOM', 'https://zupimages.net/up/23/12/vafp.jpg');

bot.BotSendMsg(message.channel, Embed);

  },

});
bot.CommandsStart('F+', {

  'animé': message => {

    const Embed = bot.createEmbed('💙💙💘 animé', 'encore une image danime', 'RANDOM', 'https://zupimages.net/up/23/08/tsfv.jpg');

bot.BotSendMsg(message.channel, Embed);

  },

});
bot.CommandsStart('F+', {

  'gio': message => {

    const Embed = bot.createEmbed('💘💗🌝💘', '💓💘💓💘💓💘', 'RANDOM', 'https://zupimages.net/up/23/11/fon8.jpg');

bot.BotSendMsg(message.channel, Embed);

  },

});
bot.CommandsStart('F+', {

'8ball': message => {

 const mess = bot.randomMess(['oui! a coup sur ', 'non rêve pas', 'si tu y crois,alors oui', 'peut etre', 'non jamais de ta vie']);

  bot.BotSendMsg(message.channel, mess)

  },

});
bot.CommandsStart('F+', {

'love': message => {

 const mess = bot.randomMess(['💘 vous vous aimez un peu', '💘❣️ vous vous détestez', 'vous vous aimez beaucoup ']);

  bot.BotSendMsg(message.channel, mess)

  },

});
