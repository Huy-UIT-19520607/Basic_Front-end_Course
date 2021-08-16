// 4.
// 4.1 Create an array to represent the sizes of your flock, and log all of your flock size, 
// expected screen output:
let sizes = [5, 7, 300, 90, 24, 50, 75];
console.log('Hello, my name is Quoc Huy and here is my sheep sizes:');
console.log(...sizes);

// 4.5 Let’s do this for 4 months (or as long as you want)
let month = 1;
while (month <= 3) {
    // 4.2
    let biggest = sizes[0];
    for (let i = 1; i < sizes.length; i++) {
        if (biggest < sizes[i]) {
            biggest = sizes[i];
        }
    }
    console.log('');
    console.log(`Now my biggest sheep has size ${biggest}, let's shave it`);

    // 4.3
    let index = sizes.indexOf(biggest);
    sizes.splice(index, 1, 8);
    console.log('');
    console.log('After shearing, here is my flock');
    console.log(...sizes);

    //4.4
    for (let index in sizes) {
        sizes[index] += 50;
    }
    console.log('');
    console.log(`MONTH ${month}`)
    console.log('One month has, passed, my sheeps have grown, here are their sizes');
    console.log(...sizes);

    month++;
}

// 4.6 Write a program to calculate the total size of your sheep as well as the money you would have.
let total = 0;
for(let size of sizes) {
    total += size;
}
console.log(`My flock has size in total: ${total}`);
console.log(`I would get ${total} * 2$ = ${total * 2}`)