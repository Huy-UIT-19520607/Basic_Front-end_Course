// 4. Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range 
let x = Number(prompt('Enter a number: '));

if (x === 4 || x === 5) {
    alert('Half of 9');
} else {
    if (x > 5) {
        alert('Higher half of 9');
    } else {
        alert('Lower half of 9');
    }
}