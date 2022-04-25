function calcularValorPessoa(){
var numeroPessoa = document.getElementById('numero1').value;
    if(numeroPessoa)
    {
        var gorjeta = document.getElementById('screenGorjeta').innerHTML;
        var vlrTotal = document.getElementById('screenTotal').innerHTML;
        document.getElementById('p1').innerHTML = eval(gorjeta/numeroPessoa).toFixed(2);
        document.getElementById('p2').innerHTML = eval(vlrTotal/numeroPessoa).toFixed(2);
    } else(
        alert("Defina o número de pessoas!")
    )

}
function inserir(vlr){
    var numero = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = numero + vlr;
}
function apagarTudo(){
    document.getElementById('screen').innerHTML = "";
    document.getElementById('screenGorjeta').innerHTML="";
    document.getElementById('screenTotal').innerHTML="";
     document.getElementById('p1').innerHTML="";
    document.getElementById('p2').innerHTML="";
    document.getElementById('numero1').value="";
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
