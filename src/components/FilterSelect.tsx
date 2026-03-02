// 1. Definimos qué 'props' necesita recibir desde Home.tsx
interface FilterSelectProps {
    statusFilter: string; // El estado actual ("Alive", "Dead", o vacío "")
    onFilterChange: (value: string) => void; // La función para cambiar ese estado
}

export const FilterSelect = ({ statusFilter, onFilterChange }: FilterSelectProps) => {
    return (
        // 2. El select muestra el valor actual y reacciona cuando el usuario elige otra opción
        <select 
            value={statusFilter} 
            onChange={(e) => onFilterChange(e.target.value)} 
            className="filter-select"
            style={{ padding: '8px', borderRadius: '4px', backgroundColor: '#1a1a1a', color: 'white' }}
        >
            <option value="">Todos los estados</option>
            <option value="Alive">Vivos</option>
            <option value="Dead">Muertos</option>
            <option value="unknown">Desconocido</option>
        </select>
    );
};