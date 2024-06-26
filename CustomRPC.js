const { Client, RichPresence, SpotifyRPC } = require('discord.js-selfbot-v13');
const client = new Client();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./assets/config.json', 'utf8'));

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
  function setRichPresenceStatus() {
    const status = new RichPresence(client)
      .setApplicationId(config.RichPresence.applicationId)
      .setType(config.RichPresence.Type)
      .setURL(config.RichPresence.url)
      .setState(config.RichPresence.state)
      .setName(config.RichPresence.name)
      .setDetails(config.RichPresence.details)
      .setParty(config.RichPresence.party)
      .setStartTimestamp(Date.now())
      .setAssetsLargeImage(config.RichPresence.largeImage)
      .setAssetsLargeText(config.RichPresence.largeText)
      .setAssetsSmallImage(config.RichPresence.smallImage)
      .setAssetsSmallText(config.RichPresence.smallText)
      .addButton('Beatmap', config.RichPresence.buttonUrl);
    client.user.setPresence({ activities: [status] });
  }

  function setSpotifyStatus() {
    const SongLengthSec = config.Spotify.songlengthsec;
    const EndTimestamp = Date.now() + 1000 * SongLengthSec;

    const spotify = new SpotifyRPC(client)
    .setAssetsLargeImage(config.Spotify.largeImage)
    .setAssetsSmallImage(config.Spotify.smallImage)
    .setAssetsLargeText(config.Spotify.largeText)
    .setState(config.Spotify.state)
    .setDetails(config.Spotify.details)
    .setStartTimestamp(Date.now())
    .setEndTimestamp(EndTimestamp) // Song length = 3m40s
    .setSongId(config.Spotify.songId)
    .setAlbumId(config.Spotify.albumId)
    .setArtistIds(config.Spotify.artistIds);
    client.user.setPresence({ activities: [spotify] });
  }
  
  function ManagerSpotifyRich() {
    if (config.Enabled.Spotify) {
      setSpotifyStatus();
      console.log('Đang chọn SpotifyRPC.');
    } else if (config.Enabled.RichPresence) {
      setRichPresenceStatus();
      console.log('Đang chọn RichPresence.');
    }
  }
ManagerSpotifyRich();

});

client.login(config.Token);