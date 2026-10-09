type pokemonCardProps = {
    name: string
    image: string
    base_experience: number
    height: number
    weight: number
}

function PokemonCard({ name, image, base_experience, height, weight }: pokemonCardProps) {
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>Base Experience: {base_experience}</p>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
        </div>
    )
}

export default PokemonCard;