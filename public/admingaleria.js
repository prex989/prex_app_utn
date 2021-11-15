//Definición de variables

const urlgal = 'http://localhost:5000/galeriazoom/'
const contenedor = document.querySelector('tbody')
    // const Handlebars = require("handlebars");
let resultados = ''
    // const hbs = require('hbs')
const modalGaleria = new bootstrap.Modal(document.getElementById('modalGaleria'))
const formGaleria = document.querySelector('form')
const id = document.getElementById('id')
const url = document.getElementById('url')
const imagen = document.getElementById('imagen')
const imagePreview = document.getElementById('imagen')
const imageUploader = document.getElementById('imagen')
const imageUploadbar = document.getElementById('img-upload-bar')
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/student-arg21/image/upload`
const CLOUDINARY_UPLOAD_PRESET = 'oe6tk5tz';

var opcion = ''



btnCrear.addEventListener('click', () => {
    // id.value = ''
    // url.value = ''
    modalGaleria.show()
    opcion = 'crear'
})

//funcion para mostrar los resultados
const mostrar = (galeria) => {
    galeria.forEach(galeria => {
        resultados += `<tr>
                            <td>${galeria.id}</td>
                            <td>${galeria.url}</td>                    
                            <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
                       </tr>
                    `
    })
    contenedor.innerHTML = resultados

}



//Procedimiento Mostrar

fetch(urlgal)
    .then(response => response.json())
    .then(data => mostrar(data))
    .catch(error => console.log(error))


const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    })
}

//Procedimiento Borrar
on(document, 'click', '.btnBorrar', e => {
    const fila = e.target.parentNode.parentNode
    const id = fila.firstElementChild.innerHTML
    alertify.confirm("Esta seguro de borrar este elemento?",
        function() {
            fetch(urlgal + id, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(() => location.reload())
        },
        function() {
            alertify.error('Cancel')
        })
})

//Procedimiento Editar
let idForm = 0
on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode
    idForm = fila.children[0].innerHTML
    const url = fila.children[1].innerHTML
    url.value = imagePreview.src
    opcion = 'editar'
    modalGaleria.show()

})

//Procedimiento para Crear y Editar
formGaleria.addEventListener('submit', (e) => {
    e.preventDefault()
    if (opcion == 'crear') {
        fetch(urlgal, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id.value,
                    url: imagePreview.src
                })
            })
            .then(response => {
                console.log(response)
                response.json()
                location.reload()
            })
            .then(data => {
                const nuevoGaleria = []
                nuevoGaleria.push(data)
                mostrar(nuevoGaleria)
            })
    }
    if (opcion == 'editar') {
        fetch(urlgal + idForm, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    url: imagePreview.src,
                    id: id.value
                })
            })
            .then(response => response.json())
            .then(response => location.reload())
    }
    modalGaleria.hide()
})



//Subir Imagen

imageUploader.addEventListener('change', async(e) => {
    console.log(e);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);


    // Enviar a cloudinary

    const res = await axios.post(
        CLOUDINARY_URL,
        formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress(e) {
                let progress = Math.round((e.loaded * 100.0) / e.total);
                console.log(progress);
                imageUploadbar.setAttribute('value', progress);
            }
        }
    );
    imagePreview.src = res.data.secure_url;
    urlimagen = res.data.secure_url;

});