/*
window.alert("Primeira msg!!")
var n1 = Number(window.prompt("Qual foi?"))
var n2 = Number(window.prompt("Qual foi 2?"))
var s = n1 + n2
window.alert(`A soma entre ${n1} e ${n2} é ${s}`)

var d = document.querySelector("div.logo")
var i = document.querySelector("img.logo")
d.addEventListener("mousemove", div_ent)
d.addEventListener("mouseout", div_out)
d.style.background = "rgb(70, 70, 128)"
function div_ent(){
    i.setAttribute("src", "ROG_LOGO2.png")
    d.style.background = "black"
}
function div_out(){
    i.setAttribute("src", "ROG_LOGO.png")
    d.style.background = "rgb(70, 70, 128)"
<<<<<<< HEAD
} 
*/
var img_opt = document.getElementById("img_opt")
function opt_1(){
    img_opt.src = "Third_Info.jpg"
}
function opt_2(){
    img_opt.src = "FACTORY_LOGO.jpg"
}
function opt_3(){
    img_opt.src = "MIDDLEGROUP_LOGO.jpg"
}
function opt_4(){
    img_opt.src = "SOFTEX_LOGO.png"
}
function opt_5(){
    img_opt.src = "BULLSHQ_LOGO.png"
}
function opt_6(){
    img_opt.src = "PARTNERS_LOGO.png"
}
