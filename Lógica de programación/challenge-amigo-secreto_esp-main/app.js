// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para validar que el nombre no contenga números
function contieneNumeros(texto) {
    return /\d/.test(texto);
}

// Función para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }

    if (contieneNumeros(nombre)) {
        alert("Los nombres no pueden contener números.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

// Función para actualizar la lista de amigos
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay más amigos para sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos.splice(indice, 1)[0];

    document.getElementById("resultado").innerHTML = `<p>🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎁</p>`;
    actualizarLista();
}

// Función para limpiar la lista
function limpiarLista() {
    amigos = [];
    actualizarLista();
    document.getElementById("resultado").innerHTML = "";
}
