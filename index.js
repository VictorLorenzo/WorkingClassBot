const token = "MTAzMjczNDA1NDkyMTAyNzY0OQ.G7cBla.zr4OrBZhFlax_0e-YtysXAZRHX7JBnwrnWdukE"; //Token that you saved in step 5 of this tutorial
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