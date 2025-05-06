function calculaimc() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    IMC = (peso / (altura * altura)).toFixed(2)
    let classificacao;

    if (IMC < 18.5) {
        classificacao = "abaixo do peso"
    }else if (IMC <= 24.9) {
        classificacao = "peso normal"
    }else if (IMC <= 29.9) {
        classificacao = "sobrepeso"
    }else if (IMC <= 34.9) {
        classificacao = "obesidade grau 1"
    }else if (IMC <= 39.9) {
        classificacao = "obesidade grau 2"
    }else {
        classificacao = "obesidade grau 3 (morbida)"
    }

    document.getElementById("IMC").innerText = `${IMC} - ${classificacao}`;

}
