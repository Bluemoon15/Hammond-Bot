//Burger Bot Lite, Developed by Blue
//Definitions and Module Requirements
const {
    Client,
    Intents,
    Collection,
    MessageEmbed,
    Channel
} = require('discord.js');


const fs = require('fs');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

client.commands = new Collection();
require('dotenv').config();

//Commands
const functions = fs.readdirSync("./functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./commands");

(async () => {
    for (file of functions) {
        require('./functions/${file}')(client);
  }
//Event handleing
    client.handleEvents(eventFiles, "./events");
    client.handleCommands(commandFolders, "./commands");
});

//Getting the bot online using the enviroment variable
client.login(process.env.token);

//Client bootup sequence, confirming startup
client.on('ready', () => {
    console.log('Wide Hammond | Version 1.0.0 Alpha | Developed by EMW Incorporated');
    console.log('Wide Hammond is maintained by Bluemoon7#9888');
    const Channel = client.channels.cache.get("881947092812177451");
    if (!Channel) return console.log("Invalid channel.");
    else;
    Channel.send("``I have been summoned and I will destroy the Universe. Fear Me.``");
    console.log("Startup Process Complete | Wide Hammond is Online");
    console.log("_____________________________________________________________________");
});

