//RegExp
//passwor stright
//11 Abc $#$&
let Btn = document.getElementById('change')
// let text = "Mongoliin hun am 3.3 #$@!@ say hun hvrlee..."
// let regEx =/\W/g;
// console.log(text.match(regEx))
Btn.addEventListener('click',Change)
function Change(){
    let x = prompt("HEX code oruulna uu!");
    let regEx = /^#[a-fA-F0-9]{6}$/;
    if(x.match(regEx)){
        console.log("zov baina")
    }else{
        console.log("buruu bna")
    }
}
