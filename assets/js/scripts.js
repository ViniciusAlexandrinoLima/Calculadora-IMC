function calcularIMC() {
    let altura = document.getElementById('height').value;
    let peso = document.getElementById('weight').value;
    let texto = '';

    if(altura === '' && peso === '') {
        alert('Por favor, digite altura e peso validos.');
        
    }
    let imc = peso / (altura * altura);
    if(imc <= 18.5) {
        texto = (`seu IMC é: ${imc.toFixed(2)} e sua classificação é magreza.`);
    } else if(imc > 18.6 && imc <= 24.9) {
        texto = (`seu IMC é: ${imc.toFixed(2)} e sua classificação é normal.`);
    } else if(imc > 25.0 && imc <= 29.9) {
        texto = (`seu IMC é: ${imc.toFixed(2)} e sua classificação é sobrepeso.`);
    } else if(imc > 30.0 && img <= 39.9) {
        texto = (`seu IMC é: ${imc.toFixed(2)} e sua classificação é obesidade`);
    } else {
        texto = (`seu IMC é: ${imc.toFixed(2)} e sua classificação é obesidade grave!`);
    }

    let text = document.getElementById('text').innerHTML = texto;
    
}