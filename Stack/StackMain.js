const readline = require('readline-sync');
const Stack = require('./StackBusinessLogic');

//flag is taken to stop the program. i.e to come out of infinite loop
let flag = true;

//creating the object of class Stack
let stack = new Stack();

while (flag) {

    //userinput to select the option in menu    
    let userInput = readline.question(`enter choice  1.push  2.pop   3.display   4. exit: `);
    switch (userInput) {

        case "1":
            //length of stack asks user to input stack size
            let lengthOfStack = readline.questionInt("what is size of stack: ");

            if (stack.sizee() <= lengthOfStack) {
                for (let i = 0; i < lengthOfStack; i++) {
                    let num = readline.question("Enter number to push " + i + "--> ");
                    stack.push(parseInt(num));
                }
            }
            break;

        case "2":
            console.log("Delete the number from stack");
            console.log(stack.pop());
            break;

        case "3":
            console.log("elements in stack");
            console.log(stack.printStack());
            break;

        case "4":
            flag = false;
            process.exit(1);
            break;
        default:
            console.log("Provide valid option");
            break;

    }
}

