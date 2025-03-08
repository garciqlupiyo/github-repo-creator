// Repo Creator Module
const { Octokit } = require("@octokit/rest");

async function createRepo(githubToken, repoName) {
  const octokit = new Octokit({ auth: `token ${githubToken}` });

  // Create a new repository
  const response = await octokit.repos.createForAuthenticatedUser({ name: repoName });

  // Check if the repository was created successfully
  if (response.status === 201) {
    console.log(`Repository ${repoName} created!`);
  } else {
    console.error(`Error creating repository ${repoName}:`, response.data);
  }
}
