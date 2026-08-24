// Task 1
for (var i=0 ; i<=10 ; i++){
  console.log(i);
};

// Task 2
for (var i=1 ; i<=20 ; i++){
  if( i % 2 == 0){
    console.log(i);
  }
  else{
    continue;
  };
};

// Task 3
var sum = 0;
for (var i=1 ; i<=15 ; i++){
   sum += i;
}
console.log("Total sales: "+ sum);

// Task 4
var x = 1;
while(x<=7){
  console.log(x);
  x++;
}

// Task 5
var y = 8;
while(y>=1){
  console.log(y);
  y--;
}

// Task 6
var FirstTime = true;
do{
  console.log("Welcome to this website!");
  FirstTime = false;
}
while(FirstTime);

// Task 7
var itemsInCart = 10;

// do while: ينفذ الكود مرة واحدة على الأقل حتى لو الشرط false
do {
    console.log("ابدأ التسوق");
} while (itemsInCart < 5);

// while: يفحص الشرط أولاً، لذلك لن ينفذ الكود لأن الشرط false من البداية
while (itemsInCart < 5) {
    console.log("ابدأ التسوق");
}

// Task 8
var userName = "Ali";
var userAge = 22;
var isStudent = true;

console.log(typeof userName);
console.log(typeof userAge);
console.log(typeof isStudent);

// Task 9
var dbPrice = 10;
var inputPrice = "10";

console.log(dbPrice == inputPrice);
console.log(dbPrice === inputPrice);
// == للمقارنة بين القيم فقط، بينما === للمقارنة بين القيمة ونوع البيانات.

// Task 10
var userName = prompt("what is your name?");

console.log(`Welcome, ${userName}`);

window.alert(`Welcome, ${userName}`);

// Task 11
var PiecesNumber = prompt("Enter the number of the pieces: ");

console.log(typeof +PiecesNumber);
console.log(typeof parseInt(PiecesNumber));
console.log(typeof Number(PiecesNumber));

// Task 12
var a = 10;
var b = 3;

console.log("Sum = "+ (a+b));
console.log("Subtract = "+ (a-b));
console.log("Product = "+ (a*b));
console.log("Division = "+ (a/b));
console.log("Modules = "+ (a%b));
console.log("Power = "+ (a**b));

// Task 13
var age = 18;
if(age <= 18){
  console.log("You Can Watch");
}
else{
  console.log("You Can't Watch");
}

// Task 14
var score = 85 ;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("F");
}

// Task 15
var age = prompt("Enter your age:");
console.log(age >= 18 ? "Adult" : "Minor");

// Task 16
var day = prompt("What day is it?");

switch (day) {
    case "Monday":
        console.log("It's Monday!");
        break;

    case "Friday":
        console.log("It's Weekend!");
        break;

    case "Saturday":
        console.log("It's Saterday!");
        break;
    case "Sunday":
        console.log("It's Sunday!");
        break;

    default:
        console.log("It's another day.");
};

// Task 17
var price = prompt("Enter the unit price:");

for (var i = 1; i <= 10; i++) {
    console.log(i + " x " + price + " = " + (i * Numer(price)));
};

// Task 18
var fileSize = prompt("Enter file size:");

if(fileSize > 0){
  for(i=1 ; i<=fileSize ; i++){
    console.log(i);
  }
}
else{
  console.log(" Invalid file size");
}

// Task 19
var StartNumber = prompt("Enter the begging Number");
var EndNumber = prompt("Enter the End Number");

for(var S = StartNumber ; S <= EndNumber ; S++){
  if(S % 2 == 0){
    console.log("express");
  }
  else{
    console.log("normal");
  }
};

// Task 20
var Names = ["Ahmed", "Start", "Malak"];
for (var i = 0; i < Names.length; i++) {
    console.log("Student " + (i + 1) + ": " + Names[i]);
}

// Task 21
var total = 0;

for(var i=1 ; i<=5 ; i++){
  var number = Number(prompt("Enter 5 numbers"));
  total += number;
}
var average = total / 5;
console.log("Total: " + total);
console.log("Average: " + average);

// Task 22
var CorrectPin = "1234";
var attemps = 0;

while(attemps < 3){
  var PIN = prompt("Enter your PIN");
  if(PIN == CorrectPin){
    console.log("Access Successfully");
    break;
  }
  else{
    console.log("Access Denied");
    attemps++;
  }
}

// Task 23
var hasAccount = true;
var isVerified = false;

if (hasAccount && isVerified) {
    console.log("Welcome back");
} else if (hasAccount && !isVerified) {
    console.log("Please verify your account");
} else {
    console.log("Please sign up");
}

// Task 24
var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
console.log(a + b + Number(c) + d + e);
var result = a + b + Number(c) + d + e;

if(result <= 20){
  for(var i = 1; i<=result ; i++){
    console.log(i);
  };
}
else{
  console.log("Too big to print line by line");
}

// Task 25
var n = Number(prompt("Enter a number:"));

if (n < 0) {
    window.alert("Invalid input: number must not be negative");
} else {
    var factorial = 1;

    for (var i = 1; i <= n; i++) {
        factorial *= i;
    }

    console.log("Factorial: " + factorial);
    window.alert("Factorial: " + factorial);
}




























