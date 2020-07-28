const limpiarErrores = () => {
    let error = document.querySelectorAll("span");

    /* for (let index = 0; index < error.length; index++) {
      error[index].innerHTML = "";
    } */
    error.forEach(element => {
        element.innerHTML = "";
    })
}

function validar(formulario) {

    limpiarErrores();

    //validar nombre
    if (!formulario.nombres.value.trim()) {
        document.getElementById("errornombres").innerHTML = "Nombre requerido";
        formulario.nombres.focus();
        return false
    }

    //Validar email
    if (formulario.email.value.trim().length == 0) {
        document.getElementById("errorEmail").innerHTML = "Email requerido";
        formulario.email.focus();
        return false
    }

    let emailPatt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailPatt.test(formulario.email.value)) {
        document.getElementById("errorEmail").innerHTML = "Formato inválido";
        formulario.email.focus();
        return false
    }

    //Validar contraseña: Entre 7 y 16 caracteres, al menos un número, una minúscula y una mayúscula. NO puede tener otros símbolos
    if (!formulario.contrasena.value.trim()) {
        document.getElementById("errorContrasena").innerHTML = "Contraseña requerida";
        formulario.contrasena.focus();
        return false
    }

    let passPatt = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{7,16}$/;

    if (!passPatt.test(formulario.contrasena.value)) {
        document.getElementById("errorContrasena").innerHTML = "Formato inválido";
        alert("La contraseña debe tener entre 7 y 16 caracteres, al menos un número, una minúscula y una mayúscula. NO puede tener otros símbolos. Ej: e3Ejemplo1d0");
        formulario.contrasena.focus();
        return false
    }

    //Validar confirmación de contraseña
    if (formulario.confirmar.value.trim().length == 0) {
        document.getElementById("errorConfirmacion").innerHTML = "Confirmación requerida";
        formulario.confirmar.focus();
        return false
    }
    if (formulario.confirmar.value.trim() != formulario.contrasena.value.trim()) {
        document.getElementById("errorConfirmacion").innerHTML = "La contraseña no coincide";
        formulario.confirmar.focus();
        return false
    }

    //Validar tipo de usuario
    if (formulario.tipo.value == " ") {
        document.getElementById("errorTipo").innerHTML = "Seleccione el tipo de usuario";
        formulario.tipo.focus();
        return false
    }

    //Validar aceptar
    if (!formulario.acepto.checked) {
        document.getElementById("errorAcepto").innerHTML = "Acepte términos y condiciones";
        return false
    }

    alert("Datos enviados");
    return true
}