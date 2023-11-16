//AQUI COMEÇA O ARMAZENAMENTO DOS DADOS/
let botao = document.querySelector(".btn");

botao.addEventListener("click", function(event){
    event.preventDefault();

    let nome= document.getElementById("nome").value;
    let email= document.getElementById("e-mail").value;
    let telefone= document.getElementById("telefone").value;
    let mensagem= document.getElementById("mensagem").value;

    console.log(nome);
    console.log(email);
    console.log(telefone);
    console.log(mensagem);

    if(nome='miriam'){     
    }
    if(email='miriamdesiqueira18@gmail.com'){
    }

    if(telefone='41996070136'){
    }

    if(mensagem='Quero saber mais sobre o blog'){
    }
})



