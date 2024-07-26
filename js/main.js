function expandir(event) {
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

function expandirTotal() {
    expando = !expando;
    const nota = document.querySelector('.contenido-nota');
    const gradiente = nota.lastElementChild;

    const verMas = document.querySelector('.ver-mas');
    const verMasImg = verMas.firstElementChild;
    const verMasText = verMas.lastElementChild;

    if (expando) {
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

const estrellas = document.querySelectorAll('.star-rate');
let seleccionado = false;
let relleno;
const numTotal = document.getElementById("numero-total");
let numeroTotal = parseInt(numTotal.textContent);

console.log(numeroTotal);

estrellas.forEach((estrella, index) => {

    estrella.addEventListener("mouseover", () => {
        for (let i = 0; i <= index; i++) {
            estrellas[i].style.fill = "#2CA9F0";
        }

        for (let i = index + 1; i < estrellas.length; i++) {
            estrellas[i].style.fill = "transparent";
        }
    });

    estrella.addEventListener("click", () => {
        seleccionado = true;
        for (let i = 0; i <= index; i++) {
            estrellas[i].style.fill = "#2CA9F0";
            relleno = i;
        }

        for (let i = index + 1; i < estrellas.length; i++) {
            estrellas[i].style.fill = "transparent";
        }

        numTotal.textContent = `${numeroTotal + 1}`;
    });

    estrella.addEventListener("mouseout", () => {
        if (!seleccionado) {
            for (let i = 0; i < estrellas.length; i++) {

                estrellas[i].style.fill = "transparent";
            }
        } else {
            for (let i = 0; i <= relleno; i++) {
                estrellas[i].style.fill = "#2CA9F0";
            }
            
            for (let i = relleno + 1; i < estrellas.length; i++) {
                estrellas[i].style.fill = "transparent";
            }
        }
    }
    );



});

