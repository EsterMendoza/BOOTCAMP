var resultado = 0;
function sumando( numero1,numero2){

    resultado = numero1 + numero2
    return resultado

}

console.log(sumando(4 , 5) );
console.log(sumando(8 ,12));

//HALLANDO EL AREA DE UN CIRCULO
//let resultadoArea;
//const pi=3.14;

//radio = prompt("INGRESA UN RADIO:");
//resultadoArea = pi*radio*radio; //3.14*5*5 = 78.5
console.log(resultadoArea);

//PASANDO CODIGO A FUNCION
function areaCirculo( radio ){

    const pi = 3.14; //cuando usamos const significa que nunca va cambiar este valor
    let resultadoArea;
    resultadoArea = pi*radio*radio;
    return resultadoArea;

}

let radioValor = prompt ("INGRESA UN RADIO");
console.log(areaCirculo(radioValor));

