import { useNavigate, useParams } from "react-router-dom";
// Import type
import type { pokemon } from '../type/pokemon.tsx'
import PokemonCard from "../component/PokemonCard.tsx";
import { useEffect, useState } from "react";
import PokemonLinkCard from "../component/PokemonLinkCard.tsx";



export default function Pokemon() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [currentPokemon, setCurrentPokemon] = useState<pokemon | null>(null);
    const [pokemonNameList, setPokemonNameList] = useState<string[]>([]);
    const [loadedPokemonId, setLoadedPokemonId] = useState<string | null>(null);

    const isLoading = Boolean(id) && loadedPokemonId !== id;

    useEffect(() => {
        if (!id) {
            setCurrentPokemon(null);
            return;
        }

        const pokemonId = id;

        async function fetchPokemon() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

                if (!response.ok) {
                    // The API answered, but with an error 
                    navigate('/error', {
                        replace: true,
                        state: {
                            code: response.status,
                            message: response.status === 404
                                ? `No Pokemon called "${pokemonId}" was found.`
                                : "The Pokemon API returned an error.",
                        },
                    });
                    return;
                }

                const data = await response.json();
                setCurrentPokemon(data);
                setLoadedPokemonId(pokemonId);
            } catch (error) {
                // The request itself failed (no internet, API down, etc.)
                console.error("Error fetching Pokemon data:", error);
                navigate('/error', {
                    replace: true,
                    state: { code: 500, message: "Couldn't reach the Pokemon API. Check your connection." },
                });
            }

        }
        fetchPokemon();
    }, [id]);


    useEffect(() => {
        // Skip if viewing a single Pokemon, or if the list is already loaded
        if (id || pokemonNameList.length > 0) return;

        async function fetchPokemonNames() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);

                if (!response.ok) {
                    // The API answered, but with an error
                    navigate('/error', {
                        replace: true,
                        state: { code: response.status, message: "Couldn't load the list of Pokemon." },
                    });
                    return;
                }

                const data = await response.json();
                const names: string[] = data.results.map(
                    (pokemon: { name: string }) => pokemon.name
                )

                setPokemonNameList(names);
            } catch (error) {
                // The request itself failed 
                console.error("Error fetching Pokemon names:", error);
                navigate('/error', {
                    replace: true,
                    state: { code: 500, message: "Couldn't reach the Pokemon API. Check your connection." },
                });
            }
        }

        fetchPokemonNames();
    }, [id, pokemonNameList.length])


    return (
        <>

            <h1 className="mb-4 text-capitalize">{isLoading ? "Loading Pokemon..." : `Pokemon ${id ?? "List"}`}</h1>

            {!isLoading && currentPokemon && <PokemonCard name={currentPokemon.name} image={currentPokemon.sprites.front_default} base_experience={currentPokemon.base_experience} height={currentPokemon.height} weight={currentPokemon.weight} />}

            {!isLoading && !currentPokemon && (
                (
                    <ol className="list-group list-group-numbered">{
                        pokemonNameList.map((name) => {
                            return (
                                <PokemonLinkCard key={name} pokemonName={name} />
                            )
                        })}
                    </ol>
                )
            )}
        </>
    )
}