export default function result(imc){
    let response = ''
    if (imc < 18.5){
        response = 'Abaixo do Peso'
    }else if (imc <= 24.9){
        response = 'Peso Normal'
    }
    else if (imc <= 29.9){
        response = 'Sobrepeso'
    }
    else if (imc <= 34.9){
        response = 'Obesidade Grau I'
    }
    else if (imc <= 39.9){
        response = 'Obesidade Grau II'
    }
    else if (imc >= 40){       
        response = 'Obesidade Mórbida'
    }
    
        return response
        
}