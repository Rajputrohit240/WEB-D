// function counter() {
//     let count = 0;
//     return {
//         inc: function () {
//             count = count + 1;
//             console.log(count);
//         }
//         , dec: function () {
//             count = count - 1;
//             console.log(count);
//         }
//     }
// }

// let obj = counter();

// obj.inc();
// obj.inc();
// obj.inc();
// obj.inc();
// obj.inc();

// obj.dec();


// IIFE   An immediately invoked function expression

// let obj = (function counter() {
//     let count = 0;
//     return {
//         inc: function () {
//             count = count + 1;
//             console.log(count);
//         }
//         , dec: function () {
//             count = count - 1;
//             console.log(count);
//         }
//     }
// })()
// obj.inc();
// obj.inc();
// obj.inc();
// obj.inc();

// obj.dec();



//  DE-STRUCTURING


// let {inc , dec } = (function counter() {
//     let count = 0;
//     return {
//         inc: function () {
//             count = count + 1;
//             console.log(count);
//         }
//         , dec: function () {
//             count = count - 1;
//             console.log(count);
//         }
//     }
// })()
// inc();
// inc();
// inc();
// inc();
// dec();



let obj = {
    name : "rohit" ,
    age : 24 ,
    phone : "7566416124" ,
}

let {age , name } = obj ;
console.log(age , name);


// let arr = ["first" , "second" , "third"];

// let [a , b ] = arr ;

// console.log(a , b);













