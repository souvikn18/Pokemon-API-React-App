import axios from 'axios'
import React, { useState } from 'react'
import Card from './Card'
function Navbar() {
    const [search, setSearch] = useState('')
    const [pokemonImage, setPokemonImage] = useState('')
    const [pokemonName, setPokemonName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) {
            alert('Enter name or ID to search')
        }
        setSearch('')
    }

    const fetchdetails = async () => {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
        console.log(data);
        const pokemonName = data.name;
        setPokemonName(pokemonName)
        const pokemonImage = data.sprites?.other?.home?.front_default;
        setPokemonImage(pokemonImage)
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input value={search} onChange={e => setSearch(e.target.value)}/>
                <button onClick={fetchdetails}>Get</button>
            </form>
            <Card pokemonName={pokemonName} pokemonImage={pokemonImage}/>
        </>
        
    )
}
export default Navbar