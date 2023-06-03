import { useNavigate } from 'react-router-dom'
import logo2 from '../assets/img/icons/logo2.svg'


export function Logo() {
    const navigate = useNavigate()



    function onLogoClick() {
        navigate(`/`)
    }

    return (
        <div className="main-logo flex" onClick={onLogoClick}>
            <span className="main-logo-container" ></span>
            <small className="logo-txt">airist</small>
            <img src={logo2} alt="" />
        </div>
    )
}