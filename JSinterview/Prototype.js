let arr = [1,2,3,4,5];
let num = [6,7,8,9];

// let ans = arr.map((e)=>{
//     return e*2;
// })

// console.log(ans);



Array.prototype.sum = function(){
    let arr = this;
    let sum = 0;

    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];

    }
return sum;
}

console.log(num.sum());