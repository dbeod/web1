//async & await
// clear style of using promise :)
//1.async
async function fetchUser(){
    //do network request in 10 secs....
    return 'ellie';
}
// async를 함수앞에 쓰면 코드블럭{}이 자동으로 promise로 바뀐다.
const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 async function getApple(){
     await delay(1000);
     return '🍎';
 }
 async function getBanana(){
    await delay(1000);
    return '🍌';
}

//function getBanana() {
//    return delay(3000)
//    .then(()=> '🍌');
//}

//콜백지옥
//function pickFruits() {
//    return getApple().then(apple => {
 //           return getBanana().then(banana => `${apple} + ${banana}`);
 //       });
//}
//간단하게  async 를 사용해보자 
async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

//3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join('+')
    );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);