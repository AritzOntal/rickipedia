import { Link } from "react-router-dom";
import type { Character } from "../types/rickandmorty";

export const CharacterCard = ({ character }: { character: Character }) => {
    return (
        <Link to={`/character/${character.id}`} className="card-link">
            <div className="character-card">
                <img src={character.image} alt={character.name} className="character-image" />
                <h3>{character.name}</h3>
                <p>{character.species} - {character.status}</p>
            </div>
        </Link>
    );
};