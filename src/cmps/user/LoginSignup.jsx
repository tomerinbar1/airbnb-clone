import { showErrorMsg, showSuccessMsg } from '../../services/event-bus.service.js'
import { userService } from '../../services/user.service.js'
import { CredentialsForm } from './credentials-form.jsx'
import { useState } from 'react'
import {login , signup} from '../../store/user.action.js'

// const { useState } = React

export function LoginSignup({ onChangeLoginStatus, onCloseModal }) {

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        fullname: '',
      })


    function clearState() {
        setCredentials({ username: '', password: '', fullname: '', imgUrl: '' })
      }

    function onSubmit(credentials , isSignUp) {
      isSignUp ? onSignup(credentials) : onLogin(credentials)
    }

    async function onLogin( credentials) {
        console.log('onLogin')
        // if (ev) ev.preventDefault()
        if (!credentials.username) return
        try {
          const user = await login(credentials)
          showSuccessMsg(`Welcome: ${user.fullname}`)
        onCloseModal()
        } catch (err) {
          showErrorMsg('Cannot login')
        }
        clearState()
      }
    
      function onSignup(credentials) {
        // if (ev) ev.preventDefault()
        if (!credentials.username || !credentials.password || !credentials.fullname)
          return
        //   if (!credentials.imgUrl) {credentials.imgUrl='https://robohash.org/mat.png?size=50x50&set=set1'}
        signup(credentials)
        clearState()
        onCloseModal()
        console.log('signup')
      }
    

    return (
        <div className="credentials-page">
            <CredentialsForm
                onSubmit={onSubmit}
                // isSignup={isSignUp}
                // setIsSignUp={setIsSignUp}
            />
  
        </div >
    )
}
