import ListaPokemon from './components/ListaPokemon'
import TimePokemon from './components/TimePokemon'
import './App.sass'

function App() {

  return (
    <main className='main'>
      <section className='container'>
        <TimePokemon />
        <ListaPokemon />
      </section>
    </main>
  )
}

export default App
