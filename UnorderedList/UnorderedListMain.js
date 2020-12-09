/******************************************************************************************************
* @purpose  :  To  read and write text file and store list in it
* @description :All operations of UnOrderedListBusinessLogic.js are carried are from this file
* 
*  @Auther   : Akshay
*  @File     : UnOrderedListMain.js 
*  
************************************************************************************************/

const fs = require('fs');
const linkedList = require('./UnorderedListBusinessLogic'); //import the linkedlist.js file
const readline = require("readline-sync");
let data = fs.readFileSync('./UnOrderedList.txt');
console.log("Read the data from file: \n" + data);
stringArray = data.toString().toLocaleLowerCase().split(' ');
searchWord = readline.question("Enter a word to search : ");
linkedList.unorderedList(stringArray, searchWord);  