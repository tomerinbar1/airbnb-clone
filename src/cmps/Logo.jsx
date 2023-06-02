import { useNavigate } from 'react-router-dom'


export function Logo() {
    const navigate = useNavigate()



    function onLogoClick() {
        navigate(`/`)
    }

    return (
        <div className="main-logo flex" onClick={onLogoClick}>
            <h1 className="main-logo-container" ></h1>
            <small className="logo-txt">airist</small>
        </div>
    )
}