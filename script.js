function verificar(){
    var ftime = document.getElementsByName('rdbtime')
    var fsexo = document.getElementsByName('rdbsexo')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    
    if(ftime[0].checked && fsexo[0].checked){
        res.innerHTML = `Identificamos um <strong>Homem Corinthiano<strong>!<br>`
        img.setAttribute('src', 'torcedor-corinthians.png')
        res.appendChild(img)
    }else if(ftime[0].checked && fsexo[1].checked){
        res.innerHTML = `Identificamos uma <strong>Mulher Corinthiana<strong>!<br>`
        img.setAttribute('src', 'torcedora-corinthians.png')
        res.appendChild(img)
    }else if(ftime[1].checked && fsexo[0].checked){
        res.innerHTML = `Identificamos um <strong>Homem Palmeirense<strong>!<br>`
        img.setAttribute('src', 'torcedor-palmeiras.png')
        res.appendChild(img)
    }else if(ftime[1].checked && fsexo[1].checked){
        res.innerHTML = `Identificamos uma <strong>Mulher Palmeirense<strong>!<br>`
        img.setAttribute('src', 'torcedora-palmeiras.png')
        res.appendChild(img)
    }else if(ftime[2].checked && fsexo[0].checked){
        res.innerHTML = `Identificamos um <strong>Homem Santista</strong>!</br>`
        img.setAttribute('src', 'torcedor-santos.png')
        res.appendChild(img)
    }else if(ftime[2].checked && fsexo[1].checked){
        res.innerHTML =`Identificamos uma <strong>Mulher Santista</strong>!</br>` 
        img.setAttribute('src', `torcedora-santos.png`)
        res.appendChild(img)
    }else if(ftime[3].checked && fsexo[0].checked){
        res.innerHTML =`Identificamos um <strong>Homem São Paulino</strong>!</br>`
        img.setAttribute('src', 'torcedor-sp.png')
        res.appendChild(img)
    }else if(ftime[3].checked && fsexo[1].checked){
        res.innerHTML =`Identificamos uma <strong>Mulher São Paulina</strong>!</br>`
        img.setAttribute('src', 'torcedora-sp.png')
        res.appendChild(img)
    }
    
}