window.alert ("Bem Vindo a Cidade dos Muffins") 

var nome = prompt("Digite seu nome: ")
var cardapio = prompt("Escolha entre cardapio vegano ou normal")
document.write("Bem vindo, ", nome)
document.write("<br>"); 
document.write("<br>"); 

const cardapioVeg = new Array(
    "Muffin Salgado e Alho Poró e Palmito ------------------------------------R$15,90",
    "Muffin Salgado de Pesto de Mangericão com Castanha do Para---------------R$12,50",
    "Muffin Doce de Banana com Chocolate Belga--------------------------------R$18,90",
    "Muffin Doce de Maçã com Canela-------------------------------------------R$13,50"
)

const cardapioN = new Array(
    "Muffin Doce de Nutella---------------------------------------------------R$25,00",
    "Muffin Doce de Leite--------------------------------------------------R$15,90",
    "Muffin Doce de Chocolate Ao Leite com Morango----------------------------R$20,00",
    "Muffin de Morango--------------------------------------------------R$18,90",
    "Muffin Salgado de Linguiça-----------------------------------------------R$16,90",
    "Muffin Salgado de Presunto e Queijo--------------------------------------R$12,90",
    "Muffin Salgado de Salame-------------------------------------------------R$15,90"
)

if(cardapio == "cardapio vegano" || cardapio == "vegano"){
    document.write("CARDAPIO VEGANO")
    document.write("<br>");
    for(i = 0; i < cardapioVeg.length; i++){
        document.write(cardapioVeg[i])
        document.write("<br>");
    }
}else{
    if(cardapio == "cardapio normal" || cardapio == "normal") {
        document.write("CARDAPIO NORMAL")
        document.write("<br>");
        for(i = 0; i < cardapioN.length; i++){
            document.write(cardapioN[i],"\n")
            document.write("<br>");
        }
    }
    else{
        document.write("Opção Invalida")
    }
}
