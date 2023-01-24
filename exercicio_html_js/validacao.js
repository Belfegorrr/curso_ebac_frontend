const form = document.getElementById('formulario')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const primeiroNumero = document.getElementById('A')
    const segundoNumero = document.getElementById('B')
    
    const numeroInteiroA = parseInt(primeiroNumero.value)
    const numeroInteiroB = parseInt(segundoNumero.value)   

    if(numeroInteiroB > numeroInteiroA){
        return alert('Sucesso!!')
    }else{
        return alert('B deve ser maior que A')
    }
})