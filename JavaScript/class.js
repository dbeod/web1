//
//class  person{
 //   name;//properties
 //   age;//properties
 //   speak(); //function
 //}
//이름과 나이같은 속성(filed)가 들어있고 말하는'행동'(method)가 들어있다  
//fields와 methods가 종합적으로 묶여있는것이 class


//Class
//-template(틀을 말한다 클래스 자체에는 데이터가 없고 틀만 정의)
//-declare once(00클레스에는 00데이터가 들어올 수 있다고만 선언)
//-no data in(실제로 데이터는 없다)
//class를 이용해서 실제로 데이터를 넣어서 만드는것이 object
//Object
//-instance of a class
//-created mant times
//-data in
'use strict'
//object-oriented porgramming
//class:template
//object: instance of a class
//JavaScript classed
//-introduce in ES6
//-syntactical sugar(문법상의 편리를 위함)over prototype-based inheritance

//1. class declarations
class Person{
    //constructor 생성자
    constructor(name, age){
    //fileds
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. Getter and setters
class User{
    constructor(firstName, lasrName, age) {
        this.firstName = firstName;
        this.lasrName = lasrName;
        this.age =age;
    }

    get age(){
        return this.age;
    }

    set age(value){
        this.age = value;
    }
}

const user1= new User('Steve', 'Job', -1);
console.log(user1.age);