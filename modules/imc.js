import result from './helpers/result.js'

export default function imc(){
    const weight = document.querySelector('#weight')
    const height = document.querySelector('#height')
    const calculate = document.querySelector('#calcBtn')
    const resultBox = document.querySelector('#result')

    calculate.addEventListener("click", ()=>{
        let imc = weight.value + (height.value * height.value)
        imc = parseFloat(imc).toFixed(1)
        let resultText = result(imc)
        resultBox.innerHTML = `IMC: ${imc} (${resultText})`
    })

}