var mouseEvent = "";
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var raio, cor, largura;
var ultimaPosicaoX, ultimaPosicaoY;
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(){
    cor = document.getElementById("inputCor").value;
    raio = document.getElementById("inputRaio").value;
    largura = document.getElementById("inputLargura").value;
    mouseEvent = "mouseDown";   
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(evento){
    var posicaoAtualX = evento.clientX-canvas.offsetLeft;
    var posicaoAtualY = evento.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = largura;
        ctx.moveTo(ultimaPosicaoX, ultimaPosicaoY);
        ctx.lineTo(posicaoAtualX, posicaoAtualY);
        ctx.stroke();
    }
    ultimaPosicaoX = posicaoAtualX;
    ultimaPosicaoY = posicaoAtualY;
}
function limpar(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}