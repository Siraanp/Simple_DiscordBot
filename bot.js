const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require('./auth.json');


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//Message SET
const greet_word = ["hello","hi","สวัสดี","konichiwa"]
const greet_ans = ["Hello Meow","ไงเมี้ยวววว","こんにちわ"]

const sad_word = ["sad","depress","เศร้า","ร้องไห้"]
const sad_ans = ["ไม่ร้องนะเมี้ยววววว","งื้อออมีอะไรระบายได้นะเมี้ยวว","Cheer Up,It will be fine nyan"]

const lonely_word = ["lonely","alone","เหงา","คนเดียว"]
const lonely_ans = ["มาเล่นเกมกับเมี้ยวได้น้าาาา","มาฟังเพลงกับเมี้ยวได้น้าาาาา"]




//Message BOT
client.on('message', msg => {

    /*if (msg.content.toLowerCase() === 'hello') {
        msg.channel.send('สวัสดีนะเมี้ยววว คุณ ' + msg.author.username +' [^OwO^]');
    }*/
    if (greet_word.some(word => msg.content.includes(word))) {
        const greet = greet_ans[Math.floor(Math.random() * greet_ans.length)]
        msg.reply(greet)
    }
    if (sad_word.some(word => msg.content.includes(word))) {
        const sad = sad_ans[Math.floor(Math.random() * sad_ans.length)]
        msg.reply(sad)
    }
    if (lonely_word.some(word => msg.content.includes(word))) {
        const lonely = lonely_ans[Math.floor(Math.random() * lonely_ans.length)]
        msg.reply(lonely)
    }

});

client.login(auth.token);