// Part A

// Number 1:
var FullName = "Ahmed Ali";
console.log(FullName.length);

// Number 2:
console.log("I am learning JavaScript".toUpperCase());
console.log("I am learning JavaScript".toLowerCase());

// Number 3:
console.log("student@nti.com".includes("@"));

// Number 4:
var Word = "JavaScript";
console.log(Word[0]);
console.log(Word[(Word.length)-1]);

// Number 5:
var Text_One = "This is a bad day";
console.log(Text_One.replace("bad","good")); 

// Number 6:
var Text_Two = "I love coding";
var Text_Two_Array = Text_Two.split(" ")
console.log(Text_Two_Array);
console.log(Text_Two_Array.join(" "));

// Number 7:
var Text_Three = " nti egypt training ";
console.log(Text_Three.trim().toUpperCase().replace("EGYPT", "CAIRO"));


// Part B

// Number 8:
var number_One = "45.8";
console.log(Number(number_One));

// Number 9:
var number_Two = 7.6;

console.log(Math.round(number_Two)); 
console.log(Math.floor(number_Two)); 
console.log(Math.ceil(number_Two));

// Number 10:
var a = 12;
var b = 5;
var c = 28;
var d = 9;

console.log(Math.max(a, b, c, d));
console.log(Math.min(a, b, c, d));

// Number 11:
var randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

// Number 12:
var price = 19.4567;
console.log(price.toFixed(2));

// Number 13:
var number1 = Math.floor(Math.random() * 50) + 1;
var number2 = Math.floor(Math.random() * 50) + 1;
var number3 = Math.floor(Math.random() * 50) + 1;
var number4 = Math.floor(Math.random() * 50) + 1;
var number5 = Math.floor(Math.random() * 50) + 1;

console.log("Max:  ", Math.max(number1 , number2 , number3 , number4 , number5))
console.log("Min:  ", Math.min(number1 , number2 , number3 , number4 , number5))

var sum = number1 + number2 + number3 + number4 + number5 ;
var average = sum / 5;
console.log("Average:", average.toFixed(2));


// Part C:

// Number 14:
for (var i = 1; i <= 20; i++) {
    console.log(i);
}

// Number 15:
for (var i = 1; i <= 15; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Number 16:
var i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

// Number 17:
var Names = ["Sara", "Omar", "Mona", "Youssef"];

for (var name of Names){
    console.log(name);
}

// Number 18:
for (var i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

// Number 19:
for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }

}

// Number 20:
for (var i = 1; i <= 30; i++) {
    if (i === 25) {
        break;
    }
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}


// Part D:

// Number 21:
var hello = "HELLO";

// First Method:
for (var letter of hello) {
    console.log(letter);
}

// Second Method:
for(var i=0 ; i<hello.length ; i++){
    console.log(hello[i]);
}

// Number 22:
var numbers2 = [10, 20, 30, 40];

var sum = 0;

for (var number of numbers2) {
    sum += number;
}

console.log(sum);

// Number 23:
var sentence = "JavaScript is amazing and awesome";
var count = 0;

for (var letter of sentence) {
    if (letter === "a" || letter === "A") {
        count++;
    }

}
console.log(count);

// Number 24:
var grades = [70, 85, 92, 60, 77, 88];

for (var grade of grades) {
    if (grade % 2 === 0) {
        console.log(grade);
    }

}

// Number 25:
for (var i = 1; i <= 4; i++) {
    var stars = "";

    for (var j = 1; j <= i; j++) {
        stars += "* ";
    }

    console.log(stars);
}

// Number 26:
var students = ["ahmed", "sara", "omar", "laila", "hassan"];
var matchedCount = 0;

for (var student of students) {
    var name = student.toUpperCase();

    if (name.startsWith("A") || name.startsWith("S")) {
        console.log(name);
        matchedCount++;
    }

}

console.log("Matched names:", matchedCount);