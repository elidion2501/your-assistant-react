import { NavLink } from 'react-router-dom'

import './TheNavigation.scss';
interface Props {
    checkAuth: () => void 
}

const NavigationLogged = (props: Props) => {
    return (
        <div className="container  navigation-container mw-100 pt-1 pb-2">
            <div className="row col-md-11">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/" >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/time-track">Time Track</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/logout">Logout</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavigationLogged
