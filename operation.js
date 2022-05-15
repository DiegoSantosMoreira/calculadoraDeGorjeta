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

