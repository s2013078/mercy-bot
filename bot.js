var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '?') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'hi':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hi you too!!'
                });
            break;
			case '7':
                bot.sendMessage({
                    to: channelID,
                    message: '柒!'
                });
            break;
			case '7head':
                bot.sendMessage({
                    to: channelID,
                    message: '柒頭!'
                });
            break;
			case 'actor':
                bot.sendMessage({
                    to: channelID,
                    message: '演員-是指在日常生活中扮演某個角色的人物或動物，亦指在考試後裝作一竅不通，但在對卷時卻異常高分的人!'
                });
            break;
			case 'command':
                bot.sendMessage({
                    to: channelID,
                    message: '群組核心:\n?doctorx , ?nfl , ?pony , ?rainbow6\n詞語:\n?actor , ?divided , ?miniact , ?smile_knife , ?shit\nGoodword:\n?shutup , ?stfu , ?fuck , ?fuckyou , ?7 ,?7head\n幫助:\n?help , ?mute_sc , ?rule \n人生值得一看:\n?cyweb . ?ngchunyin ,?tonyking'
					});
            break;
			case 'cyweb':
                bot.sendMessage({
                    to: channelID,
                    message: 'http://www.cynproducts.ga!'
                });
            break;
			case 'divided':
                bot.sendMessage({
                    to: channelID,
                    message: '搞分化-激化群體或成員之間的矛盾。撕裂群體或成員，令其信念和利益差異而產生對立，甚至處於分裂狀態。!'
                });
            break;
			case 'doctorx':
                bot.sendMessage({
                    to: channelID,
                    message: '直言敢諫的派遣醫師大門未知子，討厭結群、討厭權力、討厭束縛，以其專業執照以及高超的技術作為武器，勇於挑戰白色巨塔封建體系的故事。「我，絕不失敗。」（私、失敗しないので。）。!'
                });
            break;
			case 'fuck':
                bot.sendMessage({
                    to: channelID,
                    message: '屌!'
                });
            break;
			case 'fuckyou':
                bot.sendMessage({
                    to: channelID,
                    message: '屌你!'
                });
            break;
			case 'miniact':
                bot.sendMessage({
                    to: channelID,
                    message: '小動作-在集體性強的活動中偷偷地做出不協調的動作。 引申指為了個人或小集團的利益在背地里搞不正當活動， 如播弄是非、弄虛作假等。!'
                });
            break;
			case 'mute_sc':
                bot.sendMessage({
                    to: channelID,
                    message: "How to mute song channel's text channel.\nhttps://imgur.com/i9436UT!"
                });
            break;
			case 'nfl':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://www.nfl.com/!'
                });
            break;
			case 'ngchunyin':
                bot.sendMessage({
                    to: channelID,
                    message: '神一般的存在!'
                });
            break;
case 'pony':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://www.instagram.com/ponysmakeup/!'
                });
            break;
case 'rainbow6':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://zh.wikipedia.org/wiki/%E8%99%B9%E5%BD%A9%E5%85%AD%E8%99%9F%EF%BC%9A%E5%9C%8D%E6%94%BB%E8%A1%8C%E5%8B%95#%E8%AE%BE%E5%AE%9A!'
                });
            break;
case 'rule':
                bot.sendMessage({
                    to: channelID,
                    message: '房間規則:\n一.請以「Doublek_Jasper」為最高領導人 (以下規則都萬變不離其宗)\n二.嚴禁討論垃圾遊戲, 如 PUBG , Fortnite ,Human Fall Flat , LOL 等等\n三.請勿一次發過多個人心得，抱怨廢文與無意義文 (最高領導人除外)\n四.不能說任何有損害 Doublek_Jasper ,Pony , NFL , R6 , Doctor x 形象的言語\n五.請以最高禮贊和最高尊重對待 Doublek_Jasper ,Pony , NFL , R6, Doctor x等話題\n六.如發現有違反以上規則，發文會直接刪除，不會提醒發文者\n(最後提醒大家在不能選擇的情況下唯有做好自己本份)!'
                });
            break;
case 'shit':
                bot.sendMessage({
                    to: channelID,
                    message: '低端人口-大陸狗 , 韓狗 , 台狗 , camp 狗 , dropshot 狗!'
                });
            break;
case 'shutup':
                bot.sendMessage({
                    to: channelID,
                    message: '收皮喇!'
                });
            break;
case 'smile_knife':
                bot.sendMessage({
                    to: channelID,
                    message: '笑裡藏刀是兵法三十六計的第十計。原文為：「信而安之，陰而圖之；備而後動，勿使有變。 剛中柔外也。」（ 使敵人相信我方的“友好誠意”而麻痺鬆懈；我則藉機暗中謀劃，積極準備，待機行動切不要讓它發生變化。!'
                });
            break;
case 'stfu':
                bot.sendMessage({
                    to: channelID,
                    message: '收撚皮喇!'
                });
            break;
case 'tonyking':
                bot.sendMessage({
                    to: channelID,
                    message: '神一般的存在!'
					});
            break;
        
         }
     }
});
client.login(process.env.BOT_TOKEN);
