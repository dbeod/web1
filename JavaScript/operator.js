//1. String concatenation
console.log('my' +' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1+2}`); 
//2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

//3.Increment and decrement operator
let counter =2;
const preIncerment = ++counter;
console.log(`preIncerment: ${preIncerment}, counter: ${counter}`);
const postIncerment = counter++;
console.log(`postIncerment: ${postIncerment}, counter: ${counter}`);

//4.Assignment operator
let x = 3;
let y = 6;
x += y; // x = x+y
//5.comparison operator
console.log(10 < 6);//less than
console.log(10 <= 6);//less than or equal
console.log(10 > 6);//greater than
console.log(10 >= 6);//greater than or equal
//6.logical operator
const value1 = true;
const value2 = 4 < 2;
// || (or), finds the first truthy value
console.log(`or: ${value1 || value1 || check()}`);
function check(){
    for (let i =0; i< 10; i++){
        console.log('');
    }
    return true;
}
//&& (and)
//! not

//7.Equality
const stringFive = '5';
const numberFive = 5;

console.log(stringFive == stringFive);
console.log(stringFive != stringFive);

console.log(stringFive === stringFive);
console.log(stringFive !== stringFive);
//object equality by reference
const ellie1 ={ name: 'ellie'};
const ellie2 ={ name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);
//equality puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == false);
console.log(0 == undefined);
console.log(0 === undefined);
//8.conditional operator :if
//if, else if, else
const name ='ellie';
if (name ==='ellie'){
    console.log('Welcome Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}
//9.ternary operator: ?
//condition? value1 : value2;
console.log(name ==='ellie' ? 'yes' :'no');
//10.switch statement 
//use for Multiple if check
//use for enum-like if check
//use for Multiple type check in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
    console.log('go away!');
    break;
    case 'Chrome':
//생략가능    console.log('love you!');
//생략가능    break;
    case 'Firefox':
    console.log('love you!');
    break;
    default:
    console.log('same all!');
    break; 
}
//11.loop
//WHile loop, while the condition is truthy,
//body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}
//do while loop, body code is executed first,
//then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
}    while (i > 0);
//for loop, for(begin; condition; step)
for (i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}
//nested loops
for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

//break,(루프를 완전히 끝내는것) continue(지금거만 스킵하고 다음으로)
//Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++){
    if (i % 2 === 0){
        continue;
    }
    console.log(`q1. ${i}`);
}
//Q2. iterate from0 to 10 and print number  until reaching 8  (use break)
for (let i = 0; i < 11; i++){
    if (i > 8){
        break;
    }
    console.log(`q2. ${i}`);
}


