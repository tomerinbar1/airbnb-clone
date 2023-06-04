import showAllPhotos from '../assets/img/common/show-all-photos.svg'
import { useDispatch } from 'react-redux'

export const StayDetailsGallery = ({ imgUrls }) => {
  const dispatch = useDispatch()

  const onOpenModal = () => {
    dispatch({
      type: 'SET_MODAL_TO_OPEN',
      payload: { type: 'gallery', props: imgUrls },
    })
  }

  return (
    <div onClick={() => onOpenModal()} className="stay-details-img">
      <div className="main-photo">
        <img src={`${imgUrls[0]}`} alt="main-img" />
      </div>
      <div className="small-photos">
        <img src={`${imgUrls[1]}`} alt="small-img-1" />
        <img
          src={`${imgUrls[2]}`}
          alt="small-img-2"
          style={{ borderTopRightRadius: '1em' }}
        />
        <img src={`${imgUrls[3]}`} alt="small-img-3" />
        <img
          src={`${imgUrls[4]}`}
          alt="small-img-4"
          style={{ borderBottomRightRadius: '1em' }}
        />
        <div className="all-imgs-btn">
          <button>
            <img src={showAllPhotos} alt="" />
            Show all photos
          </button>
        </div>
      </div>
    </div>
  )
}