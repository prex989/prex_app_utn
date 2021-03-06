//Definición de variables
const url = 'http://localhost:5000/propiedades/'
const contenedor = document.querySelector('tbody')
    // const Handlebars = require("handlebars");
let resultados = ''
    // const hbs = require('hbs')
const modalPropiedad = new bootstrap.Modal(document.getElementById('modalPropiedad'))
const formPropiedades = document.querySelector('form')
const precio = document.getElementById('precio')
const supcub = document.getElementById('supcub')
const suptot = document.getElementById('suptot')
const dormi = document.getElementById('dormi')
const descripcion = document.getElementById('descripcion')
const estado_inm = document.getElementById('estado_inm')
const imagen = document.getElementById('imagen')
const imagePreview = document.getElementById('imagen')
const imageUploader = document.getElementById('imagen')
const imageUploadbar = document.getElementById('img-upload-bar')
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/student-arg21/image/upload`
const CLOUDINARY_UPLOAD_PRESET = 'oe6tk5tz';

var opcion = ''



btnCrear.addEventListener('click', () => {
    precio.value = ''
    supcub.value = ''
    suptot.value = ''
    dormi.value = ''
    descripcion.value = ''
    estado_inm.value = ''
    modalPropiedad.show()
    opcion = 'crear'
})

//funcion para mostrar los resultados
const mostrar = (propiedades) => {
    propiedades.forEach(propiedades => {
        resultados += `<tr>
                            <td>${propiedades.id}</td>
                            <td>${propiedades.precio}</td>
                            <td>${propiedades.supcub}</td>
                            <td>${propiedades.suptot}</td>
                            <td>${propiedades.dormi}</td>
                            <td>${propiedades.descripcion}</td>
                            <td>${propiedades.estado_inm}</td>        
                            <td>${propiedades.imagen}</td>                    
                            <td class="text-center"><a class="btnEditar btn btn-primary"><i class="fas fa-edit"></i></a><a class="btnBorrar btn btn-danger"><i class="fas fa-trash-alt"></i></i></a></td>
                       </tr>
                    `
    })
    contenedor.innerHTML = resultados

}



//Procedimiento Mostrar
fetch(url)
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
            fetch(url + id, {
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
    const precioForm = fila.children[1].innerHTML
    const supcubForm = fila.children[2].innerHTML
    const suptotForm = fila.children[3].innerHTML
    const dormiForm = fila.children[4].innerHTML
    const descripcionForm = fila.children[5].innerHTML
    const estado_inmForm = fila.children[6].innerHTML
    const imagenForm = fila.children[7].innerHTML
    precio.value = precioForm
    supcub.value = supcubForm
    suptot.value = suptotForm
    dormi.value = dormiForm
    descripcion.value = descripcionForm
    estado_inm.value = estado_inmForm
    imagen.value = imagePreview.src
    opcion = 'editar'
    modalPropiedad.show()

})

//Procedimiento para Crear y Editar
formPropiedades.addEventListener('submit', (e) => {
    e.preventDefault()
    if (opcion == 'crear') {
        fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    precio: precio.value,
                    supcub: supcub.value,
                    suptot: suptot.value,
                    dormi: dormi.value,
                    descripcion: descripcion.value,
                    estado_inm: estado_inm.value,
                    imagen: imagePreview.src
                })
            })
            .then(response => {
                console.log(response)
                response.json()
                location.reload()
            })
            .then(data => {
                const nuevoPropiedades = []
                nuevoPropiedades.push(data)
                mostrar(nuevoPropiedades)
            })
    }
    if (opcion == 'editar') {
        fetch(url + idForm, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    precio: precio.value,
                    supcub: supcub.value,
                    suptot: suptot.value,
                    dormi: dormi.value,
                    descripcion: descripcion.value,
                    estado_inm: estado_inm.value,
                    imagen: imagePreview.src
                })
            })
            .then(response => response.json())
            .then(response => location.reload())
    }
    modalPropiedad.hide()
})



//Subir Imagen

imageUploader.addEventListener('change', async(e) => {
    console.log(e);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);


    // Send to cloudianry
    const res = await axios.post(
        CLOUDINARY_URL,
        formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress(e) {
                let progress = Math.round((e.loaded * 100.0) / e.total);
                // console.log(progress);
                imageUploadbar.setAttribute('value', progress);
            }
        }
    );
    imagePreview.src = res.data.secure_url;
    urlimagen = res.data.secure_url;

});