// 1. Initialize a variable named products, containing an array of products, 
// each product has a name, price, brand, category, and color
let products = [
    { 
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'White',
        category: 'Charger'
    },
    { 
        name: 'VSmart Active 1',
        brand: 'VSmart',
        price: 5487,
        color: 'Black',
        category: 'Phone'
    },
    { 
        name: 'IPhone X',
        brand: 'Apple',
        price: 21490,
        color: 'Gray',
        category: 'Phone'
    },
    { 
        name: 'Samsung Galaxy A9',
        brand: 'Samsung',
        price: 8490,
        color: 'Blue',
        category: 'Phone'
    },
];

// 1.1 Print/log name and price of all the products out
// for(let product of products) {
//     console.log('----------------------------------------');
//     console.log(`Name: ${product.name}`);
//     console.log(`Price: ${product.price}`);
// }

// 1.2 Write a script printing/logging out the products with their number, 
// then print/logging out the details of a product with its position entered by users
// for(let index in products) {
//     console.log(`#${Number(index) + 1}. Name: ${products[index].name}`);
//     console.log(`    Price: ${products[index].price}`);
// }
// let position = Number(prompt('Enter product position:'));
// console.clear();

// if (position > 4 || position < 1) {
//     console.warn(`Your position is invalid`);
// } else {
//     console.log(`Name: ${products[position - 1].name}`);
//     console.log(`Brand: ${products[position - 1].brand}`);
//     console.log(`Price: ${products[position - 1].price}`);
//     console.log(`Color: ${products[position - 1].color}`);
//     console.log(`Category: ${products[position - 1].category}`);
// }

// 1.3 Write a script printing/logging out the products based on category input by users
// let categoryInput = prompt('Enter your category:');
// console.clear();

// for(let product of products) {
//     if (product.category.toLowerCase() === categoryInput.toLowerCase()) {
//         console.log('----------------------------------------');
//         console.log(`Name: ${product.name}`);
//         console.log(`Price: ${product.price}`);    
//     }
// }

// 1.4 Add providers to each product. And printing/logging out all of the products
for(let index in products) {
    products[index].providers = [];
    if (Number(index) === 0) {
        products[index].providers.push('Phukienzero');
        products[index].providers.push('Dientuccc');
    } else {
        products[index].providers.push('Tgdd');
    }
}
for(let index in products) {
    console.log(`#${Number(index) + 1}. Name: ${products[index].name}`);
    console.log(`    Price: ${products[index].price}`);
    console.log(`    Providers: ${products[index].providers.join(' ')}`);
}

// 1.5 Search the products based on the wanted provider entered by users.
let providerInput = prompt('Enter a provider:');
console.clear();

for(let product of products) {
    if (((product.providers.join()).toLowerCase()).includes(providerInput.toLowerCase())) {
        console.log('----------------------------------------');
        console.log(`Name: ${product.name}`);
        console.log(`Brand: ${product.brand}`);    
        console.log(`Price: ${product.price}`);    
        console.log(`Color: ${product.color}`);    
        console.log(`Category: ${product.category}`); 
        console.log(`Providers: ${product.providers.join(',')}`);  
    }
}