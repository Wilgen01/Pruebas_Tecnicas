let nPagina 
let termino = ''
const boton = document.getElementById('buscar')
let lista = document.querySelector('#lista')
let title = []
let contenido = document.querySelector('#contenido')

const construirURL = (termino, nPagina) =>{
    let url
    if (termino) {
        if (nPagina) {
            url = `https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=${termino}&page=${nPagina}` 
        }else{
        url = `https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=${termino}`
        }
    }

    return url
}

const consulta = () =>{
    if (!termino) {
        return
    }
    let url = construirURL(termino, nPagina)
    console.log(url);
    fetch(url).then(resp => resp.json())
    .then( ({ data, total_pages }) => {
        if (total_pages > 1 && !nPagina) {
            contenido.innerHTML = `
            <br><label for="">Hay mas de una pagina, seleccione el numero de pagina a consultar</label>
            <input type="number" id="nPagina">
            `
        }else{
            for (let i = 0; i < data.length; i++) {
                title.push(data[i].Title) 
            }
           imprimir()
        }
    })    
}

const imprimir = () =>{
    title.sort()
    for (let i = 0; i < title.length; i++) {
        lista.innerHTML += ` <li> ${title[i]} </li>`
    }
    title = []
    nPagina = null
}


boton.addEventListener('click', ()=>{
    if (document.querySelector('#nPagina')) {
        nPagina = document.querySelector('#nPagina').value
    }
    termino = document.querySelector('#termino').value
    lista.innerHTML = ''
    contenido.innerHTML= ''
    consulta()
})

