import star from '../../Assets/Star.png'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.img} alt='cardImage' className='cardImage' />
      <div>
        <img src={star} alt='star' className='star' />
        <span>{props.rating}</span>
        <span className='gray'>({props.reviewCount}) • </span>
        <span className='gray'>{props.country}</span>
      </div>

      <p>{props.title}</p>
      <p>
        <span className='bold'>From ${props.price}</span> / person
      </p>
    </div>
  )
}

export default Card
