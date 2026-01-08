export interface Character {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    species: string;
    image: string;
    location: {
        name: string;
        url: string;
    };
}

export interface APIResponse {
    info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
    };

results: Character[];
}