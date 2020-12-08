let readline = require('readline-sync');
const list = require('../LinkedList/LinkedListBusinessLogic');
const util = require('./OrderedTextFileIO');
const fileData = require('./OrderedList.txt');
let data = util.fileCall(fileData);


try {

    let linklist = new list;

    data.forEach(element => {
        linklist.sortedInsert(parseInt(element));
    });

    let display = linklist.printList();
    console.log(display.join(' '));

    util.writeFile(data, display)

    let find = readline.questionInt("enter the number you want check");
    let check = linklist.search(find);
    if (check) {
        linklist.deleteAtPosition(find);
    }
    else {
        linklist.sortedInsert(find);
    }
    //linkedList.sortedInsert();
    let displayFile = linklist.show();
    console.log(displayFile.join(' '));

    util.writeFile(data, displayFile)
}
catch (e) {
    console.log(e.message);
    console.log(e.name);
}
