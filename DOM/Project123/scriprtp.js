let inputBar = document.querySelector(".input1");
let inputVar = document.querySelector(".input2");
let InputBar = document.querySelector(".input3");
let addBtn = document.querySelector(".add");
let delBtn = document.querySelector(".Delete")
let taskcont = document.querySelector(".taskcontainer");
let flag = false;

addBtn.addEventListener("click",function(){
    let taskvalue =  inputBar.value;
    let taskkvalue = inputVar.value;
    let taskkkvalue = InputBar.value;
    

    let myele = document.createElement("div");

    myele.classList.add("task");

    myele.innerHTML = `<p>  ${taskvalue} <br>
     ${taskkvalue}  <br>
     ${taskkkvalue}  </p>`
    taskcont.appendChild(myele);

    myele.addEventListener("dblclick",function(){
        if(flag== true){taskcont.removeChild(myele) }
    })
})

delBtn.addEventListener("click", function () {
    if (flag == false) {
        delBtn.style.backgroundColor = "red"
    }
    else {
        delBtn.style.backgroundColor = "black"
    }
    flag = !flag;
    console.log(flag);
})


   
    

