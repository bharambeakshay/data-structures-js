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
    peek() {
        // This method shows first node in queue
        if (!this.first) {
            return null;
        } else {
            return this.first;
        }

    }
    isEmpty() {
        return !this.front;
    }

    enqueue(
        data //add at rear
    ) {
        let node = new Node(data);
        if (this.isEmpty()) {
            this.front = this.rear = node;
        } else {
            this.rear.next = node;
            node.prev = this.rear;
            this.rear = node;
        }
    }
    dequeue() { // removes from front
        let node = this.front;
        if (!this.isEmpty()) {
            this.front = this.front.next;
        }
        if (!this.front) {
            this.rear = null;
        }
        return node;
    }

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
    }
}
// module.exports = Queue;


let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
q.dequeue()

q.printQueue();