import React from 'react'
import { NavLink } from 'react-router-dom'

import './TheNavigation.scss';
interface Props {

}

const TheNavigation = (props: Props) => {
    return (
        <div className="container  navigation-container mw-100 pt-1 pb-2">
            <div className="row col-md-11">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/sign-up">Sign Up</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TheNavigation
