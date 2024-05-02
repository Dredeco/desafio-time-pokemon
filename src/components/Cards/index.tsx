import { useEffect, useState } from 'react'
import Card from '../Card'
import './styles.sass'

const Cards = ({pokemons}: any) => {
  const [listaPokemon, setListaPokemon] = useState([]);

  useEffect(() => {
    setListaPokemon(pokemons)
  }, [pokemons])

  return (
    <ul className='cards__pokemon'>
      {listaPokemon ? (
        listaPokemon.map((pk: IPokemon) => (
          <div key={pk.name}>
            <Card pokemon={pk} />
          </div>
        ))
      ) : (
        <p>Nenhum Pokémon disponível</p>
      )}
    </ul>
  )
}

export default Cards