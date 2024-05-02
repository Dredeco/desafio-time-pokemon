import { useEffect, useState } from 'react'
import Cards from '../Cards'
import './styles.sass'
import { getPokemons } from '../../api/pokemons'

const ListaPokemon = () => {
  const [pokemons, setPokemons] = useState([])
  const [limite, setLimite] = useState(9)  


  useEffect(() => {
    const getData = async () => {
      const data = await getPokemons()
      setPokemons(data.slice(0, limite))
    }
    getData();
  }, [limite])

  const handleLoadMore = () => {
    setLimite(limite + 9)
}

  return (
    <div className='lista__pokemons'>
      <h1>Lista de Pokemons</h1>
      <Cards pokemons={pokemons} />
      <button onClick={handleLoadMore}>Ver mais</button>
    </div>
  )
}

export default ListaPokemon