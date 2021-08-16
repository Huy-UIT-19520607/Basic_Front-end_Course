// 5. Write a script asking users to enter a sequence of names, separated by commas (, ), 
// Create a new array containing the names, each surrounded with <>.
let names = prompt("Enter a sequence of names, separated by commas (, ): ").split(', ');
let newNames = [];
for(let name of names) {
    newNames.push(`<${name}>`);
}
alert(`${names.join(', ')} => ${newNames.join(',')}`);

