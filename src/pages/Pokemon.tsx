import { useParams } from "react-router-dom";

export default function Pokemon() {
  const { id } = useParams();
  return <h1>Pokemon {id ?? "List"}</h1>;
}