import photo from '../../Assets/katie-zaferes.png'
import star from '../../Assets/Star.png'

const Card = () => {
  return (
    <div className='card'>
      <img src={photo} alt='exp' className='cardImage' />
      <div>
        <img src={star} alt='star' className='star' />
        <span>5.0</span>
        <span className='gray'>(6) • </span>
        <span className='gray'>USA</span>
      </div>

      <p>Title goes here</p>
      <p>
        <span className='bold'>From $136</span> / person
      </p>
    </div>
  )
}

export default Card
