interface IPokemon {
    name: string;
    url: string;
    image?: string;
    types?: [
        {name: string},
        {name?: string},
    ]
}