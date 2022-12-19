var nombre="Ester"; 
console.log(nombre);
console.log(typeof(nombre));//string

var numero=15.2007;
console.log(numero);
console.log(typeof(numero));//number

var pregunta=false;//true
console.log(pregunta);
console.log(typeof(pregunta)); //boolean

var semana;
console.log(typeof(semana));//undefiend

console.log(4+4);

console.log(20*7);
console.log(6%5);

console.log(4-4 ); // 4 es igual a 4?
console.log(51-5); // 25 es diferente de 5?
console.log(4<5); // 5 es menor a 4?
console.log(10>20) // ¿10 es mayor a 20?
console.log(8<=9) // ¿8 es menor o igual a 9?

console.log(15>-10) // 15 es mayor o igual a 10?
console.log(6<8 && 10<8) //¿6 es menor a 8? true....y....10 es menor a 8? false
console.log(6<8 || 10<8); //¿6 es menor a 8? true....0....¿10 es menor a 8? false
console.log(!false); //!--> negación

var saludo="mundo";
console.assert(`Hola ${saludo}`== "Hola mundoss");
