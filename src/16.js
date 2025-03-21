const fs = require('fs');
const path = require('path');

// Read all lines from stdin and write to stdout
process.stdin.pipe(fs.createWriteStream(path.join(__dirname, 'output.txt')));
