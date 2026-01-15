import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCharacterById } from "../data/api";
import { getLocation } from "../data/api";
import type { Character } from "../types/rickandmorty";
import "../App.css";

export const Detail = () => {
    // useParams para pillar el id del Personaje
    const { id } = useParams();
    const [character, setCharacter] = useState<Character | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [dimension, setDimension] = useState<String | null>(null);

    // USAMOS useEffect para poder envolver una función asíncrona (no puede devolver una promesa)
    //useEffect sirve para ejecutar algo despues de que React haya pintado la página

    useEffect(() => {
        const loadChar = async () => {
            if (!id) return;

            try {
                setLoading(true);
                const data = await getCharacterById(id);
                setCharacter(data);

                if (data.location.url) {
                    const locationData = await getLocation(data.location.url);
                    setDimension(locationData.dimension);
                } else {
                    setDimension("Desconocida");
                }

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        loadChar();

    }, [id]);

    //REACT CONTROLARÁ QUE SI CAMBIA EL ID SE VUELVA A EJECUTAR useEffect.

    if (loading) return <div className="loading-msg">🌀 Cargando ficha...</div>;
    if (!character) return <div className="error-msg">Personaje no encontrado</div>;

    return (
        <div className="detail-container">
            <Link to="/" className="back-button">
                ⬅ Volver al listado
            </Link>

            {/* Tarjeta de Detalle */}
            <div className="detail-card">
                <img
                    src={character.image}
                    alt={character.name}
                    className="detail-image"
                />

                <div className="detail-info">
                    <h1>{character.name}</h1>

                    <div className="detail-grid">
                        <div className="detail-item">
                            <span className="label">Estado:</span>
                            <span className="value" style={{ color: character.status === 'Alive' ? '#55cc44' : 'red' }}>
                                {character.status}
                            </span>
                        </div>

                        <div className="detail-item">
                            <span className="label">Especie:</span>
                            <span className="value">{character.species}</span>
                        </div>

                        <div className="detail-item">
                            <span className="label">Género:</span>
                            <span className="value">{character.status}</span>
                        </div>

                        <div className="detail-item">
                            <span className="label">Origen:</span>
                            <span className="value">{character.location.name}</span>
                        </div>

                        <div className="detail-item">
                            <span className="label">Dimensión:</span>
                            <span className="value" style={{ color: '#97ce4c' }}>
                                {dimension || "Desconocida"}
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

