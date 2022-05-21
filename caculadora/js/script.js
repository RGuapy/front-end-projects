var digito = document.getElementsByClassName('digito');

var resultado = document.getElementById('resultado');

var numTemporario = '';
var numeros = [];

var operacoes = [];

var primeiravez = true;

function digPress(dig){
	resultado.textContent += dig;
		
	if (isNaN(dig)) {
		numeros.push(numTemporario);
		operacoes.push(dig);
		primeiravez = true;
		numTemporario = '';

	}else{
		numTemporario += dig;

	}
	console.log(numeros)

}

function apagar(){
	resultado.textContent = '';
	numeros = [];
	operacoes=[];
}


function gerarResultado(){
	if (primeiravez){
		numeros.push(numTemporario);
		primeiravez = true;
	}

	for (let i = 0; i < operacoes.length; i++){
		if (operacoes[i] == '+') {
			numeros[i+1] = parseInt(numeros[i+1]) + parseInt(numeros[i]);

		}else if(operacoes[i] == '-'){
			numeros[i+1] =  parseInt(numeros[i],10) - parseInt(numeros[i+1],10);

		}else if(operacoes[i] == 'x'){
			numeros[i+1] = parseInt(numeros[i+1],10) * parseInt(numeros[i],10);

		}else if(operacoes[i] == '/'){
			numeros[i+1] = parseInt(numeros[i],10) / parseInt(numeros[i+1],10);

		}

	}
	numTemporario = '';
	console.log(numeros);
	resultado.textContent = numeros[numeros.length-1];
	numTemporario = [numeros[numeros.length-1]];
	numeros = []
	operacoes = []
}


function parabens(){
	resultado.textContent = "Parabéns Luiz gustavo!!!!";

}