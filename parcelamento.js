app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

function formata(){
	document.getElementById("produto").value = parseFloat(document.getElementById("produto").value).toFixed(2);

}

function calculoParcelamento(){
	//Remove a tabela do html, que inicia vazia e depois remove as tabelas criadas
	document.querySelector('table').remove();
	document.getElementById('porcentagem').remove();
	var p = document.createElement("p");
	p.id = 'porcentagem'
	document.querySelector('form').appendChild(p);
	var valprod = parseFloat(document.getElementById("produto").value);
	var parc = parseInt(document.getElementById("parcela").value);
   

	if (parc>5 && isNaN(valprod)== false && valprod>0 ){
		valprod += 0.1*valprod;
		document.getElementById("porcentagem").innerHTML = "Valor do produto com acréscimo de 10% : R$" + parseFloat(valprod).toFixed(2).toString().replace('.',',');

	}

	if (parc>0 && parc<=5 && isNaN(valprod)== false && valprod>0){
		document.getElementById("porcentagem").innerHTML = "Valor do produto : R$" + parseFloat(valprod).toFixed(2).toString().replace('.',',');
	}

    if (isNaN(valprod)== true || isNaN(parc)== true ){
    	alert("CAMPO NULO ou valor inválido! Verifique a entrada e tente novamente!")
    	document.querySelector('form').appendChild(document.createElement('table'));
    	return false;
    	
    }


    if (valprod<=0 || parc <= 0){
    	alert("Insira um valor maior que 0!")
    	document.querySelector('form').appendChild(document.createElement('table'));
    	return false;
    	
    } 
    
	var total = parseFloat(valprod/parc).toFixed(2);
	total= total.toString().replace('.',',');
	let tabela = document.createElement('table');
	let cabecalho = document.createElement('thead');
	let corpo = document.createElement('tbody');

	tabela.appendChild(cabecalho);
	tabela.appendChild(corpo);

	document.querySelector('form').appendChild(tabela);
	let fileira1 = document.createElement('tr');
	let nomenumparc = document.createElement('th');
	nomenumparc.innerHTML = "Número da Parcela";
	let nomevalparc = document.createElement('th');
	nomevalparc.innerHTML = "Valor da Parcela";
	fileira1.appendChild(nomenumparc);
    fileira1.appendChild(nomevalparc);
    cabecalho.appendChild(fileira1);

    for(var i=1; i<=parc; i++){
		let fileira2 = document.createElement('tr');
		let num = document.createElement('td');
		num.innerHTML = i.toString();
		let val = document.createElement('td');
		val.innerHTML = "R$ " + total;
		fileira2.appendChild(num);
		fileira2.appendChild(val);
		corpo.appendChild(fileira2);
    }


}