/**Curso pela udemy (Curso Web Moderno com JavaScript 2019!) 52. Usando a estrutura IF #01
 * 
 * lembrar sempre olhar pelo Debug Console
 */

function soBoaNoticia(nota){
    if(nota >=7){
        console.log("Aprovado com " + nota)
    }
    else{
        console.log("nao é uma noticia boa")
    }
}

soBoaNoticia(7)
soBoaNoticia(4.3)


function seForVedadeEuFalo(valor){
    if(valor){
        console.log("É verdade... "+ valor)
    }
}
seForVedadeEuFalo("teste")
