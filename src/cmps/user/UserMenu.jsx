import { useState } from "react"
import { useSelector } from 'react-redux'

import { userService } from "../../services/user.service"
import { Link, useNavigate } from 'react-router-dom'
import { UserMenuOpen } from "./UserMenuOpen"
import React from 'react'
import { LoginModal } from "./LoginModal"
import { SignupModal } from "./SignupModal"
import { logout } from "../../store/user.action"
import { showErrorMsg, showSuccessMsg } from "../../services/event-bus.service"


export function UserMenu() {

    const user = useSelector((storeState) => storeState.userModule.user)
    // const [user, setUser] = useState(Storeuser)
    // console.log(user)
    const navigate = useNavigate()


    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const [isSignup, setIsSignup] = useState(false)
    // const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

    // function onLogout() {
    //     userService.logout()
    //         .then(() => { setUser(null) })
    // }


    async function onLogout() {
        try {
            await logout()
            navigate('/')
            showSuccessMsg(`Bye now`)
            console.log('logout')
        } catch (err) {
            showErrorMsg('Cannot logout')
        }
    }


    function onChangeLoginStatus(user) {
        // setUser(user)
    }

    function closeUserMenu() {
        setIsUserMenuOpen(prev => false)
        // console.log(isUserMenuOpen)
    }


    const onOpenModal = (event, modal, boolean) => {
        event.preventDefault()

        if (modal === 'login-modal') {
            setIsSignup(boolean)
            setIsLoginModalOpen(true)
        }
    }

    const onCloseModal = () => {
        setIsLoginModalOpen(false)
        // setIsSignupModalOpen(false)
    }

    function toggleUserMenu() {
        setIsUserMenuOpen((prev) => !prev)
    }

    // console.log(isUserMenuOpen)

    return (
        <React.Fragment>

            <div onClick={toggleUserMenu} className="login-header-btn">
                <div className="login-burger"> </div>
                <div className="login-user-pic-container"></div>
                {isUserMenuOpen && <UserMenuOpen onOpenModal={onOpenModal} user={user} onLogout={onLogout} />}
            </div>

            <section className='connection-modals'>
                <LoginModal isLoginModalOpen={isLoginModalOpen} onCloseModal={onCloseModal}
                    onChangeLoginStatus={onChangeLoginStatus} isSignup={isSignup} setIsSignup={setIsSignup} onLogout={onLogout} />
                {/* <SignupModal isSignupModalOpen={isSignupModalOpen} onCloseModal={onCloseModal} /> */}
            </section>

        </React.Fragment>
    )
}