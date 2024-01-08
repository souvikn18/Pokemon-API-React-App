import React from 'react'
function Card({pokemonName, pokemonImage}) {
    const newName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
    return(
        <div>
            <h2>{newName}</h2>
            <img src={pokemonImage}/>
        </div>
    )
}
export default Card