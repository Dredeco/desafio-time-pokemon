const apiUrl = `https://pokeapi.co/api/v2/pokemon`;

export const getPokemons = async () => {
    try {
        const response = await fetch(`${apiUrl}?limit=151`);

        if (!response.ok) {
        throw new Error(`Erro ao buscar detalhes do Pokémon: ${response.statusText}`);
        }

        const { results } = await response.json();
        return results

    } catch (error) {
        console.error('Erro:', (error as Error).message);
        throw error;
    }
}

export const getPokemonData = async (pokemon: IPokemon) => {
    try {
        const response = await fetch(pokemon.url)
        const results = await response.json();
        return results
    } catch (error) {
        console.error('Erro:', (error as Error).message);
        throw error;
    }
}