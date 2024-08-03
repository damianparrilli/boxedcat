let nombreUsuario = "";
let imagenUsuario = "";
const bookmarkNota = document.querySelectorAll('.bookmark-nota');
const divLogin = document.getElementById("login-popup");

//  localStorage.removeItem('usuarios');
//  localStorage.removeItem('usuarioLogueado');


function verificarLogin(){
    let logged = JSON.parse(localStorage.getItem('usuarioLogueado'));
    const imagenDeUsuario = document.getElementById("login-logo");
    const imagenDeUsuarioComentario = document.getElementById("profile-photo");
    const logout = document.querySelector(".div-login-btn");
if(logged !== null){
    nombreUsuario = logged.usuario;
    imagenUsuario = logged.avatar;
    imagenDeUsuario.src = imagenUsuario;
    imagenDeUsuarioComentario.src = imagenUsuario;
    imagenDeUsuario.nextSibling.textContent = `${nombreUsuario}`;
    
    logout.classList.add("logged");
} else {
    nombreUsuario = "";
    imagenUsuario = "";
    imagenDeUsuario.src = "./img/login-logo.svg";
    imagenDeUsuarioComentario.src = "./img/autor.svg";
    imagenDeUsuario.nextSibling.textContent = `ACCEDER`;
    logout.classList.remove("logged");
}
}

verificarLogin();

function cerrarSesion(){
    localStorage.removeItem('usuarioLogueado');
    verificarLogin();
}

async function preloadImages(imageUrls) {
    const container = document.getElementById('preloaded-images');

    const loadImage = url => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                container.appendChild(img);
                resolve(img);
            };
            img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
        });
    };

    try {
        await Promise.all(imageUrls.map(loadImage));
        console.log("All images preloaded successfully.");
        document.body.style.visibility = 'visible';
    } catch (error) {
        console.error(error);
        document.body.style.visibility = 'visible';
    }
}

const imagesToPreload = [
    "./img/back.svg?v=1",
    "./img/closed-eye.svg?v=1",
    "./img/open-eye.svg?v=1",
    "./img/logo-boxedcat.webp?v=1",
    "./img/close.svg?v=1",
    "./img/avatar0.webp?v=1",
    "./img/avatar1.webp?v=1",
    "./img/avatar2.webp?v=1",
    "./img/avatar3.webp?v=1",
    "./img/select1.webp?v=1",
    "./img/select2.webp?v=1",
    "./img/select3.webp?v=1",
    "./img/select4.webp?v=1",
    "./img/select5.webp?v=1",
    "./img/select6.webp?v=1",
    "./img/checked.webp"
];

preloadImages(imagesToPreload);

let lastScrollTop = 0;
const header = document.getElementById('nav-menu');

window.addEventListener('scroll', function() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        header.style.top = "-75px"; 
    } else {
        header.style.top = "0";
    }
    
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});

const expresiones = {
    nombres: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    password: /^(?=.*[A-Za-z0-9])[A-Za-z0-9!@#$%^&*()_+]{4,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}


function manejadorLogin(funcion) {
    return function (event) {
        event.preventDefault();
        let logged = JSON.parse(localStorage.getItem('usuarioLogueado'));
        if (logged === null) {
            mostrarFormularioLogin(event);
        } else {
            if (funcion != null) {
                funcion(event);
            }
        }
    };
}

function mostrarFormularioLogin(event) {
    document.body.style.overflowY = "hidden";
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    const contenedor = document.createElement("div");
    contenedor.className = "login-container";
    contenedor.id = "login-container";
    const logo = document.createElement("img");
    logo.src = `${imagesToPreload[3]}`;
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
    ojo.src = `${imagesToPreload[1]}`;
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
    cerrarimg.src = `${imagesToPreload[4]}`;

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
            ojo.src = `${imagesToPreload[1]}`;
        } else {
            ojo.src = `${imagesToPreload[2]}`;
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
            
            let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            const user = usuarios.find(user => user.email === email.value && user.contraseña === contraseña.value);
            if (user) {
                localStorage.setItem('usuarioLogueado', JSON.stringify(user));
                console.log("inicio sesion");
                verificarLogin();
                cerrarForm();
                console.log(user);
            } else {
                textoError.textContent = "*Email o contraseña invalido";
            }
        });
    }
    adjustScale();
}

function abrirFormRegistro(container, imglogo, title, cerra) {
    
    let presuntoNombre;
    let presuntaContraseña;
    let presuntaImagen;
    let presuntoEmail;
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
        ojo.src = `${imagesToPreload[1]}`;
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
        back.src = `${imagesToPreload[0]}`;
        back.id = "back";
        back.className = "back";

        divContraseña.append(contraseña, ojo);
        formRegistro1.append(nombre, textoErrorName, email, textoErrorEmail, divContraseña, textoErrorContraseña, confirmarContraseña, textoErrorConfirmarContraseña, terminosYCondiciones, registrarseBtn);
        contenedor.append(logo, titulo, cerrar, back, formRegistro1);



        const formRegistro2 = document.createElement("form");
        const arregloDeLabel = [];
        const arregloDeCheckbox = [];
        formRegistro2.id = "formulario-registro2";
        const divCheckbox = document.createElement("div");
        divCheckbox.className = "div-checkbox";
        const btnCheckbox = document.createElement("button");
        btnCheckbox.className = "btn-checkbox";
        btnCheckbox.textContent = "Elegí 3 más";
        const back2 = document.createElement("img");
        back2.src = `${imagesToPreload[0]}`;
        back2.id = "back2";
        back2.className = "back";
        for (let i = 0; i < 6; i++) {
            arregloDeLabel[i] = document.createElement("label");
            arregloDeLabel[i].htmlFor = `checkbox${i}`;
            arregloDeLabel[i].id = `label${i}`;
            arregloDeLabel[i].style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("../img/select${i+1}.webp?v=1")`;
            arregloDeCheckbox[i] = document.createElement("input");
            arregloDeCheckbox[i].type = `checkbox`;
            arregloDeCheckbox[i].id = `checkbox${i}`;

            divCheckbox.append(arregloDeCheckbox[i], arregloDeLabel[i]);
        }

        arregloDeLabel[0].textContent = `FILOSFIA`;
        arregloDeLabel[1].textContent = `FISICA`;
        arregloDeLabel[2].textContent = `LO HUMANO`;
        arregloDeLabel[3].textContent = `SALUD`;
        arregloDeLabel[4].textContent = `SOCIEDAD`;
        arregloDeLabel[5].textContent = `BIOLOGIA`;


        const back3 = document.createElement("img");
        back3.src = `${imagesToPreload[0]}`;
        back3.id = "back3";
        back3.className = "back";
        const formRegistro3 = document.createElement("form");
        formRegistro3.id = "formulario-registro3";
        const divRadio = document.createElement("div");
        divRadio.className = "div-radio";
        const arregloDeLabelRadio = [];
        const arregloDeRadio = [];
        const avatar = [];

        const btnRadio = document.createElement("button");
        btnRadio.className = "btn-radio";
        btnRadio.textContent = "Finalizar registro";
        for (let i = 0; i < 4; i++) {
            arregloDeLabelRadio[i] = document.createElement("label");
            arregloDeLabelRadio[i].htmlFor = `radio${i}`;
            arregloDeLabelRadio[i].id = `labelRadio${i}`;
            arregloDeRadio[i] = document.createElement("input");
            arregloDeRadio[i].type = `radio`;
            arregloDeRadio[i].id = `radio${i}`;
            arregloDeRadio[i].name = "avatarSelection";
            arregloDeRadio[i].value = `${i}`;
            avatar[i] = `./img/avatar${i}.webp?v=1`;
            arregloDeLabelRadio[i].style.backgroundImage = `url(.${avatar[i]})`;
            divRadio.append(arregloDeRadio[i], arregloDeLabelRadio[i]);
        }

        arregloDeRadio.forEach(radio => {
            radio.addEventListener('change', function () {
                if (radio.checked) {
                    btnRadio.classList.add("active");
                } else {
                    btnRadio.classList.remove("active");
                }
            });
        });

        const textoBienvenida = document.createElement("h2");

        const imagenAvatar = document.createElement("img");


        ojo.addEventListener('click', function () {
            let tipo = contraseña.type === "password" ? "text" : "password";
            contraseña.setAttribute("type", tipo);
            ojo.src = tipo === "password" ? `${imagesToPreload[1]}` : `${imagesToPreload[2]}`;
        });

        formRegistro1.addEventListener('submit', function (event) {
            event.preventDefault();
            let nombreTrue = false;
            let emailTrue = false;
            let confirmarTrue = false;
            let contraseñaTrue = false;
            if (nombre.value == "") {
                textoErrorName.textContent = "*Este campo no puede estar vacio";
                textoErrorName.classList.add("active");
                nombre.classList.add("error");
                nombreTrue = false;
            } else if (!expresiones.nombres.test(nombre.value)) {
                textoErrorName.textContent = "*Estas usando caracteres invalidos para este campo";
                textoErrorName.classList.add("active");
                nombre.classList.add("error");
                nombreTrue = false;
            } else {
                textoErrorName.textContent = "";
                textoErrorName.classList.remove("active");
                nombre.classList.remove("error");
                nombreTrue = true;
            }

            let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

            if (email.value == "") {
                textoErrorEmail.textContent = "*Este campo no puede estar vacio";
                textoErrorEmail.classList.add("active");
                email.classList.add("error");
                emailTrue = false;
            } else if (!expresiones.correo.test(email.value)) {
                textoErrorEmail.textContent = '*Se requiere un correo con "@" y "."';
                textoErrorEmail.classList.add("active");
                email.classList.add("error");
                emailTrue = false;
            } else if (usuarios.some(mail => mail.email === email.value)) {
                textoErrorEmail.textContent = '*Este Email ya esta registrado';
                textoErrorEmail.classList.add("active");
                email.classList.add("error");
            } else {
                textoErrorEmail.textContent = "";
                textoErrorEmail.classList.remove("active");
                email.classList.remove("error");
                emailTrue = true;
            }

            if (contraseña.value == "") {
                textoErrorContraseña.textContent = "*Este campo no puede estar vacio";
                textoErrorContraseña.classList.add("active");
                contraseña.classList.add("error");
                contraseñaTrue = false;
            } else if (!expresiones.password.test(contraseña.value)) {
                textoErrorContraseña.textContent = 'Tiene que tener entre 4 y 12 caracteres';
                textoErrorContraseña.classList.add("active");
                contraseña.classList.add("error");
                contraseñaTrue = false;
            } else {
                textoErrorContraseña.textContent = "";
                textoErrorContraseña.classList.remove("active");
                contraseña.classList.remove("error");
                contraseñaTrue = true;
            }

            if (contraseña.value != "" && confirmarContraseña.value != "" && confirmarContraseña.value === contraseña.value) {
                textoErrorConfirmarContraseña.textContent = "";
                textoErrorConfirmarContraseña.classList.remove("active");
                confirmarContraseña.classList.remove("error");
                confirmarTrue = true;
            } else {
                textoErrorConfirmarContraseña.textContent = "*Confirmación invalida";
                textoErrorConfirmarContraseña.classList.add("active");
                confirmarContraseña.classList.add("error");
                confirmarTrue = false;
            }

            if (contraseñaTrue && emailTrue && nombreTrue && confirmarTrue) {
                presuntoNombre = nombre.value;
                presuntaContraseña = contraseña.value;
                presuntoEmail = email.value;
                irAForm2();

            }

        });

        function irAForm2() {
            formRegistro1.remove();
            back.remove();
            titulo.innerHTML = "!Queremos saber más de vos!<br>¿Qué te interesa?"



            arregloDeCheckbox.forEach(checkbox => {
                checkbox.addEventListener('change', function () {
                    let count = 0;

                    arregloDeCheckbox.forEach(box => {
                        if (box.checked) {
                            count++;
                        }
                    });

                    switch (true) {
                        case (count >= 3):
                            btnCheckbox.textContent = "Hecho";
                            break;
                        case (count == 2):
                            btnCheckbox.textContent = "Elegí 1 más";
                            break;
                        case (count == 1):
                            btnCheckbox.textContent = "Elegí 2 más";
                            break;
                        case (count == 0):
                            btnCheckbox.textContent = "Elegí 3 más";
                            break;
                        default:
                            break;
                    }

                    count >= 3 ? btnCheckbox.classList.add("active") : btnCheckbox.classList.remove("active");
                });
            });

            formRegistro2.append(divCheckbox, btnCheckbox);
            contenedor.appendChild(formRegistro2);
            contenedor.appendChild(back2);

            back2.addEventListener("click", () => {
                contenedor.innerHTML = "";
                presuntoNombre = "";
                presuntaContraseña = "";
                presuntoEmail = "";
                titulo.textContent = "Registrate para saber de BoxedCat";
                contenedor.append(logo, titulo, cerrar, back, formRegistro1);
            });

            formRegistro2.addEventListener('submit', function (event) {
                event.preventDefault();
                if (btnCheckbox.classList.value == "btn-checkbox active") {

                    irAForm3();
                }
            });
        }


        function irAForm3() {
            formRegistro2.remove();
            back2.remove();
            titulo.innerHTML = "¡Último paso!<br>Selecciona tu avatar"
            formRegistro3.append(divRadio, btnRadio);
            contenedor.appendChild(formRegistro3);
            contenedor.appendChild(back3);

            back3.addEventListener("click", () => {
                contenedor.innerHTML = "";
                titulo.innerHTML = "!Queremos saber más de vos!<br>¿Qué te interesa?";
                contenedor.append(logo, titulo, cerrar, back2, formRegistro2);
            });

            formRegistro3.addEventListener('submit', function (event) {
                event.preventDefault();
                let selectedValue = null;
                arregloDeRadio.forEach(radio => {
                    if (radio.checked) {
                        selectedValue = radio.value;
                    }
                });

                if (selectedValue !== null) {
                    presuntaImagen = avatar[selectedValue];
                    contenedor.innerHTML = "";
                    fnBienvenida();
                } else {

                }
            });
        }

        function fnBienvenida() {
            
            let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            usuarios.push({usuario: presuntoNombre, contraseña: presuntaContraseña, email: presuntoEmail, avatar: presuntaImagen});
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            localStorage.setItem('usuarioLogueado', JSON.stringify(usuarios[usuarios.length - 1]));
            
            
            textoBienvenida.textContent = `¡Bienvenid@ a BoxedCat ${presuntoNombre}!`
            contenedor.append(logo, textoBienvenida, imagenAvatar, cerrar);

            imagenAvatar.src = presuntaImagen;
            imagenAvatar.className = "imagen-bienvenida";
            verificarLogin();
        }

        back.addEventListener("click", (event) => {
            document.getElementById("login-popup").innerHTML = "";
            mostrarFormularioLogin(event);
        });
    }
};



function cerrarForm() {
    divLogin.firstChild.remove();
    document.body.style.overflowY = "visible";
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
let posicionGuardada = null;

function expandirTotal() {
    expando = !expando;
    const nota = document.querySelector('.contenido-nota');
    const gradiente = nota.lastElementChild;

    const verMas = document.querySelector('.ver-mas');
    const verMasImg = verMas.firstElementChild;
    const verMasText = verMas.lastElementChild;

    if (expando) {
        function ajustarMaxHeight() {
            if (expando) {
                const height = nota.scrollHeight + 'px'; 
                nota.style.maxHeight = height;
                console.log('Height ajustado a:', height);
            }
        }
        gradiente.style.visibility = "hidden";
        verMasImg.classList.add("active");
        verMasText.textContent = "Ver menos";
        posicionGuardada = window.scrollY;
        const interval = setInterval(() => {
            ajustarMaxHeight();
        }, 100); 
        document.querySelector('.ver-mas').addEventListener('click', () => {
            if (!expando) {
                clearInterval(interval);
            }
        });
        
       
    } else {
        console.log(posicionGuardada)
        nota.classList.remove("active");
        nota.style.maxHeight = '600px';
        gradiente.style.visibility = "visible";
        verMasImg.classList.remove('active');
        verMasText.textContent = "Ver más";
        window.scrollTo({
            top: posicionGuardada,
            behavior: 'smooth' // 'smooth' para un desplazamiento animado
        });
        posicionGuardada = null;
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
        imagenPerfil.src = imagenUsuario;
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
        posicionGuardada = window.scrollY;
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
        window.scrollTo({
            top: posicionGuardada,
            behavior: 'smooth' // 'smooth' para un desplazamiento animado
        });
        posicionGuardada = null;
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

function cerrarVentanaMobile(){
    const ventanaMobile = document.getElementById("ventana-mobile");
    ventanaMobile.remove();
    document.body.style.overflowY = "visible";
    document.documentElement.style.overflow = "visible";
}