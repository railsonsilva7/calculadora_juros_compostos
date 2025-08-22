function calcular() {
    let montante = document.querySelector('#inicial').value
    let juros = document.querySelector('#juros').value   
    let periodo = document.querySelector('#periodo').value 
    let resultado = (1 + juros / 100)**periodo
    let valor_final = montante * resultado
    valor_final = montante * resultado

    document.querySelector('#text1').innerHTML = 'Ao final do período você terá'        
    document.querySelector('#montante_final').innerText = valor_final.toLocaleString("pt-br", {style:"currency", currency:"BRL"})    
    console.log(text)
    
}






