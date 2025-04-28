function gerar(){
    var tab = document.getElementById ('tab')
    var res = document.getElementById ('res')
    var n1
    var n2
    if (tab.value == 0 ){
        window.alert ('[ERRO] Verifique novamente as informações')
    } else {
        var num = Number (tab.value)
        res.innerHTML = ''
        for (var i = 1; i <= 10; i++){

        res.innerHTML += `${num} x ${i} = ${num * i} <br/>`
        }
    }
}
    
        

