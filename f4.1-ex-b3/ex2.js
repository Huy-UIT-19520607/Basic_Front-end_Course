// 2. Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, 
// find the smallest number and log it out to users
let numArray = prompt('Enter a sequence of numbers, separated by commas (,): ').split(',');
let smallest = Number(numArray[0]);
for(let i = 1; i < numArray.length; i++) {
    if (smallest > Number(numArray[i])) {
        smallest = Number(numArray[i]);
    }
}
alert(`The smallest number is ${smallest}`);
