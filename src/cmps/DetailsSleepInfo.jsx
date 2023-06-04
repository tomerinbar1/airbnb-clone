export const DetailsSleepInfo = ({ imgUrl }) => {
    
  const onOpenModal = type => {
  }

  return(
        <div onClick={() => onOpenModal('gallery')} className="sleep-details">
        <h1>Where you'll sleep</h1>
        <img src={imgUrl} alt="bed-img" />
        <h2>Bedroom</h2>
        <p>1 queen bed</p>
      </div>
    )
}