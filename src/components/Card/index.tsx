import { useContext, useEffect, useState } from 'react';
import { addPokemonToTeam } from '../../api/hasura';
import './styles.sass'
import { AppContext } from '../../context/AppContext';

const Card = ({pokemon}: any) => {
  const [isHover, setIsHover] = useState(false)
  const {nameFilter} = useContext(AppContext)

  useEffect(() => {
  }, [nameFilter])

  function toTitleCase(str: string) {
      return str.replace(
          /\w\S*/g,
          function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
      );
  }

  function addPokemonTeam(pkm: IPokemon) {
    addPokemonToTeam(pkm);
  }

  return (
    <li onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} className='card__pokemon'>
      <p>{toTitleCase(pokemon.name)}</p>
      <img src={pokemon.image} alt='pokemon' />
      <div className='types'> 
      {pokemon.types &&
        pokemon.types
        .map((type: any) => (
          type.name != null &&
          <span key={type.name} className={type.name.toLowerCase()}>{toTitleCase(type.name)}</span>
        ))}

</div>

      {isHover && 
      <div className='remove__card'>
          <button onClick={() => addPokemonTeam(pokemon)}>
            Adicionar
          </button>
      </div>
      }
    </li>
  )
}

export default Card