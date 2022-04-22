var range = document.getElementById('range');
range.addEventListener("input", function(){
    var gorjeta = document.getElementById('screenGorjeta').innerHTML;
    var vlrTotal = document.getElementById('screenTotal').innerHTML;
    var x = range.value;
    document.getElementById('numeroPessoas').innerHTML = x;
    document.getElementById('p1').innerHTML = eval(gorjeta/x).toFixed(2);
    document.getElementById('p2').innerHTML = eval(vlrTotal/x).toFixed(2);
})



function inserir(vlr){
    var numero = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = numero + vlr;
}
function apagarTudo(){
    document.getElementById('screen').innerHTML = "";
    document.getElementById('screenGorjeta').innerHTML="";
    document.getElementById('screenTotal').innerHTML="";
}
function voltar(){
    var numero = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = numero.substring(0,numero.length -1);x
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
