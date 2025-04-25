function carregar (){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora <12){
    img.src = 'imagens/fotomanha.jpg'
    document.body.style.background = '#829AA6'
} else if (hora >= 12 && hora < 18) {
    img.src = 'imagens/fototarde.jpg'
    document.body.style.background = '#FFBB5F'
} else {
    img.src = 'imagens/fotonoite.jpg'
    document.body.style.background = '#86649A'
}
}