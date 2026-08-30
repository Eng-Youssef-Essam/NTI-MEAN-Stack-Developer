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

// DOM

// The product form
var productForm = document.getElementById("productForm");

// The table categories
var productId = document.getElementById("productId");
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productQuantity = document.getElementById("productQuantity");

// The search value
var searchValue = document.getElementById("searchValue");

// The product body
var productsBody = document.getElementById("productsBody");

var message = document.getElementById("message");
var statusText = document.getElementById("statusText");
var productCount = document.getElementById("productCount");
var emptyState = document.getElementById("emptyState");

var submitBtn = document.getElementById("submitBtn");

var currentMode = "create";

// Display Products
function renderProducts(list) { 

    // Delete the old table
    productsBody.innerHTML = ""; 
    // Show the number of products
    productCount.textContent = list.length + (list.length == 1 ? " product" : " products"); 
    //Check if the list is empty
    if (list.length == 0) { 
        emptyState.style.display = "block"; 
        return; 
    } 
    else{
        emptyState.style.display = "none"; 
    }

    for ( var i = 0; i < list.length; i++ ) { 

        var row = document.createElement("tr"); // create a row
        // ID 
        var idCell = document.createElement("td"); 
        idCell.textContent = list[i].id; 

        // Name 
        var nameCell = document.createElement("td"); 
        nameCell.textContent = list[i].name; 

        // Price 
        var priceCell = document.createElement("td"); 
        priceCell.textContent = list[i].price; 
         
        // Category 
        var categoryCell = document.createElement("td"); 
        categoryCell.textContent = list[i].category; 
        
        // Quantity 
        var quantityCell = document.createElement("td"); 
        quantityCell.textContent = list[i].quantity; 
        
        // Action 
        var actionCell = document.createElement("td"); 
        actionCell.className = "action-cell"; 
        
        // Update 
        var updateButton = document.createElement("button"); 
        updateButton.textContent = "Update"; 
        updateButton.className = "action-btn update-row"; 
        updateButton.setAttribute( "data-action", "update" ); 
        updateButton.setAttribute( "data-id", list[i].id ); // Store the id
        
        // Delete 
        var deleteButton = document.createElement("button"); 
        deleteButton.textContent = "Delete"; 
        deleteButton.className = "action-btn delete-row"; 
        deleteButton.setAttribute( "data-action", "delete" ); 
        deleteButton.setAttribute( "data-id", list[i].id );
       
        // put the puttons in the action
        actionCell.appendChild( updateButton ); 
        actionCell.appendChild( deleteButton ); 
        // put the cells in the row
        row.appendChild(idCell); 
        row.appendChild(nameCell); 
        row.appendChild(priceCell); 
        row.appendChild(categoryCell); 
        row.appendChild(quantityCell); 
        row.appendChild(actionCell); 
        // put the row into the tablw
        productsBody.appendChild(row); 
    } 
}

// show the message
function showMessage(text, type) { 
    message.textContent = text; 
    message.className = "message " + type; 
}

// clear form
function clearForm() { 
    productId.value = "";
    productName.value = ""; 
    productPrice.value = ""; 
    productCategory.value = ""; 
    productQuantity.value = ""; 
}

// set mode of the form
function setMode(mode) { 
    currentMode = mode; 
    // select all the buttons
    var buttons = document.querySelectorAll( ".operation" ); 
    // remove the active mode from all the buttons
    for ( var i = 0; i < buttons.length; i++ ) { 
        buttons[i].classList.remove( "active" ); 
    } 
    // choose the  button
    var activeButton = document.getElementById( mode + "Btn" ); 
    // check if the button there
    if (activeButton) { 
        activeButton.classList.add( "active" ); 
    } 
    if (mode == "create") { 
        submitBtn.textContent = "Add Product"; 
        productId.disabled = true; 
        statusText.textContent = "Create mode"; 
    } 
    else if (mode == "update") { 
        submitBtn.textContent = "Save Update"; 
        productId.disabled = false; 
        statusText.textContent = "Update mode"; 
    } 
}

// load products
function loadProductToForm(id) { 
    var product = getProductById(id); 
    if (product == null) { 
        showMessage( "Product not found!", "error" ); 
        return; 
    } 
    setMode("update"); 
    productId.value = product.id; 
    productName.value = product.name; 
    productPrice.value = product.price; 
    productCategory.value = product.category; 
    productQuantity.value = product.quantity; 
    showMessage( "Product loaded. Edit the values and click Save Update.", "success" ); 
}

// form submit
// when ther is a submit
productForm.addEventListener( "submit", function(event) { 

    // prevent loading the page
    event.preventDefault();
    // CREATE 
    if (currentMode == "create") { 
        var result = createProduct( productName.value, productPrice.value, productCategory.value, productQuantity.value ); 
        if (typeof result == "string") { 
            showMessage( result, "error" ); 
            return; 
        } 
            showMessage( "Product Added Successfully!", "success" ); 
            // make reset for the input
            clearForm(); 
            // put the new values
            renderProducts( getAllProducts() ); 
            return; 
        } 
        // UPDATE 
        if (currentMode == "update") { 
            var updateResult = updateProduct( productId.value, productName.value, productPrice.value, productCategory.value, productQuantity.value ); 
            if ( typeof updateResult == "string" ) { 
                showMessage( updateResult, "error" ); 
                return; 
            } 
            showMessage( "Updated Successfully!", "success" ); 
            renderProducts( getAllProducts() ); 
        } 
    } 
);

// create button
document .getElementById("createBtn") .addEventListener( 
    "click", function() { setMode("create"); 
        clearForm(); 
        showMessage( "Ready to add a new product.", "success" ); 
    } 
);

// read all button
document .getElementById("readAllBtn") .addEventListener( 
    "click", function() { 
        var allItems = getAllProducts(); 
        renderProducts( allItems ); 
        printProducts( allItems ); 
        statusText.textContent = "Read All"; 
        showMessage( "Showing all products.", "success" ); 
    } 
);

// read one button
document .getElementById("readOneBtn") .addEventListener( 
    "click", function() { 
        var id = searchValue.value.trim(); 
        if (id == "") { 
            showMessage( "Enter a Product ID.", "error" ); 
            return; 
        } 
        var singleProduct = getProductById(id); 
        if (singleProduct != null) { 
            renderProducts( [singleProduct] ); 
            printProducts( [singleProduct] ); 
            showMessage( "Product found successfully.", "success" ); 
        } 
        else { 
            renderProducts([]); 
            showMessage( "Product not found!", "error" ); 
        } 
        statusText.textContent = "Read One"; 
    } 
);

// update button
document .getElementById("updateBtn") .addEventListener( 
    "click", function() { 
        var id = searchValue.value.trim(); 
        if (id == "") { 
            setMode("update"); 
            showMessage( "Enter Product ID.", "error" ); 
            return; 
        } 
        loadProductToForm(id); 
    } 
);

// Delete button
document .getElementById("deleteBtn") .addEventListener( 
    "click", function() { 
        var id = searchValue.value.trim(); 
        if (id == "") { 
            showMessage( "Enter Product ID to delete.", "error" ); 
            return; 
        } 
        var isSure = confirm( "Are you sure you want to delete?" ); 
        if (isSure) { 
            var deleteResult = deleteProduct(id); 
            if ( typeof deleteResult == "string" ) { 
                showMessage( deleteResult, "error" ); 
                return; 
            } 
            renderProducts( getAllProducts() ); 
            clearForm(); 
            searchValue.value = ""; 
            showMessage( "Deleted Successfully!", "success" ); 
        } 
    } 
);

// filter
document .getElementById("filterBtn") .addEventListener( 
    "click", function() { 
        var word = searchValue.value; 
        if (word == "") { 
            renderProducts( getAllProducts() ); 
            showMessage( "Showing all products.", "success" ); 
            return; 
        } 
        var filteredList = filterProducts(word); 
        renderProducts( filteredList ); 
        printProducts( filteredList ); 
        statusText.textContent = "Filter"; 
        if ( filteredList.length == 0 ) { 
            showMessage( "No products matched your search.", "error" ); 
        } 
        else { 
            showMessage( "Filter completed.", "success" ); 
        } 
    } 
);

// Update and delete buttons in table
productsBody.addEventListener( 
    "click", function(event) { 
        // the button the user choose
        var target = event.target; 
        if ( target.classList.contains( "action-btn" ) ) { 
            var id = target.getAttribute( "data-id" ); 
            var action = target.getAttribute( "data-action" ); 
            
            // UPDATE 
            if (action == "update") { 
                loadProductToForm(id); 
            } 
            // DELETE 
            if (action == "delete") { 
                var isSure = confirm( "Are you sure you want to delete?" ); 
                if (isSure) { 
                    var deleteResult = deleteProduct(id); 
                    if ( typeof deleteResult == "string" ) { 
                        showMessage( deleteResult, "error" ); 
                        return; 
                    } 
                    renderProducts( getAllProducts() ); 
                    showMessage( "Deleted Successfully!", "success" ); 
                } 
            } 
        } 
    } 
);

// clear buttons
document .getElementById("clearBtn") .addEventListener( 
    "click", function() { 
        clearForm(); 
        showMessage( "Form cleared.", "success" ); 
    } 
);

// Exit button
document .getElementById("exitBtn") .addEventListener( 
    "click", function() { 
        var isSure = confirm( "Are you sure you want to exit?" ); 
        if (isSure) { 
            productForm.style.display = "none"; 
            document .querySelector( ".operations" ) .style.display = "none"; 
            statusText.textContent = "Exited"; 
            showMessage( "Application exited. Refresh the page to start again.", "success" ); 
        } 
    } 
);

// Dispaly
renderProducts( getAllProducts() ); 
setMode("create");