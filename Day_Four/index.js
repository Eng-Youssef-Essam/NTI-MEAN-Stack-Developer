// Part A:

// Number 1:
var car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "red"
};
console.log(car);

// Number 2:
console.log(car.brand);
console.log(car["year"]);

// Number 3:
car.color = "black";
car.price = "18000";
console.log(car);

// Number 4:
delete car.year;
console.log(car.year); // Undefined => لم تعد موجوده 

// Number 5:
var student = {
    "student-name": "Sara"
};
student.age = 20;
console.log(student);

// Number 6:
var book = {
    title: "JavaScript Basics",
    author: {
        firstName: "Sara",
        lastName: "Ali"
    }
};
console.log(book.author.lastName);

// Number 7:
var person = {
    name: "Ali",
    age: 25,
    city: "Cairo"
};
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.hasOwnProperty("name"));

// Number 8:
var settings = Object.freeze({
    theme: "dark",
    lang: "en",
    fontSize: 16
});

console.log(settings);
settings.theme = "light";
settings.job = "developer";
console.log(settings); // themes still dark => freeze تجعل object غير قابله للتغير


// Part B:

// Number 9:
var cities = ["Cairo", "Giza", "Alexandria", "Aswan", "Luxor"];
console.log(cities);
console.log(cities.length);

// Number 10:
console.log(cities[0]);
console.log(cities[1]);
console.log(cities[cities.length - 1]);

// Number 11:
cities.push("Port Said");
console.log(cities);
cities.unshift("Suez");
console.log(cities);

// Number 12:
cities.pop();
console.log(cities);
cities.shift();
console.log(cities);

// Number 13:
var languages = ["HTML", "CSS", "JS", "React"];
console.log(languages.indexOf("JS"));
console.log(languages.includes("Python"));

// Number 14:
languages.forEach(function(item, index) {
    console.log(index, item);
});

// Number 15:
var colors = ["red", "green", "blue", "yellow"];
for (let color of colors) {
    if (color === "blue") {
        break;
    }
    console.log(color);
}


// Number 16:
var letters = ["A", "B", "C"];
letters.push("D");
letters.push("E");

console.log(letters);
console.log(letters.length);


// Part C:

// Number 17:
var fruits = ["apple", "banana", "cherry"];
console.log(fruits);
var upperFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});

console.log(upperFruits);
console.log(fruits);

// Number 18:
var numbers = [10, 55, 30, 80, 45, 90];
var greaterThan50 = numbers.filter(function(number) {
    return number > 50;
});
console.log(greaterThan50);

// Number 19:
var cities2 = ["Cairo", "Giza", "Alex", "Aswan"];
var city = cities2.find(function(city) {
    return city.startsWith("A");
});
console.log(city);

var cityIndex = cities2.findIndex(function(city) {
    return city.startsWith("A");
});

console.log(cityIndex);

// Number 20:
var letters2 = ["a", "b", "c", "d", "e"];
var copiedLetters = letters2.slice(1, 4);

console.log(copiedLetters);
console.log(letters2);

// Number 21:
var words = ["one", "two", "three", "four", "five"];
var removedItems = words.splice(1, 2);
console.log(removedItems);
console.log(words);

// Number 22:
var nums = [40, 100, 1, 5, 25];
nums.sort(function(a, b) {
    return a - b;
});
console.log(nums);

// Number 23:
var ages = [16, 21, 17, 19];
var someAdult = ages.some(function(age) {
    return age >= 18;
});

var everyAdult = ages.every(function(age) {
    return age >= 18;
});

console.log(someAdult);
console.log(everyAdult);

// Number 24:
var numbers3 = [5, 10, 15, 20];
var total = numbers3.reduce(function(sum, number) {
    return sum + number;
}, 0);
console.log(total);


// Part D:

// Number 25:
var students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];
for (var student of students) {
    console.log(student.name, student.grade);
}

// Number 26:
var goodStudents = students.filter(function(student) {
    return student.grade >= 80;
});
var studentNames = goodStudents.map(function(student) {
    return student.name;
});
console.log(studentNames);

// Number 27:
var products = [
    { name: "Laptop", price: 15000 },
    { name: "Phone", price: 10000 },
    { name: "Mouse", price: 500 }
];
var  totalPrice = products.reduce(function(total, product) {
    return total + product.price;
}, 0);
console.log(totalPrice);

// Number 28:
var skills = ["js", "html", "css", "js", "react", "js"];

var jsCount = skills.filter(function(skill) {
    return skill === "js";
}).length;

console.log(jsCount);

// Number 29:
var classroom = {
    teacher: "Ahmed",
    students: ["Omar", "Mona", "Ali", "Sara"]
};

console.log(classroom.teacher);
console.log(classroom.students.length);
console.log(classroom.students[classroom.students.length - 1]);

// Number 30:
var products2 = [
    { id: 1, title: "Pen", price: 10 },
    { id: 2, title: "Book", price: 50 },
    { id: 3, title: "Bag", price: 25 }
];

var titles = products2.map(function(product) {
    return product.title.toUpperCase();
});

var cheapProducts = products2.filter(function(product) {
    return product.price < 30;
});

var totalPrices = products2.reduce(function(total, product) {
    return total + product.price;
}, 0);

console.log(titles);
console.log(cheapProducts);
console.log(totalPrices);
