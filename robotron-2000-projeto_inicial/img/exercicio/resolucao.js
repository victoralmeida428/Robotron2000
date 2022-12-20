const $btnmostra = document.querySelector('[btn-mostra]');
const $btnoculta = document.querySelector('[btn-oculta]');
const $lista = document.querySelector('[data-lista]');

function mostraTintas() {
    $lista.removeAttribute('data-lista');
}

function ocultaTintas() {
    $lista.setAttribute('data-lista','');
}


