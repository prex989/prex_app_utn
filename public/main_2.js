// fetch('https://hp-api.herokuapp.com/api/characters')
// .then(response => response.json())
// .then(json => {json.map(function(personaje){
//     document.write(htmlpersonaje(personaje.name, personaje.image, personaje.house))
// })});

// function htmlpersonaje(name,image,house) {
//     let datosPersonajes=´<div>´+ personaje +´</p>´;
//     datosPersonajes +=´<span>´+casa+´</span>´   ;
//     datosPersonajes +=´<img src="´+foto+´">´;
//     datosPersonajes +=´</div>´
//     return datosPersonajes;
// };

//consigna agregarle estilos y subir por slack

//----API Harry Potter----------- fetch('https://hp-api.herokuapp.com/api/characters

//--------trae datos de la API-------------
fetch("https://finalspaceapi.com/api/v0/character")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });

//Otra posibililidad
// const main = document.querySelector('main');
// //https://finalspaceapi.com/api/v0/character

// fetch('https://finalspaceapi.com/api/v0/character')
//     .then(response => response.json())
//     .then(
//         personajes => {
//             personajes.forEach(personaje => {
//                 let infoPersonaje = document.createElement('article');
//                 infoPersonaje.innerHTML = htmlPersonaje(personaje.name, personaje.image, personaje.house);
//                 main.appendChild(infoPersonaje);
//             })

//         });

//         function htmlPersonaje(personaje, foto, casa) {
//             let html = `<h2 class="nombre"> ${personaje} </h2>
//             <h3> ${casa} </h3>
//             <div class="imagen"><img src="${foto}" alt="foto ${personaje}" </div>`;

//             return html;

//             }
//-------------------API FINAL SPACE---------------------------------------------------------

const main = document.querySelector("main");

fetch("https://finalspaceapi.com/api/v0/character")
  .then((response) => response.json())
  .then((personajes) => {
    personajes.forEach((personaje) => {
      let infoPersonaje = document.createElement("article");
      infoPersonaje.innerHTML = htmlPersonaje(
        personaje.name,
        personaje.img_url,
        personaje.species
      );
      main.appendChild(infoPersonaje);
    });
  });

function htmlPersonaje(personaje, foto, especie) {
  let html = `<h4 class="nombre"> Personaje: ${personaje} </h4>
            <h5> Especie: ${especie} </h5>
            <div class="imagen"><img src="${foto}" class="img-fluid rounded-circle text-center" alt="foto ${personaje}" </div>`;

  return html;
}

