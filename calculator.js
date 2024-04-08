const insert = (num) =>  {
  const numero = document.querySelector('.counts-header').innerHTML
  document.querySelector('.counts-header').innerHTML = numero + num
}

const clear = ()  => {
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

const addPercentage = () => {
  const numero = document.querySelector('.counts-header').innerHTML
  document.querySelector('.counts-header').innerHTML = numero + '%'
}

const verifyPercentage = () => {
  const header = document.querySelector('.counts-header').innerHTML
  const countSplitted = header.split('%')
  if(countSplitted[1]) {
    const countResult =  (countSplitted[0] * countSplitted[1]) / 100
    document.getElementById('result').innerHTML = eval(countResult)
  }else {
    document.getElementById('result').innerHTML = eval(header)
  }

}

const addParentheses = () => {
  let equation = document.querySelector('.counts-header').innerHTML
  const equationSplitted = equation.split('')
  if(equationSplitted.some(str => str === "(")) {
    document.querySelector('.counts-header').innerHTML = equation + ")"
  }else {
    document.querySelector('.counts-header').innerHTML = equation = equation + "("
  }
}

const calculate = ()  => {
  const result = document.querySelector('.counts-header').innerHTML
  if (result) {
    verifyPercentage()
  } else {
    document.getElementById('result').innerHTML = ''
    document.querySelector('.counts-header').innerHTML = ''
  }
}
