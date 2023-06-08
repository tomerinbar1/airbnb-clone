export const DetailsSleepInfo = ({ imgUrl, onOpenModal }) => {
    
  return(
        <section onClick={() => onOpenModal()} className="sleep-details">
        <h1>Where you'll sleep</h1>
        <img src={imgUrl} alt="bed-img" />
        <h2>Bedroom</h2>
        <p>1 queen bed</p>
      </section>
    )
}