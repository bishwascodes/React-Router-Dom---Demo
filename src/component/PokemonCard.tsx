type pokemonCardProps = {
    name: string
    image: string
    base_experience: number
    height: number
    weight: number
}

function PokemonCard({ name, image, base_experience, height, weight }: pokemonCardProps) {
    return (
        <div className="card text-center mx-auto" style={{ maxWidth: "18rem" }}>
            <img src={image} alt={name} className="card-img-top" />
            <div className="card-body">
                <h2 className="card-title text-capitalize">{name}</h2>
                <p className="card-text mb-1">Base Experience: {base_experience}</p>
                <p className="card-text mb-1">Height: {height}</p>
                <p className="card-text">Weight: {weight}</p>
            </div>
        </div>
    )
}

export default PokemonCard;
