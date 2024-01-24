// let arr1 = [1,2,3];
// let arr3 = [5,6,7];
// let arr2 = [8,9,0];

// let ans = [...arr2 , ...arr1 , 99 , ...arr3];

// console.log(ans);



// function sum (n , m){
//     return n + m ;
// }


function sum (...arr){
    return arr.reduce(function(pre , curr){
        return pre + curr ;
    }) ;
}

console.log(sum(5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5));


