const apiUrl = `https://pokeapi.co/api/v2/pokemon`;

export const getPokemons = async () => {
    try {
        const response = await fetch(`${apiUrl}?limit=151`);

        if (!response.ok) {
          throw new Error(`Erro ao buscar detalhes do Pokémon: ${response.statusText}`);
        }

        const { results } = await response.json();

        const PokeData = await Promise.all(results.map((item: IPokemon) => getPokemonData(item)))
        const formattedPokemons = PokeData.map((pokemon: any) => {
          const { name, sprites, types } = pokemon;
          return {
            name: name,
            url: `https://pokeapi.co/api/v2/pokemon/${name}`,
            image: sprites.front_default,
            types: [
              { name: types[0].type.name },
              { name: types[1]?.type.name || null },
            ],
          };
        });
        return formattedPokemons

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


export const pokemonTypes = [
    {
      name: "Tipos"
    },
    {
      name: "Normal"
    },
    {
      name: "Fighting"
    },
    {
      name: "Flying"
    },
    {
      name: "Poison"
    },
    {
      name: "Ground"
    },
    {
      name: "Rock"
    },
    {
      name: "Bug"
    },
    {
      name: "Ghost"
    },
    {
      name: "Steel"
    },
    {
      name: "Fire"
    },
    {
      name: "Water"
    },
    {
      name: "Grass"
    },
    {
      name: "Electric"
    },
    {
      name: "Psychic"
    },
    {
      name: "Ice"
    },
    {
      name: "Dragon"
    },
    {
      name: "Dark"
    },
    {
      name: "Fairy"
    }
  ]