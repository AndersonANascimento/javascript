 'use strict';
 function getDados(fileName) {	
	const fs = require('fs'),
		path = require('path'),
		util = require('util');
	let dados;

	if (fileName.split('.').pop() == 'json')
		dados = JSON.parse(fs.readFileSync(path.join(__dirname, fileName), 'utf8'));
	else
		dados = fs.readFileSync(path.join(__dirname, fileName), 'utf8').toString();
		// .replace(/[\r\n\t]/g, '');

	return dados;
}

const strOut = getDados("dados.txt");
const cfppaps1 = getDados("cfppaps1.json");

// const strOut = '0000Mensagem de erro WinADA                                     T0145612536291SECRETA 052018NOME DSN                                                    Mensagem de erro Natural                                    9999Anderson Abreu do Nascimento                                0102';

let parseJson = function(dados, parameter) {
    let tamDados = dados.length;
    console.log(`tamDados: ${tamDados}`);
    let pos = 0;
    let resJson = {};
    for(var propNvl1 in parameter) {
        let ehArray = Array.isArray(parameter[propNvl1]);
        
        if (ehArray) {
            let propNvl2 = parameter[propNvl1];
            let posNvl2 = pos;
            propNvl2.forEach(element => {
                if(!Array.isArray(element)) {                   
                    let valor = dados.substr(posNvl2, element.tamanho);
                    switch (element.tipo) {
                        case 'A':
                            valor = valor.trim();
                            // posNvl2 += element.tamanho;
                            break;
                        case 'N':
                            valor = Number(valor.trim());
                            // posNvl2 += element.tamanho;
                            break;
                        case 'P':   // tratar periódico e multiplo
                            // console.log(element.def);
                            // console.log(Array.isArray(element.def));
                            // console.log(element.def[0]);
                            // console.log(Array.isArray(element.def[0]));
                            let posNvl3 = posNvl2;
                            // let vet = [];
                            valor = [];
                            for (let i = 1; i < element.ocorr; i++) {
                                let subdados = dados.substr(posNvl3, element.tamanho);
                                console.log(subdados);                                
                                if(subdados.trim().length === 0) break;
                                let arr = parseJson(subdados, element.def);
                                console.dir(arr);
                                valor.push(arr[0][0]);
                                posNvl3 += element.tamanho;
                            }
                            // console.log(valor);
                            posNvl2 += (element.tamanho * element.ocorr);
                            break;
                        default:
                            break;
                    }
                    posNvl2 += element.tamanho;
                    element.valor = valor;
                } else {
                    console.log("element");
                }
                // console.log(element);
            });
            pos = posNvl2;
        }
    }
    return parameter;
}

let retornoJson = parseJson(strOut, cfppaps1);

// console.dir(cfppaps1);
// console.log(`MSG: ${retornoJson.winada.msg}`);
// console.log(`CPF: ${retornoJson.entrada.cpf}`);
console.dir(retornoJson.saida['3'].valor);
// console.dir(retornoJson.saida['3'].valor[1]);
// console.log(`${retornoJson.saida['3'].valor['0']['0'].nome}`);
// console.log(`${retornoJson.saida['3'].valor['0']['0'].valor}`);
// console.log(`LOTACOES: ${retornoJson.saida.tbLotacoes['0'].descTipoFolha}`);
// console.log(`LOTACOES: ${retornoJson.saida.tbLotacoes['1'].descTipoFolha}`);
