const insert = (num) =>  {
  const numero = document.querySelector('.counts-header').innerHTML
  document.querySelector('.counts-header').innerHTML = numero + num
}

const clean = ()  => {
  document.getElementById('result').innerHTML = ''
  document.querySelector('.counts-header').innerHTML = ''
}
const back = ()  => {
  const resultado = document.querySelector('.counts-header').innerHTML
  document.querySelector('.counts-header').innerHTML = resultado.substring(
    0,
    resultado.length - 1
  )
}

const calcular = ()  => {
  const resultado = document.querySelector('.counts-header').innerHTML
  if (resultado) {
    document.getElementById('result').innerHTML = eval(resultado)
  } else {
    document.getElementById('result').innerHTML = ''
    document.querySelector('.counts-header').innerHTML = ''
  }
}
