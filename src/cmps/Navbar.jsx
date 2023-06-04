import { Login } from "./Login";
import { FiGlobe } from 'react-icons/fi';



export function Navbar() {




    return (
        <div className="main-nav">
            <div className="add-own-homw-btn">Airist your home</div>
            <button className="language-btn"><FiGlobe /></button>
            <Login/>
        </div>
    )
}