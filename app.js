const log = document.getElementById('log');

function validarDni(el) {
    var ex = /^[0-9]+\.?[0-9]*$/;
    if (ex.test(el.value) == false || el.value.length > 8) {
        el.value = el.value.substring(0, el.value.length - 1);
    }
    console.log(el.value.length)
    if (el.value.length === 8) {
        el.value = el.value.substring(0, 9)
    }
}