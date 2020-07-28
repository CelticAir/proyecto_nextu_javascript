let pasados = [];
let futuros = [];

$(document).ready(function() {
    $.ajax({
        url: "info.json",
        success: response => {
            fechaActual = response.fechaActual; //Toma la fecha de referencia
            eventos = response.eventos; //Toma el array de eventos

            //Selecciona los eventos pasados y los guarda en array pasados
            eventos.forEach(element => {
                if (element.fecha < fechaActual) {
                    pasados.push(element)
                }
            });

            //Selecciona los eventos futuros  y los guarda en array futuros
            eventos.forEach(element => {
                if (element.fecha > fechaActual) {
                    futuros.push(element)
                }
            });

            //Ordena los eventos pasados segun la fecha. Los mas recientes primeros en el array
            pasados = pasados.sort((x, y) => {
                if (x.fecha < y.fecha) {
                    return 1
                }
                return -1
            })

            //Ordena los eventos futuros segun la fecha. Los mas recientes primeros en el array
            futuros = futuros.sort((x, y) => {
                if (x.fecha > y.fecha) {
                    return 1
                }
                return -1
            })

            //Agrega los eventos futuros en el HTML
            futuros.forEach((element, index) => {
                if (index < 2) {
                    let cajaEvento = document.createElement("a")
                    cajaEvento.setAttribute("class", "eventBox")
                    cajaEvento.setAttribute("id", `futuros-${index+1}`)
                    cajaEvento.setAttribute("href", `detalle.html?id=${element.id}`) //Se escribe el id del evemto en el search string del enlace
                    cajaEvento.setAttribute("display", `block`)
                    document.getElementById("proximos").appendChild(cajaEvento)
                    document.getElementById(`futuros-${index+1}`).innerHTML = `
                              <h2 class="evento-title">${element.nombre}</h2>
                              <p class="evento-date">${element.fecha}</p>
                              <p class="evento-description">${element.descripcion}</p>`
                }
            });

            //Agrega los eventos futuros en el HTML
            pasados.forEach((element, index) => {
                if (index < 2) {
                    let cajaEvento = document.createElement("a")
                    cajaEvento.setAttribute("class", "eventBox")
                    cajaEvento.setAttribute("id", `pasados-${index+1}`)
                    cajaEvento.setAttribute("href", `detalle.html?id=${element.id}`)
                    cajaEvento.setAttribute("display", `block`)
                    document.getElementById("pasados").appendChild(cajaEvento)
                    document.getElementById(`pasados-${index+1}`).innerHTML = `
                              <h2 class="evento-title">${element.nombre}</h2>
                              <p class="evento-date">${element.fecha}</p>
                              <p class="evento-description">${element.descripcion}</p>`
                }
            });
        }
    });
});