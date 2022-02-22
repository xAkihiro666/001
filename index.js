const aoijs = require("aoi.js");
const express = require("express");
const variables = require("./variables.js");
//My "squerky squeky" express server
const app = express();

app.get('/', (req, res) => {
    res.send('666 Project')
});

app.listen(3000, () => {
    console.log('');
});

//I'll configure the prefix later after I add the JSON file and command handler.
const bot = new aoijs.Bot({
    token: process.env.TOKEN,
    prefix: [`$getServerVar[prefix]`, '<@$clientID>', '<@!$clientID>'],
    fetchInvites: true,
    /*errorMessage: `{title:**__SOMETHING WENT WRONG!__**}{description:An error occured! Please contact the [Developer](https://discord.bio/p/akihiro666)}{color:e91324}`,*/
    intents: "all",
    autoUpdate: true,
    database: {
        type: "default",
        path: "./database/",
        tables: ["main"],
        promisify: false
    }
});

// const voice = new aoijs.Voice(bot, {
//   cache: {
//     cacheType: "Memory",//Disk | None
//     enabled: true,
//   },
// });

bot.variables(variables);

bot.onMessage({
    respondToBots: false,
    guildOnly: true
});


const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./Commands/") //Command handler shyt
bot.onJoin()
bot.onLeave()
bot.onInteractionCreate()


bot.status({
    text: "Wild Rift", // Sets a fckin text after the "type"
    type: "PLAYING", // STREAMING, LISTENING, WATCHING, COMPETING, PLAYING
    status: "dnd", // idle, dnd, online, invisible
    time: 12 // This shyt will enable those shyts up there depending on the time that's here...
}); 
