window.onload = () => {

    document.querySelector("#toggleTheme").onclick = () => {
        document.querySelector("body").classList.toggle("dark");
    }

    function crearNoticia(urlImg, titulo, contenido) {
        const template = `
        <div class="item">
            <img src="${urlImg}">
            <h2>${titulo}</h2>
            <p>${contenido}</p>
        </div>
    `;
        document.querySelector(".contenedor").innerHTML += template;
    }

    fetch("./felinos.json")
        .then(respuesta => respuesta.json())
        .then(felinos => {
            felinos.forEach(animal => {
                crearNoticia(animal.urlImg, animal.titulo, animal.contenido);
            })
        });
}