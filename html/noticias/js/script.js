function agregarNoticia(nroNoticia, noticia) {
    const contenedor = document.querySelector("#noticias");
    const templateNoticia = `
        <article id="noticia${nroNoticia}">
            <div class="topNoticia">
                <h2>${noticia.titulo}</h2>
            </div>
            <div class="bottomNoticia">
                <p id="fechaNoticia${nroNoticia}" class="fechaNoticia">
                    ${noticia.fecha}
                </p>
                <p id="txtNoticia${nroNoticia}" class="textoNoticia">
                    ${noticia.descripcion}
                </p>
            </div>
        </article>
    `
    contenedor.innerHTML += templateNoticia;
    agregarImagenFondo(nroNoticia, noticia.imgUrl);
    agregarNacionalSegunCorresponda(nroNoticia, noticia.tipoNacional);
}

function agregarImagenFondo(nroNoticia, urlImg) {
    const topNoticia = document.querySelector("#noticia" + nroNoticia + " .topNoticia");
    topNoticia.style.backgroundImage = "url(\"" + urlImg + "\")";
}

function agregarNacionalSegunCorresponda(nroNoticia, tipoNacional) {
    const topNoticia = document.querySelector("#noticia" + nroNoticia + " .topNoticia");
    const nacional = tipoNacional ? "nacional" : "internacional";
    topNoticia.innerHTML += "<div class=\"" + nacional + "\">" + nacional.toUpperCase() + "</div>";
}

function mostrarNoticias(links, claseTipoNacional) {
    links.classList.toggle("seleccionado");
    const noticiasParaOcultar = this.document.querySelectorAll(claseTipoNacional);
    noticiasParaOcultar.forEach(noticia => {
        const padre = noticia.parentElement.parentElement;
        padre.classList.toggle("ocultar");
    });
}

function cargarNoticias() {
    fetch("https://raw.githubusercontent.com/valva-ro/CTD-FrontEnd-II/main/html/noticias/noticias.json")
        .then(respuesta => respuesta.json())
        .then(noticias => {
            noticias.forEach((noticia, i) => {
                agregarNoticia(i, noticia);
            });
        });
}

window.addEventListener("load", function() {

    cargarNoticias();

    const linkNacionales = document.querySelector("#linkNoticiasNacionales");
    const linkInternacionales = document.querySelector("#linkNoticiasInternacionales");
    const cambiarTema = document.querySelector("#cambiarTema");
    
    linkNacionales.addEventListener("click", () => {
        mostrarNoticias(linkNacionales, ".internacional");
    });

    linkInternacionales.addEventListener("click", () => {
        mostrarNoticias(linkInternacionales, ".nacional");
    });

    cambiarTema.addEventListener("click", () => {
        this.document.querySelector("body").classList.toggle("dark");
    });
});