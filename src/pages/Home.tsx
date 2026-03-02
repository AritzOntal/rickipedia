import { useEffect, useState } from "react";
import { getCharacters } from "../data/api";
import type { Character } from "../types/rickandmorty";
import "../App.css";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { SearchBar } from "../components/SearchBar";
import { CharacterCard } from "../components/CharacterCard";

import { FilterSelect } from "../components/FilterSelect";
import { SortSelect } from "../components/SortSelect";

export const Home = () => {

    //MEMORIA DEL COMPONENTE (ESTADOS)
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    //ACTUALIZACIÓN DE LA BÚSQUEDA
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    //ACTUALIZACIÓN DE LA PÁGINA
    const [page, setPage] = useState<number>(1);

    // LO QUE PASA AL INICIAR LA PÁGINA 
    useEffect(() => {
        //FUNCIÓN AUXILIAR PARA PEDIR DATOS
        const loadData = async () => {
            try {
                setLoading(true); // ACTIVAMOS "CARGANDO"
                const data = await getCharacters(page); // LLAMAMOS A LA FUNCION
                setCharacters(data.results);//RESULTADOS GUARDADOS
            } catch (err) {
                setError("Error al cargar los personajes.");
            } finally {
                setLoading(false);
            }
        };

        loadData();

    }, [page]); // LOS CORCHETES LE DICEN QUE LO EJECUTE SOLO UNA VEZ AL ENTRAR

    let processedCharacters = characters.filter((char) => {
        const matchName = char.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchStatus = statusFilter === "" ? true : char.status === statusFilter;
        return matchName && matchStatus;
    });

    // Ordenamos el resultado alfabéticamente
    if (sortOrder === "asc") {
        processedCharacters.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        processedCharacters.sort((a, b) => b.name.localeCompare(a.name));
    }

    const handleNextPage = () => setPage(page + 1);
    const handlePrevPage = () => setPage(page - 1);



    //RENDERIZADO

    // Si está cargando
    if (loading) return <Loader message="🌀 Cargando datos..." />;

    // Si hay error
if (error) return <ErrorMessage error={error} />;

    // Si todo va bien, mostramos la lista
    return (
        <div>
            <h1 className="home-title">Personajes de Rick y Morty</h1>

            {/* Aquí metemos el buscador y los dos selectores */}
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
                <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                <FilterSelect statusFilter={statusFilter} onFilterChange={setStatusFilter} />
                <SortSelect sortOrder={sortOrder} onSortChange={setSortOrder} />
            </div>

            {/* Mostramos en qué página estamos y la retralimentacion inmediata */}
            <div style={{ textAlign: 'center', color: '#999', marginBottom: '20px' }}>
                <p>Página {page}</p>
                <p style={{ fontWeight: 'bold', color: '#646cff' }}>
                    Se han encontrado {processedCharacters.length} personajes
                </p>
            </div>

            {/* MENSAJE SI NO HAY RESULTADOS */}
            {processedCharacters.length === 0 && (
                <p className="no-results">No se han encontrado personajes con esos filtros.</p>
            )}

            <div className="characters-grid">
    {processedCharacters.map((char) => (
        // Aquí estamos usando el molde y pasándole los datos en la prop 'character'
        <CharacterCard key={char.id} character={char} />
    ))}
</div>
            <div className="pagination-container">
                <button 
                    onClick={handlePrevPage} 
                    disabled={page === 1} // Desactivar si estamos en la 1
                    className="pagination-btn"
                >
                    ⬅ Anterior
                </button>

                <button 
                    onClick={handleNextPage}
                    className="pagination-btn"
                >
                    Siguiente ➡
                </button>
            </div>
        </div>
    );
};