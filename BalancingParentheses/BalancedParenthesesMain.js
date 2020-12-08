/*
 *@problem: To check parentheses must appear in a balanced manner.
 * @author : Akshay
 * In this file we give input as expression

*/
const balancedParanthesess = require("./BalancingParenthesesBusinessLogic");
let readline = require("readline-sync");
let expresion = readline.question("Enter the expression: ");
balancedParanthesess.BalParentheses(expresion);