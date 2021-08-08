// 1-d. A sequence of numbers, starting from c, ending before n, c and n entered by user
let n = Number(prompt('Enter n: '));
let c = Number(prompt('Enter c: '));

while (c < n) {
    console.log(c);
    c++;
}