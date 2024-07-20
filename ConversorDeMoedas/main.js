    //const converterButton = document.getElementById("converterButton");


// Função para conversão do valor
function converter() {
    //Elementos do HTML
    let valor = document.getElementById('valor').value;
    let moedas = document.getElementById('moedas').value;
    let taxa = document.getElementById('taxa').value;

    //cálculo da conversão
    document.getElementById('resultado').innerHTML = (valor / taxa).toFixed(2) + ' ' + moedas;
}

// Event Listeners
// converterButton.addEventListener("click",converter);