// 3. Create an array containing at least 5 numbers, then ask users enter a number, 
// perform a search to look for the number in the array, if the number is found, 
// tell user that with the index of it in the array, if not, also tell them so
const arr = [3, 4, 6, -9, 10, -88, 2];
let num = Number(prompt('Enter a number:'));
let index = arr.indexOf(num);
if (index !== -1) {
    alert(`${num} is FOUND in my array at index ${index}`);
} else {
    alert(`${num} is NOT found in my array`);
}