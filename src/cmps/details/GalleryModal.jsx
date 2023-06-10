import Modal from 'react-modal'

export const GalleryModal = ({ imgUrls, galleryModalIsOpen, onCloseModal }) => {
  return (
    <Modal
      isOpen={galleryModalIsOpen}
      onRequestClose={onCloseModal}
      className="Modal-Gallery"
      overlayClassName="Overlay-Gallery"
    >
      <button onClick={() => onCloseModal()}>{"\u003C"}</button>
      <div className="imgs-container">
        {imgUrls.map((imgUrl, idx) => {
          return <img src={imgUrl} alt="" key={idx} />
        })}
      </div>
    </Modal>
  )
}
