class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        // This method shows first node in queue
        if (!this.first) {
            return null;
        } else {
            return this.first;
        }


    }

    enqueue(data) {
        //If there is no first, it adds to new first, else element get back of the line
        let node = new Node();
        if (!this.first) {
            this.first = node;
            this.last = node;
            this.length++;

        } else {
            this.last.next = node
            this.last = node;
            this.length++;
        }
        return this;


    }
    dequeue() {
        // first elemnet get off the  queue
        const trackingNode = this.first;
        if (this.first === this.last) {
            this.first = null;
            this.last = null
        } else {
            this.first = this.first.next;
        }
        this.length--;
        return trackingNode
    }
}

let q = new Queue();
q.enqueue("10");
q.enqueue("20");
q.enqueue("30");
q.enqueue("40");
q.enqueue("50");
q.dequeue()
console.log(q);
