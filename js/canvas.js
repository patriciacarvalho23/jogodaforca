palavras = ["futebol", "box", "handball", "basquete", "volei", "ginastica", "atlestismo"]
palavrasorteada = "";
erros = 0;
acertos = 0;
letrascorretas = [];
letraserradas = [];
letrasdigitadas = [];
letratempqtde = 0;
addinit = false;

var botaoIniciar = document.getElementById("iniciar-jogo").addEventListener("click", function(event){
    event.preventDefault();
    letrascorretas = [];
    letraserradas = [];
    acertos = 0;
    erros = 0;
    letrascorretas = [];
    letraserradas = [];
    letrasdigitadas = [];
    palavrasorteada = sortearPalavra();
    desenhaTela();
    desenhaLinhas(palavrasorteada);
    desenhaForca();
    addinit = true;
    return palavrasorteada;
});

var botaoAdicionar = document.getElementById("nova-palavra").addEventListener("click", function(event) {
    event.preventDefault();
    var campoPalavra = document.querySelector("#input-nova-palavra");
    var palavraNova = campoPalavra.value;
    palavras.push(palavraNova);
    alert("Palavra " + palavraNova + " adicionada com sucesso!");
});

function verificaFim() {
    if (erros == 1) {
        desenhaCabeca();
    }
    if (erros == 2) {
        desenhaTronco();
    }
    if (erros == 3) {
        desenhaBracoEsq();
    }
    if (erros == 4) {
        desenhaBracoDir();
    }
    if (erros == 5) {
        desenhaPernaEsq();
    }
    if (erros == 6) {
        desenhaPernaDir();
        escrevaPerdeu();
    }
    if (acertos >= letratempqtde) {
        escrevaGanhou();
    }
}

function sortearPalavra() {
    qtdepalavras = palavras.length;
    sorteiopalavras = Math.floor(Math.random() * qtdepalavras);
    palavrasecreta = palavras [sorteiopalavras];
    return palavrasecreta;
}

function verificaLetra(letra) {
    var letratemp = palavrasorteada.split("");
    letratempqtde = letratemp.length;
    if(letrascorretas.includes(letra) == false && letraserradas.includes(letra) == false) {
        if(letratemp.includes(letra) == true) {
            for(var i = 0; i < letratempqtde; i++) {
                if(letratemp [i] == letra) {
                    escreverLetraCorreta(letra, i + 1);
                    letrascorretas.push(letra);
                    acertos = acertos + 1;
                    verificaFim();
                }
            }
        }else {
            escreverLetraErrada (letra, 15);
            letraserradas.push(letra);
            erros = erros + 1;
            verificaFim();
        }
    }else {
        alert("Você já digitou essa letra!");
    }
}

function jogo() {
    var botaoReiniciar = document.querySelector("#iniciar-jogo");
    botaoReiniciar.textContent = "REINICIAR JOGO";
}

document.addEventListener("keydown", function(event) {
    if (addinit == true) {
        console.log(event.keyCode);
    letra = false;
    }
    if (event.keyCode == 65) {
        letra = "a";
    }
    if (event.keyCode == 66){
        letra = "b";
    }
    if (event.keyCode == 67) {
        letra = "c";
    }
    if (event.keyCode == 68) {
        letra = "d";
    }
    if (event.keyCode == 69) {
        letra = "e";
    }
    if (event.keyCode == 70) {
        letra = "f";
    }
    if (event.keyCode == 71) {
        letra = "g";
    }
    if (event.keyCode == 72) {
        letra = "h";
    }
    if (event.keyCode == 73) {
        letra = "i";
    }
    if (event.keyCode == 74) {
        letra = "j";
    }
    if (event.keyCode == 75) {
        letra = "k";
    }
    if (event.keyCode == 76) {
        letra = "l";
    }
    if (event.keyCode == 77) {
        letra = "m";
    }
    if (event.keyCode == 78) {
        letra = "n";
    }
    if (event.keyCode == 79) {
        letra = "o";
    }
    if (event.keyCode == 80) {
        letra = "p";
    }
    if (event.keyCode == 81) {
        letra = "q";
    }
    if (event.keyCode == 82) {
        letra = "r";
    }
    if (event.keyCode == 83) {
        letra = "s";
    }
    if (event.keyCode == 84) {
        letra = "t";
    }
    if (event.keyCode == 85) {
        letra = "u";
    }
    if (event.keyCode == 86) {
        letra = "v";
    }
    if (event.keyCode == 87) {
        letra = "w";
    }
    if (event.keyCode == 88) {
        letra = "x";
    }
    if (event.keyCode == 89) {
        letra = "y";
    }
    if (event.keyCode == 90) {
        letra = "z";
    }
    if (event.keyCode == 186) {
        letra = "ç";
    }
    if (letra !== false) {
        verificaLetra(letra);
    }
});




