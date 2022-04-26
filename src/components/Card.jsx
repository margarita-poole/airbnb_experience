import star from '../Images/Star.png'

const Card = ({ item }) => {
  let badgeText
  if (item.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (item.location === 'Online') {
    badgeText = 'ONLINE'
  }

  return (
    <div className='cardContainer'>
      <div className='card'>
        {badgeText ? <div className='cardBadge'>{badgeText} </div> : null}
        <img src={item.coverImg} alt='cardImage' className='cardImage' />
        <div className='cardStats'>
          <img src={star} alt='star' className='star' />
          <span>{item.stats.rating}</span>
          <span className='gray'>({item.stats.reviewCount}) • </span>
          <span className='gray'>{item.location}</span>
        </div>
        <p className='cardTitle'>{item.title}</p>
        <p className='cardPrice'>
          <span className='bold'>From ${item.price}</span> / person
        </p>
      </div>
    </div>
  )
}

export default Card
