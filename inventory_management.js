// Task 1 - Create an Inventory Array of Product Objects


let inventory = [
    { name: 'apple', price: 5, quantity: 100, lowStockLevel: 20 },
    { name: 'orange', price: 4, quantity: 200, lowStockLevel: 20 },
    { name: 'banana', price: 3, quantity: 300, lowStockLevel: 20 },
    { name: 'pear', price: 2, quantity: 500, lowStockLevel: 20 },
    { name: 'grape', price: 1, quantity: 15, lowStockLevel: 20 }
];
//console.log (inventory)


// Task 2: Create a Function to Display Product Details
function displayProductDetails(product) {
    // output and log product and corresponding name/number
    console.log(`Product Name: ${product.name}`);
    console.log(`Product Price: $${product.price}`);
    console.log(`Product Quantity: ${product.quantity}`);
//checking status of stock using ternarary
    let stockStatus = product.quantity > product.lowStockLevel ? "In Stock" : "Low Stock";
    console.log(`Stock Status: ${stockStatus}`);
}
inventory.forEach (displayProductDetails);


