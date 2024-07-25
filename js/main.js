function expandir(event){
    event.preventDefault();
            const anchor = event.currentTarget;
            const contenido = anchor.nextElementSibling;
            const flecha = anchor.querySelector('.flecha');
            if ((contenido.style.display === 'none' || contenido.style.display === '') && flecha.classList.contains("active") === false) {
                contenido.style.display = 'flex';
                flecha.classList.add('active');
            } else {
                contenido.style.display = 'none';
                flecha.classList.remove('active');
            }
    
}

let expando = false;

function expandirTotal(){
    expando = !expando;
    const nota = document.querySelector('.contenido-nota');
    const gradiente = nota.lastElementChild;

    const verMas = document.querySelector('.ver-mas');
    const verMasImg = verMas.firstElementChild;
    const verMasText = verMas.lastElementChild;
    
    if(expando){
        nota.style.maxHeight = "100%";
        gradiente.style.visibility = "hidden";
        verMasImg.classList.add("active");
        verMasText.textContent = "Ver menos";
    } else {
        nota.style.maxHeight = "600px";
        gradiente.style.visibility = "visible";
        verMasImg.classList.remove('active');
        verMasText.textContent = "Ver más";
    }
}
