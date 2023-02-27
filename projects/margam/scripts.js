// Get the latest tweet
/* const latestTweet = document.getElementById('latest-tweet');

fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=1', {
  headers: {
    'Authorization': 'Bearer ACCESS_TOKEN'
  }
})
.then(response => response.json())
.then(data => {
  const tweet = data[0];
  latestTweet.innerHTML = `
    <p>${tweet.text}</p>
    <small>${tweet.created_at}</small>
  `;
})
.catch(error => console.error(error)); */

// Get the latest video
const latestVideo = document.getElementById('latest-video');

fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCnPb68yffLHdI_E24ycQ_xp42f-LuklvQ&maxResults=10&type=video&order=date&part=snippet&channelId=UCjKvB7E6YiqV9_UMjBC9BHA')
.then(response => response.json())
.then(data => {
  const videos = data.items;

  for (let i = 0; i < videos.length; i++){
      const video = videos[i]
      const videoId = video.id.videoId;
      const videoTitle = video.snippet.title;

      const videoElement = document.createElement('iframe');
      videoElement.src = 'https://www.youtube.com/embed/${videoId}';
      videoElement.title = videoTitle;
      document.body.appendChild(videoElement);
 
  }
})
.catch(error => console.error(error));