# StatusSelfBot
```
{
  "Token": "YOUR_DISCORD_TOKEN",
  "RichPresence": {
    "applicationId": "YOUR_APPLICATION_ID",
    "Type": 0,
    "url": "https://example.com",
    "state": "State",
    "name": "Name",
    "details": "Details",
    "party": {
      "id": "party123",
      "size": [1, 5]
    },
    "largeImage": "large_image_key",
    "largeText": "Large Image Text",
    "smallImage": "small_image_key",
    "smallText": "Small Image Text",
    "buttonUrl": "https://example.com/button"
  },
  "Spotify": {
    "songlengthsec": 220,
    "largeImage": "spotify_large_image_key",
    "smallImage": "spotify_small_image_key",
    "largeText": "Spotify Large Image Text",
    "state": "Spotify State",
    "details": "Spotify Details",
    "songId": "spotify_song_id",
    "albumId": "spotify_album_id",
    "artistIds": ["artist_id1", "artist_id2"]
  },
  "Enabled": {
    "Spotify": true,
    "RichPresence": false
  }
}

```
