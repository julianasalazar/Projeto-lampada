function ligarlampada () {
    document.getElementById ('lampada').src = './img/ligada.jpg';
}

function desligarlampada () {
    document.getElementById ('lampada').src = './img/desligada.jpg';
}
function quebrarlampada () {
    document.getElementById ('lampada').src = './img/quebrada.jpg';
}

document.getElementById('ligar').addEventListener('click', ligarlampada);

document.getElementById('desligar').addEventListener('click', desligarlampada);

document.getElementById('quebrarlampada').addEventListener('', quebrarlampada);



