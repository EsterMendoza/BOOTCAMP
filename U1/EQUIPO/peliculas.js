var preguntas = [
    "¿Quién creo la pelicula del titanic?",
    "¿En qué año se estreno?",
    "¿Quienes son los protagonistas?",
    "¿Cuál es el mensaje de la película Titanic?",
];

var opciones = [
    ["James Cameron",
      "Truman Capote",
      "Stephen Daldry"],
      ["1979",
      "1800",
      "1997"],
      ["Jakc y Rose",
      "Jack y Rose",
      "Jack y Rosa"],
      ["El exceso de confianza puede llevarnos a olvidarnos de las posibles dificultades e incidentes con los que nos encontremos durante nuestro camino, y que cuando la tragedia se produzca sea demasiado tarde para ponerle remedio",
      "Que no debes enarmorarte",
      "Ser precavido"],
];

var puntajePorOpcion=[
    [5,0,0],
    [0,0,5],
    [0,5,0],
    [5,0,0],
];
var i=0;

function siguientePregunta(){
    document.getElementById("pregunta").innerHTML=preguntas[i];  

    document.getElementById("op1").innerHTML = opciones[i][0]; 

    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("op4").innerHTML = opciones[i][3];
    
    
}

siguientePregunta();

var actualizado=0;

function actualizarPuntaje(alternativa){
    
    actualizado = puntajePorOpcion[i][alternativa]+actualizado;  


    if (i<4){
        siguientePregunta();  
    }

    else{
        mostrarResultado();
    }

}


document.getElementById("op1").addEventListener("click",function(){actualizarPuntaje(0)}); 
document.getElementById("op2").addEventListener("click",function(){actualizarPuntaje(1)});
document.getElementById("op3").addEventListener("click",function(){actualizarPuntaje(2)});
document.getElementById("op4").addEventListener("click",function(){actualizarPuntaje(3)});

function mostrarResultado(){

    document.getElementById("titulo").innerHTML="RESULTADOS";
    document.getElementById("pregunta").innerHTML="TU PUNTAJE OBTENIDO ES: "+actualizado;


}
