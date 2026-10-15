import { Link } from "react-router-dom"
type PokemonLinkCardProps = {
    pokemonName: string;
};

export default function PokemonLinkCard({ pokemonName }: PokemonLinkCardProps) {
    return (
        <li className="list-group-item">
            <Link className="text-decoration-none text-capitalize" to={`/pokemon/${pokemonName}`} > {pokemonName}</Link >
        </li>
    )
}