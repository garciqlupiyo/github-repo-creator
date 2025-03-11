const fs = require('fs');
const { promisify } = require('util');
const writeFileAsync = promisify(fs.writeFile);

async function createRepo() {
  const repoName = 'github-repo-creator';
  const repoDescription = 'Create a repo for your GitHub profile!';
  const repoVisibility = 'public';
  const owner = process.env.GITHUB_OWNER || 'your-username';
  const token = process.env.GITHUB_TOKEN || '';

  try {
    const response = await fetch(`https://api.github.com/user/repos`, {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: repoName,
        description: repoDescription,
        visibility: repoVisibility,
        owner: owner
      })
    });

    const data = await response.json();
    console.log(`Created repo ${data.name} (${data.id})`);
  } catch (error) {
    console.error(error);
  }
}

createRepo().then(() => {
  console.log('Done!');
});
