import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCharacters } from "../data/api";
import type { Character } from "../types/rickandmorty";
import "../App.css";

export const Home = () => {
    //MEMORIA DEL COMPONENTE (ESTADOS)
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // LO QUE PASA AL INICIAR LA PÁGINA
    useEffect(() => {
        //FUNCIÓN AUXILIAR PARA PEDIR DATOS
        const loadData = async () => {
            try {
                setLoading(true); // ACTIVAMOS "CARGANDO"
                const data = await getCharacters(1); // LLAMAMOS A LA FUNCION
                setCharacters(data.results); //RESULTADOS GUARDADOS
            } catch (err) {
                setError("Error al cargar los personajes.");
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []); // LOS CORCHETES LE DICEN QUE LO EJECUTE SOLO UNA VEZ AL ENTRAR


    //RENDERIZADO
    
    // Si está cargando
    if (loading)
        return <div className="loading-msg">🌀 Cargando datos...</div>;

    // Si hay error
    if (error)
        return <div className="error-msg">⚠️ {error}</div>;

    // Si todo va bien, mostramos la lista
    return (
        <div>
            <h1 className="home-title">Personajes de Rick y Morty</h1>
            
            <div className="characters-grid">
                {characters.map((char) => (
                    <Link
                        to={`/character/${char.id}`}
                        key={char.id} //identifica la tarjeta (usamos el id)
                        className="card-link"
                    >
                        {/* Tarjeta Individual */}
                        <div className="character-card">
                            <img
                                src={char.image}
                                alt={char.name}
                                className="character-image"
                            />
                            <h3>{char.name}</h3>
                            <p>
                                {char.species} - {char.status}
                            </p>
                            
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};