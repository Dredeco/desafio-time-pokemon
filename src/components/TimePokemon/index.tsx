import { useContext, useEffect, useState } from 'react'
import Cards from '../Cards'
import './styles.sass'
import { getPokemonTeam } from '../../api/hasura'
import { AppContext } from '../../context/AppContext'

const TimePokemon = () => {
  const [team, setTeam] = useState([])
  const { teamChanged } = useContext(AppContext)

  useEffect(() => {
    const getData = async () => {    
        const getTeam = await getPokemonTeam()
        setTeam([])
        setTeam(getTeam)
    }
    getData()
  }, [teamChanged])

  return (
    <div className='time__pokemons'>
      <h1>PokeTeam</h1>
      <Cards pokemons={team} />
    </div>
  )
}

export default TimePokemon