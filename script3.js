document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('#p input[type="number"]');
    const button = document.querySelector('#p button');
    const resultado = document.getElementById('montante_final');

    button.addEventListener('click', function () {
        const valorInicial = parseFloat(inputs[0].value) || 0;
        const taxaJuros = parseFloat(inputs[1].value) || 0;
        const periodo = parseInt(inputs[2].value) || 0;

        // Fórmula: M = P * (1 + i)^n
        const montante = valorInicial * Math.pow(1 + (taxaJuros / 100), periodo);
        resultado.textContent = montante.toFixed(2);
    });
});