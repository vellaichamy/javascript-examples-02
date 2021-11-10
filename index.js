// Import stylesheets
import './style.css';

var js ='Javascript code!'
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Ugra");
console.log(23);

let firstName = "Ugra";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let $function = 27;
let person = "Ugra";
let PI = 3.1415;
let myFirstJob = "Coder";
let myCurrentJob = "Student";
let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

// console.clear();
////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Ugra');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
// console.clear();


////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'Student';
job = 'teacher'

let lastName = 'Vellaichamy';
console.log(lastName);


////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const agex = now - 1991;
const agey = now - 2018;
console.log(agex, agey);

console.log(agex * 2, agex / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(firstName + ' ' + lastName);
console.clear();

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);
console.log(now - 1991 > now - 2018);

const jonas = "I'm " + firstName + ', a ' + (2010 - birthYear) + ' year old ' + job + '!';
console.log(jonas);
const jonasNew = `I'm ${firstName}, a ${2021 - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JavaScript Examples 02</h1>`
+
js +'<br>' +myFirstJob +'<br>' +firstName + ' ' + lastName
+'<br>' +jonas +'<br>' +jonasNew 