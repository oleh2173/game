const yulia = document.getElementById("yulia");
const xuy = document.getElementById("xuy");

document.addEventListener("keydown", function (event){
    jump();
});

function jump (){
    if(yulia.classList != "jump") {
        yulia.classList.add("jump")
    }
    setTimeout(function (){
        yulia.classList.remove("jump")
    },500)
}

let isAlive = setInterval(function (){
    let yuliaTop = parseInt(window.getComputedStyle(yulia).getPropertyValue("top"));
    let xuyLeft = parseInt(window.getComputedStyle(xuy).getPropertyValue("left"));

    if (xuyLeft<20 && xuyLeft > 0 && yuliaTop >= 140){
        alert("Юля присіла на члена!!")
    }
}, 10)