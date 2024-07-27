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

let usuario = "Damian";
const formComentario = document.getElementById("formComentario");
const textarea = document.getElementById("comentario");
const divComentarios = document.querySelector(".comentarios-escritos");
let mostrameMas = false;
let comentarios = document.querySelectorAll(".comentarios-escritos > :not(:first-child)");

formComentario.addEventListener("submit", (e) => {
    e.preventDefault();
    if (textarea.value !== "") {
        const cantidadComentarios = document.getElementById("cantidad-comentarios");
        let cantTotal = parseInt(cantidadComentarios.textContent);
        cantidadComentarios.textContent = `${cantTotal + 1}`;
        const fechaActual = new Date();

        const opcionesDeFecha = {
            timeZone: 'America/Argentina/Buenos_Aires',
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };

        const formato = new Intl.DateTimeFormat('es-ES', opcionesDeFecha);
        const partes = formato.formatToParts(fechaActual);
        const fecha = partes.find(p => p.type === 'day').value + '/' +
                      partes.find(p => p.type === 'month').value + '/' +
                      partes.find(p => p.type === 'year').value;
        const hora = partes.find(p => p.type === 'hour').value + ':' +
                     partes.find(p => p.type === 'minute').value;

        const comentarioIndividual = document.createElement("div");
        comentarioIndividual.classList.add("comentario-individual");
        const imagenPerfil = document.createElement("img");
        imagenPerfil.src = "./img/autor.svg";
        imagenPerfil.alt = "Profile Photo";
        imagenPerfil.classList.add("profile-photo")
        const nombreYFecha = document.createElement("div");
        const nombre = document.createElement("h3");
        nombre.textContent = `${usuario}`;
        const fechap = document.createElement("p");
        fechap.textContent = `${fecha} ${hora}`;
        const comentarioEscrito = document.createElement("p");
        comentarioEscrito.textContent = `${textarea.value}`;
        nombreYFecha.append(nombre, fechap);
        comentarioIndividual.append(imagenPerfil, nombreYFecha, comentarioEscrito);
        divComentarios.insertBefore(comentarioIndividual, divComentarios.firstChild);
        comentarios = document.querySelectorAll(".comentarios-escritos > :not(:first-child)");
        if(mostrameMas == false){
            comentarios.forEach(comentario => {
                comentario.style.display = 'none';
            });
        }
        textarea.value = "";
    }
});





document.addEventListener('DOMContentLoaded', () => {
    comentarios.forEach(comentario => {
        comentario.style.display = 'none';
    });

});


function mostrarMas() {

    
    const btnMostrarMas = document.getElementById("mostrar-mas");
    const styleSheet = document.styleSheets[0];
    const rules = styleSheet.cssRules;

    if (mostrameMas == false) {

        for (let i = 0; i < rules.length; i++) {
            if (rules[i].selectorText === '#mostrar-mas::before') {
                rules[i].style.transform = 'rotate(180deg)';
                rules[i].style.backgroundPosition = "center left 35px";
            }
        }


        comentarios.forEach(comentario => {
            comentario.style.display = 'flex';
        });

        btnMostrarMas.textContent = "Mostrar menos";

    } else {

        for (let i = 0; i < rules.length; i++) {
            if (rules[i].selectorText === '#mostrar-mas::before') {
                rules[i].style.transform = 'rotate(0deg)';
                rules[i].style.backgroundPosition = "center right 35px";
            }
        }


        comentarios.forEach(comentario => {
            comentario.style.display = 'none';
        });

        btnMostrarMas.textContent = "Mostrar más";

    }
    mostrameMas = !mostrameMas;
}

