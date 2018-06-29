'use strict';

class Parameter {

    constructor(dados, estrutura) {
        this._dados = dados;
        this._estrutura = estrutura;
    }

    get dados() { return this._dados; }
    get estrutura() { return this._estrutura; }

    parseJson() {
        let tamConteudo = this._dados.length;
        let pos = 0;
        let resJson = {};
        // console.log(this._estrutura);
        
        for(var propNvl1 in this._estrutura) {
            // console.log(propNvl1);
            // console.log(this._estrutura[propNvl1]);
            // console.log(Array.isArray(this._estrutura[propNvl1]));
            // console.log(this._estrutura[propNvl1].length);

            let ehArray = Array.isArray(this._estrutura[propNvl1]);
            
            if (ehArray) {
                resJson[propNvl1] = {};
                let propNvl2 = this._estrutura[propNvl1];
                let posNvl2 = pos;
                propNvl2.forEach(element => {
                    if(!Array.isArray(element)) {
                        
                        let valor = this._dados.substr(posNvl2, element.tamanho);
                        switch (element.tipo) {
                            case 'A':
                                valor = valor.trim();
                                posNvl2 += element.tamanho;
                                break;
                            case 'N':
                                valor = Number(valor.trim());
                                posNvl2 += element.tamanho;
                                break;
                            case 'P':   // tratar periódico e multiplo
                                console.log(element.def);
                                console.log(Array.isArray(element.def));
                                let posNvl3 = posNvl2;
                                valor = [];
                                console.log(element.ocorr);
                                for (let i = 1; i < element.ocorr; i++) {
                                    let subConteudo = this._dados.substr(posNvl3, element.tamanho);
                                    console.log(subConteudo);
                                    
                                    if(subConteudo.trim().length === 0) break;
                                    let arr = this.parseJson(subConteudo, element.def);
                                    
                                    valor.push(arr['0']);
                                    posNvl3 += element.tamanho;
                                } 
                                posNvl2 += (element.tamanho * element.ocorr);
                                break;
                            default:
                                break;
                        }
                        // posNvl2 += element.tamanho;
                        resJson[propNvl1][element.nome] = valor;
                    } else {
                        console.log("element");
                    }
                });
                pos = posNvl2;
            }
        }
        return resJson;
    }

}

module.exports = Parameter;
