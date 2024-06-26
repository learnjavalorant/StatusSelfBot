const { Client, CustomStatus } = require('discord.js-selfbot-v13');
const client = new Client();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./assets/config.json', 'utf8'));

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);

    let CustomStatusText = [];
    let CustomStatusInt = 0;
    
    function ReadFile() {
        const data = fs.readFileSync('./assets/text.txt', 'utf8');
        CustomStatusText = data.split('\n').map(line => {
          const [emoji, text] = line.split(':');
          return { emoji, text };
        });
      }
    
      function SetCustomStatus() {
        if (CustomStatusText.length === 0) return;
        const { emoji, text } = CustomStatusText[CustomStatusInt];
        const custom = new CustomStatus(client).setEmoji(emoji).setState(text);
        client.user.setPresence({ activities: [custom] });
        CustomStatusInt = (CustomStatusInt + 1) % CustomStatusText.length;
      }
    
      function ManagerCustomStatus() {
        ReadFile();
        SetCustomStatus();
        setInterval(SetCustomStatus, config.Delay.CustomStatusDelay);
      }
      ManagerCustomStatus();
    });
    client.login(config.Token);