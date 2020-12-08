const readline = require('readline-sync');
/**
 * @problem : To write a program where linked list is created and perform following operrations:
 * 
 * Operations: 1. AddFirst 2. addLast 3.displayLinkedList 4.search 5.exit
 * 
 * @author : Akshay
 * 
 */

//Create class Node
//@params data take from user

class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }

}

//Create LinkedList main Class 

class LinkedList {
    constructor() {
        this.head = null;
        //this.next=null
    }

    //AddNode in LinkedList 
    //parameters data is taken from user

    addNode(data) {
        let first = new Node(data);

        let current = this.head;
        if (this.head == null) {
            return this.head = first;
        }
        else {
            while (current.next) {
                current = current.next;
            }
            current.next = first;
            return first = current;
        }
    }

    // to ckeck is list empty or not

    isEmpty() {
        if (this.head === null) {
            return true;
        }
        else {
            return false;
        }

    }
    //calculate size of linkedlist

    sizee() {
        let current = this.head;
        let count = 0;
        while (current != null) {
            count++;
            current = current.next;
        }


        return count;
    }
    //add first in linkedlist
    //param data take from user

    addFirst(data) {
        let firstNode = new Node(data);
        firstNode.next = this.head;
        this.head = firstNode;
    }
    //add last in linkedlist
    //param data take from user

    addLast(value) {
        let lastNode = { data: value, next: null };
        if (this.isEmpty()) {
            return this.head = lastNode;
        }
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        return current.next = lastNode;
    }

    //data take from user

    printList() {

        let curr = this.head;
        let str = " ";
        while (curr) {
            str += curr.data + "-->";
            curr = curr.next;
        }

        return (str);
    }

    // delete first from linkedlist

    deleteFirst() {
        this.head = this.head.next;
        return this.head;
    }

    // delete last in linkedlist
    deleteLast() {
        let lastNode = this.head;
        let previous;
        while (lastNode.next != null) {
            previous = lastNode;
            lastNode = lastNode.next;
        }
        previous.next = null;
    }

    //param data and pos take from user

    addAtPosition(data, pos) {
        let newNode = new Node(data);
        let current, previous;
        current = this.current;
        if (pos == 0) {
            newNode.next = this.head;
            this.head = newNode;
        }
        let count = 0;
        current = this.head;
        while (count < pos - 1) {
            count++;
            previous = current;
            current = current.next;

        }
        previous.next = newNode;
        newNode.next = current;

    }


    // param data take from user

    deleteAtPosition(pos) {
        let possition = this.head;
        let previous;
        let count = 0;
        while (count < pos) {
            count++;
            previous = possition;
            possition = possition.next;
        }
        previous.next = possition.next;
    }

    deleteNode(data) {
        let temp = this.head;
        let previous = null;

        if (temp.data == data) {
            this.head = temp.next;
            return temp.data;
        }
        while (temp != null && temp.data != data) {
            previous = temp;
            temp = temp.next;
        }
        previous.next = temp.next;

        return temp.data;
    }


    // param kay take from user
    search(key) {
        let current = this.head;
        while (current != null) {
            if (current.data == key) {
                return current.data;
            }
            current = current.next;
        }

        return false;
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
    show() {
        let arr = [];
        console.log();
        this.current = this.head;
        while (this.current != null) {
            arr.push(this.current.data);

            this.current = this.current.next;
        }

        return arr;
    }
}

module.exports = LinkedList;

