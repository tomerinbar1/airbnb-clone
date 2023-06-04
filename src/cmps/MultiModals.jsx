import { useEffect, useState } from 'react'
import { GalleryModal } from './GalleryModal'

export const MultiModals = ({ type, props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('')
  const [modalProps, setModalProps] = useState({})

  const closeModal = () => {
    setIsModalOpen(false)
    setModalType('')
    setModalProps({})
  }

  useEffect(() => {
    if (type) {
      setIsModalOpen(true)
      setModalType(type)
      setModalProps(props)
    }
  }, [type, props])

  const renderModal = () => {
    switch (modalType) {
      case 'gallery':
        return <GalleryModal {...modalProps} />
      case 'reviews':
    //     return <ReviewsModal {...modalProps} />
    //   case 'order':
    //     return <OrderModal {...modalProps} />
      default:
        return null
    }
  }

  return (
    <div className="multi-modals">
      {isModalOpen && (
        <div className="modal-container" onClick={closeModal}>
          <div className="modal-content" onClick={ev => ev.stopPropagation()}>
            {renderModal()}
          </div>
        </div>
      )}
    </div>
  )
}
