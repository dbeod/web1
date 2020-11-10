'use strict';

//Promise is a Javascript object for asynchronuos Operation.
//비동기적인것을 수행할때 콜백함수 대신에 유용하게 쓸수있는 object
//1.State 상태 / 수행중인지 성공인지 실패인지 상태에 대해 이해하는것이 중요 
//2.Producer vs Consumer 이 두가지의 차이점을 잘 이해해야함
//원하는 데이터를 제공하는 사람과 이 데이터를 소비하는(쓰는)사람에 대한 이해가 필요
//state: pending(수행중) ---> fulfilled(성공.완료) or rejected(오류.문제시 호출)
//Producer vs Consume
//1.Producer
//when new Promise is created, the excutor runs automatically.
const promise = new Promise((resolve, reject) => {
    //doing some heavy Work (network, read files)
    console.log (`doing something...`);
    setTimeout(() => {
       // resolve('ellie')
    }, 2000);

});

//2.consumers : then, catch, Fainally
promise//
    .then(value => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
//성공하든 실패하든 무조건 호출
.finally(() => {
    console.log('finally');
});

//3.promise Chaining 
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});
fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(num-1), 1000);
    });
})
.then(num => console.log(num));

//4. Error Handling
const getHen = () =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
});

const getEgg = hen =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
});
const cook = egg =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});

// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));
getHen().then(getEgg).then(cook).then(console.log); //이렇게 한 줄로 생략 가능 



