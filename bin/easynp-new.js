const yargs = require("yargs/yargs");
const path = require("path");
var copy = require("recursive-copy");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv)).argv;

let _projectName = argv._[1];
const _projectDir = path.join(process.cwd(), _projectName);

copy(path.join(__dirname, "../templates"), _projectDir);
