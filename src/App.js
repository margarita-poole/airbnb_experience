import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import data from './data'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='body'>
        <Hero />
        <div>
          {data.map((item) => {
            return <Card key={item.id} item={item} />
          })}
        </div>
      </div>
    </div>
  )
}

export default App
