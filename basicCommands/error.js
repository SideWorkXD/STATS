
const { EmbedBuilder } = require('discord.js');

const errors = [
  {
    keywords: 'application did not respond',
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('Restart Your Bot Code')
      .setDescription('✅ Just go to your bot host then stop the code then run it again!\n\n▶️ If you trying to use bot ghost status remover just **stop the both codes** and run the remover code first'),
  },
  {
    keywords: 'application not responding',
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('Restart Your Bot Code')
      .setDescription('✅ Just go to your bot host then stop the code then run it again!\n\n▶️ If you trying to use bot ghost status remover just **stop the both codes** and run the remover code first'),
  },
  {
    keywords: 'bot not responding',
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('Restart Your Bot Code')
      .setDescription('✅ Just go to your bot host then stop the code then run it again!\n\n▶️ If you trying to use bot ghost status remover just **stop the both codes** and run the remover code first'),
  },
  {
    keywords: 'commands not working',
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('Restart Your Bot Code')
      .setDescription('✅ Just go to your bot host then stop the code then run it again!\n\n▶️ If you trying to use bot ghost status remover just **stop the both codes** and run the remover code first'),
  },
  {
    keywords: 'replit',
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('Someone talking about replit')
      .setDescription('🔴 **Officail Announcement from REPLIT :** After January 1st, Deployments will be the only way to host applications on Replit.\n\n✨ Best alternative for the replit is Render which works with help of GitHub. ')
    .setURL('https://www.youtube.com/watch?v=jJcoFdvsZ8I'),
  },
  
  {
    keywords: 'used disallowed intents',
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('You Didn\'t Turn On Intents')
      .setDescription('**▶️ Follow Below Steps:**\n\n1. Go to https://discord.com/developers/applications\n2. Go to your bot Section then below the token you can find intents turn them on.\n3. watch this video if you can\'t Understand! https://cdn.discordapp.com/attachments/1192831222745927701/1199037727220453566/Intetns-1.mp4 ')
    .setImage('https://cdn.discordapp.com/attachments/1192831222745927701/1199043320932995133/image.png'),
     
  },
  {
    keywords: 'disallowed intents',
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('You Didn\'t Turn On Intents')
      .setDescription('**▶️ Follow Below Steps:**\n\n1. Go to https://discord.com/developers/applications\n2. Go to your bot Section then below the token you can find intents turn them on.\n3. watch this video if you can\'t Understand! https://cdn.discordapp.com/attachments/1192831222745927701/1199037727220453566/Intetns-1.mp4 ')
    .setImage('https://cdn.discordapp.com/attachments/1192831222745927701/1199043320932995133/image.png'),

  },
  {
    keywords: 'intents',
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('You Didn\'t Turn On Intents')
      .setDescription('**▶️ Follow Below Steps:**\n\n1. Go to https://discord.com/developers/applications\n2. Go to your bot Section then below the token you can find intents turn them on.\n3. watch this video if you can\'t Understand! https://cdn.discordapp.com/attachments/1192831222745927701/1199037727220453566/Intetns-1.mp4 ')
    .setImage('https://cdn.discordapp.com/attachments/1192831222745927701/1199043320932995133/image.png'),

  },
  {
    keywords: 'invalid token',
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('Invalid Bot Token')
      .setDescription('⚠️ The token you provided for your bot is invalid. Please double-check your bot token or update it by keeping TOKEN in environment variables\n\n **▶️ token ❌    TOKEN ✅**')
    .setImage('https://cdn.discordapp.com/attachments/1196338346818027661/1199043994987008092/image.png?ex=65c11bbd&is=65aea6bd&hm=6f7efa5d97549dc836f6a826dc530acd5e0da43c8dc1c4230ca09ca4911bd5f1&'),
  },
  {
    keywords: 'incorrect token',
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('Invalid Bot Token')
      .setDescription('⚠️ The token you provided for your bot is invalid. Please double-check your bot token or update it by keeping TOKEN in environment variables\n\n **▶️ token ❌    TOKEN ✅**')
    .setImage('https://cdn.discordapp.com/attachments/1196338346818027661/1199043994987008092/image.png?ex=65c11bbd&is=65aea6bd&hm=6f7efa5d97549dc836f6a826dc530acd5e0da43c8dc1c4230ca09ca4911bd5f1&'),
  },
  {
    keywords: 'no permissions',
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('Missing Permissions')
      .setDescription('✨ Please ensure your bot has the required permissions make sure to tick correct permissions while inviting the bot.')
    .setImage('https://cdn.discordapp.com/attachments/1192831222745927701/1199047555779137727/image.png?ex=65c11f0e&is=65aeaa0e&hm=7d3cf30f6ac3c3b612d3360868bf9bcea9516cf1ae63af8e63a4892d0a6875fc&'),
  },
  {
    keywords: 'missing permissions',
    embed: new EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('Missing Permissions')
      .setDescription('✨ Please ensure your bot has the required permissions make sure to tick correct permissions while inviting the bot.')
    .setImage('https://cdn.discordapp.com/attachments/1192831222745927701/1199047555779137727/image.png?ex=65c11f0e&is=65aeaa0e&hm=7d3cf30f6ac3c3b612d3360868bf9bcea9516cf1ae63af8e63a4892d0a6875fc&'),
  }
];

const cooldowns = new Map();

module.exports = {
  name: 'error',
  description: 'Automatically responds to matching errors.',
  cooldown: 10, 
  execute(message) {
    if (!cooldowns.has(this.name)) {
      cooldowns.set(this.name, {});
    }

    const now = Date.now();
    const timestamps = cooldowns.get(this.name);
    const cooldownAmount = (this.cooldown || 10) * 1000;

    if (timestamps[message.author.id]) {
      const expirationTime = timestamps[message.author.id] + cooldownAmount;

      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        return message.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) before going for next \`${this.name}\`.`);
      }
    }
    timestamps[message.author.id] = now;
    setTimeout(() => delete timestamps[message.author.id], cooldownAmount);
    for (const error of errors) {
      if (message.content.toLowerCase().includes(error.keywords)) {
        message.reply({ embeds: [error.embed] });
        return;
      }
    }
  },
};