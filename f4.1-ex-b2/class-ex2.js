// 2. Tính giai thừa của số được nhập vào 
let num = Number(prompt('Enter any integer: '));
let factorial = 1;

while (!Number.isInteger(num)) {
    alert('This number is not an integer, try again.');
    num = Number(prompt('Enter any integer: '));
}

if (num > 1) {
    for (i = num; i >= 1; i--) {
        factorial *= i;
    }
}

alert(`${num}! = ${factorial}`);