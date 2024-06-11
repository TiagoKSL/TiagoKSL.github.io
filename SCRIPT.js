document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rangeForm');
    const resultDiv = document.getElementById('result');
    let generatedNumbers = new Set();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const min = parseInt(document.getElementById('min').value);
        const max = parseInt(document.getElementById('max').value);

        if (isNaN(min) || isNaN(max) || min >= max) {
            resultDiv.textContent = 'Por favor, ingresa un rango válido.';
            return;
        }

        if (generatedNumbers.size === (max - min + 1)) {
            resultDiv.textContent = 'Todos los números posibles ya han sido generados.';
            return;
        }

        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (generatedNumbers.has(randomNumber));

        generatedNumbers.add(randomNumber);
        resultDiv.textContent = `Número generado: ${randomNumber}`;
    });
});
