import { useParams } from "react-router-dom";
// Import type
import type { pokemon } from '../type/pokemon.tsx'
import PokemonCard from "../component/PokemonCard.tsx";
import { useEffect, useState } from "react";


export default function Pokemon() {
    const { id } = useParams();
    const [currentPokemon, setCurrentPokemon] = useState<pokemon | null>(null);

    useEffect(() => {
        async function fetchPokemon(){
            try{
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setCurrentPokemon(data);
                } else{
                    throw new Error("Failed to fetch Pokemon data");
                }
            } catch (error) {
                console.error("Error fetching Pokemon data:", error);
            }
            
        }
        fetchPokemon();
    }, [id])
    return (
    <>

        <h1>Pokemon {id ?? "List"}</h1>

        {currentPokemon && <PokemonCard name={currentPokemon.name} image={currentPokemon.sprites.front_default} base_experience={currentPokemon.base_experience} height={currentPokemon.height} weight={currentPokemon.weight} />}
    </>
    )
}