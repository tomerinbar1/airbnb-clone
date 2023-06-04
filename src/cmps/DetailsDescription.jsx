import showMore from '../assets/img/common/showMore.svg'

export const DetailsDescription = ({ summary }) => {
  return (
    <div className="description-details">
      <p>{summary}</p>
      <a href="">Show more &gt;</a>
    </div>
  )
}
