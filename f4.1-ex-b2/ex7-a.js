// 7-a. 6 L’s and H’s, half L’s, half H’s (L means low, H means high)
let countH = 0;
for (let i = 1; i <= 6; i++) {
    if (i % 2 === 0) {
        countH++;
    } 
}

for (let i = 1; i <= 6 - countH; i++) {
    console.log('L');
}

for (let i = 1; i <=  countH; i++) {
    console.log('H');
}