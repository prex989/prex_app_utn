// tipos de datos
// string entre comillas dobles o simple
// numeros enteros o reales tipo number
// boolean true o false
//array entre llaves nombre del elemento dos puntos y el valor
//lista entre llaves ubicacion y valores separados por comas

// let nombre = "Pablo";
// let apellido = "Rex";
// let edad = 49;
// let TenerMascota = true;

// console.log(nombre + " " + apellido + " " + edad +" años"+ " " + "tenes mascota? "+TenerMascota);
// //-------Operaciones--------
// let numeroA=12;
// let numeroB=3;
// let resultado=numeroA+numeroB;
// let resultadoMul=numeroA*numeroB;
// console.log(resultadoMul);

// let entrada=prompt('Ingrese su usuario');
// let salida="hola"+entrada;
// alert(salida);

// let edad=parseInt(prompt('Ingrese su Edad'));
// let anioActual=2021;
// let varSalida=anioActual-edad;
// alert('Año de Nacimiento '+varSalida);
// if (edad>40){
//     let vargeneracion="Generacion X";
//     alert(vargeneracion);
// }
// else if (edad<21){
//     vargeneracion="Millenials";
//     alert(vargeneracion);
// }

//----------CONDICIONALES--------------------

// let calificacion=3;
// if(calificacion>3){
//     console.log('El número es mayor a tres')
// } else if(calificacion<3){
//     console.log('El número es menor a tres')
// }else{
//     console.log('El número es igual a tres');
// }

//----------OPERADOR TERNARIO--------------------

// let edad=19;
// let esMayorEdad;
// if(edad>18){
//     esMayorEdad=true;
// }else {
//     esMayorEdad=false;
// }
// let edad=19;
// esMayorEdad=edad >18? true:false;
// console.log('es mayor de edad?'+esMayorEdad)
// : console.log(nombre+'noes mayor de edad');

//----------EJERCICIO--------------------
// let numero=prompt('Ingrese un número');
// let saludo=prompt('Ingrese un saludo');
// let numero2=prompt('Ingrese un número comprendido entre 0 y 50');

// if(numero>1000){
//     alert('el numero es mayor a mil');
// }
// if(saludo=="hola"){
//     alert('hola como estas???');
// }

// if(numero2>0 & numero2<50){
//     alert('el numero está comprendido entre 1 y 50');
// }
//----------ARRAY--------------------
// let colorMascotas=[
//     ['perro','marron','gris','rojo'],
//     ['gato','blanco'],
//     ['pez','globo'],
//     ['leon','blanco'],
// ]
// console.log(colorMascotas[2]);
// console.log(colorMascotas.length);
// console.log(colorMascotas[0][3].length);

//----------ARRAY EJERCICIO--------------------
// let matrizDeCinco = [
//   ["perro", "marron", "gris", "verde"],
//   ["gato", "blanco"],
//   ["pez", "globo"],
//   ["leon", "blanco"],
//   ["tigre", "azul"],
// ];
// console.log(matrizDeCinco[0]);
// console.log(matrizDeCinco.length);
// console.log(matrizDeCinco[0]);

//----------ARRAY EJERCICIO 2--------------------
// let ListaSuper =
//   ["leche", "manteca", "queso", "aceite", "crema"];
//   let element=prompt('Ingresar un comestible');
// if(ListaSuper.includes(element)){
//     alert('el comestible ya está en la lista');
// }else{
//     ListaSuper.push(ListaSuper);
//     alert('la lista completa es '+ListaSuper);
// }
//----------SWITCH--------------------
// let colore = prompt("ingrese un color");
// switch (cerveza=colore) {
//   case "grisgris":
//     alert("es IPA");
//     break;
//   case "rojo":
//     alert("es ROJA");
//     break;
//   case "dorada":
//     alert("es Golden");
//     break;
//   case "verde":
//     alert("es APA");
//     break;
//   default:
//     alert("no es cerveza");
// }
//----------SWITCH EJERCICIO--------------------
// let dia = new Date().getDate();
// console.log(dia);
// switch (true) {
//   case 0:
//     alert("Domingo");
//     break;
//   case 1:
//     alert("Lunes");
//     break;
//   case 2:
//     alert("Martes");
//     break;
//   case 3:
//     alert("Miercoles");
//     break;
//   case 4:
//     alert("Jueves");
//     break;
//   case 5:
//     alert("Viernes");
//     break;
//   case 6:
//     alert("sábado");
//     break;
// }

// let num=prompt('Ingrese un número');

// switch (true) {
//   case Number(num) > 10:
//     document.write("Mayor a 10");
//     break;
//   case (Number(num) <= 10 && Number(num)>0):
//     document.write("Menor o Igual a 10");
//     break;
//   case Number(num) == 0:
//     document.write("Igual a Cero");
//     break;
//   default:
//     document.write("No es un Número");
// }

//-------------Ejercicio Num de la Suerte------------
// function NumSuerte() {
//   let num = prompt("Ingrese un número: ");
//   let mul2 = num % 2;
//   let mul3 = num % 3;

//   if (num > 0 && num!=15) {
//     if (mul2 == 0 || mul3 == 0) {
//       alert("Es número de la suerte");
//     } else {
//       alert("No es número de la suerte");
//     }
//   } else {
//     alert("No es número de la suerte");
//   }
// }

//-------------Bucles e Iteraciones------------
// let i=1; //contador incremento
// while (i<10) {
//   console.log('El valor de i  es : '+i);
//   i=i+1;
// }

// let j=100; //decremento
// while (j>0) {
//   console.log('El saldo remanente  es : '+j);
//   j=j-5;
// }

//--------Do While-------------

// let i=5;
// do {
//   console.log('el valor de i es: '+i);
//   i=i-1;
// }while (i=0);

//------------Ejercicio---------

// let c = 100;
// while (c > 0) {
//   if ((c === 1)) {
//     document.write("Te quedan " + c + " paso por caminar <br>");
//     c = c - 1;
//   } else {
//     document.write("Te quedan " + c + " pasos por caminar <br>");
//     c = c - 1;
//   }
// }

//----array y bucles------

// let numerosParaSumar=[
//   [2, 4],//2*4
//   [4, 7],//4*7
//   [9, 56],//9*56
//   [1, 3]//1*3 y acumula todos los resultados
// ];

// function sumaNum(numeros) {
//   resultado=0;
// for (let i=0; i<numeros.length; i++){
//   let num1=numeros [i][0];
//   let num2=numeros [i][1];
//   resultado+=num1*num2;
// }
// return resultado;

//   }

//   let sumaNumeros = sumaNum(numerosParaSumar)
// console.log(sumaNumeros);

//------otro ejercicio de ciclo FOR Tabla de Multiplicar-----

// let IngreseNumero=parseInt(prompt('Ingresar NUmero'));

// for (let i=1; i<=10;i++){
//   let resultado=IngreseNumero *i;55
//   document.write(IngreseNumero+" X " + i+" = "+resultado+"</br>");
// }

//-------Metodos para Array-------------
// let objestos=["Varita","libro","lechuza","loro"];

// objestos.forEach(function (objestos) {
//   console.log("Objeto con ForEach "+objestos);
// })

// objestos.forEach((objestos)=>
// console.log("MIsma Fuction pero con Flecha "+objestos)
// )

//----------MAP------------------
// const num3=[1,2,3,4,5];
// const porDos=num3.map((x)=> x*2);//map utiliza un array y crea uno nuevo pero con valores modificados

// console.log("Por dos "+porDos);

//hacer ejercicio contando caracteres de cada elemento del arreglo

//metodos que piden en las entrevistas laborales MAP FILTER y REDUCE

//---------Find-------

// const num1=[1,2,3,4,5];
// const Econtrado=num1.find((elemento)=> elemento>3);

// console.log(Econtrado);

//--------Filter--------

// let num5=[2,5,6,18,201,345];
// let numMayoresCinco=num5.filter((n)=> {
//   return n>5
// })
// console.log(numMayoresCinco);

//--------ejercicio 1-----------------
// let num6=[1,2,3,4,5];
// let parOimpar=num6.map((x)=>{
//   if (x % 2==0) {
//     return(x+' Par')
//   }
//   else{
//     return(x+' Impar')
//   };
// });
// parOimpar.forEach((x)=>{
//   if (x){
//       console.log("Los elementos son: " + x)
//   }
// })

//----ejercicio 2. Crea un array de strings con nombres y
//luego guardá en una variable nombresCortos un
// nuevo array con los nombres que tengan 5 0
//menos letras.

// let array=['Lucas','Pedro','Lot','Juan','Julian'];

// let nombresCortos=array.map((x)=>{
// if (x.length<5){
//    return(x)
// }else{
//   return('')
// }
// })
// nombresCortos.forEach((x)=>{
//       console.log('Nombre Corto ',nombresCortos)
//  })

//-------Funciones, DOM y Eventos-----------------

// function datosPer(naMe,lastName,Serie) {
//   document.write('Hola, '+naMe+' '+lastName+' Tu serie favorita es: '+Serie)
// }

// function largeNamee(nombre) {
//   let large=nombre.length
//   return(large)
// }

//---------------DOM----------------------------

// let hache1=document.querySelector("h1")
// let hachet=document.querySelector('#id_p')
// console.log(hache1)
// console.log(hache1.innerText)
// console.log(hachet.innerText)

// function Saludo() {
//   alert('Hola como estas?')
// }

//---------------Ejercicio Objetos----------------------------

// let persona={
// nombre: "Pablo",
// apellido: "Rex",
// edad:48,
// mascota:true,
// comidaFavorita:"asado",
// }

// console.log(persona);

// let namePersona=persona.nombre;
// console.log(namePersona);

// //modifica objeto
// persona.edad=persona.edad+1;

// //persona.(comidaFavorita);

// let namePersona=persona.comidaFavorita("milanesas")
// console.log(persona);

//---------------timeout e Interval---------------

let lahora = gethours() + ":" + getminutes() + ":" + getseconds();
//function clock() {
  console.log(lahora);
//}
