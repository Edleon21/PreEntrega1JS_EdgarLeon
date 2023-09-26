/* Crear un algoritmo creando un ciclo aplicado a pagina de publicaciones 
y noticias para despues traer estas noticias desde una api */

const img_pub = ["../assets/imagenes/Kcmuv_Servicios-02-700.webp", "../assets/imagenes/credito-bancario-o-infonavit.webp", "../assets/imagenes/impi.webp"]
const title_pub = ["IMSS INFONAVIT", "CREDITOS", "IMPI",]
const desc_pub = ["Nueva Autoridad Respecto a el Cumplimiento Normativo la Dirección de Registro de Prestadoras de Servicios Especializados (REPSE)", "¿Debo presentar mi declaración anual como persona física? Excepciones a la obligación de presentar tu declaración anual para Persona Física en 2023", "Marcas, avisos o nombres comerciales concedidos en el año 2020 deben declarar su uso durante 2023"]
const time_pub = ["5", "15", "30"]

let box = document.getElementById("container-pub")

for (let i = 0; i<img_pub.length; i++) {
    let nuevo = document.createElement('div')
    nuevo.classList.add('box')

    let img = document.createElement('img')
    img.src = img_pub[i]

    let title = document.createElement('h2')
    title.textContent = title_pub[i]
    nuevo.classList.add('edit-text01')

    let desc = document.createElement('p')
    desc.textContent = desc_pub[i]
    nuevo.classList.add('edit-text02')
    
    let time = document.createElement('p')
    time.textContent = "Last time " + time_pub[i] + " min"
    nuevo.classList.add('edit-text03')

    box.appendChild(nuevo)
    nuevo.appendChild(img)
    nuevo.appendChild(title)
    nuevo.appendChild(desc)
    nuevo.appendChild(time)
}
