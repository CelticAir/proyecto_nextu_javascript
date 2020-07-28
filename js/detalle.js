$(document).ready(function() {
    let stringSearh = location.search
    let id = (stringSearh.match(/[\d][\d]*/)[0]) //Busca coincidencias en el search string que tengan digitos númericos

    $.ajax({
        url: "info.json",
        success: response => {
            //Se almacenan los eventos
            eventos = response.eventos;

            //Se retorna el el evento correspondiente a lo indicado en el search string
            let detalle = []
            detalle = eventos.find(element => {
                return (id == element.id)
            })

            //Se añaden los elementos del evento al HTML
            detalleHTML = `
            <div class="eventBox">
            <a>
            <h2 class="evento-title">${detalle.nombre}</h2>
            <p class="evento-date">${detalle.fecha}</p>
            <p class="evento-lugar">Lugar: ${detalle.lugar}</p>
            <p class="evento-description">${detalle.descripcion}</p>
            <p class="evento-costo">Costo: ${detalle.precio}</p>
            <p class="evento-invitados">Invitados: ${detalle.invitados}</p>
            </a>
            </div>`

            document.getElementById("detalle").innerHTML = detalleHTML;
        }
    });
});