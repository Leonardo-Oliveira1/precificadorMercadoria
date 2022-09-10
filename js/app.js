const form = document.getElementById('form');
const value_input = document.getElementById("valor");
const porcent_input = document.getElementById("porcentagem");
const units = document.getElementById("units");

//Textos
const UnitText = document.getElementById("valor_unitario");
const LucroText = document.getElementById("lucro");
const BrutoText = document.getElementById("venda_bruta");

const currency = (text) => { 
    return text.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) 
}

form.addEventListener('submit', function(e) {

    const valueWithoutCurrency = value_input.value.replace('R$', '')
    const value = parseFloat(valueWithoutCurrency.replace(',', ''));
    
    const preco_unitaria = (parseFloat(value) + ((value * porcent_input.value) / 100)) / units.value;
    const venda_bruta = preco_unitaria * units.value;
    const lucro = venda_bruta - value;

    console.log("Valor: "+ value);

    //CHANGING THE RESULT TEXT
    UnitText.innerText = currency(preco_unitaria);
    LucroText.innerText = currency(lucro);
    BrutoText.innerText = currency(venda_bruta);

    e.preventDefault();
});
