import '../css/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <nav className="nav-container flex">
            <ul className="nav-list flex">
                <li className="nav-item">
                    <Link className='nav-link' to="/" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to="/teams" >Teams</Link>
                </li>
            </ul>
        </nav>
    )
}