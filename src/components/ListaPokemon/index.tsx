import { useContext, useEffect, useState } from 'react'
import Cards from '../Cards'
import { getPokemons, pokemonTypes } from '../../api/pokemons'
import { AppContext } from '../../context/AppContext'
import './styles.sass'

const ListaPokemon = () => {
  const [pokemons, setPokemons] = useState([])
  const [limite, setLimite] = useState(12)
  const {nameFilter, setNameFilter, typeFilter, setTypeFilter} = useContext(AppContext)


  useEffect(() => {
    const getData = async () => {
      const data: any = await getPokemons()

      if(nameFilter != '' && typeFilter != 'Tipos') {
        let filtered = await data.filter((pokemon: IPokemon) =>
          pokemon.name.includes(nameFilter.toLowerCase()))
        filtered = filtered.filter((pokemon: IPokemon) =>
          pokemon.types?.some((type: any) => type.name?.toLowerCase() === typeFilter.toLowerCase()))
        setPokemons(filtered)
      } else if(nameFilter != '') {
        const filtered = await data.filter((pokemon: IPokemon) =>
          pokemon.name.includes(nameFilter))
        setPokemons(filtered)
      } else if (typeFilter != "Tipos") {
        const filtered = await data.filter((pokemon: IPokemon) =>
          pokemon.types?.[0].name.includes(typeFilter.toLowerCase()) || pokemon.types?.[1].name?.includes(typeFilter.toLowerCase()))
        setPokemons(filtered)
      } else {
        setPokemons(data.slice(0, limite))
      }
    }
    getData();
  }, [limite, nameFilter, typeFilter])

  const handleLoadMore = () => {
    setLimite(limite + 6)
}

  return (
    <div className='lista__pokemons'>
      <h1>Pokemons</h1>
      <div className='filtros'>
        <input 
          type='text' 
          placeholder='Filtrar por nome'
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <select onChange={(e) => setTypeFilter(e.target.value)}>
          {pokemonTypes &&
            pokemonTypes.map((type: any) => (
              <option
                value={type.name}
                key={type.name}
              >{type.name}</option>
            ))
          }
        </select>
      </div>
      <Cards pokemons={pokemons} />
      {
        nameFilter == '' && typeFilter == "Tipos" &&
        <button onClick={handleLoadMore}>Ver mais</button>

      }
    </div>
  )
}

export default ListaPokemon