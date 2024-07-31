document.getElementById('calcular').addEventListener('click', function() {
    const nome = document.querySelector("#nome").value;
    const altura = parseFloat(document.querySelector("#altura").value);
    const peso = parseFloat(document.querySelector("#peso").value);
    const resultado = document.querySelector("#resultado")

    if (altura > 0 && peso > 0) {
        const imc = peso / (altura * altura);
        if (imc <= 18.5) {
            resultado.textContent = `${nome}, seu IMC é de ${imc.toFixed(2)}(Abaixo do Normal)`
        }else if (imc >= 18.6 && imc < 24.9) {
            resultado.textContent = `${nome}, seu IMC é de ${imc.toFixed(2)}(Normal)`
        }else if (imc >= 25.0 && imc < 29.9) {
            resultado.textContent = `${nome}, seu IMC é de ${imc.toFixed(2)}(Sobrepreso)`
        }else if (imc >= 30.0 && imc < 34.9) {
            resultado.textContent = `${nome}, seu IMC é de ${imc.toFixed(2)}(Obesidade Grau 1)`
        }else if (imc >= 35.0 && imc < 39.9) {
            resultado.textContent = `${nome}, seu IMC é de ${imc.toFixed(2)}(Obesidade Grau 2)`
        }else if (imc > 40) {
            resultado.textContent = `${nome}, seu IMC é de ${imc.toFixed(2)}(Obesidade Grau 3)`
        }
    }else {
        resultado.textContent = "insira um valor válido!"
    }
    
})