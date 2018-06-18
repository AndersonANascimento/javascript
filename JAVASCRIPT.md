# Desvendando a linguagem JavaScript - Rodrigo Branas

Tipos de dados primitivos: number, string e boolean

## Aula 2 - Number
### Exceções
    > 0.1 + 0.2
    0.30000000000000004
    > 3/0
    Infinity
    > "AgileCode" * 10
    NaN

## Aula 3 - String
- São imutáveis, deve-se fazer sempre uma re-atribuição.
- Declaradas entre aspas ``'`` ou ``"``

## Aula 4 - Boolean
- ``0, NaN, '', null, undefined e false`` são avaliados como ``false`` qualquer outro valor é avaliado como ``true``

## Aula 5 - undefined e null
- ``undefined`` é retornado caso uma propriedade de um determidado objeto seja consultada e não exista.

## Aula 6 - Object
- Um objeto é uma coleção dinâmica de chaves e valores de qualquer tipo de dado;
- É possível adicionar/remover propriedades a qualquer momento;
- Não é JSON, é objeto literal;

## Aula 7 e 8 - Functions
- As funções são de primeira classe ``(pode ser atribuída a uma variável, passada por parâmetro ou retornada através de outra função)``;
- Funções de escopo global ``ALERTA: Coidao;
- Closures

### Tipos
- Function Declaration: é carregada antes do código ser interpretado
- Function Expression: é carregada durante a interpretação do código
- Named Function Expression;

### Invocando uma função
- Diretamente no escopo global;
- Através de Objetos;
- Através de ``call e apply`` para indicar em qual escopo ela será executada;
- Através do operador ``new``;

### Formas de criar objetos
- Factory Function;
- Constructor Function (new);
- IIFE - Module Pattern

## Aula 9 - Array
- Não possuem tamanho fixo;
- Podem ser definidos com um tamanho inicial;
- Podem ser com ``new`` ou de forma direta;
- Possui vasta API;

## Aula 10 - Expressões regulares
- Validação de campos
- Extração de dados
- Substituição de caracteres

## Aula 11 - Date
- RFC 2822
- ISO 8601

## Aula 12 - Operadores
- Cuidado com operadores de comparação ``== e !=``. Pode produzir resultados inesperados devido a coerção de tipos.
    - 0 == '' (true)
    - null == undefined (true)

- Como comparar dois objetos?
    - o javascript se baseia na referência dos objetos.

## Aula 13 - Statements
- 

## Aula 14 e 15 - Herança
- ``__proto__`` não é padrão e pode não funcionar em alguns intepretadores;
- Prefira a utilização de ``Object.getPrototypeOf`` e ``Object.setPrototypeOf`` para interagir com o protótipo do objeto.
- Também é possível utilizar ``Object.create`` para determinar o protótipo do objeto.
- Shadowing;
