function verifica() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebehomem.jpg')
            } else if (idade < 21){ 
                img.setAttribute ('src', 'imagens/jovemhomem.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/homemadulto.jpg')
            } else {
                img.setAttribute('src', 'imagens/homemidoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebemulher.jpg')
            } else if (idade < 21){ 
                img.setAttribute('src','imagens/jovemmulher.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/mulheradulta.jpg')
            } else {
                img.setAttribute('src', 'imagens/mulheridosa.jpg')}
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
    
}