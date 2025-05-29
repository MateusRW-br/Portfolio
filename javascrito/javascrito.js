function lightTheme() {
    document.body.classList.toggle("lightTheme")
}

// canva pintar
var telaPintar = document.getElementById('canvasPintor');
var pincelPintar = telaPintar.getContext('2d');

pincelPintar.fillStyle = 'grey';
pincelPintar.fillRect(0, 0, 600, 400);

var desenha = false;


telaPintar.onmousemove = function(evento) {
    if (desenha) {
        var x = evento.pageX - telaPintar.offsetLeft;
        var y = evento.pageY - telaPintar.offsetTop;
        pincelPintar.fillStyle = 'blue';
        pincelPintar.beginPath();
        pincelPintar.arc(x, y, 10, 0, 2 * Math.PI);
        pincelPintar.fill();
    }
};

telaPintar.onmousedown = function() {
    desenha = true;
};

telaPintar.onmouseup = function() {
    desenha = false;
};

// canva do circulo
var telaAlvo = document.getElementById('canvasAlvo');
var pincelAlvo = telaAlvo.getContext('2d');

pincelAlvo.fillStyle = 'lightgray';
pincelAlvo.fillRect(0, 0, 600, 400);

var raio = 10;
var xAleatorio, yAleatorio;

function desenhaCirculo(x, y, raio, cor) {
    pincelAlvo.fillStyle = cor;
    pincelAlvo.beginPath();
    pincelAlvo.arc(x, y, raio, 0, 2 * Math.PI);
    pincelAlvo.fill();
}

function limpaTela() {
    pincelAlvo.clearRect(0, 0, 600, 400);
}

function desenhaAlvo(x, y) {
    desenhaCirculo(x, y, raio + 20, 'red');
    desenhaCirculo(x, y, raio + 10, 'white');
    desenhaCirculo(x, y, raio, 'red');
}

function sorteiaPosicao(maximo) {
    return Math.floor(Math.random() * maximo);
}

function atualizaTela() {
    limpaTela();
    xAleatorio = sorteiaPosicao(600);
    yAleatorio = sorteiaPosicao(400);
    desenhaAlvo(xAleatorio, yAleatorio);
}

setInterval(atualizaTela, 800); 

function dispara(evento) {
    var x = evento.pageX - telaAlvo.offsetLeft;
    var y = evento.pageY - telaAlvo.offsetTop;

    if (
        x > xAleatorio - raio &&
        x < xAleatorio + raio &&
        y > yAleatorio - raio &&
        y < yAleatorio + raio
    ) {
        alert('Acertou!');
    }
}

telaAlvo.onclick = dispara;


    