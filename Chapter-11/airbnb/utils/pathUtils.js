// Core Module
const path = require("path");

module.exports = path.dirname(require.main.filename);
 // gives the path of the main file which is being executed
// path.extname(require.main.filename); // gives the extension of the main file which is being executed
