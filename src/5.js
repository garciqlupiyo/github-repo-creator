// Create a new repository using the octokit library
const { Octokit } = require("@octokit/rest");

// Initialize the Octokit client with your GitHub token
const octokit = new Octokit({
  auth: "your-github-token"
});

// Create a new repository using the createRepo method
async function createRepository(repoName, description) {
  const response = await octokit.repos.createForAuthenticatedUser({
    name: repoName,
    description: description,
    private: true
  });

  // Return the repository URL
  return response.data.html_url;
}
