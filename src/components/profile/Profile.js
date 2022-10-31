import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import Logout from "../logout/Logout";
import profileCSS from './profile.css';
import { Link } from "react-router-dom";


const Profile = () => {
    const { isAuthenticated, user, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        isAuthenticated && (
            // <div >
            //     <img src={user.picture} alt={user.name} />
            //     <h2 className="nav-link">{user.name}</h2>
            // </div>
            <div id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {user.name}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark profile__menu">
                            <li><Link className="dropdown-item profile__item" to='/perfil'>Perfil</Link></li>
                            <li><Logout className="profile__logout"></Logout></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    )

};
export default Profile;