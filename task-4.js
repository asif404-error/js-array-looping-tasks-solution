// Task 4 (Hard): Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person'

const words = statement.split(' ');
// console.log(words);

let reversed = [];
let text = words.length - 1;

//Using for Loop
/*
for (let i = text; i >= 0; i--){
    reversed.push(words[i]);
}
*/

//Using while Loop
/*
let i = text;
while(i >= 0){
    reversed.push(words[i]);
    i--;
}
*/
const result = reversed.join(' ');
console.log(result);