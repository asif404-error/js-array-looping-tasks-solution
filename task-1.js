// Task-1: Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let reverse = []; //I have created and empty array and named it reverse. The reverse order of colors will be store here.
const newColors = colors.length - 1; //total number 5 - 1; cause, array indices start from 0

//Using while Loop
/*
let i = newColors;

while(i>=0){
    reverse.push(colors[i]);
    i--;
}
console.log(reverse);
*/


//Using for Loop

for (let i = newColors; i >= 0; i--){
    reverse.push(colors[i]);
}
console.log(reverse);