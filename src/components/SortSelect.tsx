interface SortSelectProps {
    sortOrder: "asc" | "desc";
    onSortChange: (value: "asc" | "desc") => void;
}

export const SortSelect = ({ sortOrder, onSortChange }: SortSelectProps) => {
    return (
        <select 
            value={sortOrder} 
            onChange={(e) => onSortChange(e.target.value as "asc" | "desc")} 
            className="sort-select"
            style={{ padding: '8px', borderRadius: '4px', backgroundColor: '#1a1a1a', color: 'white' }}
        >
            <option value="asc">A-Z (Ascendente)</option>
            <option value="desc">Z-A (Descendente)</option>
        </select>
    );
};