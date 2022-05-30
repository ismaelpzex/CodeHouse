const input = document.querySelector('.input')

input.addEventListener('keyup', (event) => {
    if (event.key !== 'Enter') return
    if (input.value.trim() === '') return
    getPokemon(input.value)
    pokemon(input.value)

    /*     fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
        .then((resp) => resp.json())
        .then((pokemon) => console.log(pokemon)) */
})

function getPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((resp) => resp.json())
        .then((pokemon) => console.log(pokemon))
}

////////////////

async function pokemon(pokemon) {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const bicho = await resp.json()
        console.log(resp)
        console.log(bicho)
    } catch (error) {
        console.log(error)
    }
}