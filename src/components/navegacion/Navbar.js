import React from "react";
import navegacionCSS from "./navegacion.css";
import {useAuth0} from '@auth0/auth0-react';
import Logo from "../logo/Logo";
import Login from "../login/Login";
import Profile from "../profile/Profile";
import Carrito from "../carrito/Carrito";

const Navbar = () => {
  const {isAuthenticated} = useAuth0();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navegacion">
      <div className="container-fluid ">
        <Logo></Logo>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {isAuthenticated ? <>
              <Profile className="nav-link"></Profile>
            </> : <Login></Login>
            }
            <Carrito/>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;