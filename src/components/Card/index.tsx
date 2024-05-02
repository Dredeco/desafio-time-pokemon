import { useEffect, useState } from 'react';
import './styles.sass'
import { getPokemonData } from '../../api/pokemons';

const Card = ({pokemon}: any) => {
  const [pokemonDetails, setPokemonDetails] = useState(Object)
  
  useEffect(() => {
    const getDetails = async () => {
      const {types, sprites} = await getPokemonData(pokemon)
      const pokemonUpdated = {
        name: pokemon.name,
        url: pokemon.url,
        image: sprites.front_default,
        types: [
          {name: types[0].type.name},
          {name: types[1].type.name},
        ]
      }
      console.log(pokemonUpdated)
      setPokemonDetails(pokemonUpdated)
    }
    getDetails();
  }, [])

  function toTitleCase(str: string) {
      return str.replace(
          /\w\S*/g,
          function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
      );
  }

  return (
    <li className='card__pokemon'>
      <p>{toTitleCase(pokemon.name)}</p>
      <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png' alt='pokemon' />
      <div className='types'>  
          <span>Eletric</span>
          <span>Eletric</span>
      </div>

      {/* <div className='remove__card'>
          <button>Remover</button>
      </div> */}
    </li>
  )
}

export default Card