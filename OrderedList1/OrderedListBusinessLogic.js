class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class linkedList {
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

}