 'use strict';

let cfppaps1 = {
	"winada": [
		{"tamanho":  4, "tipo": "A", "valor": "", "nome": "rcode"}, 
		{"tamanho": 60, "tipo": "A", "valor": "", "nome": "msg"}
	],
	"entrada": [
		{"tamanho":  1, "tipo": "A", "valor": "", "nome": "tipo"},
		{"tamanho":  2, "tipo": "N", "valor": "", "nome": "visao"},
		{"tamanho": 11, "tipo": "N", "valor": "", "nome": "cpf"},
		{"tamanho":  8, "tipo": "A", "valor": "", "nome": "senhaservidor"},
		{"tamanho":  2, "tipo": "N", "valor": "", "nome": "mmCcheque"},
		{"tamanho":  4, "tipo": "N", "valor": "", "nome": "aaCcheque"},
		{"tamanho": 60, "tipo": "A", "valor": "", "nome": "nomeDsn"}
	],
 	"erro": [
		{"tamanho": 60, "tipo": "A", "valor": "", "nome": "msgErro"},
		{"tamanho":  4, "tipo": "A", "valor": "", "nome": "codErro"} 
	],
	"saida":  [
		{"tamanho": 60, "tipo": "A", "valor": "", "nome": "nomeServidor"},
		{"tamanho":  2, "tipo": "N", "valor": "", "nome": "qtdLotacao"},
		{"tamanho":  2, "tipo": "N", "valor": "", "nome": "qtdMatricula"},
		{"tamanho": 96, "tipo": "P", "ocorr": 50, "nome": "tbLotacoes", "def": [[
				{"tamanho":  9, "tipo": "A", "valor": "", "nome": "numSeqMat"},
				{"tamanho":  1, "tipo": "A", "valor": "", "nome": "digMatricula"},
				{"tamanho": 15, "tipo": "A", "valor": "", "nome": "siglaOrgao"},
				{"tamanho":  2, "tipo": "A", "valor": "", "nome": "tipoFolha"},
				{"tamanho": 30, "tipo": "A", "valor": "", "nome": "descTipoFolha"},
				{"tamanho": 35, "tipo": "A", "valor": "", "nome": "cargo"},
				{"tamanho":  4, "tipo": "A", "valor": "", "nome": "nomeSistema"}
			]]
		}
	]
};

// const strOut = '0000Mensagem de erro WinADA                                     T0145612536291SECRETA 052018NOME DSN                                                    Mensagem de erro Natural                                    9999Anderson Abreu do Nascimento                                0102';
const strOut = '                                                                A9903480950230SECRETA 122017AMAZONPREV                                                                                                                  MARIA DA CONCEICAO DANTAS DA SILVA                          020101000009B4AMAZONPREV     2213.SAL INTEGRAL               AUDITOR FISCAL DE TRIB.EST.2A.CL.IVCFPP01000009B4AMAZONPREV     10MENSAL                        AUDITOR FISCAL DE TRIB.EST.2A.CL.IVCFPP                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ';

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
                                if(subdados.trim().length === 0) break;
                                let arr = parseJson(subdados, element.def);
                                // console.log(arr);
                                valor.push(arr['0']);
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
                console.log(element);
            });
            pos = posNvl2;
        }
    }
    // return resJson;
}

let retornoJson = parseJson(strOut, cfppaps1);

console.dir(cfppaps1);
// console.log(`MSG: ${retornoJson.winada.msg}`);
// console.log(`CPF: ${retornoJson.entrada.cpf}`);
// console.log(`LOTACOES: ${retornoJson.saida.tbLotacoes['0'].descTipoFolha}`);
// console.log(`LOTACOES: ${retornoJson.saida.tbLotacoes['1'].descTipoFolha}`);
