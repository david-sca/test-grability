/*
 * Declaracion de variables y constantes globales
 */

var cube;
var N;
var M;
var output="";

//Valores limite de los distintos parametros
const MIN_T = 1;
const MAX_T = 50;
const MIN_N = 1;
const MAX_N = 100;
const MIN_M = 1;
const MAX_M = 1000;
const MIN_W = -1000000000;
const MAX_W = 1000000000;


function createArray(N) {
	var cube = new Array();
	for (var i=0;i<N;i++) {
		cube[i]=new Array();
		for (var j=0;j<N;j++) {
			cube[i][j]=new Array();
			for (var k=0;k<N;k++) {
				cube[i][j][k]=0;
			}
		}
	}
	return cube;
}

function validateRange(value,min,max){
	if (value < min || value > max)
		throw "Bad range";
	return true;
}

function update(x,y,z,W){
	validateRange(W,MIN_W,MAX_W);
	validateRange(parseInt(x),1,N);
	validateRange(parseInt(y),1,N);
	validateRange(parseInt(z),1,N);
	cube[x-1][y-1][z-1] = W;
	return parseInt(cube[x-1][y-1][z-1],10);
}

function query(x1,y1,z1,x2,y2,z2){
	validateRange(parseInt(x1),1,parseInt(x2));
	validateRange(parseInt(x2),parseInt(x1),N);
	validateRange(parseInt(y1),1,parseInt(y2));
	validateRange(parseInt(y2),parseInt(y1),N);
	validateRange(parseInt(z1),1,parseInt(z2));
	validateRange(parseInt(z2),parseInt(z1),N);	
	var sum = 0;
	for(i=x1;i<=x2;i++){
		for(j=y1;j<=y2;j++){
			for(k=z1;k<=z2;k++){
				sum= sum + parseInt(cube[i-1][j-1][k-1]);	
			}
		}	
	}
	return sum;
}

function main(inputFile){
	if(inputFile==undefined)
		inputFile = "input.txt";

	// Leer archivo y ejecutar funcion 
	// cuando este cargado
	$.get(inputFile, function(data){
		var input = data.split("\n");
		console.log("Lineas en el archivo: "+input.length);
		//Asignar Test Cases: 
		T = parseInt(input.shift());
		validateRange(T,1,50);
		console.log("Test cases: ",T);
		for(var i=0;i<T;i++){
			//Asignar valores de N y M
			sizes = input.shift().split(" ");
			N = parseInt(sizes[0]);
			validateRange(N,1,100);
			M = parseInt(sizes[1]);
			validateRange(M,1,1000);
			cube = createArray(N);
			for(var j=0;j<M;j++){
				// Convertir los elementos de una linea en elementos de un
				// array para facil acceso 
				op = input.shift().split(" ");
				if(op[0]=="UPDATE"){
					if(op.length<5)
						throw "Bad input";
					output += "Updated: " + update(op[1],op[2],op[3],op[4]) +"\n";
				}
				else if(op[0]=="QUERY") {
					if(op.length<7)
						throw "Bad input";
					output += "Queried: " + query(op[1],op[2],op[3],op[4],op[5],op[6])+"\n";
				}
			}
		}
		console.log("FIN DE PROCESO");
		alert(output);
	},'text');
}

//Llamada a la funcion pincipal
main("input.txt");