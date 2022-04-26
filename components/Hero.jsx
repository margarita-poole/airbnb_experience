import photoGrid from '../Images/photo-grid.png'

const Hero = () => {
  return (
    <div className='heroSection'>
      <div className='heroPictureGrid'>
        <img src={photoGrid} alt='grid' />
      </div>
      <section className='heroInfoSection'>
        <h1 className='heroInfoHeader'>Online Experiences</h1>
        <p className='heroInfoText'>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    </div>
  )
}

export default Hero
