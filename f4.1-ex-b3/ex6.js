// 6. Write a script asking users to enter a sequence of Numbers, separated by commas (,). 
// Create a new array containing only the odd Numbers of the entered sequence.
let nums = prompt("Enter a sequence of numbers, separated by commas (, ): ").split(', ');
let oddNums = [];
for(let num of nums) {
    if (Number(num) % 2 === 1) {
        oddNums.push(num);
    }
}
alert(`${nums.join(', ')} => ${oddNums.join(', ')}`);