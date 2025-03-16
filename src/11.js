const https = require('https');

const options = {
  hostname: 'api.github.com',
  path: '/users/octocat/repos',
  method: 'POST',
  headers: {
    'Authorization': `token ${process.env.GITHUB_TOKEN}`,
    'Content-Type': 'application/json'
  }
};

const req = https.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  res.on('data', (data) => {
    console.log(JSON.parse(data));
  });
});

req.on('error', (err) => {
  console.log('Error: ' + err);
});

req.write(JSON.stringify({
  "name": "github-repo-creator",
  "description": "Create a repo for your GitHub profile!",
  "private": false,
  "has_issues": true,
  "has_projects": true,
  "has_wiki": true
}));

req.end();
