// function abc(){

//     console.log("Hello i am a function")

// }

// abc();
// abc();
// abc();

// function sum(a,b){
//     return a+b ;
// }

// let ans= sum(2,3);

// let ans2 =  sum(5,5)

// console.log(ans2)

// function sub(a,b){
//     return a-b ;
// }

// let ans= sub(2,3);

// let ans2 =  sub(5,5)

// console.log(ans)

// function mul(a,b){
//     return a*b ;
// }

// let ans= mul(2,3);

// let ans2 =  mul(5,5)

// console.log(ans)

// function div(a,b){
//     return a/b ;
// }

// let ans= div(2,3);

// let ans2 =  div(5,5)

// console.log(ans)


function fact(a){

    let ans=1 ;
    for(let i=1;i<=a;i++){
    ans= ans * i;
}

    return ans;
}

console.log(fact(5))


// function fibo(n){

//     let ft=0;
//     let st=1;

//     for(let i=1;i<=n;i++){
//         console.log(ft);

//         let tt= ft+st;

//         ft=st;
//         st=tt;
//     }
// }

// fibo(5)

                              // HOMEWORK  29-12-2023

   //code for odd and even check
   
   // function even(n){
   //     if(n%2==0){
   //         console.log("Even")  //code for odd and even check
   //     }else{
   //         console.log("ODD")
   //     }
   // }
   
   // even(6)
   
                              //code for checking prime
   
   // function prim(n){   //code for checking prime
   // let count=0;
   // for(i=1;i<=n;i++){
   //   if(n%i==0){
   //     count++;
   //   }  
   // }
   // if (count==2){
   //     console.log("Prime")
   // }else{
   //     console.log("Not")
   // }
   // }
   
   
   // prim(3)
   
                                        //sum of digit
   // function sum(n){    //sum of digit
   
   //     let count=0
   //     while(n>0){
   
   //         count=count+ n%10;
   //         n= Math.floor(n/10)
   
   //     }
   //     console.log(count)
   // }
   
   // sum(123)
   
   
                                //reverse digit
   // function rev(n){    
   
   //     let count=0
   //     while(n>0){
   
   //         count=count * 10 + n%10;
   //         n= Math.floor(n/10)
   
   //     }
   //     console.log(count)
   // }
   
   // rev(1236)
   
   
                            //armstrong 
   // function arm(n){    
   
   //     let count=0
   //     let x=n
   //     while(n>0){
   //        let d= n%10
   //         count=count+ d*d*d;
   //         n= Math.floor(n/10)
   //        }
   //      if(count==x){console.log("Arm")
        
   // }else{
   //     console.log("Not")
   // }
   // }
   // arm(153)
   
                        // print 1-100
   
   // function counting(){
   //    for(i=1;i<=100;i++){             // print 1-100
   //     console.log(i)
   //    }
   // }
   
   // counting()
   
                     //code for odd print
//    function odd(){
//        for(i=1;i<=100;i++){
//        if(i%2==1){
//            console.log(i) 
//        }
//        }
//    }
   
//    odd()/                           

//                //code for even print
// function even(){
//     for(i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i)  
//     }
//     }
// }

// even()


// function prim(n){   //code for checking prime
//    let count=0;
//    for(i=1;i<=n;i++){
//      if(n%i==0){
//        count++;
//      }  
//    }
//    if (count==2){
//        console.log("Prime")
//    }else{
//        console.log("Not")
//    }
//    }

//    prim(31)















