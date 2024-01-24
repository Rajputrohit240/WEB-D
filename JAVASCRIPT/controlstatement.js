/*for(let i=1; i<=100;i++){
    console.log(i);
} */

/*let n=7;
let ans=1;

for(let i=1; i<=n; i++){
    ans=ans * i;
}

console.log(ans)*/

/*for(i=1;i<=100;i+=2){
    console.log(i)
}*/

/*for(i=1;i<=100;i++){
    if(i%2==1){
        console.log(i)
    }
}*/


/*let n= 2;

let count=0 ;
for(i=1;i<=n;i++){
    if(n%i==0){
        count++;
    }
//}
//if(count==2){
  //  console.log("Prime")
//}else{
  //  console.log("Not Prime")
//}*/

/*let n=5
let ft=0
let st=1
for( let i=1;i<=n;i++){
    console.log(ft);

    let tt= ft + st ;

    ft=st;
    st=tt;

}*/

/*let n=100
let i=1;
while(i<=n){
    console.log(i);
    i++;

}*/


/*let m=123

let count=0
while(m>0){
    count=count*10 + m%10;
    m= Math.floor(m/10)
}

console.log(count)*/

let n=153
let x=n

let count=0;
while(n>0){
    let d= n%10
    count=count + (d * d * d)
    n= Math.floor(n/10)
}

if(count==x){
    console.log("Armstrong")
}else{
    console.log("Not")
}







