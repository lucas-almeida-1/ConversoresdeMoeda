function carregarMoedas() {
    fetch('https://api.exchangerate-api.com/v4/latest/BRL')
    .then(res => res.json())
    .then(data => {
        let moedas = document.getElementById('moedas');
        for (let codigo in data.rates) {
            let opcao = document.createElement('option');
            opcao.value = codigo;
            opcao.text = codigo;
            moedas.add(opcao);
        }
    });
}


function converter() {
    let valor = document.getElementById('valor').value;
    let moedas = document.getElementById('moedas').value;

    fetch(`https://api.exchangerate-api.com/v4/latest/BRL`)
    .then(res => res.json())
    .then(data => {
        let taxa = data.rates[moedas];
        document.getElementById('resultado').innerHTML = (valor * taxa).toFixed(2) + ' ' + moedas;
    });
}


// Carrega as moedas quando a página é carregada
window.onload = carregarMoedas;
