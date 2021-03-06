function validarformulario() {
    let nombre = document.getElementById("name").value;
    let celu = document.getElementById("tel").value;
    let correo = document.getElementById("email").value;
    let asunto = document.getElementById("selector").selectedIndex;
    let cuerpo = document.getElementById("textomensaje");
    //
    //Test campo obligatorio
    if (nombre == null || nombre.length == 0) {
        alert("El campo nombre no debe ir vacio o con espacios en blanco");
        return false;
    };
    // Test celu
    if (celu == null || celu.length == 0 || isNaN(celu)) {
        alert("Por Favor ingresar una número de Teléfono válido");
        return false;
    };
    // Test correo
    if (!/\S+@\S+\.\S+/.test(correo)) {
        alert("Por Favor escribir una dirección de correo válida");
        return false;
    };

    // Test asunto comboBox
    if (asunto == null || asunto == 0) {
        alert("Por favor seleccionar una opción del asunto");
        return false;
    };

    // //test Body
    if (cuerpo == null || cuerpo.length == 0) {
        alert("Por Favor Ingresar la consulta");
        return false;
    };

    function notify() {
        if (!("Notification" in window)) {
            alert("Tu Navegador no permite las notificacioes de esta aplicación Web");
        } else if (Notification.permission === "granted") {
            let notification = new Notification(
                "Su correo a sido enviado correctamente"
            );
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission(function(permission) {
                if (Notification.permission === "granted") {
                    let notification = new Notification(
                        "Su correo a sido enviado correctamente"
                    );
                };
            });
        };
    };

    let boton = document.getElementById("button").addEventListener("click", () => {
        notify();
    });



    return true;
};