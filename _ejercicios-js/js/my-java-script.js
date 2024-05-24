

function Ejercicio2(){
    let radio = parseFloat(document.getElementById("radio").value);
    if(isNaN(radio) || radio<0){
        document.getElementById("resultado").innerHTML = "<br>Introduce un dato válido";
    }else{
        let resultado = "<br>Longitud de la circunferencia = " + (radio*2*3.14);
        resultado += "<br>Área del círculo = " + (radio*radio*3.14);
        resultado += "<br>Volumen esfera = " + ((4/3)*3.14*radio*radio*radio);
        document.getElementById("resultado").innerHTML = resultado;
    } 
    return false;
}

function Ejercicio3(){
    let lado1 = parseInt(document.getElementById("lado1").value);
    let lado2 = parseInt(document.getElementById("lado2").value);
    let lado3 = parseInt(document.getElementById("lado3").value);
    if(isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 < 0 || lado2 < 0 || lado3 < 0){
        document.getElementById("resultado").innerHTML = "<br> Introduce datos válidos";
    }else{
        if(lado1 == lado2 && lado2 ==lado3){
            document.getElementById("resultado").innerHTML = "<br> El triángulo es equilátero";
        }else if(lado1 == lado2 || lado2 ==lado3 || lado3 == lado1){
            document.getElementById("resultado").innerHTML = "<br> El triángulo es isósceles";
        }else{
            document.getElementById("resultado").innerHTML = "<br> El triángulo es escaleno";
        }
    }
    
    return false;
}

function Ejercicio4(){
    let letrasDni = "TRWAGMYFPDXBNJZSQVHLCKE";
    let numeroDni = document.getElementById("dni").value;
    let expresionRegular = /^[0-9]{8}$/;
    if(expresionRegular.test(numeroDni)){
        numeroDni = parseInt(numeroDni)
        numeroDni = numeroDni%23;
        document.getElementById("resultado").innerHTML = "<br>La letra de tu dni es: " + letrasDni.charAt(numeroDni);
    }else{
        document.getElementById("resultado").innerHTML = "<br>Introduce un formato válido";
    }
    
    
    return false;
}

function Ejercicio5(){
    let palabra = document.getElementById("palabra").value;
    let expresionRegular = /^[a-zA-Z]+$/
    if(expresionRegular.test(palabra)){
        if(palabra == palabra.toUpperCase()){
            document.getElementById("resultado").innerHTML = "<br>Estos carácteres estan en mayúscula";
        }else if(palabra == palabra.toLowerCase()){
            document.getElementById("resultado").innerHTML = "<br>Estos carácteres estan en minúscula";
        }else{
            document.getElementById("resultado").innerHTML = "<br>No esta todos lo caracteres en mayúsucula o minúscula";
        }
    }else{
        document.getElementById("resultado").innerHTML = "<br>Solo puedes introducir caracteres de la (a) hata la (z), debes introducir al menos 1";
    }
        
    return false;
}

function Ejercicio6(){
    let palabra = document.getElementById("palabra").value;
    let expresionRegular = /^[a-zA-Z]+$/
    if(expresionRegular.test(palabra)){
       if(palabra == palabra.split('').reverse().join('')){
          document.getElementById("resultado").innerHTML = "<br>Es un palíndromo";
       }else{
          document.getElementById("resultado").innerHTML = "<br>No es un palíndromo";
       }
    }else{
        document.getElementById("resultado").innerHTML = "<br>Solo puedes introducir caracteres de la (a) hata la (z), debes introducir al menos 1";
    }
        
    return false;
}
   
function Ejercicio7() {


    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);

    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
        document.getElementById("resultado").innerHTML = "<br>Por favor, introduce números enteros positivos válidos.";
    } else {

        let a = Math.abs(num1);
        let b = Math.abs(num2);
        let cociente = 0;
        
        while (a >= b) {
            a -= b;
            cociente++;
        }
        let resto = num1 - (cociente * num2);
        document.getElementById("resultado").innerHTML = "<br>El cociente de la división es: " + cociente + "<br>El resto de la división es: " + resto;

    }


    return false;
}


function Ejercicio8() {
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);

    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
        document.getElementById("resultado").innerHTML = "<br>Por favor, introduce números enteros positivos válidos.";
    } else {

        let a = num1;
        let b = num2;

        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }

        document.getElementById("resultado").innerHTML = "<br>MCD: " + a;
    }

    return false; 
}
function Ejercicio9() {
        let opcion = parseInt(document.getElementById("select").value);
        if(opcion == 0){
            document.getElementById("resultado").innerHTML = "<br> Selecciona un mes"
    
        }else{
            const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
            document.getElementById("resultado").innerHTML = "<br>Mes:  " + meses[opcion-1];
    
        }
       

    return false; 
}

function Ejercicio10() {
    let opcion = parseInt(document.getElementById("select").value);
    if (opcion !== 0) {
        const jsondata = {
            "meses": [
                {
                    "español": "Enero",
                    "inglés": "January"
                },
                {
                    "español": "Febrero",
                    "inglés": "February"
                },
                {
                    "español": "Marzo",
                    "inglés": "March"
                },
                {
                    "español": "Abril",
                    "inglés": "April"
                },
                {
                    "español": "Mayo",
                    "inglés": "May"
                },
                {
                    "español": "Junio",
                    "inglés": "June"
                },
                {
                    "español": "Julio",
                    "inglés": "July"
                },
                {
                    "español": "Agosto",
                    "inglés": "August"
                },
                {
                    "español": "Septiembre",
                    "inglés": "September"
                },
                {
                    "español": "Octubre",
                    "inglés": "October"
                },
                {
                    "español": "Noviembre",
                    "inglés": "November"
                },
                {
                    "español": "Diciembre",
                    "inglés": "December"
                }
            ]
        };

        const mes = jsondata.meses[opcion - 1];
        document.getElementById("resultado").innerHTML = "<br>" + mes.español + "-" + mes.inglés;
    }else{
        document.getElementById("resultado").innerHTML = "<br>Selecciona una opción";
    }

    return false;
}



    
    
    