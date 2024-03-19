let cidade: String = "sapucaia do sul";
let numeroFavorito: Number[] = [17,21,24];
let numerosDaSorte: boolean = true
let cidadeArrys: string[]= ['esteio', 'canoas', 'porto alegre'];
let minhaIdade: number = 23

let valorMisterioso: any = 31
// any significa que o tipo da variavel pode ser qualquer coisa.
// podemos iniciar com um numero(number) e depois atribuirmos a ela uma palavras(string)

function bomDia(): void{
    console.log('bom dia')
}
//void significa que a funcao nao retorna nada, sendo assim, void so e usado em funcoes.


// funcoes e tipagem de parametros

function contarNumeros ( a:number ,b:number): number{
    return a + b
}
// Tambem podemos tipar funcoes e tipar os parametros que estao dentro dos ( ).


// interfaces: estruturando objetos

interface minhaPessoa {
    nome :string;
    idade : number;
    cidade : string;
}
let pessoal : minhaPessoa = {
    nome : "gabriel",
    idade : 23,
    cidade : "sapucaia do sul"
};
// interface serve para definir o que ah dentro de um objeto, e tambem devinir o que ele deve ter




// Uniao de tipos

let id : number | string;
id = 10;
id = "2024A";
// podemos colocar 2 tipos de tipagem em uma variavel usando o |.
// tambem e possivel adcionar as informacoes da variavel ao longo do programa.
// no exemplo acima eu crio a variavel com 2 tipos de tipagem, e adciono o valor a elas depois.


// Tipos Literais e Enums

type Direcao = "norte"|"sul"|"leste"|"oeste";
let direcao : Direcao = "norte";

enum Status {
    ativo = 'ATIVO',
    inativo = 'INATIVO',
    suspenso = 'SUSPENSO'
}
  let meuStatus: Status = Status.ativo



// EXERCICIOS 1 

function apresentar(nome:String, idade: number): string{
    return `meu nome e ${nome}, e minha idade e ${idade};`
}
interface carro {
    nome: string,
    ano: number
}

// exercicio 2

let meuCarro : carro ={
    nome : 'onix',
    ano : 2023
}
function impressao(a: string | number):void{
    console.log(`o id e ${a}`)
}



//unknown e never 
// unknown e muito parecido como o any, porem ele e mais seguro pois obriga a verificacao do tipo
// never e muito parecido com o void

// unknown
let valor:unknown = "ola mundo";
if (typeof valor === "string"){
    console.log(valor.toUpperCase());
}
// neste exemplo vemos que o unknown esta tipando a variavel let
// porem ele so vai executar o console.log se o tipo da variavel for string
// pois na if o typeof valor tem que ser igual a um string, e nao for nao sera salvado no console.log
// resumindo let valor e uma variavel nao definida, porem ela so sera devinida se o tipo for string, caso o contrario ela nao sera.
// e uma forma de garantir que o tipo da variavel seja o que queremos

//never

function erro(mensagem:string): never {
    throw new Error(mensagem);
}
// usado em funcoes que nunca devem retornar ou que retornar um erro.




// mais exercicios 

enum estadosDosPedidos {
    novo,
    emProcesso,
    enviados,
    entregues,
    cancelados
}

function soma(a: 'string' | number , b: 'string' | number) :string|number{
    if (typeof a === "number" && typeof b === "number"){
        return a +b;
    }else {
        return a.toString() + b.toString();
    }
}
// foi colocado 2 tipo no parametro da funcao, string e number, tambem foi colocado os mesmos tipos na tipagem da funcao.
// porem foi pedido para retornar a soma, entao o tipo teria que ser numero.
//por isso foi feito o if para que se o a for igual ao numero e o b for igual a numero retorne a soma.
// caso o contrario ele retornara a soma em strings usando o toString.


interface carro {
    nome: string,
    ano: number
}

interface empregado {
    nomeEmpregada: string
}

type carroempregado = carro & empregado

let carroEmpregado : carroempregado = {
    nome: "onix", 
    ano: 2023,
    nomeEmpregada: "maria"
}



//EXTRAS

// TYPEOF 
//O operador typeof no JavaScript e TypeScript é utilizado para obter uma string que indica o tipo de uma variável ou expressão. 
//Ele é muito útil para checagem de tipos em tempo de execução, especialmente quando se lida com valores cujos tipos podem não ser conhecidos antecipadamente.

//toUppercase()
//O método toUpperCase() é uma função disponível em strings no JavaScript e, por extensão, no TypeScript. 
//Ele é usado para converter todos os caracteres de uma string para letras maiúsculas. 
// Esse método não altera a string original, mas retorna uma nova string com todos os caracteres convertidos para maiúsculas.

//throw new Error
//No TypeScript e JavaScript, throw new Error(mensagem) é uma expressão usada para gerar um erro com uma mensagem específica. Essa expressão é composta por duas partes principais:
//1. throw: É uma instrução que permite gerar um erro ou "lançar" uma exceção.
//2. new Error(mensagem): Cria uma nova instância do objeto Error, que é um tipo de objeto incorporado usado para representar erros em JavaScript e TypeScript.

//toString
//O método toString() é uma função presente em muitos tipos de objetos em JavaScript e TypeScript, usada para converter e retornar uma representação em string do objeto ou valor em questão.
//Quando você chama toString() em um objeto, o método retorna uma string que representa esse objeto.
// Por padrão, muitos tipos de objetos têm implementações específicas de toString() que determinam como eles são convertidos em strings.
