async function createRepo(name) {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  await octokit.repos.createForAuthenticatedUser({ name });
}
