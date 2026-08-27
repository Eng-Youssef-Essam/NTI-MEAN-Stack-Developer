
// Products Array:
var products = [
  { id: 1, name: "Laptop", price: 18500, category: "Electronics", quantity: 4 },
  { id: 2, name: "Mouse", price: 180, category: "Electronics", quantity: 25 },
  { id: 3, name: "Notebook", price: 35, category: "Stationery", quantity: 100 },
  { id: 4, name: "Desk Lamp", price: 420, category: "Home", quantity: 0 }
];

var nextId = 5; // the new product id

// Create a Product
function createProduct(name = "", price, category = "", quantity) {

    var cleanName = name.trim(); // Remove the space from the name
    var cleanCategory = category.trim(); // Remove the space from the category
    var numPrice = Number(price); // Turn the Price into Number
    var numQuantity = Number(quantity); // Turn the Quantity into Number

    // Make sure the name and the category not empty values
    if (cleanName == "" || cleanCategory == "") {
        return "Name and Category cannot be empty!";
    }

    // Make sure the Price and the Quantity is greater than 0
    if (numPrice <= 0 || numQuantity < 0) {
        return "Price must be > 0 and Quantity >= 0!";
    }

    // create a new product
    var newProduct = {
        id: nextId++,
        name: cleanName,
        price: numPrice,
        category: cleanCategory,
        quantity: numQuantity
    };

    // Add the new product
    products.push(newProduct);

    // return the new product
    return newProduct;
};

// Show all the Products
function getAllProducts() {
    return products;
};

// Print the products in a shape of Table
function printProducts(list) {
    console.table(list);
};

// Find the product by id
function getProductById(id) {
    for (var i = 0; i < products.length; i = i + 1) {
        if (products[i].id == id) {
            return products[i];
        }
    }

    return null;
};

// Update the Product
function updateProduct(id, name, price, category, quantity) {

    var product = getProductById(id);

    // if the product not found
    if (product == null) {
        return "Product not found!";
    }

    // if the user update the value or doesn't leave the old value
    if (name != "" && name != null) {
        product.name = name;
    }

    if (price != "" && price != null) {
        product.price = Number(price);
    }

    if (category != "" && category != null) {
        product.category = category;
    }

    if (quantity != "" && quantity != null) {
        product.quantity = Number(quantity);
    }

    return product;
};

// Delete any product
function deleteProduct(id) {

    for (var i = 0; i < products.length; i++) {

        if (products[i].id == id) {
            var deletedItem = products.splice(i, 1);

            return deletedItem[0];
        }
    }

    return "Product not found!";
};

// Lookup using the keyword
function filterProducts(keyword) {

    // make an empty array to put the reached element
    var searchResult = [];

    if (keyword == null) {
        return searchResult;
    }

    var searchWord = keyword.toLowerCase();

    for (var i = 0; i < products.length; i++) {

        var productName = products[i].name.toLowerCase();
        var productCategory = products[i].category.toLowerCase();

        if (
            productName.includes(searchWord) ||
            productCategory.includes(searchWord)
        ) {
            searchResult.push(products[i]);
        }
    }

    return searchResult;
};


// Interactive Menu

function startApp() {

    var userChoice = "";

    while (userChoice != "0" && userChoice != null) {

        userChoice = prompt(
            "===== NTI Mini Store =====\n" +
            "1) Add product\n" +
            "2) Show all products\n" +
            "3) Show product by ID\n" +
            "4) Update product\n" +
            "5) Delete product\n" +
            "6) Search / Filter\n" +
            "0) Exit"
        );

        switch (userChoice) {

            case "1":

                var name = prompt("Enter product name:");
                var price = prompt("Enter price:");
                var category = prompt("Enter category:");
                var quantity = prompt("Enter quantity:");

                var result = createProduct(name, price, category, quantity);

                if (typeof result == "string") {
                    alert(result);
                }
                else {
                    alert("Product Added Successfully!");
                }

                break;


            case "2":

                var allItems = getAllProducts();

                printProducts(allItems);

                break;


            case "3":

                var searchId = prompt("Enter Product ID:");

                var singleProduct = getProductById(searchId);

                if (singleProduct != null) {
                    printProducts([singleProduct]);
                }
                else {
                    alert("Product not found!");
                }

                break;


            case "4":

                var updateId = prompt("Enter Product ID to update:");
                var newName = prompt("New name (leave empty to keep current):");
                var newPrice = prompt("New price (leave empty to keep current):");
                var newCategory = prompt("New category (leave empty to keep current):");
                var newQuantity = prompt("New quantity (leave empty to keep current):");

                var updateResult = updateProduct(
                    updateId,
                    newName,
                    newPrice,
                    newCategory,
                    newQuantity
                );

                if (typeof updateResult == "string") {
                    alert(updateResult);
                }
                else {
                    alert("Updated Successfully!");
                }

                break;


            case "5":

                var deleteId = prompt("Enter Product ID to delete:");

                var isSure = confirm("Are you sure you want to delete?");

                if (isSure) {

                    var deleteResult = deleteProduct(deleteId);

                    if (typeof deleteResult == "string") {
                        alert(deleteResult);
                    }
                    else {
                        alert("Deleted Successfully!");
                    }
                }

                break;


            case "6":

                var word = prompt("Enter search keyword:");

                var filteredList = filterProducts(word);

                printProducts(filteredList);

                break;


            case "0":
            case null:

                break;


            default:

                alert("Invalid Choice! Please enter a number from 0 to 6.");

                break;
        }
    }
}


startApp();