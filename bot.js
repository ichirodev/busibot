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
    ctx.reply('lol');
});

bot.settings((ctx) => {
    ctx.reply('Hola puto');
});

/* ****** Commands ****** */
bot.command('mycommand', (ctx) => {
    ctx.reply('test command 1');
});

bot.command(['ToMan', 'TokyoManji', 'toman'], (ctx) => {
    ctx.reply('Tokyo Manji dominara Japón!');
});

/* ****** Extra ****** */
bot.hears('computer', ctx => {
    ctx.reply('Hey, I\'m selling a computer');
});

bot.on('text', ctx => {
    ctx.reply('ora verga');
});

bot.on('sticker', ctx => {
    ctx.reply('vwerga stickers');
});

bot.mention('BotFather', ctx => {
    ctx.reply('a');
});


/* ****** Start the bot and work in the back ****** */
log(chalk.bgRed.bold('  ' + process.env.BOT_NAME + '  '));
log(chalk.green(`Starting ${process.env.BOT_USERNAME} in Node`));
bot.launch();