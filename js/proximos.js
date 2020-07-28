let futuros = [];

$(document).ready(function() {
    $.ajax({
        url: "info.json",
        success: response => {
            fechaActual = response.fechaActual;
            eventos = response.eventos;

            eventos.forEach(element => {
                if (element.fecha > fechaActual) {
                    futuros.push(element)
                }
            });

            futuros = futuros.sort((x, y) => {
                if (x.fecha > y.fecha) {
                    return 1
                }
                return -1
            })

            futuros.forEach((element, index) => {
                if (index < futuros.length) {
                    let cajaEvento = document.createElement("a")
                    cajaEvento.setAttribute("class", "eventBox")
                    cajaEvento.setAttribute("id", `futuros-${index+1}`)
                    cajaEvento.setAttribute("href", `detalle.html?id=${element.id}`)
                    document.getElementById("proximos").appendChild(cajaEvento)
                    document.getElementById(`futuros-${index+1}`).innerHTML = `
                                <h2 class="evento-title">${element.nombre}</h2>
                                <p class="evento-date">${element.fecha} <span> Lugar: ${element.lugar}</span></p>
                                <p class="evento-description">${element.descripcion}</p>
                                <p class="evento-invitados">Costo: ${element.precio}</p> `
                }
            });
        }
    });
});