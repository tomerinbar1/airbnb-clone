import Modal from 'react-modal'

export const GalleryModal = ({ imgUrls, modalIsOpen, onCloseModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      className="Modal"
      overlayClassName="Overlay"
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
