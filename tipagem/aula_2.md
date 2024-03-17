### Aula 2: Explorando Funções e Tipos Complexos no TypeScript

Bem-vindos de volta! Agora que já dominamos os tipos primitivos no TypeScript, vamos mergulhar no mundo das funções e dos tipos mais complexos. Estes conceitos vão ajudar você a estruturar melhor seus programas e lidar com dados de formas mais sofisticadas. Preparados? Vamos nessa!

#### Funções e Tipagem de Parâmetros

No TypeScript, você pode especificar o tipo dos parâmetros e o tipo do valor que a função retorna. Isso aumenta a clareza do código e ajuda a prevenir erros.

typescript
function soma(a: number, b: number): number {
    return a + b;
}

let resultado = soma(10, 5);
console.log(resultado); // Saída: 15

*Explicação*: A função soma espera dois parâmetros, ambos do tipo number, e também retorna um number. Se tentarmos passar algo que não seja um número, o TypeScript irá nos alertar.

#### Interfaces: Estruturando Objetos

Interfaces são uma maneira poderosa de definir "contratos" para objetos, garantindo que eles tenham uma estrutura específica.

typescript
interface Pessoa {
    nome: string;
    idade: number;
}

let pessoa: Pessoa = {
    nome: "Leia Organa",
    idade: 19
};

console.log(pessoa.nome); // Saída: Leia Organa

*Explicação*: A interface Pessoa define um contrato que qualquer objeto do tipo Pessoa deve seguir, especificando que deve ter um nome (string) e uma idade (number).

#### Uniões de Tipos

As vezes, uma variável pode precisar aceitar mais de um tipo de valor. O TypeScript permite isso através de uniões de tipos.

typescript
let id: number | string;

id = 10;
console.log(id); // Saída: 10

id = "2024A";
console.log(id); // Saída: 2024A

*Explicação*: A variável id pode aceitar tanto number quanto string. Isso é útil em situações onde um valor pode ter mais de um tipo válido.

#### Tipos Literais e Enums

Tipos literais e enums permitem restringir uma variável a um conjunto específico de valores.

typescript
type Direcao = "Norte" | "Sul" | "Leste" | "Oeste";

let direcao: Direcao = "Norte";
console.log(direcao); // Saída: Norte

enum Status {
    Ativo = "ATIVO",
    Inativo = "INATIVO",
    Suspensso = "SUSPENSO"
}

let meuStatus: Status = Status.Ativo;
console.log(meuStatus); // Saída: ATIVO

*Explicação*: Direcao é um tipo literal que pode ter apenas um dos quatro valores especificados. Status é um enum que define um conjunto fixo de valores que meuStatus pode ter.

### Vamos Praticar!

*Exercício 1*: Crie uma função apresentar que recebe um nome (string) e uma idade (number) e retorna uma frase de apresentação.

*Como fazer*:
typescript
function apresentar(nome: string, idade: number): string {
    return `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
}

console.log(apresentar("Han Solo", 32));


*Exercício 2*: Defina uma interface Carro com as propriedades modelo (string) e ano (number). Em seguida, crie um objeto carro seguindo a interface Carro.

*Como fazer*:
typescript
interface Carro {
    modelo: string;
    ano: number;
}

let carro: Carro = {
    modelo: "Millennium Falcon",
    ano: 1960
};

console.log(carro);


*Exercício 3*: Utilize uniões de tipos para criar uma função que aceite um id como string ou number e imprima-o no console.

*Como fazer*:
typescript
function imprimirId(id: number | string): void {
    console.log(`O ID é: ${id}`);
}

imprimirId(101);
imprimirId("2024B");


#### Recapitulação

Nesta aula, aprendemos sobre a tipagem de funções, interfaces, uniões de tipos, tipos literais e enums no TypeScript