
const jokes = require ('./jokes')
const telegramBot = require ('node-telegram-bot-api');
require('dotenv').config();
const  TOKEN = process.env.TOKEN;
const bot = new telegramBot (TOKEN, {polling: true});

var Piada = "Piada"
var piada = "piada" 
var data = "data"


bot.on('message', (message) =>{
    
// Essa função é responsavel por pegar um elemento de forma aleatória no array.
function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const result = getRandomItem(jokes);


const victor = "5502969683"
let chat_id = message.from.id
console.log(message)
console.log(Date())

if (message.text == piada){
    bot.sendMessage(chat_id, result);
}

if (message.text == Piada){

    bot.sendMessage(chat_id, result);
}
if (message.text == data){

    bot.sendMessage(chat_id, Date()); 
}

if(message.from.id == victor){

console.log('Victor enviou uma menssagem.')
}

bot.sendMessage(chat_id, ':) ');
bot.sendMessage(chat_id,  'Digite a palavra piada para ver uma piada ou data para ver a data de hoje.');

});

jokes.a

