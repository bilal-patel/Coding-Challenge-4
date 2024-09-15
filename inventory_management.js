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

// Task 3 - Create a Function to Update Product Stock After Sales
function updateStock(product, unitsSold) {
    product.quantity -= unitsSold; // update quantity


if (product.quantity > 0 && product.quantity <= 20) {
 console.log("Product in Low Stock"); 
} else if (product.quantity === 0){
console.log("Product is Out of Stock"); // check if stocks is low or out
}
}
 let apple = {name: "Apple", quantity: 25};

updateStock(apple, 15);

//Task 4 - Create a Function to Check Low Stock Products

function checkLowStock (inventory) {
for (let product of inventory) {
    if (product.quantity <= product.lowStockLevel)
        console.log(`Low stock for the following: ${product.name}`);
}}

// checkLowStock(inventory);

//Task 5 - Create a Function to Calculate Total Inventory Value

function calculateInventoryValue (inventory) {
    let totalValue = 0; 
    for (let i = 0; i < inventory.length; i++) {
        let product = inventory[i];
        totalValue += product.price * product.quantity;
    }
    return totalValue;
}
const totalValue = calculateInventoryValue(inventory)

console.log("Total Inventory Value: $" + totalValue);