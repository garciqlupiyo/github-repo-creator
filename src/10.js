const repoName = "my-cool-repo";

// Create a new repository on GitHub
octokit.repos.createForAuthenticatedUser({
  name: repoName,
  description: "A cool repository",
});
