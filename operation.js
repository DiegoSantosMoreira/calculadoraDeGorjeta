function inserir(vlr){
    var numero = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = numero + vlr;
}
function apagarTudo(){
    document.getElementById('screen').innerHTML = "";
    document.getElementById('screenGorjeta').innerHTML = "";
    document.getElementById('screenTotal').innerHTML = "";
    
}
function voltar(){
    var numero = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = numero.substring(0,numero.length -1);
}
function calcular10(){
    var numero = parseFloat(document.getElementById('screen').innerHTML);
    if(numero)
    {
        document.getElementById('screenGorjeta').innerHTML = eval(numero * 0.1).toFixed(2);
        var numero2 = parseFloat(document.getElementById('screenGorjeta').innerHTML);
        document.getElementById('screenTotal').innerHTML = (numero + numero2).toFixed(2);
    }else{
        alert("Defina o consumo antes!")
    }
}
function calcular15(){
    var numero = parseFloat(document.getElementById('screen').innerHTML);
    if(numero)
    {
        document.getElementById('screenGorjeta').innerHTML = eval(numero * 0.15).toFixed(2);
        var numero2 = parseFloat(document.getElementById('screenGorjeta').innerHTML);
        document.getElementById('screenTotal').innerHTML = (numero + numero2).toFixed(2);
    }else{
        alert("Defina o consumo antes!")
    }
}
function calcular20(){
    var numero = parseFloat(document.getElementById('screen').innerHTML);
    if(numero)
    {
    document.getElementById('screenGorjeta').innerHTML = eval(numero * 0.2).toFixed(2);
    var numero2 = parseFloat(document.getElementById('screenGorjeta').innerHTML);
    document.getElementById('screenTotal').innerHTML = (numero + numero2).toFixed(2);
    }
    else{
        alert("Defina o consumo antes!")
    }
}
