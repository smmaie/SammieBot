
const { Client, Intents, Message, DiscordAPIError, VoiceState } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });



// online/offline

client.once('ready',() => {
    console.log('online');
});

// prefix

const prefix= '+';

//message replier 

client.on('message', message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split("/ +/");
    const command = args.shift().toLowerCase();

    if(command === 'hallo')
        message.channel.send('Hallo');
    
    if(command === 'ping')
        message.channel.send('pong');

        const messages = [" is de lul", ", de borden worden niet vanzelf schoon!", " Afwassen hoort er ook bij", " is de sjaak", " de spons ligt al klaar"]
        let randomMessage = messages[Math.floor(Math.random() * messages.length)];

            if (command === 'afwas') {
              message.channel.send( message.guild.members.cache.random().user.toString()+ randomMessage)
            }
         

});
//end

client.login(process.env.token);
