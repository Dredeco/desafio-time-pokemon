import { useEffect, useState } from 'react';
import './styles.sass'
import { getPokemonData } from '../../api/pokemons';

const Card = ({pokemon}: any) => {
  const [pokemonDetails, setPokemonDetails] = useState(Object)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const getDetails = async () => {
      const {name, types, sprites} = await getPokemonData(pokemon)
      const pokemonUpdated: IPokemon = {
        name: name,
        url: pokemon.url,
        image: sprites.front_default,
        types: [
          {name: types[0].type.name},
          {name: types[1]?.type.name || null},
        ]
      }
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
    <li onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} className='card__pokemon'>
      <p>{toTitleCase(pokemon.name)}</p>
      <img src={pokemonDetails.image} alt='pokemon' />
      <div className='types'> 
        {pokemonDetails.types &&
          pokemonDetails.types
          .map((type: any) => type.name != null && <span key={type.name}>{type.name}</span>)}
      </div>

      {isHover && 
      <div className='remove__card'>
          <button>Remover</button>
      </div>
      }
    </li>
  )
}

export default Card