interface IPokemon {
    id?: number;
    name: string;
    url: string;
    image?: string;
    types?: [
        {name: string},
        {name?: string},
    ]
}