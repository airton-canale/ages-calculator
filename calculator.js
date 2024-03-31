function insert(num) {
  var numero = document.querySelector('.counts-header').innerHTML
  document.querySelector('.counts-header').innerHTML = numero + num
}

function clean() {
  document.getElementById('result').innerHTML = ''
  document.querySelector('.counts-header').innerHTML = ''
}
function back() {
  var resultado = querySelector('.counts-header').innerHTML
  querySelector('.counts-header').innerHTML = resultado.substring(
    0,
    resultado.length - 1
  )
}
function calcular() {
  var resultado = document.querySelector('.counts-header').innerHTML
  console.log(resultado)
  if (resultado) {
    document.getElementById('result').innerHTML = eval(resultado)
  } else {
    document.getElementById('result').innerHTML = ''
    document.querySelector('.counts-header').innerHTML = ''
  }
}
