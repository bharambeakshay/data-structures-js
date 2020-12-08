try {
    let sc = require('readline-sync');
    const list = require('../LinkedList/LinkedListBusinessLogic');
    const util = require('./OrderedTextFileIO');
    let data = util.fileCall('../Assets/OrderedList.txt');


    let linklist = new list;

    data.forEach(element => {
        linklist.sortedInsert(parseInt(element));
    });

    let display = linklist.printList();
    console.log(display.join(' '));

    util.writeFile('file.../Assets/OrderedList.txt', display)

    let find = sc.question("enter the number you want check");
    let check = linklist.search(find);
    if (check) {
        linklist.deleteNode(find);
    }
    else {
        linklist.sortedInsert(find);
    }
    //linkedList.sortedInsert();
    let displayFile = linklist.show();
    console.log(displayFile.join(' '));

    util.writeFile('file.../Assets/OrderedList.txt', displayFile)
}
catch (e) {
    console.log(e.message);
    console.log(e.name);
}
