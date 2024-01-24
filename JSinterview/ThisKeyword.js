// let obj = {
//     name : "rohit",
//     city : "gwalior",
//     Printname : function(){
//         console.log(this.name , this.city);
//     }
// }


// obj.Printname();


let obj1 = {
    name : "Rohit",
    age : 24,
    print : function(){
        console.log(this.name + " is saying hi")

    },
    steps : function (n,m){
        console.log(this.name + " is walking" , n  + " steps",m)
    }
}

let obj2 = {
    name : "somesh",
    age : 26,
   
}


// obj1.print.call(obj2)

// obj1.steps.call(obj2,20,35)

// obj1.steps.apply(obj2,[20,35]);

// let steps = obj1.steps.bind(obj2,20,20);

// steps();



