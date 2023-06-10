import { useNavigate } from 'react-router-dom'

import logo from '../assets/img/icons/logo.svg'

export function Logo() {
    const navigate = useNavigate()



    function onLogoClick() {
        navigate(`/`)
    }

    return (
        <div className="main-logo flex" onClick={onLogoClick}>
            <span className="main-logo-container" >
                <img src={logo} alt="" />

            </span>
            <small className="logo-txt">airist</small>
        </div>
    )
}