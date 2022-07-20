// se o número for par, escreva 'par' e o número correspondente.
// se o número for ímpar, escreva 'ímpar' e o número correspondente.
// se o número for zero, escreva 'zero' e o número correspondente.

let alunosPresentes = 20;

 for (let aluno = 0; aluno <= alunosPresentes; aluno++){
    if(aluno == 0){
        console.log("zero" + aluno);
    }
    if(aluno % 2 == 0){
        console.log("par" + aluno);
    }
    else{
        console.log("impar" + aluno);
    }
    }