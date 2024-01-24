// let arr = [10,20,30,40,50];

// arr.forEach(printplus5)


// function printEle(ele , idx , arr){
//     console.log(ele , idx , arr)
// }

// function printdoubleELE(ele , idx , arr){
//     console.log(ele*2 , idx , arr)
// }

// function printTriple(ele , idx , arr){
//     console.log(ele*3)
// }


// function printplus5(ele , idx , arr){
//     arr [idx] = ele + 5 ;
// }

// console.log(arr);



// let arr = [10,20,35,45,50];

// let ans = arr.map(function(ele){
//     return ele/5 ;
// }) ;

// console.log(arr , ans);


// let ans = arr.filter(function(ele){
//     return ele%2==0 ;
// }) ;

// console.log(arr , ans);

// let ans = arr.reduce(function(pre , curr){
//    return pre + curr ;
// }, 0)

// console.log(ans);




let arr = [1,2,3,4,5];


let ans = arr.map(function(ele){
   return ele*ele ;
}) 

ans = ans.filter(function(ele , idx){
   return idx%2 == 0 ;
}) ;


ans = ans.reduce(function(pre , curr){
   return pre + curr ;

})

console.log(ans);


