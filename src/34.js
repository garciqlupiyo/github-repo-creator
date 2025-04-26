// Create a new repository named "GitHub Profile"
const fs = require('fs');
fs.mkdirSync('./github-repo-creator');

// Add an entry in the .gitignore file to exclude the `.js` files from Git's tracking
fs.appendFile('./.github-repo-creator/.gitignore', '.*\\.js$');

// Commit and push the changes to ensure only the new repository is tracked by Git
fs.statSync('./github-repo-creator').createReadStream().pipe(fs.createWriteStream());
