//Declaramos variables
var operandoa;
var operandob;
var operacion;
var contenido;
var borrar = false;
var resultado = document.getElementById('display');
var memoria = document.getElementById('memoria');
memoria.style.display="none";

function init(){
  //variables

  var reset = document.getElementById('on');
  var suma = document.getElementById('mas');
  var resta = document.getElementById('menos');
  var multiplicacion = document.getElementById('por');
  var division = document.getElementById('dividido');
  var punto = document.getElementById('punto');
  var sign = document.getElementById('sign');

  var igual = document.getElementById('igual');

  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');
  var cero = document.getElementById('0');





uno.onmousedown = function(){ reducir_tamaño(uno);}
uno.onmouseup = function(){ tamaño_original(uno);}
uno.onclick = function(){ escribir(1);}

dos.onmousedown = function(){ reducir_tamaño(dos);}
dos.onmouseup = function(){ tamaño_original(dos);}
dos.onclick = function(){ escribir(2);}

tres.onmousedown = function(){ reducir_tamaño(tres);}
tres.onmouseup = function(){ tamaño_original(tres);}
tres.onclick = function(){escribir(3);}

cuatro.onmousedown = function(){ reducir_tamaño(cuatro);}
cuatro.onmouseup = function(){ tamaño_original(cuatro);}
cuatro.onclick = function(){escribir(4);}

cinco.onmousedown = function(){ reducir_tamaño(cinco);}
cinco.onmouseup = function(){ tamaño_original(cinco);}
cinco.onclick = function(){escribir(5);}

seis.onmousedown = function(){ reducir_tamaño(seis);}
seis.onmouseup = function(){ tamaño_original(seis);}
seis.onclick = function(){escribir(6);}

siete.onmousedown = function(){ reducir_tamaño(siete);}
siete.onmouseup = function(){ tamaño_original(siete);}
siete.onclick = function(){escribir(7);}

ocho.onmousedown = function(){ reducir_tamaño(ocho);}
ocho.onmouseup = function(){ tamaño_original(ocho);}
ocho.onclick = function(){escribir(8);}

nueve.onmousedown = function(){ reducir_tamaño(nueve);}
nueve.onmouseup = function(){ tamaño_original(nueve);}
nueve.onclick = function(){escribir(9);}

cero.onmousedown = function(){ reducir_tamaño(cero);}
cero.onmouseup = function(){ tamaño_original(cero);}
cero.onclick = function(){escribir(0);}

suma.onmousedown = function(){ reducir_tamaño(suma);}
suma.onmouseup = function(){ tamaño_original(suma);}
suma.onclick = function(){arit('+');}

resta.onmousedown = function(){ reducir_tamaño(resta);}
resta.onmouseup = function(){ tamaño_original(resta);}
resta.onclick = function(){arit('-');}

multiplicacion.onmousedown = function(){ reducir_tamaño(multiplicacion);}
multiplicacion.onmouseup = function(){ tamaño_original(multiplicacion);}
multiplicacion.onclick = function(){prioridadOperacion();arit('*');}

division.onmousedown = function(){ reducir_tamaño(division);}
division.onmouseup = function(){ tamaño_original(division);}
division.onclick = function(){prioridadOperacion();arit('/');}

punto.onmousedown = function(){ reducir_tamaño(punto);}
punto.onmouseup = function(){ tamaño_original(punto);}
punto.onclick = function(){validapunto();}

sign.onmousedown = function(){ reducir_tamaño(sign);}
sign.onmouseup = function(){ tamaño_original(sign);}
sign.onclick  = function(){agregasigno();}

igual.onmousedown = function(){ reducir_tamaño(igual);}
igual.onmouseup = function(){ tamaño_original(igual);}
igual.onclick = function(){calcular();}

reset.onmousedown = function(){ reducir_tamaño(reset);}
reset.onmouseup = function(){ tamaño_original(reset);}
reset.onclick = function(){
  resultado.innerHTML = 0;
  memoria.innerHTML = "";
}




}

/*
function mostrar_resultado(){

resultado.innerHTML = contenido;
}
*/


function escribir(n){
//  console.log("escribe: " + n);
 var caja2 = resultado.innerText;
 if (borrar) {
resultado.innerHTML ="";
   borrar = false;
resultado.innerHTML= n;
 }
 else if (caja2 == "0" && n != "."){
   cajao = caja2.replace("0", "")
resultado.innerHTML = cajao + n;
 }
 else{
   if(caja2.length <= 7){
        resultado.innerHTML = caja2 + n;
   }

 }


}



function arit(o){
  var caja1 = memoria.innerText;
  var caja2 = resultado.innerText;
  var unum = caja1.substring(caja1.length-1);
  // console.log("unum: " + unum);

  calcular();


  if (unum == "+" || unum == "-" || unum=="*" || unum=="/") {
  //  console.log("Entra en paso 1");

    unum = unum.replace(unum,o);
    var res = caja1.substring(0,caja1.length-1);

    //   console.log("unum: " + unum);

    memoria.innerHTML = res+unum;
  //  console.log("res + num: " + res + " " + unum);


    /*Este codigo se agrego para cumplir la condicion 10
    que es al orpmir cualquier opreando (signo) el resultado
    quede limpio para que se capture el nuevo número*/
    resultado.innerHTML = "";
  }
  if (caja1 == "" && caja2 != ""){
  //  console.log("Entra en paso 2");
    memoria.innerHTML = caja2 + o;
  //  console.log("caja2 + o: " + caja2 +" " + o);

 /*Este codigo se agrego para cumplir la condicion 10
 que es al orpmir cualquier opreando (signo) el resultado
 quede limpio para que se capture el nuevo número*/
  resultado.innerHTML = "";
  }
  else{
 memoria.innerHTML = caja1 + caja2 + o;
  // console.log("Entra en paso 3");
  // console.log("caja 1 + caja2 + o: " + caja1 + " " + caja2 + " " + o);

   /*Este codigo se agrego para cumplir la condicion 10
   que es al orpmir cualquier opreando (signo) el resultado
   quede limpio para que se capture el nuevo número*/
    resultado.innerHTML = "";
  }
  borrar = true;
}


function calcular(){
  var caja1 =  memoria.innerText;
  var caja2 =  resultado.innerText;


//console.log("=========================== CALCULAR =========================")
//console.log("Calcula " +  "memorria: "  + caja1 + " " + "caja2: " + caja2);

 resultado.innerHTML = eval(caja1 + caja2);


/* Para mostrar solo 8 caracteres*/
//console.log("antes d substring: "+ resultado.innerText);
//console.log("caja2: " + caja2);

resultado.innerHTML =   resultado.innerHTML.substring(0,7);
memoria.innerHTML = "";

  borrar = true;
  blocdel = true;
}

function validapunto(){

var  cadena = resultado.innerText;

/*Nota: Solo vamos a escribirl el punto cuando no exista en la cadena*/
  if(cadena.indexOf('.') == -1){
  escribir('.');
 }
}



function prioridadOperacion(){
// console.log("Entra prioridad de operandos");
var  caja_memoria = memoria.innerText;
var  caja_resultado = resultado.innerText;

//console.log("memoria: " + caja_memoria);
//console.log("display: " + caja_resultado);

var cadena = caja_memoria + caja_resultado;




 var validacadena = 0;

 if(cadena.indexOf('+') != -1){
    validacadena = 1;
 }else if(cadena.indexOf('-') != -1){
       validacadena = 1;
 }else if(cadena.indexOf('/') != -1){
       validacadena = 1;
 }else if(cadena.indexOf('*') != -1){
       validacadena = 1;
 }


if (validacadena == 1){
  resultado.innerHTML  = "(" + cadena + ")";
  memoria.innerHTML = "";

}
  /*Nota: Solo vamos a escribirl el punto cuando no exista en la cadena*/


}

function agregasigno(){
  var  cadena = resultado.innerText;

  // Nota: Si no existe el signo "-" nos permite capturar
    if(cadena.indexOf('-') == -1){
    //  console.log('valor de cero: ' + cadena.indexOf('0'));

    /*Si el numero es diferente a cero nos permite*/
       if(cadena.indexOf('0') != 0){
         cadena = '-' + cadena;
           resultado.innerHTML  = cadena;

       }

   }else{
       /*SI el signo ya existe '-' lo quita*/
        cadena = cadena.replace("-", "");
        resultado.innerHTML  = cadena;
   }


}




  function reducir_tamaño(elemento){

    if (elemento.id != "mas"){
      elemento.style.height="60.9167px";
      elemento.style.width="75.80px";
     elemento.style.padding = "4px;"
     elemento.style.margin = "4px;"
    }else{

      elemento.style.width = "90%";
      elemento.style.height = "90%";

    }


 }
  function tamaño_original(elemento){

    if (elemento.id != "mas"){
      elemento.style.height="62.9167px";
      elemento.style.width="77.8666px";
      elemento.style.padding = "0px;"
    }else{

      elemento.style.width = "100%";
      elemento.style.height = "100%";

    }

  }
