/*
 *@problem: To check parentheses must appear in a balanced manner.
 * @author : Akshay
 * In this file we give input as expression

*/
const BalPar = require("./BalancingParenthesesBusinessLogic");
let readline = require("readline-sync");
let exp = readline.question("Enter the expression: ");
BalPar.BalParentheses(exp);