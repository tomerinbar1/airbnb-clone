import Modal from 'react-modal'

export const AmenitiesModal = ({
  onCloseModal,
  amenities,
  amenitiesModalIsOpen,
}) => {
  const amenitiesList = amenities.map((amenity, idx) => {
    return (
      <li className="amenity-wrapper" key={idx}>
        <div className="main-amenity">
          <img
            src={require(`../../assets/img/amenities/${amenity}.svg`)}
            alt={amenity}
          />
          <p>{amenity}</p>
        </div>
        <hr className="custom-hr" />
      </li>
    )
  })

  return (
    <Modal
      isOpen={amenitiesModalIsOpen}
      onRequestClose={onCloseModal}
      className="Modal-amenities"
      overlayClassName="Overlay-amenities"
    >
      <div className="amenities-modal-header">
        <button onClick={() => onCloseModal()}>X</button>
        <h1>What this place offers</h1>
      </div>
      <div className="amenities-modal-body">
        <ul>{amenitiesList}</ul>
      </div>
    </Modal>
  )
}
