function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if(fano.value == 0 || Number(fano.value) > ano){
        window.alert('verifique os dados e tente novamente')
    }
        else{
            var fsex = window.document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('di', 'foto')
                if(fsex[0].checked){
                genero = 'Homem'
                    if(idade >= 0 && idade <=10){
                        img.setAttribute('src', 'menino.png')
                    }else if(idade <21){
                        img.setAttribute('src', 'adolecenteh.png')
                    }else if(idade < 50){
                        img.setAttribute('src', 'homem.png')
                    }else{
                        img.setAttribute('src', 'homemmaduro.png')
                    }

                }else if(fsex[1].checked){
                    genero = 'Mulher'
                    if(idade >= 0 && idade <=10){
                        img.setAttribute('src', 'menina.png')
                    }else if(idade <21){
                        img.setAttribute('src', 'adolecentem.png')
                    }else if(idade < 50){
                        img.setAttribute('src', 'mulher.png')
                    }else{
                        img.setAttribute('src', 'mulhermadura.png')
                    }
                }
                res.style.textAlign = 'center'
                res.style.fontSize = '15px'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos<br>`
            res.appendChild(img)
        }
    
}