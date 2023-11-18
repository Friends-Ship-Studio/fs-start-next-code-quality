const fs = require("fs");

module.exports = {
  ignorePatterns: [
    // Load .gitignore content as base ESLint ignore patterns
    ...fs.readFileSync(".gitignore", "utf8")
        .split("\n")
        .filter(line => line && !line.startsWith("#")),
    // Include any additional ignore patterns here
  ],
  extends: ["eslint:recommended", "next/core-web-vitals"]
};
