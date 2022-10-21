require("dotenv").config();

const token = process.env.TOKEN_DISCORD; //Token that you saved in step 5 of this tutorial
const {Client, GatewayIntentBits} = require("discord.js");
const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ],
});
client.on("ready", () =>{
    console.log("The AI bot is online"); //message when bot is online
});
client.login(token);