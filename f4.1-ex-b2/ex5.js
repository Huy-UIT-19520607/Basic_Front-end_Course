// 5. Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
let n = Number(prompt('n = '));
let x = Number(prompt('x = '));

if (x === Math.floor(n/2) || x === Math.ceil(n/2)) {
    alert(`${x} is a half of ${n}`);
} else {
    if (x > Math.ceil(n/2)) {
        alert(`${x} is higher half of ${n}`);
        
    } else {
        alert(`${x} is a lower half of ${n}`);
    }
}
