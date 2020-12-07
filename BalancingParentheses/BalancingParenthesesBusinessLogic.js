const readline = require('readline-sync');
const Stack = require('../Stack/StackBusinessLogic')

/**
 * @problem : To check if the parentheses are balanced or not.
 * @param , user input -->expression
 * @author :Akshay
  returning true or false.
 */
BalParentheses = exp => {
    array = exp.split("");
    let stack = new Stack();
    array.forEach(element => {
        if (element == "(" || element == "[" || element == "{") {
            stack.push(element);
        } else if (element == ")" && stack.top.data == "(") {
            stack.pop();
        } else if (element == "]" && stack.top.data == "[") {
            stack.pop();
        } else if (element == "}" && stack.top.data == "{") {
            stack1.pop();
        }
    });
    stack.isEmpty();
    if (stack.size === 0) {
        console.log("The Parentheses are Perfectly Balanced!");
    } else {
        console.log("The parentheses are Not Balanced");
    }
};
module.exports = {
    BalParentheses
};
