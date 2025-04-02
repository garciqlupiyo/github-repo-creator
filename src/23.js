const fs = require('fs');
fs.writeFileSync('profile.js', 'module.exports = {};');

fs.appendFile('profile.js', '/* Module: Profile */\n\nmodule.exports = {\n    name: \"GitHub Profile\",\n    // Define your profile here.\n}\n');

fs.appendFile('profile.js', `/**\n * @license MIT\n *\n * Copyright (c) 2019 GitHub, Inc. and other contributors\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\ndefine your profile here.\n */\n\nmodule.exports = {};`);
