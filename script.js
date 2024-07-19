function Calcular() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var notaDaPrimeiraUnidade = parseFloat(valor);

  var calculado = (70-(notaDaPrimeiraUnidade * 4))/6;
  //var notaQuePrecisa = calculado.toFixed(3);
  var notaQuePrecisa = Math.ceil(calculado * 10) / 10;
  console.log(notaQuePrecisa);
  var elementoVcPrecisa = document.getElementById("vcPrecisa");
  var elementoNotaCalculada = document.getElementById("notaCalculada");
  var vcPrecisa = "Você precisa tirar: ";
  var notaCalculada = notaQuePrecisa;
  elementoNotaCalculada.innerHTML = notaCalculada;
  elementoVcPrecisa.innerHTML = vcPrecisa;
}