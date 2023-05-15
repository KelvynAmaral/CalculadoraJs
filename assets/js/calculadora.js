// Obtém referências aos elementos HTML para exibir o visor da memória e o resultado
const visorMemoria = document.getElementById('memory');
const visorResultado = document.getElementById('result');

// Obtém uma lista de todos os botões da calculadora
const botoes = Array.from(document.getElementsByClassName('button'));

// Lista de operadores válidos para cálculos
const operadores = ['+', '-', '*', '/'];

// Variáveis de controle para a memória e valor atual
let memoria = '';
let valorAtual = '';

// Adiciona eventos de clique a cada botão
botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const valor = botao.value;

    // Verifica qual botão foi clicado e executa a ação correspondente
    if (valor === 'C') {
      limparVisor();
    } else if (valor === 'CE') {
      limparEntrada();
    } else if (operadores.includes(valor)) {
      tratarOperador(valor);
    } else if (valor === '=') {
      calcular();
    } else {
      adicionarAoVisor(valor);
    }
  });
});

// Adiciona o valor ao visor da memória
function adicionarAoVisor(valor) {
  valorAtual += valor;
  visorMemoria.innerText = valorAtual;
}

// Limpa todos os valores e exibe
function limparVisor() {
  memoria = '';
  valorAtual = '';
  visorMemoria.innerText = '';
  visorResultado.innerText = '';
}

// Limpa a entrada atual
function limparEntrada() {
  valorAtual = '';
  visorMemoria.innerText = '';
}

// Lida com a entrada de um operador
function tratarOperador(operador) {
  if (valorAtual === '') {
    valorAtual = '0';
  }
  valorAtual += operador;
  visorMemoria.innerText = valorAtual;
}

// Realiza o cálculo da expressão inserida
function calcular() {
  try {
    const resultado = eval(valorAtual);
    visorResultado.innerText = resultado;
    memoria = valorAtual + ' = ' + resultado;
    valorAtual = '';
  } catch (error) {
    visorResultado.innerText = 'Erro';
    memoria = '';
    valorAtual = '';
  }
  visorMemoria.innerText = memoria;
}