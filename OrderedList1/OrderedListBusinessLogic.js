const fs = require('fs');
function orderedList(fileData, searchNumber) {

    let fileDataArray = fileData.toString().split(' ');
    let numbersArray = new Array();
    for (let i = 0; i < fileDataArray.length; i++) {
        numbersArray.push(fileDataArray[i]);
    }

    let list = new LinkedList;

    //Before inserting linked list sort the array 

    numbersArray = numbersArray.sort(function (a, b) {
        return a - b;
    });
    console.log("Sorted array: " + numbersArray);

    //add all the numbers array element to the linked list

    for (let i = 0; i < numbersArray.length; i++) {
        list.addElement(numbersArray[i]);
    }
    list.printElement();
    if (list.searchElement(searchNumber) == -1) {
        list.addElement(searchNumber);
        console.log("Added successfully..\n");
    }

    // This condition checks for removing the item,if item already exists in file

    else {
        list.deleteElement(searchNumber);
        console.log("Removed successfully....\n");
    }

    // write operation to save updated list into the file.

    let dataWrite = list.printElement();
    writeToFile("./OrderedList.txt", dataWrite);
}



class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    addElement(searchNumber) {
        let node = new Node(searchNumber);
        // if list is empty add an searchNumber and make it head. 

        if (this.head == null) {
            this.head = node;
        }
        else {

            // to store current node 

            let current = this.head;
            let previous, count = 0;

            //while loop iterate till last node if search number greater than all

            while (current.next != null && count != 1) {
                if (current.data > searchNumber) { //if current data greater than search number
                    previous.next = node; //node reference will be added to the previous node
                    node.next = current;  //current node reference will added to the node
                    count++;
                }

                else {
                    previous = current;    //previous will store current
                    current = current.next; //current will store next next node
                }
            }
            if (current.next == null)  //if the search number greater than all, then it added to last
            {
                current.next = node;
            }
        }
        this.size++;  //size incremented
    }

    // deletes the string or searchNumber,if it already exists

    deleteElement(searchNumber) {
        let current = this.head;
        let previous = null;
        while (current != null) {
            if (current.data == searchNumber) {
                if (previous == null) {         //if first element is the searchNumber
                    this.head = current.next;   // the saerchword will be removed and head will be the next element
                }
                //it works when the search element is not at the first.
                //so the previos node store the reference of next node.

                else {
                    previous.next = current.next;
                }
                this.size--;
                return current.searchNumber;
            }
            //if search word not found
            previous = current;
            current = current.next;
        }
        return -1;
    }
    printElement() {
        let current = this.head;
        let string = "";
        while (current) {
            string += current.data + " ";
            current = current.next;
        }
        console.log("Ordered Linked list: " + string);
        return string;
    }
    searchElement(searchNumber) {
        let count = 0;
        let current = this.head;
        while (current != null) {
            if (current.data == searchNumber) {
                return count; //if item found it will return 1
            }
            count++;
            current = current.next;
        }
        return -1; //item not found it will return -1
    }


    sortedInsert(data) {
        let node = new Node(data);
        let current = this.head;
        if (!this.head || node.data <= current.data) {
            node.next = this.head;
            this.head = node;
            this.size++;
        } else {
            while (current.next && node.data >= current.next.data) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
            this.size++;
            return data;
        }
    }
}


module.exports = { orderedList };

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {     //this function write the data in file
        if (err) {
            return console.log(err); //error 
        }
    });
}
