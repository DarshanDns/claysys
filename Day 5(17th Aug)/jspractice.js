
// Task 2: Variables and Data Types
var name = "John Doe";
var age = 25;
var isStudent = true;
console.log("Name: " + name);
console.log("Age: " + age);
console.log("Is Student: " + isStudent);

// Task 3: Basic Arithmetic
var num1 = 10;
var num2 = 5;
console.log("Addition: " + (num1 + num2));
console.log("Subtraction: " + (num1 - num2));
console.log("Multiplication: " + (num1 * num2));
console.log("Division: " + (num1 / num2));

// Task 4: Conditional Statements
var number = 7; 
if (number % 2 === 0) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}

// Task 5: Loops
for (var i = 1; i <= 100; i++) {
    console.log(i);
}
var i=1;
console.log(i);
while(i<=100){
    console.log(i);
    i++;
}

// Task 6: Array Manipulation
var numbers = [12, 5, 20, 8, 15];
var largest = Math.max(...numbers);
var max=numbers[1]
for(var i=0;i<numbers.length;i++){
    if(max<numbers[i]){
        max=numbers[i];
    }
}
var large=max;

var sorted = numbers.slice().sort((a, b) => a - b);
console.log("Original Array: " + numbers);
console.log("Largest Number: " + largest);
console.log("Large Number(for loop): " + largest);
console.log("Sorted Array: " + sorted);

// Task 7: Functions
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
var celsius = 30;
var fahrenheit = celsiusToFahrenheit(celsius);
console.log(celsius + "°C is " + fahrenheit + "°F.");

