interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

export const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="🔍 Busca un personaje..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
};