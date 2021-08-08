// 8. Write a script to calculate the BMI (Body Mass Index) of a person
let w = Number(prompt('Your weight in kg?'));
let h = Number(prompt('Your height in cm?'));

h = h / 100; // convert cm to m

let bmi = (w / (h * h)).toFixed(1);
alert(`Your BMI is ${bmi}`);

if (bmi < 16) {
    alert('You are severely underweight');
} else if (bmi >= 16 && bmi < 18.5) {
    alert('You are underweight');
} else if (bmi >= 18.5 && bmi < 25) {
    alert('You are normal');
} else if (bmi >= 25 && bmi < 30) {
    alert('You are overweight');
} else {
    alert('You are obese');
}
