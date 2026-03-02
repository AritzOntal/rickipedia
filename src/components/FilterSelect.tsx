
interface FilterSelectProps {
    statusFilter: string; 
    onFilterChange: (value: string) => void; // La función para cambiar ese estado
}

export const FilterSelect = ({ statusFilter, onFilterChange }: FilterSelectProps) => {
    return (

        <select 
            value={statusFilter} 
            onChange={(e) => onFilterChange(e.target.value)} 
            className="filter-select"
            style={{ padding: '8px', borderRadius: '7px', backgroundColor: '#1a1a1a', color: 'white', maxHeight: '40px' }}
        >
            <option value="">Todos los estados</option>
            <option value="Alive">Vivos</option>
            <option value="Dead">Muertos</option>
            <option value="unknown">Desconocido</option>
        </select>
    );
};