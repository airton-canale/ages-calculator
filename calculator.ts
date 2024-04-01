const insert = (num: string) => {
  var numero = (document.getElementById('resultado') as HTMLElement).innerHTML;
  (document.getElementById('resultado') as HTMLElement).innerHTML = numero + num;
}

const clean = () => {
  (document.getElementById('resultado') as HTMLElement).innerHTML = "";
}
const back = () => {
  var resultado = (document.getElementById('resultado') as HTMLElement).innerHTML;
  (document.getElementById('resultado') as HTMLElement).innerHTML = resultado.substring(0, resultado.length - 1);
}
const calcular = () => {
  var resultado = (document.getElementById('resultado') as HTMLElement).innerHTML;
  if (resultado) {
      (document.getElementById('resultado') as HTMLElement).innerHTML = eval(resultado);
  }
  else {
      (document.getElementById('resultado') as HTMLElement).innerHTML = "";
  }
}
