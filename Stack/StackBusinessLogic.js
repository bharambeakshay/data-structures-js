/**
 * @author: Akshay
 * @problem : Write a program for stack to push , push and display array
 *  
 */

// definition of class
class Stack {

    //constructor of Stack class
    constructor() {
        this.arr = [];
        this.top = -1;
        this.size = 0;
    }

    //method th push the elements in the end of array
    push(num) {
        this.top = this.top + 1;
        this.arr[this.top] = num;
        this.size++;
    }

    //method to delete last element from stack
    pop() {
        if (this.top === -1) {
            console.log("stack is in underflow");
            return "Stack is empty";

        } else {
            this.size--;
            return this.arr[this.top--];
        }
    }

    // sizee() determines initial size of array, 
    //it is used here to comapre length of give array
    sizee() {
        return this.size;
    }
    //This method checks the is stack empty or not 
    isEmpty() {
        console.log(this.size === 0);
    }

    //The following function prints the stack
    printStack() {
        if (this.top > -1) {
            let printElem = "";
            for (let i = 0; i <= this.top; i++) {
                printElem = printElem + this.arr[i] + " ";

            }
            return (printElem);
        }
        else {
            return "No element present";
        }
    }
}

module.exports = Stack;
