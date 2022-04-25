import './App.css'
import Card from './components/Card/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import photo from './Assets/katie-zaferes.png'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Card
        img={photo}
        rating='5.0'
        reviewCount='6'
        country='USA'
        title='Life lessons with Katie Zaferes'
        price='136'
      />
    </div>
  )
}

export default App
