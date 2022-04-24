import photoGrid from '../Assets/photo-grid.png'

const Hero = () => {
  return (
    <div className='heroSection'>
      <div className='grid'>
        <img src={photoGrid} alt='grid' />
      </div>
      <section className='infoSection'>
        <h1 className='infoTitle'>Online Experiences</h1>
        <p className='infoSummary'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </section>
    </div>
  )
}

export default Hero
