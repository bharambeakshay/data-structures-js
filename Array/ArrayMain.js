/******************************************************************************************************
* @purpose  :  Write a program  to perform Array functions such as 
                1.push  2.pop  3.print the array, 4.filter,5.indexof,
                6.join,7.map,8.reduce,9.shift,10.slice , 11.splice,12.add, 
                13.element at index,14.sort,15.delete element form index 
* 
*  @Auther   : Akshay
*  @File     : ArrayMain.js
*  
************************************************************************************************/
//declaring an array
let liquor = ["beer", "whisky", "rum", "wine", "malt"];
console.log(liquor);

let liquorAdd = liquor.push("redwine");
console.log("element is added to index: " + liquorAdd);

let liquorPop = liquor.pop();
console.log("Removed the last element: " + liquorPop);

let liquorSort = liquor.sort();
console.log("Sorting: " + liquorSort);

function Filter() {
    let newArray = [
        { alcohol: 'whisky', preservation: 15 },
        { alcohol: 'wine', preservation: 10 }
    ]
    let liquorFilter = newArray.filter(function (e) {
        return e.preservation > 10;
    });
    console.log(liquorFilter);
}


let arrayIndex = liquor.indexOf("rum", 2);
console.log("Index: " + arrayIndex);

let arrayJoin = liquor.join();
console.log("Array join");
console.log(arrayJoin);

//printing indexwise
console.log("Printing Indexwise")
for (let i = 0; i < liquor.length; i++) {
    ;
    console.log("Index " + i + " " + liquor[i]);
}

function reduce() {
    let array = [1, 2, 3, 4, 5];

    let result = array.reduce((sum, current) => sum + current, 0);
    console.log("Reduce: " + result);
}

let arraySlice = liquor.slice(1, 3)
console.log(arraySlice);

let liquorSplice = liquor.splice(2, 0, "vodka", "brandy");
console.log("Splice operation")
console.log(liquorSplice);

let arrayShift = liquor.shift();
console.log(arrayShift + "\n" + liquor);

let arraySize = liquor.length;
console.log("length: " + arraySize);

let drinks = liquor.slice(1, 3);
console.log("using slice: " + drinks);

console.log(" Index delete:" + delete liquor[1]); // returns true


//calling a function
reduce();
Filter();
