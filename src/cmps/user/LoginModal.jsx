import Modal from 'react-modal'
import { LoginSignup } from './LoginSignup'


export function LoginModal({onCloseModal, isLoginModalOpen , onChangeLoginStatus, isSignup, setIsSignup}){
  // console.log(isSignup)
return(
<Modal
    isOpen={isLoginModalOpen}
    onRequestClose={onCloseModal}
    className="login-modal-container"
    overlayClassName="Overlay-login-modal"
  >
    {/* <section className='login-signup'> */}
    <LoginSignup onChangeLoginStatus={onChangeLoginStatus}  isSignup={isSignup} setIsSignup={setIsSignup} onCloseModal={onCloseModal} />
    {/* </section> */}




</Modal>


)

}