/******************************************************************************************************
* @purpose  :  To  read and write text file and store list in it
* @description :All operations of OrderedListBusinessLogic.js are carried are from this file
* 
*  @Auther   : Akshay
*  @File     : OrderedListMain.js 
*  
************************************************************************************************/

const fs = require('fs');
const linkedList = require('./OrderedListBusinessLogic');
const readline = require("readline-sync");
let filedata = fs.readFileSync('OrderedList1/OrderedList.txt');
console.log("Numbers data read from file: " + filedata);
searchNumber = readline.question("Enter a number to search: ");
linkedList.orderedList(filedata, searchNumber);     