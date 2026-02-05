// Use a for...of loop to concatenate all the elements of an array into a single string.

var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

let singleString = '';

for (var number of numbers){
    singleString += number;
}

let result = [singleString];
console.log(result);