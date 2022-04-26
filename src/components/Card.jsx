import star from '../Images/Star.png'

const Card = (props) => {
  console.log('props', props)
  return (
    <div className='cardContainer'>
      <div className='card'>
        <img src={props.img} alt='cardImage' className='cardImage' />
        <div className='cardStats'>
          <img src={star} alt='star' className='star' />
          <span>{props.rating}</span>
          <span className='gray'>({props.reviewCount}) • </span>
          <span className='gray'>{props.location}</span>
        </div>
        <p className='cardTitle'>{props.title}</p>
        <p className='cardPrice'>
          <span className='bold'>From ${props.price}</span> / person
        </p>
      </div>
    </div>
  )
}

export default Card
