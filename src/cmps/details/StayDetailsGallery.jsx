import showAllPhotos from '../../assets/img/common/show-all-photos.svg'

export const StayDetailsGallery = ({ imgUrls, onOpenModal }) => {
  
  return (
    <div onClick={(e) => onOpenModal(e, 'gallery-modal')} data-modal="gallery-modal" className="stay-details-img">
      <div className="main-photo">
        <img src={`${imgUrls[0]}`} alt="main-img" />
      </div>
      <div className="small-photos">
        <img src={`${imgUrls[1]}`} alt="small-img-1" />
        <img
          src={`${imgUrls[2]}`}
          alt="small-img-2"
          style={{ borderTopRightRadius: '0.5em' }}
        />
        <img src={`${imgUrls[3]}`} alt="small-img-3" />
        <img
          src={`${imgUrls[4]}`}
          alt="small-img-4"
          style={{ borderBottomRightRadius: '0.5em' }}
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