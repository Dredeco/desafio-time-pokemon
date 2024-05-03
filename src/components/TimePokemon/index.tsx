import { useEffect, useState } from 'react'
import Cards from '../Cards'
import './styles.sass'
import { getPokemonTeam } from '../../api/hasura'

const TimePokemon = () => {
  const [team, setTeam] = useState([])


  useEffect(() => {
    const getData = async () => {
      const getTeam = await getPokemonTeam()
      setTeam(getTeam)
    }
    getData();
  }, [])
  return (
    <div className='time__pokemons'>
      <h1>Monte o seu time</h1>
      <Cards pokemons={team} />
    </div>
  )
}

export default TimePokemon