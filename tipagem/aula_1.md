### Aula 1: Primeiros Passos com Tipagem no TypeScript

Olá, futuro mestre do TypeScript! Hoje, vamos mergulhar no mundo da tipagem estática e descobrir como ela pode tornar nosso código JavaScript não apenas mais seguro, mas também mais claro e mais fácil de manter. Pegue seu café e prepare-se para começar esta viagem!

#### O Que é Tipagem Estática?

*Tipagem estática* é como ter um amigo que verifica se você está usando o tipo certo de dados toda vez que você declara uma variável ou passa argumentos para uma função. Imagine que você tem caixas para guardar diferentes tipos de objetos em sua casa: uma caixa para livros, outra para brinquedos, e assim por diante. Tipagem estática garante que você coloque cada item na caixa certa, evitando confusões.

#### Por Que TypeScript?

O TypeScript adiciona essa camada de verificação de tipo ao JavaScript, que por padrão não se preocupa muito com o tipo de dados que você está usando. Isso ajuda a pegar erros cedo no processo de desenvolvimento (por exemplo, quando você acidentalmente passa uma string para uma função que espera um número), antes mesmo de o código ser executado!

#### Tipos Primitivos no TypeScript

No TypeScript, temos alguns tipos primitivos básicos que você provavelmente usará o tempo todo:

- *string*: Para textos. Você pode usar aspas simples (''), aspas duplas ("") ou crases (\\) para definir strings.
  - Exemplo: let nome: string = "Darth Vader";

- *number*: Para números. No TypeScript, não há distinção entre inteiros, flutuantes, etc. Tudo é um number.
  - Exemplo: let idade: number = 67;

- *boolean*: Para valores verdadeiros ou falsos.
  - Exemplo: let isJedi: boolean = false;

#### Vamos Praticar!

*Exercício 1*: Declare uma variável chamada cidade e atribua a ela o nome da sua cidade. Lembre-se de especificar que é uma string!

*Como fazer*: 
typescript
let cidade: string = "Tatooine";

Isso diz ao TypeScript: "Ei, cidade é uma variável que sempre conterá uma string".

*Exercício 2*: Crie um array de números chamado numerosFavoritos e coloque seus três números favoritos nele.

*Como fazer*: 
typescript
let numerosFavoritos: number[] = [7, 42, 64];

Aqui, number[] indica ao TypeScript que numerosFavoritos é um array onde cada elemento é um número.

#### Recapitulando

Hoje, você aprendeu o básico sobre tipagem no TypeScript: como declarar variáveis com tipos específicos e a importância da tipagem estática para prevenir erros em nossos programas. Usamos exemplos práticos para ver como isso funciona na prática, e você até mesmo resolveu alguns exercícios para colocar seu conhecimento em ação!

#### Para Casa

Tente criar algumas variáveis por conta própria, experimentando com diferentes tipos. Veja o que acontece quando você tenta atribuir um valor de um tipo a uma variável de outro tipo. O TypeScript vai te avisar!

Parabéns por dar seu primeiro passo em direção a se tornar um desenvolvedor TypeScript habilidoso! Na próxima aula, mergulharemos mais fundo, explorando funções e tipos complexos. Te vejo lá!










Exemplos:



Vamos mergulhar mais fundo nos tipos primitivos do TypeScript com exemplos claros e explicados. Isso vai ajudar você a entender melhor como declarar variáveis e usar os tipos corretamente.

### 1. String

Strings são usadas para representar texto. No TypeScript, você declara uma string com o tipo string.

typescript
let nome: string = "Luke Skywalker";
console.log(nome); // Saída: Luke Skywalker

*Explicação*: Aqui, declaramos uma variável nome do tipo string e atribuímos a ela o valor "Luke Skywalker". O TypeScript vai garantir que apenas valores de texto sejam atribuídos a nome.

### 2. Number

O tipo number é usado para representar tanto números inteiros quanto de ponto flutuante.

typescript
let idade: number = 19;
let temperatura: number = 36.5;
console.log(idade, temperatura); // Saída: 19 36.5

*Explicação*: idade e temperatura são declaradas como number. Isso significa que podem armazenar números inteiros e decimais.

### 3. Boolean

Booleanos são muito simples: true ou false. No TypeScript, você os declara com o tipo boolean.

typescript
let isJedi: boolean = true;
console.log(isJedi); // Saída: true

*Explicação*: isJedi é uma variável booleana que pode conter apenas dois valores: true ou false. Aqui, afirmamos que a variável isJedi é verdadeira.

### 4. Arrays

No TypeScript, você pode declarar um array usando dois estilos: Tipo[] ou Array<Tipo>.

typescript
let numerosFavoritos: number[] = [7, 42, 64];
// Ou equivalente:
let numerosFavoritosArray: Array<number> = [7, 42, 64];
console.log(numerosFavoritos); // Saída: [ 7, 42, 64 ]

*Explicação*: Ambas as declarações criam um array que só aceita números. Isso é útil para garantir que sua coleção contenha dados do mesmo tipo.

### 5. Any

Quando você não quer limitar o tipo de uma variável, pode usar any. Isso permite que a variável armazene qualquer tipo de valor. Use com moderação, pois isso contraria o propósito de usar TypeScript.

typescript
let mistério: any = 42;
mistério = "A resposta para tudo";
console.log(mistério); // Saída: A resposta para tudo

*Explicação*: A variável mistério inicialmente é um número, mas depois atribuímos uma string a ela. Isso é possível porque seu tipo é any, permitindo que ela mude de tipo.

### 6. Void

O tipo void é um pouco especial: ele é usado em funções que não retornam um valor.

typescript
function saudar(): void {
    console.log("Olá, galáxia!");
}
saudar(); // Saída: Olá, galáxia!

*Explicação*: A função saudar não retorna nenhum valor, então seu tipo é void. Isso é útil para especificar a intenção de que a função é destinada apenas para efeitos colaterais (como imprimir uma mensagem).

### Exercício de Reforço