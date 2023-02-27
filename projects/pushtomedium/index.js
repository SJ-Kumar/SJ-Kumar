const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const Twit = require('twit');

const GITHUB_API_TOKEN = 'YOUR_GITHUB_API_TOKEN';
const MEDIUM_API_TOKEN = 'YOUR_MEDIUM_API_TOKEN';
const TWITTER_API_TOKEN = {
  consumer_key: 'YOUR_CONSUMER_KEY',
  consumer_secret: 'YOUR_CONSUMER_SECRET',
  access_token: 'YOUR_ACCESS_TOKEN',
  access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
};

const T = new Twit(TWITTER_API_TOKEN);

async function createNewRepository(repositoryName) {
      try {
            const response = await axios.post('https://api.github.com/user/repos', {
                  name: repositoryName
            }, {
                  headers: {
                        Authorization: `Bearer ${GITHUB_API_TOKEN}`
                  }
            });
            return response.data;
      } catch (error) {
            console.error(error);
      }
}

async function pushToRepository(repositoryName, content) {
      try {
            const response = await axios.put(`https://api.github.com/repos/USERNAME/${repositoryName}/contents/content.txt`, {
                  message: 'Add new content',
                  content: btoa(content)
            }, {
                  headers: {
                        Authorization: `Bearer ${GITHUB_API_TOKEN}`
                  }
            });
            return response.data;
      } catch (error) {
            console.error(error);
      }
}

async function createNewPost(title, content) {
      try {
            const response = await axios.post('https://api.medium.com/v1/users/USER_ID/posts', {
                  title,
                  contentFormat: 'html',
                  content,
                  publishStatus: 'draft'
            }, {
                  headers: {
                        Authorization: `Bearer ${MEDIUM_API_TOKEN}`
                  }
            });
            return response.data;
      } catch (error) {
            console.error(error);
      }
}

async function publishPost(postId) {
      try {
            const response = await axios.put(`https://api.medium.com/v1/users/USER_ID/posts/${postId}`, {
                  publishStatus: 'public'
            }, {
                  headers: {
                        Authorization: `Bearer ${MEDIUM_API_TOKEN}`
                  }
            });
            return response.data;
      } catch (error) {
            console.error(error);
      }
}

async function postTweet(status) {
      try {
            const response = await T.post('statuses/update', { status });
            return response.data;
      } catch (error) {
            console.error(error);
      }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', async (req, res) => {
      const content = req.body.content;
      const repositoryName = 'new-repo';
      const title = content.title;
      const body = content.body;

      try {
            await createNewRepository(repositoryName);
            await pushToRepository(repositoryName, body);
            const post = await createNewPost(title, body);
            await publishPost(post.id);
            await postTweet(`New post: ${title}`);
            res.status(200).json({ message: 'Success' });
      } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error' });
      }
});

app.listen(3000, () => console.log('Server is running on port 3000'));