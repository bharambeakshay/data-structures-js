/******************************************************************************************************
* @purpose  :  Write a program  for Dequeue, where on can enqueue, dequeue elements form queue
* 
*  @Auther   : Akshay
*  @File     : QueueBusinessLogic.js 
*  
************************************************************************************************/


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Queue {
    constructor() {
        let queue = [];
        this.front = null;
        this.rear = null;
        this.size = 0;

    }
    /**
     * Checks the queue is empty or not
     */
    isEmpty() {
        return !this.front;
    }
    /**
     * 
     * @param {data} data :enters the data either at first node  if elements are not present
     *  else at last node if elements are present 
     */
    enqueue(data) {
        let node = new Node(data);
        if (this.isEmpty()) {
            this.front = this.rear = node;
        } else {
            this.rear.next = node;
            node.prev = this.rear;
            this.rear = node;
        }
        return "element is added";
    }

    /**
     * 
     * @function dequeue : This function removes the data from the front
     */
    dequeue() {
        let node = this.front;
        if (!this.isEmpty()) {
            this.front = this.front.next;
        } else {
            console.log("Empty");
        }
        if (!this.front) {
            this.rear = null;
        }
        return node;
    }

    /**
        * 
        * @function printQueue: This function prints the queue
        */
    printQueue() {
        if (this.isEmpty()) {
            console.log("empty");
        } else {
            var temparr = [];
            var temp = this.front;
            while (temp) {
                temparr.push(temp.data);
                temp = temp.next;
            }
            console.log(temparr.join(","));
        }
        return " ";

    }
}
module.exports = Queue;

