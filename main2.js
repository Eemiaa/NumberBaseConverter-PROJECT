var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;


//now add listener

	input.addEventListener("keyup", myResult);
	inputType.addEventListener("change", myResult);
	resultType.addEventListener("change", myResult);
	inputTypeValue = inputType.value;
	resultTypeValue = resultType.value;

function myResult(){
	inputTypeValue = inputType.value;
	resultTypeValue = resultType.value;
}
function bitohex(valor){
	var bi = valor.split('').reverse().join('');
	var qtdbi = bi.length, hextotal="", i=0,j=0,x=0, alavanca=0, alavanca2=0, expoente=0, hex=0, u=x, z=0, teste="";
	while(qtdbi%4 != 0){
		bi += "0";
		qtdbi=bi.length;}
		var y=Math.floor(qtdbi/4);
		while(i<y){
			alavanca=0;
			alavanca2=0;
			expoente=0;
			i++;
			j=0;
			hex=0;
			u=x;
			z=0;
			teste="";
			while(z<4){
				teste+= String(bi[u]);
				u++;
				z++;}
			//A
			if(teste=="0101"){
				alavanca=1;
				hextotal+="A";
				x+=4;
				}
			//B
			if(teste=="1101"){
				alavanca=1;
				hextotal+="B";
				x+=4;
				}
			//C
			if(teste=="0011"){
				alavanca=1;
				hextotal+="C";
				x+=4;
				}
			//D
			if(teste=="1011"){
				alavanca=1;
				hextotal+="D";
				x+=4;
				}
			//E
			if(teste=="0111"){
				alavanca=1;
				hextotal+="E";
				x+=4;
				}
			//F
			if(teste=="1111"){
				alavanca=1;
				hextotal+="F";
				x+=4;
				}
			while((expoente<4)&(alavanca==0)){
				hex += parseInt(bi[x])*Math.pow(2,expoente);
				expoente++;
				x++;
				alavanca2=1;
				}
			if(alavanca2==1){
				hextotal+=String(hex);
				}}
			return hextotal;
}
function bitodec(valor1){
	var n = valor1;
	var contador = n.length;
	var tamanho = 0;
	var numdec = 0;
	var ncontador = 0;
	while(contador > 0){
		contador -=1;
		ncontador = parseInt(n[contador]);
		numdec = (numdec + (ncontador*(Math.pow(2, tamanho))));
		tamanho+=1;
		}
	return numdec;
}
function bitooctal(valor2){
	var bi= input.value.split('').reverse().join('');
	var octotal = "";
	var i=0, x=0, qtdbi=bi.length;
	while(qtdbi%3 != 0){
		bi += "0";
		qtdbi=bi.length;
	}
	var z=Math.floor(qtdbi/3);
	while(i<z){
		var expoente=0;
		i++;
		var j=0;
		var octal=0;
		while(j<3){
			octal += parseInt(bi[x])*Math.pow(2,expoente);
			expoente++;
			x++;
			j++;
		}
		octotal += String(octal);
	}
	return octotal;
}
function dectobi(valor3){
	var n = input.value;
	var dec = parseInt(n,10);
	var num = "";
	while((dec!=0)&(dec!=1)){
		num += String(dec%2);
		dec = Math.floor(dec/2);	
		if(dec == 0){
			num += "0";
		}
		if(dec == 1){
			num += "1";
		}
		}
	return num;
}
function updateResult(){	
	//alert("ok");
	switch(inputTypeValue){
		case "hexadecimal":
			switch(resultTypeValue){
				case "hexadecimal":
					result
					.value=input.value;
					break;
				//ok
				case "binario":
					alert("ok");
					break;
				case "decimal":
					alert("ok");
					break;
				case "octal":
					alert("ok");
					break;
				}
			break;
		case "binario":
			switch(resultTypeValue){
				case "hexadecimal":
					//XXXXXXXXXXXXXXXXXXX
					var valor = input.value;
					result.value= bitohex(valor).split('').reverse().join('');
					break;
				//okk
				case "binario":
					result.value=input.value;
					break;
				//okk
				case "decimal":
					var valor1 = input.value;
					result.value= bitodec(valor1);

					break;
				//okk
				case "octal":
					var valor2 = input.value;
					result.value = bitooctal(valor2).split('').reverse().join('');
					break;
				//okk
				}
			break;
		//okk
		case "decimal":
			switch(resultTypeValue){
				case "hexadecimal":
					var valor3 = input.value;
					var valor = dectobi(valor3);
					result.value=bitohex(valor).split('').reverse().join('');
					break;
				//okk
				case "binario":
					//alert("ok");
					var n = input.value;
					var dec = parseInt(n,10);
					var num = "";
					//alert(dec);
					while((dec!=0)&(dec!=1)){
						//alert("while");
						num += String(dec%2);
						//alert(num);
						dec = Math.floor(dec/2);
						//alert(dec);
						if(dec == 0){
							num += "0";
						}
						if(dec == 1){
							num += "1";
						}
					}
					result.value = num.split('').reverse().join('');
					break;
				//ok
				case "decimal":
					result.value=input.value;

					break;
				//ok
				case "octal":
					var n = input.value;
					var dec = parseInt(n,10);
					var num = "";
					//alert(dec);
					while((dec!=0)&(dec!=1)){
						//alert("while");
						num += String(dec%2);
						//alert(num);
						dec = Math.floor(dec/2);
						//alert(dec);
						if(dec == 0){
							num += "0";
						}
						if(dec == 1){
							num += "1";
						}}
					var bi= num.split('').reverse().join('');
					var octotal = "";
					var i=0, x=0, qtdbi=bi.length;
					while(qtdbi%3 != 0){
						bi += "0";
						qtdbi=bi.length;

					}
					var z=Math.floor(qtdbi/3);
					//alert(qtdbi);
					//
					alert(z);
					while(i<z){
						var expoente=0;
						i++;
						var j=0;
						var octal=0;
						while(j<3){
							octal += parseInt(bi[x])*Math.pow(2,expoente);
							expoente++;
							x++;
							j++;
						}
						octotal += String(octal);
					
					}
					//alert(octotal.split('').reverse().join(''));
					result.value = octotal.split('').reverse().join('');
					break;
				//ok
				}
			break;
		//ok
		case "octal":
			switch(resultTypeValue){
				case "hexadecimal":
					alert("ok");
					break;
				case "binario":
					alert("ok");
					break;
				case "decimal":
					alert("ok");
					break;
				case "octal":
					result.value=input.value;
					break;
				//ok
				}
			break;
		}
}
