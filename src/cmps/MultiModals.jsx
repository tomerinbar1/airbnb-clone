import { useEffect, useState } from 'react'
import { GalleryModal } from './GalleryModal'
import { useSelector } from 'react-redux'

export const MultiModals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('')
  const [modalProps, setModalProps] = useState({})
  const modalToOpen = useSelector(state => state.modal.modalToOpen)

  const closeModal = () => {
    setIsModalOpen(false)
    setModalType('')
    setModalProps({})
  }

  useEffect(() => {
    if (modalToOpen) {
      setIsModalOpen(true)
      setModalType(modalToOpen.type)
      setModalProps(modalToOpen.props)
    }
  }, [modalToOpen])

  const renderModal = () => {
    switch (modalType) {
      case 'gallery':
        return <GalleryModal {...modalProps} />
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
