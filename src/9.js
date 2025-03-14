const { Octokit } = require("octokit");
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

async function createRepo() {
  const repoName = "your-repo-name";
  const description = "Your repository description";
  const visibility = "public";
  const hasIssues = true;
  const hasProjects = true;
  const hasWiki = true;
  const licenseTemplate = "mit";

  try {
    const response = await octokit.repos.createForAuthenticatedUser({
      name: repoName,
      description,
      visibility,
      has_issues: hasIssues,
      has_projects: hasProjects,
      has_wiki: hasWiki,
      license_template: licenseTemplate
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
