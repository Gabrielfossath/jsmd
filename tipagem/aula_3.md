### Aula 3: Dominando Tipagem Avançada no TypeScript

Sejam bem-vindos à aula final do nosso curso sobre tipagem no TypeScript! Agora que você já entende os conceitos básicos e intermediários, é hora de mergulhar em funcionalidades mais avançadas e descobrir como elas podem tornar nossos programas ainda mais poderosos e seguros.

#### Enums

Enums são uma forma elegante de organizar conjuntos de constantes relacionadas. Imagine que você está desenvolvendo um jogo e tem diferentes tipos de personagens. Você pode usar enums para gerenciar esses tipos de forma clara e eficaz.

typescript
enum TipoPersonagem {
    Guerreiro,
    Mago,
    Arqueiro
}

let meuPersonagem: TipoPersonagem = TipoPersonagem.Guerreiro;
console.log(meuPersonagem); // Saída: 0


*Explicação*: Enums são baseados em zero, então Guerreiro será 0, Mago será 1, etc. Eles tornam o código mais legível e menos propenso a erros, substituindo números mágicos por nomes significativos.

#### Tipos de União

Uma união de tipos permite que uma variável aceite mais de um tipo. Isso é extremamente útil em funções que precisam lidar com múltiplos tipos de entrada.

typescript
function exibirId(id: number | string) {
    console.log(`O ID é: ${id}`);
}

exibirId(101); // Trabalha com número
exibirId("202"); // E também com string


*Explicação*: Aqui, a função exibirId pode aceitar tanto números quanto strings como argumento. Isso dá flexibilidade ao seu código, mantendo a segurança de tipo.

#### Tipos de Interseção

Os tipos de interseção permitem combinar múltiplos tipos em um novo tipo, agregando suas propriedades.

typescript
interface Pessoa {
    nome: string;
}

interface Empregado {
    codigo: number;
}

type PessoaEmpregada = Pessoa & Empregado;

let empregado: PessoaEmpregada = {
    nome: "Chewbacca",
    codigo: 1977
};

console.log(empregado);


*Explicação*: PessoaEmpregada é um tipo que combina as propriedades de Pessoa e Empregado. Isso é útil para criar objetos complexos que precisam satisfazer múltiplos tipos ao mesmo tempo.

#### Tipagem Avançada: unknown e never

- *unknown*: Similar ao any, mas mais seguro, pois obriga a verificação do tipo antes de sua utilização.
  
typescript
let valor: unknown = "Olá, mundo!";
if (typeof valor === "string") {
    console.log(valor.toUpperCase()); // Só funciona após a verificação do tipo
}


- *never*: Usado em funções que nunca deverão retornar ou que sempre lançam um erro.

typescript
function erro(mensagem: string): never {
    throw new Error(mensagem);
}


*Exercício Prático*

1. *Crie um enum para categorizar os estados de um pedido (Novo, Em Processo, Enviado, Entregue, Cancelado).*
   
typescript
enum EstadoPedido {
    Novo,
    EmProcesso,
    Enviado,
    Entregue,
    Cancelado
}


2. *Faça uma função que aceite argumentos de diferentes tipos (string e number) e retorne a soma (ou concatenação, se uma string estiver envolvida).*

typescript
function somarOuConcatenar(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return a.toString() + b.toString();
    }
}


3. *Use uma interseção de tipos para criar um objeto carro que inclua propriedades de Veiculo e Empregado.*

typescript
interface Veiculo {
    fabricante: string;
    modelo: string;
}

interface Empregado {
    nome: string;
}

type CarroEmpregado = Veiculo & Empregado;

let carroEmpregado: CarroEmpregado = {
    fabricante: "Ford",
    modelo: "Mustang",
    nome: "Han Solo"
};


### Encerramento

Parabéns! Você agora tem uma compreensão sólida da tipagem no TypeScript, desde os conceitos básicos até recursos avançados. Essas ferramentas não apenas tornarão seu código mais seguro e fácil de manter, mas também mais expressivo e flexível. Continue praticando esses conceitos com seus próprios projetos e desafios, e você se tornará um mestre no TypeScript em pouco tempo!