// Part A:

// 1:
function withoutStrict() {
    implicitGlobal = "I am global!";
}
withoutStrict();
console.log(implicitGlobal);

// 2:
function withStrict() {
    "use strict";
    try {
        strictImplicit = "test!";
        console.log(strictImplicit);
    } 
    catch (error) {
        console.log("strict mode error:", error.message);
    }
}
withStrict();

// 3:
function deleteWithStrict() {
    "use strict";
    var localVar = "test";
    try {
        // delete localVar;  error
    } 
    catch (error) {
        console.log("strict mode error:", error.message);
    }
    var obj = {
        prop: "value"
    };
    delete obj.prop;
    console.log(obj);
}
deleteWithStrict();


// Part B: 

// 4:
console.log(x); // undefined
var x = 10; 
console.log(x); // 10

// 5:

// Case 1
sayHi();  // Hi (Function declarations are hoisted completely )
function sayHi() {
console.log("Hi");
}
// Case 2
// sayBye();  =>  Error ( only hoist the variable name assigned to undefined)
var sayBye = function () {
console.log("Bye");
};

// 6:

// console.log(a);  Error => let variables can't be hoisted
// let a = 5;

// 7:
var n = 1;
function demo() {
  console.log(n); // Undefined
  var n = 2;
  console.log(n); // 2
}
demo();
console.log(n) // 1


// Part C:

// 8:
function testVarScope() {
    if (true) {
        var functionScopedVar = "Hello";
    }
    console.log(functionScopedVar); //  Hello
}
testVarScope();

// 9:
function testBlockScope() {
    if (true) {
        let blockLet = "Hello";
        const blockConst = "There";
    }
    // console.log(blockLet);   ReferenceError
    // console.log(blockConst);  ReferenceError
}
testBlockScope();

// 10:
var user = "Alice";
var user = "Bob"; 
console.log(user); // Bob

let age = 20;
// let age = 30;

// 11:
const student = {
    name: "Alex",
    age: 20,
    city: "Cairo"
};

student.age = 21;
console.log( student);

student.grade = "A";
console.log("After adding grade:", student);

delete student.city;
console.log("After deleting city:", student);

try {
    student = { name: "John" };
} catch (error) {
    console.log("Reassignment error:", error.message);
}

// 12:
const nums = [1, 2, 3];

nums.push(4);    // allowed
nums[0] = 100;   // allowed
console.log( nums);

try {
    nums = [5, 6, 7]; // Not allowed
} catch (error) {
    console.log("Array reassignment error:", error.message);
}

// 13:
var a; // valid => undefined
let b; // valid => undefined
// const c;  invalid => Error

// 14:
var g1 = "var global";
let g2 = "let global";
const g3 = "const global";

console.log(window.g1); // var global (variables declared in global scope)
console.log(window.g2); // undefined
console.log(window.g3); // undefined

// 15:
const handlers = {};
for (var i = 0; i < 3; i++) { //let creates a new block-scoped variable binding per loop iteration
  handlers["fn" + i] = function () {
    return "index: " + i;
  };
}
console.log(handlers.fn0()); // 0
console.log(handlers.fn2()); // 2


// Part D:

// 16:
const welcome = (name) => `Welcome, ${name}!`;
console.log(welcome("Sarah"));

// 17:
const fullInfo = (first, last, age) => `${first} ${last} is ${age} years old`;
console.log(fullInfo("Youssef", "Essam", 20));
console.log(fullInfo("Ali", "Hassan", 25));

// 18:
const multiply = (a, b) => a * b;

const printAndSum = (a, b) => {
    console.log(`a: ${a}, b: ${b}`);
    return a + b;
};

console.log("Product: " + multiply(4, 5));
console.log("Sum: " + printAndSum(4, 5));


// Part E:

// 19:
const product = {
title: "Laptop",
price: 15000,
inStock: true,
brand: "Dell"
};

const { title, price, inStock } = product;
console.log(title, price, inStock);

// 20:
const techStack = ["HTML", "CSS", "JS", "React"];
const [firstItem, secondItem] = techStack;
console.log(firstItem, secondItem);

// 21:
const greet = (name = "Guest", message = "Hello") => `${message}, ${name}!`;

console.log(greet("Ali", "Hi")); 
console.log(greet("Sara"));      
console.log(greet()); 

// 22:
const sumAll = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

console.log(sumAll(1, 2, 3));       
console.log(sumAll(10, 20, 30, 40));  

// 23:
var arr1 = [1, 2];
var arr2 = [3, 4, 5];
var mergedArr = [...arr1, ...arr2];
console.log("Merged:", mergedArr);

var originalArr = [10, 20, 30];
var copyArr = [...originalArr];
copyArr.push(40);

console.log("Original:", originalArr); // [10, 20, 30]
console.log("Copy:", copyArr); // [10, 20, 30, 40]

// 24:
const user_1 = { name: "Sara", age: 22 };
const contact_1 = { email: "sara@nti.com", age: 23 };

const mergedUser = { ...user_1, ...contact_1 };
console.log(mergedUser); // 23 properties evaluated later overwrite

// 25:
const values = [2, 4, 6, 8];
function total(a, b, c, d) {
    return a + b + c + d;
}
console.log("Total:", total(...values)); // 20


// Part F:

// 26:
let person1 = { name: "Ali", child: { age: 5 } };
let person2 = person1;
person2.name = "Omar";
console.log(person1.name);  // omar (person2 copies the  the exact same object memory location as person1)

// 27:
const original = {
    name: "Mona",
    details: { city: "Cairo" }
};

const shallowCopy = { ...original };
shallowCopy.name = "Noha";
shallowCopy.details.city = "Alex";

console.log("Original:", original);
console.log("Copy:", shallowCopy);

// 28:
const deepCopy = structuredClone(original);
deepCopy.details.city = "Giza";

console.log("Original nested city:", original.details.city);
console.log("Deep copy nested city:", deepCopy.details.city);

// 29:
const userObj = { name: "Ahmed", age: 26, city: "Alex" };

localStorage.setItem("userdata", JSON.stringify(userObj));

const rawData = localStorage.getItem("userdata");
const parsedData = JSON.parse(rawData);

console.log("Data Type:", typeof parsedData);
console.log("Values:", parsedData);

localStorage.removeItem("userdata");


// Part G:

// 30:
const APP_CONFIG = {
    name: "My App",
    version: "1.0.0",
    api: {
        baseUrl: "https://api.example.com",
        timeout: 3000
    },
    features: ["auth"]
};


APP_CONFIG.api.timeout = 5000;
APP_CONFIG.features.push("dark-mode");

console.log("Updated APP_CONFIG:", APP_CONFIG);

try {
    APP_CONFIG = {};
} catch (error) {
    console.log("Reassignment Error:", error.message);
}

// 31:
const createCard = (title, price = 0, ...tags) => {
    return {
        title,
        price,
        tags,
        label: `${title} ${price} EGP`
    };
};

const card1 = createCard("Laptop", 15000, "tech", "computers");
const card2 = createCard("Free Sticker");

console.log(card1);
console.log(card2);

// 32:
const students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];

for (const { name, grade } of students) {
    console.log(`${name} scored ${grade}`);
}

