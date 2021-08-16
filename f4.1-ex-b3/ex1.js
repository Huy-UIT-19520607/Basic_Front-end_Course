// 1. Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, 
// calculate the sum of the numbers and show it to users
let numArray = prompt('Enter a sequence of numbers, separated by commas (,): ').split(',');
let sum = 0;
for(let num of numArray) {
    sum += Number(num);
}
alert(`The sum of them is: ${sum}`);