const log = document.getElementById('log');

function validarDni(el) {
    var ex = /^[0-9]+\.?[0-9]*$/;
    if (ex.test(el.value) == false) {
        el.value = el.value.substring(0, el.value.length - 1);
    }
    if (el.value.length >= 9) {
        el.value = el.value.substring(0, 8)
    }
    console.log(el.value)
}

function soloNumeros(e) {
    var key = window.Event ? e.which : e.keyCode;
    if (key >= 48 && key <= 57 || key == 8 || key == 0) {
        return true;
    } else {
        return false;
    }
}

function exnumero(e, length) {
    if (e.target.value.length > length) {
        e.target.value = e.target.value.substring(0, length - 1);
    }
    e.target.value = e.target.value.replace(/[^\d]/g, '');

    return false;
}