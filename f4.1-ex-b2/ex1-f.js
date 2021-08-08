// 1-f. A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
let n = Number(prompt('Enter n: '));
let c = Number(prompt('Enter c: '));
let s = Number(prompt('Enter s: '));

while (c < n) {
    console.log(c);
    c += s;
}