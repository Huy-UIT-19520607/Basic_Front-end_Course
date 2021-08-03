// 5. Write a script that converts Celsius (0C) into Fahrenheit (0F)
// Code
let celsius = Number(prompt("Please enter the temperature in Celsius: "));
alert(`${celsius} (C) = ${(celsius * 1.8 + 32).toFixed(1)} (F)`);