// Create a new repository on GitHub using the `gh` command-line utility
const gh = require('gh');

// Get the username and password from the environment variables
const username = process.env.GITHUB_USERNAME;
const password = process.env.GITHUB_PASSWORD;

// Create a new repository with the name 'my-new-repo'
gh.createRepo('my-new-repo', {
  description: 'My brand new GitHub repo!',
  private: true,
  homepage: 'https://github.com/user/my-new-repo',
});

// Add a remote origin to the repository
gh.addRemoteOrigin('origin', {
  url: 'git@github.com:user/my-new-repo.git',
});

// Commit some changes to the repository
const commit = gh.commit({
  message: 'Initial commit',
  files: ['README.md'],
});
