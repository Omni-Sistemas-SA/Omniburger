import React from "react";
import { Link } from "react-router-dom";
import logoCss  from "./logo.css";

const Logo = () => {

    return (
        <Link className="navbar-brand" to='/'>
            <img src="./img/iconos/omniburger-logo.svg" width='50' />
            <span className="logo__texto">Omniburger</span>
        </Link>
    )
}
export default Logo;