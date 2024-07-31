let nombreUsuario = "";
const bookmarkNota = document.querySelectorAll('.bookmark-nota');
const divLogin = document.getElementById("login-popup");


const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombres: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


function manejadorLogin(funcion) {
    return function (event) {
        event.preventDefault();
        if (nombreUsuario == "") {
            mostrarFormularioLogin(event);
        } else {
            if (funcion != null) {
                funcion(event);
            }
        }
    };
}

function mostrarFormularioLogin(event) {



    const overlay = document.createElement("div");
    overlay.className = "overlay";
    const contenedor = document.createElement("div");
    contenedor.className = "login-container";
    contenedor.id = "login-container";
    const logo = document.createElement("img");
    logo.src = "./img/logo-boxedcat.svg";
    logo.className = "logo-login";
    const titulo = document.createElement("h3");
    const formLogin = document.createElement("form");
    formLogin.className = "formularios-registro";
    formLogin.id = "formulario-login";
    const email = document.createElement("input");
    email.type = "email";
    email.name = "email";
    email.id = "email";
    email.placeholder = "Email";
    const divContraseña = document.createElement("div");
    divContraseña.className = "div-contraseña";
    const contraseña = document.createElement("input");
    contraseña.type = "password";
    contraseña.name = "contraseña";
    contraseña.id = "contraseña";
    contraseña.placeholder = "Contraseña";
    const ojo = document.createElement("img");
    ojo.src = "./img/closed-eye.svg";
    const textoError = document.createElement("p");
    textoError.className = "texto-error";
    const olvidasteContraseña = document.createElement("a");
    olvidasteContraseña.textContent = "¿Olvidaste tu contraseña?";
    const loginBtn = document.createElement("button");
    loginBtn.textContent = "INICIAR SESIÓN";
    loginBtn.className = "iniciar-sesion-button";
    const loginBtnAcceso = document.createElement("button");
    loginBtnAcceso.textContent = "INICIAR SESIÓN";
    loginBtnAcceso.className = "iniciar-sesion-button";
    const textoEnMedio = document.createElement("p");
    textoEnMedio.textContent = "o";
    textoEnMedio.className = "separador";
    const contenedorButtons = document.createElement("div");
    contenedorButtons.className = "contenedor-btn-login";
    const googleLogin = document.createElement("button");
    googleLogin.textContent = "GOOGLE";
    const fbLogin = document.createElement("button");
    fbLogin.textContent = "FACEBOOK";
    const registrate = document.createElement("p");
    registrate.className = "registrate";
    registrate.textContent = "¿No tenés cuenta? ";
    const registrateAnchor = document.createElement("a");
    registrateAnchor.textContent = "Registrate";
    registrateAnchor.setAttribute("onclick", "abrirFormRegistro()")
    registrateAnchor.id = "abrirRegistro";
    const cerrar = document.createElement("a");
    cerrar.setAttribute("onclick", "cerrarForm()");
    cerrar.id = "cerrar-form";
    const cerrarimg = document.createElement("img");
    cerrarimg.src = "./img/close.svg";



    cerrar.append(cerrarimg);
    registrate.appendChild(registrateAnchor);
    contenedorButtons.append(googleLogin, fbLogin);
    divContraseña.append(contraseña, ojo);
    contenedor.append(logo, titulo, loginBtnAcceso, textoEnMedio, contenedorButtons, cerrar, registrate);
    overlay.append(contenedor);
    divLogin.append(overlay);

    googleLogin.addEventListener('click', registrarse);
    fbLogin.addEventListener('click', registrarse);
    registrate.addEventListener('click', registrarse);
    ojo.addEventListener('click', function () {
        let tipo = contraseña.type === "password" ? "text" : "password";
        contraseña.setAttribute("type", tipo);
        if (tipo == "password") {
            ojo.src = "./img/closed-eye.svg";
        } else {
            ojo.src = "./img/open-eye.svg";
        }
    });

    if (event.currentTarget.id == "login-btn" || event.currentTarget.id == "back") {
        abrirLogin();
    } else {
        titulo.textContent = "Para continuar debes iniciar sesión";
        loginBtnAcceso.addEventListener('click', abrirLogin);
    }

    function registrarse() {
        contenedor.innerHTML = "";
        abrirFormRegistro(contenedor, logo, titulo, cerrar);
    };

    function abrirLogin() {
        titulo.textContent = "Inicia sesión en BoxedCat";
        loginBtnAcceso.replaceWith(formLogin);
        formLogin.append(email, divContraseña, textoError, olvidasteContraseña, loginBtn);

        formLogin.addEventListener('submit', function (event) {
            event.preventDefault();
            textoError.textContent = "*Email o contraseña invalido";
        });
    }
    adjustScale();
}

function abrirFormRegistro(container, imglogo, title, cerra) {
    const contenedor = container;
    const logo = imglogo;
    const titulo = title;
    const cerrar = cerra;
    if (contenedor != null) {
        titulo.textContent = "Registrate para saber de BoxedCat";

        const formRegistro1 = document.createElement("form");
        formRegistro1.className = "formularios-registro";
        formRegistro1.id = "formulario-registro";
        formRegistro1.setAttribute("novalidate", "true");

        const nombre = document.createElement("input");
        nombre.type = "text";
        nombre.name = "nombre";
        nombre.id = "nombre";
        nombre.placeholder = "Nombre";
        const textoErrorName = document.createElement("p");
        textoErrorName.className = "texto-error";

        const email = document.createElement("input");
        email.type = "email";
        email.name = "email";
        email.id = "email";
        email.placeholder = "Email";
        const textoErrorEmail = document.createElement("p");
        textoErrorEmail.className = "texto-error";

        const divContraseña = document.createElement("div");
        divContraseña.className = "div-contraseña";
        const contraseña = document.createElement("input");
        contraseña.type = "password";
        contraseña.name = "contraseña";
        contraseña.id = "contraseña";
        contraseña.placeholder = "Contraseña";
        const ojo = document.createElement("img");
        ojo.src = "./img/closed-eye.svg";
        const textoErrorContraseña = document.createElement("p");
        textoErrorContraseña.className = "texto-error";

        const confirmarContraseña = document.createElement("input");
        confirmarContraseña.type = "password";
        confirmarContraseña.name = "confirmarContraseña";
        confirmarContraseña.id = "confirmarContraseña";
        confirmarContraseña.placeholder = "Confirmar contraseña";
        const textoErrorConfirmarContraseña = document.createElement("p");
        textoErrorConfirmarContraseña.className = "texto-error";

        const terminosYCondiciones = document.createElement("p");
        terminosYCondiciones.className = "terminos-y-condiciones";
        terminosYCondiciones.innerHTML = "Al continuar, indicas que aceptas las <a>Condiciones de servicio</a> y la <a>Politica de privacidad</a> de BoxedCat";
        const registrarseBtn = document.createElement("button");
        registrarseBtn.textContent = "REGISTRARSE";
        registrarseBtn.className = "iniciar-sesion-button";
        
        const back = document.createElement("img");
        back.src = "./img/back.svg";
        back.id = "back";

        divContraseña.append(contraseña, ojo);
        formRegistro1.append(nombre, textoErrorName, email, textoErrorEmail, divContraseña, textoErrorContraseña, confirmarContraseña, textoErrorConfirmarContraseña, terminosYCondiciones, registrarseBtn);
        contenedor.append(logo, titulo, cerrar, back, formRegistro1);

        ojo.addEventListener('click', function () {
            let tipo = contraseña.type === "password" ? "text" : "password";
            contraseña.setAttribute("type", tipo);
            ojo.src = tipo === "password" ? "./img/closed-eye.svg" : "./img/open-eye.svg";
        });

        formRegistro1.addEventListener('submit', function (event) {
            event.preventDefault();
            if(nombre.value == ""){
                textoErrorName.textContent = "*Este campo no puede estar vacio";
                textoErrorName.classList.add("active");
                nombre.classList.add("error");
            } else if(!expresiones.nombres.test(nombre.value)){
                textoErrorName.textContent = "*Estas usando caracteres invalidos para este campo";
                textoErrorName.classList.add("active");
                nombre.classList.add("error");
            } else {
                textoErrorName.textContent = "";
                textoErrorName.classList.remove("active");
                nombre.classList.remove("error");
            }

            if(email.value == ""){
                textoErrorEmail.textContent = "*Este campo no puede estar vacio";
                textoErrorEmail.classList.add("active");
                email.classList.add("error");
            } else if(!expresiones.correo.test(email.value)){
                textoErrorEmail.textContent = '*Se requiere un correo con "@" y "."';
                textoErrorEmail.classList.add("active");
                email.classList.add("error");
            } else {
                textoErrorEmail.textContent = "";
                textoErrorEmail.classList.remove("active");
                email.classList.remove("error");
            }

            if(contraseña.value == ""){
                textoErrorContraseña.textContent = "*Este campo no puede estar vacio";
                textoErrorContraseña.classList.add("active");
                contraseña.classList.add("error");
            } else {
                textoErrorContraseña.textContent = "";
                textoErrorContraseña.classList.remove("active");
                contraseña.classList.remove("error");
            }

            if(contraseña.value != "" && confirmarContraseña.value != "" && confirmarContraseña.value === contraseña.value){
                textoErrorConfirmarContraseña.textContent = "";
                textoErrorConfirmarContraseña.classList.remove("active");
                confirmarContraseña.classList.remove("error");
            } else {
                textoErrorConfirmarContraseña.textContent = "*Confirmación invalida";
                textoErrorConfirmarContraseña.classList.add("active");
                confirmarContraseña.classList.add("error");
            }
           
        });

        back.addEventListener("click", (event) => {
            document.getElementById("login-popup").innerHTML = "";
            mostrarFormularioLogin(event);
        });
    }
};



function cerrarForm() {
    divLogin.firstChild.remove();
}

function cambiarBookmarkNota() {
    bookmarkNota.forEach(bookmark => {
        const child = bookmark.firstElementChild;
        if (child) {
            child.classList.toggle('active');
        }
    });
}

bookmarkNota.forEach(bookmark => {
    bookmark.addEventListener('click', manejadorLogin(cambiarBookmarkNota));
});

function guardarNotasSimilares(event) {
    event.preventDefault();
    const anchor = event.currentTarget;
    anchor.firstElementChild.classList.toggle('active');
}

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

    function clickearEstrellas() {
        seleccionado = true;
        for (let i = 0; i <= index; i++) {
            estrellas[i].style.fill = "#2CA9F0";
            relleno = i;
        }

        for (let i = index + 1; i < estrellas.length; i++) {
            estrellas[i].style.fill = "transparent";
        }

        numTotal.textContent = `${numeroTotal + 1}`;
    };

    estrella.addEventListener("click", manejadorLogin(clickearEstrellas));

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


const formComentario = document.getElementById("formComentario");
const textarea = document.getElementById("comentario");
const divComentarios = document.querySelector(".comentarios-escritos");
let mostrameMas = false;
let comentarios = document.querySelectorAll(".comentarios-escritos > :not(:first-child)");

function enviarComentario(event) {
    event.preventDefault();
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
        nombre.textContent = `${nombreUsuario}`;
        const fechap = document.createElement("p");
        fechap.textContent = `${fecha} ${hora}`;
        const comentarioEscrito = document.createElement("p");
        comentarioEscrito.textContent = `${textarea.value}`;
        nombreYFecha.append(nombre, fechap);
        comentarioIndividual.append(imagenPerfil, nombreYFecha, comentarioEscrito);
        divComentarios.insertBefore(comentarioIndividual, divComentarios.firstChild);
        comentarios = document.querySelectorAll(".comentarios-escritos > :not(:first-child)");
        if (mostrameMas == false) {
            comentarios.forEach(comentario => {
                comentario.style.display = 'none';
            });
        }
        textarea.value = "";
    }
};

formComentario.addEventListener("submit", manejadorLogin(enviarComentario));



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


function adjustScale() {
    var viewportHeight = window.innerHeight;
    var scaleValue = 1;

    if (viewportHeight < 800) {
        scaleValue = viewportHeight / 800;
    }
    var element = document.getElementById('login-container');
    if (element) {
        element.style.transform = 'scale(' + scaleValue + ')';
    }
}

window.onresize = adjustScale;
