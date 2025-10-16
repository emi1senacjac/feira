// Capturando o body
const body = document.querySelector('body')

// Pegando as opções de resposta
const o1p1 = document.getElementById('o1p1')
const o2p1 = document.getElementById('o2p1')
const o3p1 = document.getElementById('o3p1')
const o4p1 = document.getElementById('o4p1')
const o1p2 = document.getElementById('o1p2')
const o2p2 = document.getElementById('o2p2')
const o3p2 = document.getElementById('o3p2')
const o4p2 = document.getElementById('o4p2')
const o1p3 = document.getElementById('o1p3')
const o2p3 = document.getElementById('o2p3')
const o3p3 = document.getElementById('o3p3')
const o4p3 = document.getElementById('o4p3')
const o1p4 = document.getElementById('o1p4')
const o2p4 = document.getElementById('o2p4')
const o3p4 = document.getElementById('o3p4')
const o4p4 = document.getElementById('o4p4')
// Pegando o texto das respostas
const r1p1 = document.getElementById('r1p1')
const r2p1 = document.getElementById('r2p1')
const r3p1 = document.getElementById('r3p1')
const r4p1 = document.getElementById('r4p1')
const r1p2 = document.getElementById('r1p2')
const r2p2 = document.getElementById('r2p2')
const r3p2 = document.getElementById('r3p2')
const r4p2 = document.getElementById('r4p2')
const r1p3 = document.getElementById('r1p3')
const r2p3 = document.getElementById('r2p3')
const r3p3 = document.getElementById('r3p3')
const r4p3 = document.getElementById('r4p3')
const r1p4 = document.getElementById('r1p4')
const r2p4 = document.getElementById('r2p4')
const r3p4 = document.getElementById('r3p4')
const r4p4 = document.getElementById('r4p4')

// Captando o botão de enviar
const btn_enviar = document.getElementById('btn_enviar')

let largura_tela = window.screen.width
let altura_tela = window.screen.height

body.style.width = largura_tela + 'px'
body.style.height = altura_tela + 'px'

// Função para conferir as respostas
function Conferir() {
    // Conferindo a primeira pergunta
    if (o1p1.checked) {
        r1p1.style.color = 'red'
        r3p1.style.color = 'green'
    } else if (o2p1.checked) {
        r2p1.style.color = 'red'
        r3p1.style.color = 'green'
    } else if (o3p1.checked) {
        r3p1.style.color = 'green'
    } else if (o4p1.checked) {
        r4p1.style.color = 'red'
        r3p1.style.color = 'green'
    }

    // Conferindo a segunda pergunta
    if (o1p2.checked) {
        r1p2.style.color = 'red'
        r2p2.style.color = 'green'
    } else if (o2p2.checked) {
        r2p2.style.color = 'green'
    } else if (o3p2.checked) {
        r3p2.style.color = 'red'
        r2p2.style.color = 'green'
    } else if (o4p2.checked) {
        r4p2.style.color = 'red'
        r2p2.style.color = 'green'
    }

    // Conferindo a terceira pergunta
    if (o1p3.checked) {
        r1p3.style.color = 'red'
        r4p3.style.color = 'green'
    } else if (o2p3.checked) {
        r2p3.style.color = 'red'
        r4p3.style.color = 'green'
    } else if (o3p3.checked) {
        r3p3.style.color = 'red'
        r4p3.style.color = 'green'
    } else if (o4p3.checked) {
        r4p3.style.color = 'green'
    }

    // Conferindo a quarta pergunta
    if (o1p4.checked) {
        r1p4.style.color = 'yellow'
    } else if (o2p4.checked) {
        r2p4.style.color = 'red'
        r1p4.style.color = 'yellow'
    } else if (o3p4.checked) {
        r3p4.style.color = 'red'
        r1p4.style.color = 'yellow'
    } else if (o4p4.checked) {
        r4p4.style.color = 'red'
        r1p4.style.color = 'yellow'
    }

}


btn_enviar.addEventListener('click', () => {
    Conferir()
})