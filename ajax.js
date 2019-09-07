console.log('Hola mundo');

//capturando el clic en btn personajes
$("#btn-personajes").click(function () {
    console.log("click");
    //consultar personajes y los muestra en html
    consultarPersonajes();

    console.log("siguiente linea");


})

function consultarPersonajes() {
    $.ajax({
            method: "GET",
            url: " https://rickandmortyapi.com/api/character/"
        })

        .done(function (response) {
            console.log("***HA LLEGADO UNA RESPUESTA***", response);
            var personajes = response.results;

            //recorrer los personajes

            for (var personaje of personajes) {
                console.log('Personaje: ', personajes);
                $(".contenedor-personajes").append(
                    renderizarPersonaje(personaje)
                )

            }


        })

        .fail(function (error) {
            console.log("HUBO UN ERROR", JSON.parse(error.responseText).error);

        })
}

//Devuelve el personaje en un div
function renderizarPersonaje(obj_personaje) {
    var personaje_html = `
        <div class="personaje">
            <img src= " ${obj_personaje.image}">
            <h3> ${obj_personaje.name}</h3>
            <button>+ Favorito</button>
        </div>
    `
    return personaje_html;
}


//capturar evento de clic boton favoritos
$("#btn-favoritos").click(function) {
    //ocultar el contenedor de personajes


    //mostrar el contenedor de favoritos

}