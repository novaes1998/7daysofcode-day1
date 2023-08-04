
let selectPrimeiroValor = document.getElementById('primeiro__valor');
let selectSegundoValor = document.getElementById('segundo__valor');

const numeroUm = parseInt(selectPrimeiroValor[1].value);
const stringUm = selectPrimeiroValor[2].value;
const numeroTrinta = parseInt(selectPrimeiroValor[3].value);
const stringTrinta = selectPrimeiroValor[4].value;
const numeroDez = parseInt(selectPrimeiroValor[5].value);
const stringDez = selectPrimeiroValor[6].value;
var primeiroValorSelecionado;
var segundoValorSelecionado;


selectPrimeiroValor.addEventListener('change', function(){
  
  primeiroValorSelecionado = selectPrimeiroValor.value;
  
  //realizando a conversão string para números caso o usuário escolha a opção number
  if(selectPrimeiroValor[1].selected == true || selectPrimeiroValor[3].selected == true || selectPrimeiroValor[5].selected == true){
    primeiroValorSelecionado = parseInt(primeiroValorSelecionado);
  }
  
  if (primeiroValorSelecionado === numeroUm) {
    console.log("O primeiro valor é igual a 1");
  }
  else if (primeiroValorSelecionado === stringUm){
    console.log("O primeiro valor é igual a '1'");
  }
  else if (primeiroValorSelecionado === numeroTrinta){
    console.log("O primeiro valor é igual a 30");
  }
  else if (primeiroValorSelecionado === stringTrinta){
    console.log("O primeiro valor é igual a '30'");
  }
  else if (primeiroValorSelecionado === numeroDez){
    console.log("O primeiro valor é igual a 10");
  }
  else if (primeiroValorSelecionado === stringDez){
    console.log("O primeiro valor é igual a '10'");
  }
   
  document.getElementById('resultado').innerHTML = compararNumeros();
  
})


selectSegundoValor.addEventListener('change', function(){

    segundoValorSelecionado = selectSegundoValor.value;

    if (selectSegundoValor[1].selected == true || selectSegundoValor[3].selected == true || selectSegundoValor[5].selected == true){
      segundoValorSelecionado = parseInt(segundoValorSelecionado);
    }

    if (segundoValorSelecionado === numeroUm){
      console.log("O segundo valor é igual a 1");
    }
    else if (segundoValorSelecionado === stringUm){
      console.log("O segundo valor é igual a '1'");
    }
    else if (segundoValorSelecionado === numeroTrinta){
      console.log("O segundo valor é igual a 30");
    }
    else if (segundoValorSelecionado === stringTrinta){
      console.log("O segundo valor é igual a '30'");
    }
    else if (segundoValorSelecionado === numeroDez){
      console.log("O segundo valor é igual a 10");
    }
    else if(segundoValorSelecionado === stringDez){
      console.log("O segundo valor é igual a '10'");
    }

    document.getElementById('resultado').innerHTML = compararNumeros();
    
})


function compararNumeros(){

  if (selectPrimeiroValor[0].selected == true || selectSegundoValor[0].selected){
    //foi inserida este if para não realizar comparações com a option de entrada (quando inicia a página)
    return "";
  }
  
  else if (primeiroValorSelecionado === segundoValorSelecionado){
    if(typeof primeiroValorSelecionado == 'number'){
      console.log("Os dois números tem os mesmos valores e o mesmo tipo NUMBER.");
      return "Os dois números tem os mesmos valores e o mesmo tipo NUMBER.";
    }else{
      console.log("Os dois números tem os mesmos valores e o mesmo tipo STRING.");
      return "Os dois números tem os mesmos valores e o mesmo tipo STRING.";
    }   
  }

  else if (primeiroValorSelecionado == segundoValorSelecionado){
    if (typeof primeiroValorSelecionado == 'number'){
      console.log("Os dois números tem os mesmos valores, porém os tipos diferentes. \nPrimeiro Valor = NUMBER \nSegundo Valor = STRING");
      return "Os dois números tem os mesmos valores, porém os tipos diferentes.<p>Primeiro Valor = NUMBER<p>Segundo Valor = STRING";
    }else{
      console.log("Os dois números tem os mesmos valores, porém os tipos diferentes. \nPrimeiro Valor = STRING \nSegundo Valor = NUMBER");
      return "Os dois números tem os mesmos valores, porém os tipos diferentes.<p>Primeiro Valor = STRING<p>Segundo Valor = NUMBER";
    }
  }

  else if (primeiroValorSelecionado != segundoValorSelecionado){
    if(typeof primeiroValorSelecionado == typeof segundoValorSelecionado){
      console.log("Os dois números tem valores diferentes, porém os tipos iguais (" + typeof primeiroValorSelecionado + ").");
      return "Os dois números tem valores diferentes, porém os tipos iguais (" + typeof primeiroValorSelecionado + ").";
    }else{
      console.log("Os dois números tem valores e tipos diferentes.")
      return "Os dois números tem valores e tipos diferentes.";
    }
  }

}

















