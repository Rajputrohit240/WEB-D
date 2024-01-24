let inputBar = document.querySelector(".input1");
let inputVar = document.querySelector(".input2");
let InputBar = document.querySelector(".input3");
let addBtn = document.querySelector(".add");
let delBtn = document.querySelector(".Delete")
let taskcont = document.querySelector(".taskcontainer");

// addBtn.addEventListener("click",function(){
//     let taskvalue =  inputBar.value;
//     let taskkvalue = inputVar.value;
//     let taskkkvalue = InputBar.value;
//     if(taskvalue!="",taskkvalue!="",taskkkvalue!=""){
//     let myele = document.createElement("div");
//     myele.classList.add("task");
//     myele.innerHTML = `<p>  ${taskvalue} <br>
//      ${taskkvalue}  <br>
//      ${taskkkvalue}  </p>`
//     taskcont.appendChild(myele);
//    let delBtn = document.querySelector(".Delete")
 
//    myele.addEventListener("dblclick",function(){
    
//     taskcont.removeChild(myele);

//    })
//    delBtn.addEventListener("click",function(){
    
//     delBtn.classList.toggle("bckgclr") ;
//     // delBtn.classList.remove("bckgclr") ;
//    if(bckgclr==red){
//    taskcont.addEventListener("click",function(){
//    taskcont.removeChild(myele)
//    })
//    }
//    else{ 
//    } 
//    })
// }   
// })
let flag = true;


addBtn.addEventListener("click",function(){
    let ele = document.createElement("div")
    ele.classList.add("task")
    ele.innerHTML = `<p> ${inputBar.value}</p>
    <p>${inputVar.value}</p>
    <p>${InputBar.value}</p>`
    taskcont.appendChild(ele);
    
    delBtn.addEventListener("click", function(){
        
    delBtn.style.backgroundColor="red" 
    if(flag = true){
    
    ele.addEventListener("dblclick",function(){
    taskcont.removeChild(ele)
    
     })}
     
    
     
     
    })
   
})