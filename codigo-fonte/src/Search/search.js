//  const btn = document.getElementById('btn-ver-mais');
//  const cmt = document.getElementById('comentario');

//  btn.addEventListener('click', ()=> {
//     cmt.classList.toggle('visivel');

    
//  })

// const usuario = {
//    nome :"Wellington" , 
//    idade : 30,
//    email : "wellington@example.com"
// }

// console.log(usuario);

// const marray= [
   
   
//    {
//       nome: "Wellington",
//       idade: 31,
//       cidade: "Brumadinho"
// }
// ,
// {
//    nome: "João",
//    idade: 25,
//    cidade: "Belo Horizonte"
// }
// ]

// console.log(marray[0,1]);


// const nota = "igual";

// if (nota == "igual"){
//    console.log("nota cert")

// } else(console.log("nota errada"));



// function digaQualquerNome(nome){
//    console.log(nome+" logo PNG")
// }


// digaQualquerNome("rodolfo")



function estaEndividado(nome, receita, gasto){

   let resultado = receita - gasto
   if(resultado >= 0){

      return nome + " não está endividado";
      
   } else {
      return nome + " esta fudido!"
   }
   
}

const resultadoFinal = estaEndividado("Wellington",5600, 3000)

console.log(resultadoFinal);




const endividado = (valor1) =>{

   if(valor1 < 0) {
      console.log("est")
   }
      else {
      console.log("não está endividado");
      }
   };


   endividado(1);

   const numero = [1 , 2, 3, 4, 5]

   console.log(numero[1])