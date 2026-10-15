import { Link } from "react-router-dom"
type PokemonLinkCardProps = {
    pokemonName: string;
};

export default function PokemonLinkCard({ pokemonName}: PokemonLinkCardProps) {
    return (
        <Link className="nav-link" to={`/pokemon/${pokemonName}`} > {pokemonName}</Link >
    )
}