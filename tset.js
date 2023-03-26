let home =document.getElementById('home');
let abuot =document.getElementById('abuot');
let Projects =document.getElementById('Projects');
let Connection =document.getElementById('Connection');
let boxCont=document.querySelector('.box-cont');
let boxCont2=document.querySelector('.box-cont-2');
let boxCont3=document.querySelector('.box-cont-3');
let boxCont4=document.querySelector('.box-cont-4');

home.onclick =function(){
    boxCont.style.display="block"
    boxCont2.classList.add('none')
    boxCont3.style.display="none"
    boxCont4.style.display="none"
    };

abuot.onclick =function(){
boxCont.style.display="none"
boxCont3.style.display="none"
boxCont4.style.display="none"
boxCont2.classList.remove('none')
};




Projects.onclick =function(){
    boxCont3.style.display="block"
    boxCont.style.display="none"
    boxCont4.style.display="none"
    boxCont2.classList.add('none')

};

Connection.onclick =function(){
    boxCont4.style.display="block"
    boxCont3.style.display="none"
    boxCont.style.display="none"
    boxCont2.classList.add('none')
}



// proloder

let proloder =document.getElementById("proloder");

window.addEventListener("load", function(){
    proloder.style.display = "none"

})