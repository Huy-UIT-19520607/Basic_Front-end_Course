// 2. Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
let num = Number(prompt('Enter a number: '));
let factorial = 1;

if (num > 1) {
    for (i = num; i >= 1; i--) {
        factorial *= i;
    }
}

alert(`The factorial of ${num} is: ${factorial}`);