function contar(){
    var n1 = document.getElementById ('n1')
    var n2 = document.getElementById('n2')
    var n3 = document.getElementById('n3')
    var res = document.getElementById('res')
    if (n2.value == 0 || n3.value == 0) {
        window.alert('[ERRO] Verifique os dados novamente!')

    } else if (n1.value < n2.value) {
        var fim = Number (n2.value)
        var pass = Number (n3.value)

        for (var ini = Number (n1.value); ini <= fim; ini+=pass)
            res.innerHTML += `${ini} 👉..`
    } else {
            var fim = Number (n2.value)
            var pass = Number (n3.value)
            for (var ini = Number (n1.value); ini >= fim; ini -= pass)
                res.innerHTML += `${ini} 👉..`
        }

    
        
    
}    
