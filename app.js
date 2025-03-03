// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// const algo = handleClick(#amigo)
const listaAmigos = []
function agregarAmigo() {
    const newAmigo = document.getElementById('amigo').value
    console.log(listaAmigos.push(newAmigo))
    
    document.getElementById('listaAmigos').innerHTML = `Lista de amigos: ${listaAmigos}`

    // if (!newAmigo) {
    //     alert("capo vacio")
    // }

    return listaAmigos
}

function sortearAmigo() {
    let sorteo = Math.floor(Math.random() * listaAmigos.length) //)
    alert(sorteo)
    const ganador = listaAmigos[sorteo]
    alert(listaAmigos, ganador)
}