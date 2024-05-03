import { useContext, useEffect, useState } from 'react';
import { addPokemonToTeam, getPokemonTeam, removePokemonFromTeam } from '../../api/hasura';
import './styles.sass'
import { AppContext } from '../../context/AppContext';

const Card = ({pokemon}: any) => {
  const [isHover, setIsHover] = useState(false)
  const [action, setAction] = useState('Adicionar')
  const [teamCount, setTeamCount] = useState(0)
  const {teamChanged, setTeamChanged} = useContext(AppContext)

  useEffect(() => {
    setTeamChanged(false)
    console.log(teamChanged)
    const updateTeamCount = async () => {
      const count = await getPokemonTeam()
      console.log(count.length)
      setTeamCount(count.length)
    }
    updateTeamCount()
  }, [teamChanged])

  useEffect(() => {
    if (pokemon.id) {
      setAction('Remover')
    }
  }, [pokemon.id])

  function toTitleCase(str: string) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  async function handlePokemonTeam(pkm: IPokemon) {
    if (action == 'Adicionar' && teamCount < 5) {
      await addPokemonToTeam(pkm);
      alert("Pokémon adicionado ao time!")
      setTeamChanged(true)
    } else if (action == 'Remover' && teamCount >= 0) {
      await removePokemonFromTeam(pkm);
      alert("Pokémon removido do time!")
      setTeamChanged(true)
    } else {
      alert('Limite do time atingido: 5 de 5')
    }
  }

  return (
    <li onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} className='card__pokemon'>
      <p>{toTitleCase(pokemon.name)}</p>
      <img src={pokemon.image} alt='pokemon' />
      <div className='types'> 
      {pokemon.types &&
        pokemon.types
        .map((type: any) => (
          type.name!= null &&
          <span key={type.name} className={type.name.toLowerCase()}>{toTitleCase(type.name)}</span>
        ))}

</div>

      {isHover && 
      <div className='remove__card'>
          <button onClick={() => handlePokemonTeam(pokemon)}>
            {action}
          </button>
      </div>
      }
    </li>
  )
}

export default Card