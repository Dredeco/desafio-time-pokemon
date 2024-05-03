import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:8080/v1/graphql',

    cache: new InMemoryCache(),
});

const INSERT_POKEMON_MUTATION = gql`
    mutation InsertPokemon($name: String!, $url: String!, $image: String!, $types: jsonb!) {
    insert_pokemons_one(object: {name: $name, url: $url, image: $image, types: $types}) {
        id
        name
        url
        image
        types
    }
    }
`;

const GET_POKEMON_QUERY = gql`
  query GetPokemons {
    pokemons {
      id
      name
      url
      image
      types
    }
  }
`;

const DELETE_POKEMON_MUTATION = gql`
  mutation DeletePokemon($id: Int!) {
    delete_pokemons_by_pk(id: $id) {
      id
    }
  }
`;

export async function removePokemonFromTeam(pokemon: IPokemon) {
  try {
    const { data } = await client.mutate({
      mutation: DELETE_POKEMON_MUTATION,
      variables: {
        id: pokemon.id,
      },
    });
    return console.log(`Pokémon removed from team: ${data.delete_pokemons_by_pk.id}`);
  } catch (error) {
    console.error(`Error removing Pokémon from team: ${error}`);
  }
}

export async function addPokemonToTeam(pokemon: IPokemon) {
    try {
        const { data } = await client.mutate({
            mutation: INSERT_POKEMON_MUTATION,
            variables: {
                name: pokemon.name,
                url: pokemon.url,
                image: pokemon.image,
                types: pokemon.types,
            },
        });
        return console.log(`Pokémon added to team: ${data.insert_pokemon_one.name}`);
    } catch (error) {
        console.error(`Error adding Pokémon to team: ${error}`);
    }
}

export async function getPokemonTeam() {
    try {
      const { data } = await client.query({
        query: GET_POKEMON_QUERY,
        fetchPolicy: 'network-only'
      });
      return data.pokemons;
    } catch (error) {
      console.error(`Error fetching Pokémon: ${error}`);
    }
  }