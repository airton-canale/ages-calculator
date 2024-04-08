const insert = (num: string) => {
  var numero = (document.getElementById('resultado') as HTMLElement).innerHTML;
  (document.getElementById('resultado') as HTMLElement).innerHTML = numero + num;
}

const clear = ()  => {
  (document.getElementById('result') as HTMLElement).innerHTML = ''
  (document.querySelector('.counts-header') as HTMLElement).innerHTML = ''
}
const back = ()  => {
  const resultado = (document.querySelector('.counts-header') as HTMLElement).innerHTML
  (document.querySelector('.counts-header') as HTMLElement).innerHTML = resultado.substring(
    0,
    resultado.length - 1
  )
}

const addPercentage = () => {
  const numero = (document.querySelector('.counts-header') as HTMLElement).innerHTML
  (document.querySelector('.counts-header') as HTMLElement).innerHTML = numero + '%'
}

const verifyPercentage = () => {
  const header = (document.querySelector('.counts-header') as HTMLElement).innerHTML
  const countSplitted = header.split('%')
  if(countSplitted[1]) {
    const countResult =  (countSplitted[0] * countSplitted[1]) / 100
    (document.getElementById('result') as HTMLElement).innerHTML = eval(countResult)
  }else {
    (document.getElementById('result') as HTMLElement).innerHTML = eval(header)
  }

}

const addParentheses = () => {
  let equation = (document.querySelector('.counts-header') as HTMLElement).innerHTML
  const equationSplitted = equation.split('')
  if(equationSplitted.some(str => str === "(")) {
    (document.querySelector('.counts-header') as HTMLElement).innerHTML = equation + ")"
  }else {
    (document.querySelector('.counts-header') as HTMLElement).innerHTML = equation = equation + "("
  }
}

const calculate = ()  => {
  const result = (document.querySelector('.counts-header') as HTMLElement).innerHTML
  if (result) {
    verifyPercentage()
  } else {
    (document.getElementById('result') as HTMLElement).innerHTML = ''
    (document.querySelector('.counts-header') as HTMLElement).innerHTML = ''
  }
}
