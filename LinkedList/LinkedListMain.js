/******************************************************************************************************
* @purpose  :   To rake the userinput and perform the operations on linkedlist
@description :All operations of linkedlist are carried are from this file
* 
*  @Auther   : Akshay
*  @File     : LinkedListMain.js 
*  
************************************************************************************************/

const readline = require('readline-sync');
const LinkedList = require('./LinkedListBusinessLogic');

//flag is taken to stop the program. i.e to come out of infinite loop
let flag = true;

//creating the object of class Stack
let list = new LinkedList();

while (flag) {

    //userinput to select the option in menu    
    let userInput = readline.questionInt(`enter choice : 1.addNode      2.addFirst         3.addLast     4.addAtPosition          5.printList          
     6.deleteFirst       7.deleteLast      8.deleteatPosition      9.search       10.sizeOfLinkedList       11.exit`);


    switch (userInput) {
        // case 1 is for adding the node
        case 1:
            let addNodeInput = readline.questionInt("Add element to linkedlist: ");
            console.log(list.addNode(addNodeInput));
            break;

        // case 2 is for adding the element to first position
        case 2:
            let addFirstInput = readline.questionInt("Enter a  element to insert at first posiion/head to linkedlist: ");
            console.log(list.addFirst(addFirstInput));
            break;

        //case 3 is adding element to last of the linkedlist
        case 3:
            let addLastInput = readline.questionInt("Enter a  element to insert at last posiion/head to linkedlist: ");
            console.log(list.addLast(addLastInput));
            break;

        //case 4 is for adding element at particular index
        case 4:
            let addIndexInput = readline.questionInt("Enter a  index to insert a element in linkedlist: ");
            let addElementInput = readline.questionInt(`Enter a  element to insert at ${addIndexInput} in linkedlist: `);
            console.log(list.addAtPosition(addElementInput, addIndexInput));
            break;
        //case 5 is for printing the linkedlist
        case 5:
            console.log(" The prsent linkedlist is: " + list.printList());
            console.log(list.printList());
            break;
        //case 6 is for deleteFirst means deleting first element in list
        case 6:
            console.log("First element is deleted from the list " + list.deleteFirst());
            break;
        //case 7 is for deleteLast means deleting last element  in list which points towards the tail
        case 7:
            console.log("Last element is deleted from the list " + list.deleteLast());
            break;
        //case 8 is for deleting the input element from linkedlist
        case 8:
            let delteIndexInput = readline.questionInt("Enter a  index to delete a element in linkedlist: ");
            console.log(list.deleteAtPosition(delteIndexInput));
            break;
        case 9:
            let searchKey = readline.questionInt("Enter a  number to be searched: ");
            console.log(list.search(searchKey));
            break;
        case 10:
            console.log("The length of current linkedlist is: ")
            console.log(list.sizee());
            break;

        case 11:
            flag = false;
            process.exit(1);
            break;



        default:
            console.log("Provide valid option");
            break;

    }
}

