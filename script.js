"use strict";

var canvas = document.getElementById("tela");

var ctx = canvas.getContext("2d");

var x = 200, y = 100, larg = 300, alt = 150;


function desenharTriangulo() {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y + 50);
    ctx.lineTo(x - 50, y + 50);
    ctx.fill();
}

function desenharCirculo() {
    ctx.beginPath();
    ctx.arc(x, y, 100, 0, Math.PI * 2, false);
    //ctx.moveTo(200, 100);
    ctx.fill();
}
function desenhar() {

    // desenhando o retangulo
    // ctx.clearRect(0,0,canvas.width,canvas.height);x
    // ctx.fillStyle = "rgb(255,128,0)";
    // ctx.fillRect(x,y,larg,alt);
    // requestAnimationFrame(desenhar);

    //desenhando triangulo
    // ctx.clearRect(0,0,canvas.width,canvas.height)
    // ctx.fillStyle = "rgb(255,128,0)";
    // desenharTriangulo();
    // requestAnimationFrame(desenhar);

    //desenhando circulo
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "rgb(0,255,0)";
    desenharCirculo();
    requestAnimationFrame(desenhar);


}
requestAnimationFrame(desenhar);


document.onkeydown = function (evt) {
    let valor = evt.keyCode;

    if (valor == 38) {
        y -= 5;
    }
    else if (valor == 40) {
        y += 5;
    }
    else if (valor == 39) {
        x += 5;
    }
    else if (valor == 37) {
        x -= 5;
    }

    console.log("keyCode: " + evt.keyCode);
    console.log("key: " + evt.key);

}