#! /usr/bin/env node
/* eslint-disable */
const shell = require("shelljs");
// It will print protractor help if no args are provided via CLI.
const arg = process.argv[2] || '-- --help';

shell.exec("npm run start " + arg);
shell.exec('npm run generate-report');
shell.exec('npm run open-report');