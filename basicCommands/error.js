const { EmbedBuilder } = require('discord.js');

const errors = [
  {
    keywords: ['How to download After effects', 'How to download Premier pro','How to download media encoder'],
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('How to download Free Software')
      .setDescription(' ▶️ If you get this error means YouTube API is used all.Watch This Video to get free API \n🔴 Link : https://youtu.be/-VCztMrNqRU')
      .setImage('https://cdn.discordapp.com/attachments/1170652474563117138/1201592073560789104/fyFl.gif?ex=65ca60d2&is=65b7ebd2&hm=e467baa9d8a5fe5820a81eb196360c76d0e2549cdf1d27f4459434b9053d0c78&'),
  },
{
    keywords: ['Quality settings for after effects', 'Quality settings for premier pro','Quality settings'],
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('Best Quality Settings')
      .setDescription('**Here is the video guide to edit bot ghost status on github.**\nhttps://cdn.discordapp.com/attachments/1039224128873443340/1213858294142341160/2024-03-03_20-02-28.mp4?ex=65f700a1&is=65e48ba1&hm=2acecf70f3fb882e24869d0ca2babc0e6eea707690ab3e63081b4db18cecc81e&'),
  },
  {
    keywords: ['Invalid menu operation'],
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('Invalid menu operation')
      .setDescription('⚠️ The token you provided for your bot is invalid. Please double-check your bot token or update it by keeping TOKEN in environment variables\n\n **▶️ token ❌    TOKEN ✅**')
      .setImage('https://cdn.discordapp.com/attachments/1196338346818027661/1199043994987008092/image.png?ex=65c11bbd&is=65aea6bd&hm=8dc1c46f7efa5d97549dc836f6a826dc530acd5e0da43c230ca09ca4911bd5f1&'),
  },
  {
    keywords: ['slow preview', 'laggy preview'],
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('How to host bot online forever')
      .setDescription('To host your bot online 24hrs, follow these steps:\n\n1. Make sure your bot is online and running.\n2. Now on render copy the link of your dashboard as shown in below.\n3. Go to [better stack](https://betterstack.com/) and create a new monitor.\n3. Then add the link you copied in step 2 in the URL section.\n4. Now your bot will be online 24hrs.')
      .setImage('https://cdn.discordapp.com/attachments/1170652474563117138/1201585363995607162/image.png?ex=65ca5a93&is=65b7e593&hm=0f5357dc194f787289718e8cb0f88b115fbccf3a7db370ef5f57701e8ad253ba&'),
  },
  {
    keywords: ['replit','replit not working'],
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('Replit is No Longer Supported')
      .setDescription('🔴 **Officail Announcement from REPLIT :** After January 1st, Deployments will be the only way to host applications on Replit. It means you cannot host bots free on Replit, you need to pay.\n\n✨ Best alternative for the replit is Render which works with help of GitHub. ')
    .setImage('https://cdn.discordapp.com/attachments/1192831222745927701/1201590314108997692/Hm8L.gif?ex=65ca5f2f&is=65b7ea2f&hm=8df88890ab5dd57fa339e37c30be810fb019bfbbb9d9c1117e1a30e2b2d1e05b&'),
  },
  {
    keywords: ['card','credit card','asking card','payment','debit card','need to pay'],
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('What? just no need to pay')
      .setDescription('**Everything is free!**\nMake sure you choose free option below. If you choose paid option, you will be redirected to the payment page.\n\nBoth Bettstack and Render are free no need to pay just make sure to check the free option by going to previous page or plan while hosting on Render.\n\n**▶️ USE VPN IF YOU CANNOT FIND FREE OPTION**')
    .setImage('https://cdn.discordapp.com/attachments/1192831222745927701/1201589516734054440/CK5.gif?ex=65ca5e71&is=65b7e971&hm=7cfaabddf7da2efde8e80a28fa45db92e9987d006a415c277b1d98cf72a55ea6&'),
  },
  {
    keywords: ['missing permissions', 'no permissions'],
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('Missing Permissions')
      .setDescription('✨ Please ensure your bot has the required permissions make sure to tick correct permissions while inviting the bot.')
      .setImage('https://cdn.discordapp.com/attachments/1192831222745927701/1199047555779137727/image.png?ex=65c11f0e&is=65aeaa0e&hm=7d3cf30f6ac3c3b612d3360868bf9bcea9516cf1ae63af8e63a4892d0a6875fc&'),
  },
  {
    keywords: ['application did not respond', 'application not responding', 'bot not responding', 'commands not working'],
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('Restart Your Bot Code')
      .setDescription('✅ Just go to your bot host then stop the code then run it again!\n\n▶️ If you trying to use bot ghost status remover just **stop the both codes** and run the remover code first'),
  },
  {
    keywords: ['used disallowed intents', 'disallowed intents', 'intents'],
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('You Didn\'t Turn On Intents')
      .setDescription('**▶️ Follow Below Steps:**\n\n1. Go to https://discord.com/developers/applications\n2. Go to your bot Section then below the token you can find intents turn them on.\n3. watch this video if you can\'t Understand! https://cdn.discordapp.com/attachments/1192831222745927701/1199037727220453566/Intetns-1.mp4 ')
      .setImage('https://cdn.discordapp.com/attachments/1192831222745927701/1199043320932995133/image.png'),
  },

];


const allowedChannels = ['1155419223523348500', '1131584969844723794', '1169596862098059325', '1113800536483975267', '1113800536483975266', '1113800536483975264','1192831222745927701','1170652474563117138']; 

const cooldowns = new Map();

module.exports = {
  name: 'error',
  description: 'Automatically responds to matching errors.',
  cooldown: 3,
  execute(message) {
    if (!allowedChannels.includes(message.channel.id)) {
      return;
    }

    if (!cooldowns.has('error')) {
      cooldowns.set('error', new Map());
    }

    const now = Date.now();
    const timestamps = cooldowns.get('error');
    const cooldownAmount = (3) * 1000; 

    if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
      }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    for (const error of errors) {
      if (Array.isArray(error.keywords)) {
        for (const keyword of error.keywords) {
          if (message.content.toLowerCase().includes(keyword.toLowerCase())) {
            message.reply({ embeds: [error.embed] });
             message.react('✅')
            return;
          }
        }
      } else {
        if (message.content.toLowerCase().includes(error.keywords.toLowerCase())) {
          message.reply({ embeds: [error.embed] });
          return;
        }
      }
    }
  },
};
