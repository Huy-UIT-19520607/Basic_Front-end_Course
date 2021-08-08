// 7-d. n 1’s and 0’s in total, consecutively, n entered by user
let n = Number(prompt('Enter the total number of 1\'s and 0\'s?'));

for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        console.log('0');
    } else {
        console.log('1');
    }
}