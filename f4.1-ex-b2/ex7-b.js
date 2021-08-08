// 7-b. n L’s and H’s in total, n entered by user
let n = Number(prompt('Enter the total number of L\'s and H\'s?'));
let countH = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        countH++;
    } 
}

for (let i = 1; i <= n - countH; i++) {
    console.log('L');
}

for (let i = 1; i <=  countH; i++) {
    console.log('H');
}