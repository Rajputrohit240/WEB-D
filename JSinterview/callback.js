// console.log("start");

// function postLinkedin(project){
//     console.log(project + " is ready and posted on linkedin")
// }

// function makeProject(projectName,postLinkedin){

//     setTimeout(function(){
//         let project = projectName + "code";
//         postLinkedin(project);
//     },2000)
// }

// makeProject("youtube",postLinkedin);

// console.log("end")






//  PIZZA


let raw = "maida";

function makedough(raw, callback) {
    setTimeout(function () {

        let dough = raw + "water";
        callback(dough);

    }, 2000)
}


function makebase(dough, callback) {
    setTimeout(function () {

        let base = dough + "vegetables";
        callback(base);

    }, 2000)
}

function bakepizza(base, callback) {
    setTimeout(function () {

        let pizza = base + "heat";
        callback(pizza);

    }, 2000)
}


console.log("start");

makedough(raw, function (dough) {
    console.log("dough is ready")
    makebase(dough, function (base) {
        console.log("base is ready");
        bakepizza(base, function (bakedpizza) {
            console.log("pizza is ready")
        })
    })
})

console.log("end")