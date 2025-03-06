async function createRepo(name) {
  const octokit = new Octokit({
    auth: `token ${process.env.GITHUB_TOKEN}`,
  });

  try {
    const response = await octokit.repos.createForAuthenticatedUser({ name });
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error creating repository", error);
  }
}
