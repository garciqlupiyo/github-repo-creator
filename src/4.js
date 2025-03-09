const https = require('https');
const querystring = require('querystring');

const requestOptions = {
  hostname: 'api.github.com',
  path: `/repos/${user}/${repo}`,
  method: 'POST',
  headers: {
    Authorization: `token ${token}`,
    'Content-Type': 'application/json'
  }
};

const postData = JSON.stringify({ name: repo });

https.request(requestOptions, res => {
  console.log(`Status code: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(`Response: ${JSON.stringify(data)}`);
  });
}).on('error', error => {
  console.error(`Error: ${error.message}`);
});
