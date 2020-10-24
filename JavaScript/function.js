//function
//- fundamental building block in the program
//- subprogram can be used multiple times
//- performs a task or calculate a value

//1.function declaration
//function name(param1, param2) {body... return;}
//one function === one thing 하나의 함수는 한가지의 일만 하도록만들어야함
// naming: dosomething, command, verb (명령,동사형태로 지정)
//e.g. createCardAndPoint -createCard, creatPoint(두개로 나눔)
//function is object in JS 변수나 파라미터 함수리턴이 가능 
function printHello(){
    console.log('hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('hello@');
log(1234);

//2. Parameters
//premitive Parameters: passed by value
// object Parameters: passed by reference
function changeName(obj) {
    obj.name= 'corder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

//3.Default parameters (added in ES6)
function showMessage(message, from ='unknown') {
   console.log(`${message} by ${from}`);
}
showMessage('Hi!');
//4. Rest p-Parameters (added in ES6)
function printAll(...args){
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
    for (const arg of args){
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

//5.Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message); 
        let childMessage = 'hello';
}
   // console.log(childMessage);//error
}
printMessage();
//6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

//7. Early return, earlt exit
//bad
function upgradeUser(user) {
    if (user.point > 10){
        //long upgrade logic...
    }
}
// good
function upgradeUser(user) {
    if (user.point <= 10){
       return;
    }// //long upgrade logic...
}


//First-class function
//function are treated like any other variable
//can be assigned as a value to variable
//can be passed as an argument to other functions.
//can be returned byanother function

//1.functiond expression
//a function declaration can b called earlier than it is defined.(hosted)
//a function expression is created when the execution reaches it.
const print = function () { //anonymous function 함수이름이 없음 
 console.log   ('print')
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. callbackunction using function expression
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    } else{
        printNo();
    }
}
//anonymous function - [ function ()]
const printYes = function () {
    console.log('yes!');
}
//named function - [ function print()]
//better debugging in debugger's stack traces
//recursion - 함수안에서 함수자신을 계속해서 호출하게됨 프로그램이 죽음 !!무한대 호출 
const printNo = function print() {
    console.log('no!');
}
randomQuiz('Wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//arrow function
//always annonymous



