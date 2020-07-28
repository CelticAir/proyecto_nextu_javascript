let pasados = [];

$(document).ready(function() {
    $.ajax({
        url: "info.json",
        success: response => {
            fechaActual = response.fechaActual;
            eventos = response.eventos;

            eventos.forEach(element => {
                if (element.fecha < fechaActual) {
                    pasados.push(element)
                }
            });

            pasados = pasados.sort((x, y) => {
                if (x.fecha < y.fecha) {
                    return 1
                }
                return -1
            })

            pasados.forEach((element, index) => {
                if (index < pasados.length) {
                    let cajaEvento = document.createElement("a")
                    cajaEvento.setAttribute("class", "eventBox")
                    cajaEvento.setAttribute("id", `pasados-${index+1}`)
                    cajaEvento.setAttribute("href", `detalle.html?id=${element.id}`)
                    document.getElementById("pasados").appendChild(cajaEvento)
                    document.getElementById(`pasados-${index+1}`).innerHTML = `
                              <h2 class="evento-title">${element.nombre}</h2>
                              <p class="evento-date">${element.fecha} <span> Lugar: ${element.lugar}</span></p>
                              <p class="evento-description">${element.descripcion}</p>
                              <p class="evento-invitados">Costo: ${element.precio}</p>`
                }
            });
        }
    });
});