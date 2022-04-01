var tela = document.querySelector("#forca");
var pincel = tela.getContext("2d");

var tela = document.querySelector("#forca");
var pincel = tela.getContext("2d");

function desenhaForca() {
    pincel.fillStyle = "black";
    pincel.lineWidth = 5;
    pincel.beginPath();
    pincel.moveTo(100, 197);
    pincel.lineTo(100, 600);
    pincel.moveTo(100, 200);
    pincel.lineTo(280, 200);
    pincel.moveTo(100, 300);
    pincel.lineTo(200, 200);
    pincel.fill();
    pincel.stroke();
    pincel.closePath();
    pincel.lineWidth = 1;
}

function desenhaCabeca() {
    pincel.lineWidth = 6;
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(275, 250, 50, 0, 2 * Math.PI);
    pincel.fillStyle = "black";
    pincel.strokeStyle = "black";
    pincel.stroke();
    pincel.fill();
    pincel.closePath();
    pincel.lineWidth = 1;
    pincel.fillStyle = "black";
    pincel.strokeStyle = "black";
}

function desenhaTronco() {
    pincel.lineWidth = 6;
    pincel.beginPath();
    pincel.moveTo(275, 303);
    pincel.lineTo(275, 500);
    pincel.fillStyle = "black";
    pincel.strokeStyle = "black";
    pincel.fill();
    pincel.stroke();
    pincel.closePath();
    pincel.lineWidth = 1;
    pincel.fillStyle = "black";
    pincel.strokeStyle = "black";
}

function desenhaPernaEsq() {
    pincel.lineWidth = 6;
    pincel.beginPath();
    pincel.moveTo(275, 500);
    pincel.lineTo(180, 550);
    pincel.fillStyle = "black";
    pincel.strokeStyle = "black";
    pincel.fill();
    pincel.stroke();
    pincel.closePath();
    pincel.lineWidth = 1;
    pincel.fillStyle = "black";
    pincel.strokeStyle = "black";
}

function desenhaPernaDir() {
    pincel.lineWidth = 6;
    pincel.beginPath();
    pincel.moveTo(275, 500);
    pincel.lineTo(360, 550);
    pincel.fillStyle = "black";
    pincel.strokeStyle = "black";
    pincel.fill();
    pincel.stroke();
    pincel.closePath();
    pincel.lineWidth = 1;
    pincel.fillStyle = "black";
    pincel.strokeStyle = "black";
}

function desenhaBracoEsq() {
    pincel.lineWidth = 6;
    pincel.beginPath();
    pincel.moveTo(275, 303);
    pincel.lineTo(360, 350);
    pincel.fillStyle = "black";
    pincel.strokeStyle = "black";
    pincel.fill();
    pincel.stroke();
    pincel.closePath();
    pincel.lineWidth = 1;
    pincel.fillStyle = "black";
    pincel.strokeStyle = "black";
}

function desenhaBracoDir() {
    pincel.lineWidth = 6;
    pincel.beginPath();
    pincel.moveTo(275, 303);
    pincel.lineTo(180, 350);
    pincel.fillStyle = "black";
    pincel.strokeStyle = "black";
    pincel.fill();
    pincel.stroke();
    pincel.closePath();
    pincel.lineWidth = 1;
    pincel.fillStyle = "black";
    pincel.strokeStyle = "black";
}

function desenhaTela() {
    var tela = document.querySelector("#forca");
    var pincel = tela.getContext("2d");
    pincel.fillStyle = "aliceblue";
    pincel.fillRect(0, 0, 1200, 800);
    pincel.font = "48px arial";
    pincel.fillStyle = "black";
    pincel.strokeStyle = "black";
    pincel.strokeText("Letras erradas:" , 650, 280);
    pincel.fillText("Letras erradas:" , 650, 280);
}

function escreverLetraCorreta(letra, pos) {
    var tela = document.querySelector("#forca");
    var pincel = tela.getContext("2d");
    pincel.font = "48px arial";
    pincel.strokeText(letra, 60 * pos, 680);
    pincel.fillText(letra, 60 * pos, 680);
    pincel.closePath();
}

function escreverLetraErrada(letra, pos) {
    var qtdeerradas = letraserradas.length;
    var tela = document.querySelector("#forca");
    var pincel = tela.getContext("2d");
    pincel.font = "48px arial";
    pincel.strokeText(letra, 650+ (qtdeerradas * 30), 340);
    pincel.closePath();
}

function escrevaPerdeu() {
    var tela = document.querySelector("#forca");
    var pincel = tela.getContext("2d");
    pincel.beginPath();
    pincel.font = "48px arial";
    pincel.fillStyle = "black";
    pincel.fillText("Você PERDEU!", 650, 420);
    pincel.closePath();
    addinit = false;
    reservaJogo();
}

function escrevaGanhou() {
    var tela = document.querySelector("#forca");
    var pincel = tela.getContext("2d");
    pincel.beginPath();
    pincel.font = "36px arial";
    pincel.fillStyle = "black";
    pincel.fillText("Você VENCEU, Parabéns!", 650, 420);
    pincel.closePath();
    addinit = false;
    reservaJogo();
}

function desenhaLinhas(palavrasorteada) {
    var tela = document.querySelector("#forca");
    var pincel = tela.getContext("2d");
    var separa = palavrasorteada.split("");
    qtdelinhas = separa.length;
    var x = 50;
    var x2 = 100;
    for (var i = 0; i < qtdelinhas; i++) {
        pincel.fillStyle = "black";
        pincel.beginPath();
        pincel.moveTo(x, 700);
        pincel.lineTo(x2, 700);
        x = x + 60;
        x2 = x2 + 60;
        pincel.fill();
        pincel.closePath();
        pincel.stroke();
    }
}


