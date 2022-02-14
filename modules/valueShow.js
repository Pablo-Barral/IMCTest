export default function valueShow(){
    const weight = document.querySelector('#weight')
    const height = document.querySelector('#height')
    const weightValue = document.querySelector('#weightValue')
    const heightValue = document.querySelector('#heightValue')

    weight.value = 0
    height.value = 0

    weight.addEventListener('input', ()=>{
        weightValue.innerHTML = weight.value
    })
    height.addEventListener('input', ()=>{
        heightValue.innerHTML = height.value
    })
}