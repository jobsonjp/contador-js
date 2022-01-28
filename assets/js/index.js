var contador1 = 0
var contador2 = 0

display1$ = document.getElementById("display1")
display2$ = document.getElementById("display2")

function decrementar1(){
    
    contador1--
    display1$.innerHTML = contador1
}

function incrementar1(){
   
    contador1++
    display1$.innerHTML = contador1
}

// A partir daqui é o código referente ao Contador #2

document.getElementById("btn_decremento2").addEventListener("click", decrementar2(), false);
document.getElementById("btn_incremento2").addEventListener("click", incrementar2(), false);

function decrementar2(){
    
    if (parseInt(display2$.innerHTML) > 0){
    contador2--
    display2$.innerHTML = contador2
}
}

function incrementar2(){
    if (parseInt(document.getElementById("display2").innerHTML) < 10){
        contador2++
        display2$.innerHTML = contador2
    }
}



