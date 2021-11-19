// BOT_NAME, BOT_USERNAME and API_TOKEN go inside the .env file
require('dotenv').config()
const { Telegraf } = require("telegraf")
const chalk = require('chalk');
let log = console.log;

// Create the bot object and give it the API Token to connect with
const bot = new Telegraf(process.env.API_TOKEN);

/* ****** Basic actions ****** */
bot.start((ctx) => {
    log(chalk.green(`[${ctx.from.id}]`) + chalk.yellow(` ${ctx.from.first_name} Started a conversation with the bot `))
    ctx.reply(`Bienvenido ${ctx.from.first_name}! En que te puedo ayudar?`);
});

bot.help((ctx) => {
    ctx.reply('La ayuda llegara pronto');
});

bot.settings((ctx) => {
    ctx.reply('Hola, mucho gusto');
});

/* ****** Commands ****** */
bot.command('mycommand', (ctx) => {
    ctx.reply('Comando de prueba 1');
});

bot.command(['ToMan', 'TokyoManji', 'toman'], (ctx) => {
    ctx.reply('Tokyo Manji dominara Japón!');
});

/* ****** Extra ****** */
bot.hears('computer', ctx => {
    ctx.reply('Oye, yo vendo computadoras');
});

bot.on('text', ctx => {
    ctx.reply('Mucho texto');
});

bot.on('sticker', ctx => {
    ctx.reply('Has enviado un sticker');
});

bot.mention('BotFather', ctx => {
    ctx.reply('El mismisimo');
});


/* ****** Start the bot and work in the back ****** */
log(chalk.bgRed.bold('  ' + process.env.BOT_NAME + '  '));
log(chalk.green(`Starting ${process.env.BOT_USERNAME} in Node`));
bot.launch();
