interface Info {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

interface RickAndMortyApiResponse<Data> {
    info: Info;
    results: Data;
}

interface CharacterEntity {
    name: string;
    url: string;
}

interface Character {
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: CharacterEntity;
    location: CharacterEntity;
    image: string;
    episode: string[];
    url: string;
    created: string;
}
