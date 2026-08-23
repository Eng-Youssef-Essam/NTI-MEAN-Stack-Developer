
// Task 1
console.log("JS is running successfully");

// Task 2
window.alert("Ready to practice!");

// Task 3
var productName = "Laptop";
var price = 15000;
var isAvailable = true;

console.log(productName)
console.log(price)
console.log(isAvailable)

console.log(typeof productName)
console.log(typeof price)
console.log(typeof isAvailable)

// Task 4
document.getElementById("mainTitle").innerText = "Practice Time";

// Task 5
var City = "Cairo";
var Country = "Egypt";

console.log(City + ", " + Country);

// Task 6
console.log(`Location: ${City} - ${Country}`);

// Task 7
var itemPrice = 120;
var quantity = 3 ;

console.log(itemPrice * quantity);
console.log(400 - (itemPrice * quantity) );
console.log(itemPrice * quantity);
console.log(itemPrice / quantity);
console.log(itemPrice % quantity);
console.log(quantity ** 2);

// Task 8
var color = prompt("Enter Your favourite color:");
console.log( "Your favourite color: " + color);

// Task 9
var score = 20;
var textScore = "20";

console.log(score == textScore);
// دي اسمها loose equal يتقارن القيمه و بتحول نوع الداتا اتلقايا فهتتحول الي string فالناتج هيكون true

console.log(score === textScore);
// دي  اسمها strict equal بتقارن القيمه و نوع البيانات بس مش بتعمل عمليه تحويل للبيانات فالناتج هيكون false

// Task 10
number = prompt("Enter the number of pieces");

console.log(typeof +number);
console.log(typeof Number(number));
console.log(typeof parseInt(number));

// Task 11
var fruits = ["apple","banana","mango"];

console.log(fruits[1]);
fruits[1] = "orange";
console.log(fruits);

// Task 12
var course = {title:"C++ course", hours: 20 , level: "Beginner"};
course.title = "Javascript";
console.log(course.hours);
console.log(course);

// Task 13
var hasAccount = true;
var isVerified = false;

console.log(hasAccount && isVerified);
console.log(hasAccount || isVerified);
console.log(!isVerified);

// Task 14
var balance = 50;

balance += 30;
balance *= 2;
balance -= 20;

console.log(balance);

// Task 15
var hotelName = prompt("Enter the name of the Hotel");
var numNights = prompt("Enter the number of nights");
var isConfirmed = confirm("Is it confirmed");

window.alert(`Hotel:${hotelName}, Nights:${numNights}, Confirmed:${isConfirmed}`);
console.log(`Hotel:${hotelName}, Nights:${numNights}, Confirmed:${isConfirmed}`);

// Task 16
console.log(2 + 8 + "0"); // 100
console.log("2" + 8 + 0); // 280
console.log(2 + "8" + 0); // 280

// Task 17
var city1 = "Alex";
var city2 = city1;
city2 = "Giza"; 

console.log(city1, city2); // لان city1 اخد نسخه مستقله لوحدها عن city2


var car1 = { brand: "Toyota" };
var car2 = car1;
car2.brand = "Honda";

console.log(car1, car2); // لان الاتنين يعتبروا non prametive data type فبيشاوروا لنفس الحاجه

var car2 = Object.assign({}, car1); // بيعمل object جديد , بينسخ محتويات الcar1

// Task 18
var mixedBag = ["Hello",1,true,null,undefined,{Title:"hello"},[1,2,3]];

console.log(typeof mixedBag[0]);
console.log(typeof mixedBag[1]);
console.log(typeof mixedBag[2]);
console.log(typeof mixedBag[3]); // خطا في برمجه اللغه
console.log(typeof mixedBag[4]);
console.log(typeof mixedBag[5]);
console.log(typeof mixedBag[6]);

// Task 19
var clientName = prompt("Enter your name");
var price = prompt("Enter the price");
var isProductConfirmed = confirm("is it sold");

console.log(clientName + " " + Number(price) + " " + isProductConfirmed);
window.alert(clientName + " " + price + " " + isProductConfirmed);
document.getElementById("result").innerText = clientName + " " + price + " " + isProductConfirmed;

// Task 20
var numberOne = prompt("Enter the first number");
var numberTwo = prompt("Enter the second number");


console.log(Number(numberOne) + Number(numberTwo));
console.log(Number(numberOne) - Number(numberTwo));
console.log(Number(numberOne) * Number(numberTwo));
console.log(Number(numberOne) / Number(numberTwo));
console.log(Number(numberOne) % Number(numberTwo));
console.log(Number(numberOne) ** Number(numberTwo));

// Task 21
var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
// لان الc تعتبر string فدا يعتبر concatenation فلازم احول الstring الي number

console.log(a + b + +c + d + e);
console.log(a + b + Number(c) + d + e);
console.log(a + b + parseInt(c) + d + e);

// Task 24
var a = "15";
var b = 15;
var c = null;
var d;
var e = [15];
var f = { value: 15 };

console.log(a, typeof a, a==15, a===15);
console.log(b, typeof b, b==15, b===15);
console.log(c, typeof c, c==15, c===15);
console.log(d, typeof d, d==15, d===15);
console.log(e, typeof e, e==15, e===15);
console.log(f, typeof f, f==15, f===15);

// Task 25
var category = prompt("Enter the category of the Product");
var price = prompt("Enter the price");
var brand = prompt("Enter the brand");
var productName = prompt("Enter the product name");
var IsConfirmed = confirm("Is this product in stock?");
var productInfo = {category:category , price:price , productName:productName ,IsConfirmed:IsConfirmed , brand:brand };

window.alert(`Product: ${productInfo.productName},Brand: ${productInfo.brand},Price: ${productInfo.price},Category: ${productInfo.category},is confirmed: ${productInfo.IsConfirmed}`);
console.log(`Product: ${productInfo.productName},Brand: ${productInfo.brand},Price: ${productInfo.price},Category: ${productInfo.category},is confirmed: ${productInfo.IsConfirmed}`);
console.log(productInfo);
document.getElementById("mainTitle").innerText = `Product: ${productInfo.productName},Brand: ${productInfo.brand},Price: ${productInfo.price},Category: ${productInfo.category},is confirmed: ${productInfo.IsConfirmed}`;
console.log(productInfo.productName[0]);