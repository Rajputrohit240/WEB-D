let inputBar = document.querySelector("input");
let selectTag = document.querySelector("select");
let btn = document.querySelector("button");
let cont = document.querySelector(".container");
let colorInput = document.querySelector(".color");


btn.addEventListener("click",function(){

    let inputvalue = inputBar.value;
    inputBar.value = "";
    let selectvalue = selectTag.value;
    let color = colorInput.value;
    cont.style.display = "flex"
    cont.innerHTML="";
    for(i=1 ; i<=inputvalue; i++){
    let ele = document.createElement("div");

    ele.classList.add(selectvalue);
    ele.style.backgroundColor=color;

    ele.setAttribute("contenteditable" ,"true");

    ele.addEventListener("dblclick",function(){
        cont.removeChild(ele);
    })

    cont.appendChild(ele);
 }
})