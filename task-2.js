// Task-2: Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];

let even = [];
const evenNumbers = numbers.length -1;

// Using while Loop
/*
let i = 0;

while(i<=evenNumbers){
    if(numbers[i] % 2 === 0){
        even.push(numbers[i]);
    }
    i ++;
}

console.log(even);
*/

// Using for Loop

for (let i = 0; i <= evenNumbers; i++){
    if(numbers[i] %2 === 0){
        even.push(numbers[i]);
    }
}
console.log(even);