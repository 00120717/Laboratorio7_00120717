//1
var container;
//2
container = document.getElementById("c1");

//3
var text = "hola mundo";

container.innerText = text;

//4
container.style.backgroundColor = "#000000";

//5
container.style.color = "#1cb723";

//6
container.style.width = "200px";
container.style.height = "200px";

//7
var input = document.getElementById("c1");
input.innerHTML = '<input type=”text” placeholder="escriba su texto">';


/***************************************/

//1
var containers = document.getElementsByClassName("c2");

//2

var content = document.querySelectorAll(".c2");

content.forEach(element => {
    element.style.backgroundColor = "#009999";
});

//3
var input_c2 = document.getElementsByClassName("c2");
input_c2.innerHTML = "<input type='text' placeholder='Escriba su texto'>";

/***************EVENTOS*************/ 

//1
var boton = document.getElementById("btn-click");

//2

boton.onclick = function(evt){
    alert("Hola mundo"); 
}

//3
var btnCopy = document.getElementById("btnCopy");

//4
btnCopy.onclick = function(evt) 
{ 
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
}

