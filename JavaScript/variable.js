'use strict'
// 2.Variable변수 rw(read/write)
//let (ES6에서 추가됨 mutable type ) 그 전에는 var를 사용. 블럭 스콥이 없다.  값을 선언하기 전에 쓸 수 있다. ES6 이전 버전은 잘 쓰지 않는다. 


let globalName = 'global name'
//글로벌 스콥 
{
let name= 'ellie';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}

console.log(name);
console.log(globalName);

//var 절대쓰지말것
//var hoisting(끌어올려주다) 어디에 선언했냐 상관없이 항상 제일 위로 선언을 끌어올려주는것을 말함 'hoisting=끌어올려주다 라는 뜻 ' 
//블럭 스콥이 없음. 블록을 무시함 (블록 안에 값 4를 넣었는데 안 가려지고 그냥 나옴;;;)
{age=4;
var age;}
console.log(age);

//3.Constants -r(read only)읽기만 가능( immutable type =변경이 불가. 값을 할당한 후 변경되지 않는 데이터를 이용할 때 사용)
//note!
//Immutable data types: premitive type, frozen object
//Mmutable types: all object by default are mmutable in JS

//favor immutable data type always for a few reason
// - security 보안
// - thread safety 
// - reduce human mistakes 
const daysInWeek = 7;
const maxnumber = 5;

//4.Variable type (= 1. primitivetype과 2.object type으로 기본구성 자바스크립트에서는 3function도 타입 중에 하나)
//primitive, single item: number, string, boolean, null, undefine, symbol
//object, box container
//function, first-class fucntion
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
//nember
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn ='not a nember' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = 'c';
const brendan = 'brendan';
const greeting ='hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob =`hi ${brendan}!`; //template literals(string)백틱 기호 
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false:0,null,undefined, NaN, ''
//true:ant other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
//undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);
//symbol, creat unique identifiers for objects
const Symbol1 = Symbol('id');
const Symbol2 = Symbol('id');
console.log(Symbol1 === Symbol2)
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2)
console.log(`value: ${Symbol1.description}, type: ${typeof Symbol1}`);

//5. Dynamic typin:Dynamically types language
let text = 'hello';
console.log(text.charAt(0)); //TS 타입스크립트가 나옴 자바스크립트 위에 타입이 올려진 것
console.log(`value: ${text}, type: ${typeof text}`)
text = 1
console.log(`value: ${text}, type: ${typeof text}`)
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`)
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`)

//object, real-life object, data structure
const ellie = {name: 'ellie', age:20};
ellie.age =21;


