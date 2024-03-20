document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('encriptarBtn').addEventListener('click', function () {
        procesar('encriptar');
    });

    document.getElementById('desencriptarBtn').addEventListener('click', function () {
        procesar('desencriptar');
    });

    document.getElementById('copiarBtn').addEventListener('click', copiar);
});

function procesar(accion) {
    const texto = document.getElementById('textoInput').value.toLowerCase();
    let resultado = '';

    if (accion === 'encriptar') {
        resultado = encriptarTexto(texto);
    } else {
        resultado = desencriptarTexto(texto);
    }

    document.getElementById('resultadoOutput').value = resultado;
}

function encriptarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/o/g, 'ober')
        .replace(/a/g, 'ai')
        .replace(/u/g, 'ufat');
}

function desencriptarTexto(texto) {
    return texto
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function copiar() {
    const resultado = document.getElementById('resultadoOutput');

    if (resultado.value !== '') {
        resultado.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles.');

        // Limpiar los campos de texto
        document.getElementById('textoInput').value = '';
        resultado.value = '';
    }
}
