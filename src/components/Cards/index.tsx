import { useEffect, useState } from 'react'
import Card from '../Card'
import './styles.sass'

const Cards = ({ pokemons }: any) => {
  return (
    <ul className='cards__pokemon'>
      {pokemons.length ? (
        pokemons.map((pk: IPokemon) => (
          <div key={pk.id || pk.name}>
            <Card pokemon={pk} />
          </div>
        ))
      ) : (
        <p>Adicione um Pokémon da lista abaixo.</p>
      )}
    </ul>
  )
}

export default Cards