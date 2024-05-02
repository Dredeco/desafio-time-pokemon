import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://exact-anemone-71.hasura.app/v1/graphql',
    headers: {

        'x-hasura-admin-secret': "Pb7DzEV43yN2J8eTVpNwKQ4T8dJebY9ODi19hhgbnBcC1hEyaV6oTsmuOBampXAg",
    
      },
    cache: new InMemoryCache(),
});

const INSERT_POKEMON_MUTATION = gql`
    mutation InsertPokemon($name: String!, $url: String!, $image: String!, $types: jsonb!) {
    insert_pokemon_one(object: {name: $name, url: $url, image: $image, types: $types}) {
        id
        name
        url
        image
        types
    }
    }
`;

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
        console.log(`Pokémon added to team: ${data.insert_pokemon_one.name}`);
    } catch (error) {
        console.error(`Error adding Pokémon to team: ${error}`);
    }
}