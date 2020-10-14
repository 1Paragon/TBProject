const fs = require("fs");
const path = require("path");
const directory = fs.mkdtempSync("savvy-tmp");
console.log(directory);
// TODO: use the temporary directory
fs.rmdirSync(directory);
