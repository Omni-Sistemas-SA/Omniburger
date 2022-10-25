import React from "react";
import footer from "./footer.css"
import Logo from "../logo/Logo";
const Footer = () => {

    return (
        <footer className="footer">
            <Logo></Logo>
            <div className="footer__contacto">
                <span className="footer__contacto_texto">Contáctenos:</span>
                <img className="footer__contacto__imagen" src="./img/iconos/Whatsapp.svg" alt="Whatsapp" />
                <img className="footer__contacto__imagen" src="./img/iconos/Facebook.svg" alt="Facebook" />
                <img className="footer__contacto__imagen" src="./img/iconos/Twitter.svg" alt="Twitter" />
                <img className="footer__contacto__imagen" src="./img/iconos/instagram.svg" alt="Instagram" />
            </div>

        </footer>
    )
};
export default Footer;