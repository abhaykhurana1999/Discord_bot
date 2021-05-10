const Discord = require("discord.js");
const config = require("./config.json");
const {cusswords}=require("./random")

const client = new Discord.Client();

const prefix = "!";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
  else if(command==="subtract")
  {
    const numArgs = args.map(x => parseFloat(x));
    const Subtract= numArgs.reduce((counter, x) => counter -=x);
    message.reply(`The Subtaraction of all the arguments you provided is ${Subtract}!`);
  }

  else if(command==="multiply")
  {
    const numArgs = args.map(x => parseFloat(x));
    const multiply= numArgs.reduce((counter, x) => counter =counter*x);
    message.reply(`The Multiplication of all the arguments you provided is ${multiply}!`);
  }
  
  else if(command==="divide")
  {
    const numArgs = args.map(x => parseFloat(x));
    const Div= numArgs.reduce((counter, x) => counter =counter/x);
    message.reply(`The Division of all the arguments you provided is ${Div}!`);
  }

  else 
  {
     message.reply(cusswords());
  }
});

client.login(config.BOT_TOKEN);