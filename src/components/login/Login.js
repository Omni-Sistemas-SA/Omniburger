import React from "react";
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <a className="nav-link" href="" onClick={()=>loginWithRedirect()}>
            <img className='navegacion__icono' src=".\img\iconos\perfil.png" />
            <span>Inicie sesión</span>
        </a>
    )
};
export default Login;