// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// const algo = handleClick(#amigo)
const listaAmigos = []
function agregarAmigo() {
    const newAmigo = document.getElementById('amigo').value
    if (!newAmigo) {
        alert("capo vacio")
    }

    listaAmigos.push(newAmigo)
    
    document.getElementById('listaAmigos').innerHTML = `\n${listaAmigos.join("\n")}`

    document.getElementById('amigo').value = ''
    return listaAmigos
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear");
        return;
    }

    let sorteo = Math.floor(Math.random() * listaAmigos.length)
    const ganador = listaAmigos[sorteo]
    const elem = document.getElementById('resultado')
    elem.style.color = "green"
    elem.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `El ganador es: ${ganador}`;
    elem.appendChild(li);
}