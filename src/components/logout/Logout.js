import React from "react";
import logoutCSS from "./logout.css"
import {useAuth0} from '@auth0/auth0-react';

const Logout = () => {
    const { logout } = useAuth0();
    return(
        <button className="btn btn-danger logout__boton" onClick={()=>logout({returnTo: window.location.origin})}>Cerrar Sesión</button>
    )
};

export default Logout;