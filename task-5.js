//Task-5: Copy the given array into another array so that changing the copy does not affect the original. Change the first element of the copied array to 99.

let original = [1, 2, 3];
// let copy = original.slice(); //you can copy an array like this.

let copy = Array.from(original); //an array can be copied also like this

copy[0] = 99;

console.log('Original:', original);
console.log('Copy:', copy);