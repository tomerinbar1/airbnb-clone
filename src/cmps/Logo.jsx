import { useNavigate } from 'react-router-dom'

export function Logo() {
    const navigate = useNavigate()



    function onLogoClick() {
        navigate(`/`)
    }

    return (
        <div className="main-logo flex" onClick={onLogoClick}>
            <span className="main-logo-container" >
            </span>
            <small className="logo-txt">airist</small>
        </div>
    )
}