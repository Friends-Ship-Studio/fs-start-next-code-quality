const fs = require("fs");
const path = require('path'); 

module.exports = {
  ignorePatterns: [
    // Load .gitignore content as base ESLint ignore patterns
    ...fs.readFileSync(path.join(__dirname, ".gitignore"), "utf8")
        .split("\n")
        .filter(line => line && !line.startsWith("#")),
    // Include any additional ignore patterns here
  ],
  extends: ["eslint:recommended", "next/core-web-vitals"]
};
