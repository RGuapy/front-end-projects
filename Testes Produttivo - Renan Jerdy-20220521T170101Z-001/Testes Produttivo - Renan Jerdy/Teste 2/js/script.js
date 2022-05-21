//A função cria um gráfico circular tem como argumento as informações das 3 variáveis.
//A única coisa que não consegui fazer foi trazer automaticamente os dados da planilha. Declarei no HTML, após achar os valores rapidamente com atalhos de pesquisa no excel.
function graficoPizza(conforme, naoConforme, naoSeAplica){

	

	//descobrindo a equivalência de unidade para graus
	var total = conforme + naoConforme + naoSeAplica;
	var graus = 360/total;

	//transformando o valor em graus
	var pizzaConforme = conforme * graus;
	var pizzaNaoConforme = naoConforme * graus;
	var pizzaNaoSeAplica = naoSeAplica * graus;



	//grafico-pizza

	//construindo o gráfico circular
	let pedaco = parseInt(pizzaConforme,10);
	let pedaco2 = parseInt(pizzaConforme,10) + parseInt(pizzaNaoConforme,10);

	var grafico = document.getElementById('grafico-pizza');
	grafico.style.backgroundImage = "conic-gradient( #4b73bc " + pedaco + "deg, #d3354a 0 " + pedaco2 + "deg, #83ca5c 0)" ;

	//legendando as cores com os valores equivalentes
	document.getElementById('conforme').textContent = conforme;
	document.getElementById('nao-conforme').textContent = naoConforme;
	document.getElementById('nao-se-aplica').textContent = naoSeAplica;


	//Pontuação final


	//Modificando as barras de acordo com a porcentagem
	var barra1 = document.getElementById('barra1');
	var barra2 = document.getElementById('barra2');

	//transformando os valores em porcentagem
	var porcentagem1 = conforme*100/(total-naoSeAplica);
	var porcentagem2 = naoConforme*100/(total-naoSeAplica);

	//implementando o tamanho da barra de acordo com os valores 
	barra1.style.width = Math.round(porcentagem1) + "%";
	barra2.style.width = Math.round(porcentagem2) + "%";


	//legendando as barras com as devidas porcentagem
	var porcentagem = document.getElementsByClassName('porcentagem');
	porcentagem[0].textContent = Math.round(porcentagem1) + "% Conforme";
	porcentagem[1].textContent = Math.round(porcentagem2) + "% Não conforme";


	//mudando a situação de acordo com os valores
	var resultado = document.getElementById('resultado');

	if (porcentagem1 >= 60){
		resultado.textContent = "Aprovado!"
		
	}else{
		resultado.textContent = "Reprovado!"
	}

	var selecione = document.getElementById('selecione')
	selecione.style.display = "none"

}

	

