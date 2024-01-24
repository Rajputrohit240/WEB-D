let obj = {
    name : "Rohit",
    age : 24 ,
    phonenumber : "7566415124",
    address:{
        houseno : 67,
        city : "delhi"

    }

}

// let newwobj = obj ;    //same address shallowcopy
// let newobj = { ...obj }         // using spreadoperators   different address shallowcopy

let newwwobj = JSON.parse(JSON.stringify(obj));   //deepcopy  different address 
obj.name = "Rahul";
obj.address.city = "gwalior"




console.log(obj)
console.log(newwwobj)