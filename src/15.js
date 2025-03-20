const https = require('https');

// Create a new repository on GitHub
async function createRepo(repoName) {
  // Set up the request parameters
  const options = {
    hostname: 'api.github.com',
    path: `/user/repos`,
    method: 'POST',
    headers: {
      'Authorization': `token YOUR_TOKEN_GOES_HERE`, // Replace with your GitHub token
      'Content-Type': 'application/json'
    },
  };

  // Set up the request body
  const data = JSON.stringify({
    name: repoName,
    description: `A new repository created with ${repoName}`,
    homepage: `https://github.com/${repoName}`
  });

  // Make the request to create the repository
  const response = await https.request(options, data);
  return response;
}
