const form = document.getElementById('form');
const value = document.getElementById("valor");
const porcent_input = document.getElementById("porcentagem");
const units = document.getElementById("units");

//Textos
const UnitText = document.getElementById("valor_unitario");
const LucroText = document.getElementById("lucro");
const BrutoText = document.getElementById("venda_bruta");

form.addEventListener('submit', function(e) {

    const porcent = porcent_input.value / 100;
    const preco_unitaria = (parseInt(value.value) + ((value.value * porcent_input.value) / 100)) / units.value;
    const venda_bruta = preco_unitaria * units.value;
    const lucro = venda_bruta - value.value;

    console.log("Valor: "+value.value);
    console.log("Unidades: "+units.value);
    console.log("Porcentagem: "+ porcent);


    UnitText.innerText="R$"+preco_unitaria.toFixed(2);
    LucroText.innerText="R$"+lucro.toFixed(2);
    BrutoText.innerText="R$"+venda_bruta.toFixed(2);

    e.preventDefault();
});
