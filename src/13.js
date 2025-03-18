const fs = require('fs');
const axios = require('axios');

const createRepo = async () => {
  const repoName = `github-repo-creator${Date.now()}`;

  try {
    const response = await axios.post(`https://api.github.com/orgs/${process.env.GITHUB_ORG}/repos`, {
      name: repoName,
      description: 'Create a repo for your GitHub profile!',
      private: false,
    });

    const repoUrl = `https://github.com/${response.data.full_name}`;

    fs.writeFileSync(`${__dirname}/repo-url.txt`, repoUrl);
  } catch (error) {
    console.log(error);
  }
};
