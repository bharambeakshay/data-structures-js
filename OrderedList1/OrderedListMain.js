const fs = require("fs");
const linkedList = require('./OrderedListBusinessLogic');
const readline = require("readline-sync");
let filedata = fs.readFileSync('./OrderedList.txt');
console.log("Numbers data read from file: " + filedata);
searchNumber = readline.question("Enter a number to search: ");
linkedList.orderedList(filedata, searchNumber);     