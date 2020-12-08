const fs = require('fs');

class Node {
    constructor(searchWord) {
        this.searchWord = searchWord;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    addWord(searchWord) {

        let node = new Node(searchWord);

        let current;
        // if list is empty add an searchWord and make it head. 

        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    /* 
    * deletes the string or searchWord,if it already exists
    */
    deleteWord(searchWord) {
        let current = this.head;
        let previous = null;
        while (current != null) {
            if (current.searchWord == searchWord) {
                if (previous == null) {         //if first element is the searchword
                    this.head = current.next;   // the saerchword will be removed and head will be the next element
                }
                //it works when the search element is not at the first.
                //so the previos node store the reference of next node.
                else {
                    previous.next = current.next;
                }
                this.size--;  //size decremented
                return current.searchWord;
            }
            //if search word not found
            previous = current;
            current = current.next;
        }
        return -1;
    }

    // checks the search word already present or not

    searchString(searchWord) {
        let count = 0;
        let current = this.head;
        while (current != null) {
            if (current.searchWord == searchWord) {
                return count; //if item found it will return 1
            }
            count++;
            current = current.next;
        }
        return -1; //item not found it will return -1
    }

    printWords() {
        let current = this.head;
        let string = "";
        while (current) {
            string += current.searchWord + " ";
            current = current.next;
        }
        console.log(string);
        return string;
    }
}



function unorderedList(stringArray, searchWord) {

    let list = new linkedList;

    for (let i = 0; i < stringArray.length; i++) {
        list.addWord(stringArray[i]);
    }

    if (list.searchString(searchWord) == -1) {
        list.addWord(searchWord);
        console.log("Added successfully..\n");
    }

    // This condition checks for removing the item,if item already exists in file

    else {
        list.deleteWord(searchWord);
        console.log("Removed successfully....\n");
    }

    //write operation to save updated list into the file.
    const dataWrite = list.printWords();
    writeToFile("./UnorderedList.txt", dataWrite);

}

function writeToFile(fileName, data) {


    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

module.exports = { unorderedList };
