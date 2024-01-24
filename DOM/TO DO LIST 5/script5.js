let inputBar = document.querySelector("input");
let addBtn = document.querySelector(".add");
let taskcont = document.querySelector(".taskcontainer");

addBtn.addEventListener("click",function(){
    let taskvalue = inputBar.value;

    if(taskvalue!=""){

    let myele = document.createElement("div");

    myele.classList.add("task");

    myele.innerHTML = `<p> ${taskvalue} </p> <br> <button>Delete</button>`
     
    taskcont.appendChild(myele);

    let delBtn = myele.querySelector("button");

    delBtn.style.color = "red"

    delBtn.addEventListener("click",function(){

        taskcont.removeChild(myele);

    })
    
    console.log(myele);

}
})