const axios = require('axios');
const qs = require('querystring');

const API_URL = 'https://api.github.com';
const GITHUB_USERNAME = 'your-github-username';
const GITHUB_TOKEN = 'your-github-token';

async function createRepo(repoName, repoDescription) {
  const payload = {
    name: repoName,
    description: repoDescription,
    private: false,
  };

  const response = await axios.post(`${API_URL}/user/repos`, qs.stringify(payload), {
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return response.data;
}
