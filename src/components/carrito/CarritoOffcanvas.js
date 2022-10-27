import React from "react";
import carritoCSS from './carrito.css';
import CarritoLista from "./CarritoListado.js";

const CarritoOffcanvas = () => {

    return (

        <div class="offcanvas carrito__offcanvas" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header carrito__offcanvas__header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Carrito de Compras</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
               <CarritoLista/>
            </div>
            <div class="offcanvas-header carrito__offcanvas__footer">
                <table className="carrito__offcanvas__footer__tabla">
                    <tbody>
                        <tr>
                            <td className="carrito__offcanvas__footer__tabla__column1">Sub total</td>
                            <td className="carrito__offcanvas__footer__tabla__column2">5000</td>
                        </tr>
                        <tr>
                            <td className="carrito__offcanvas__footer__tabla__column1">Envio</td>
                            <td className="carrito__offcanvas__footer__tabla__column2">0</td>
                        </tr>
                        <tr>
                            <td className="carrito__offcanvas__footer__tabla__column1">total</td>
                            <td className="carrito__offcanvas__footer__tabla__column2">5000</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button className="btn btn-warning carrito__offcanvas__footer__boton" type="button">Realizar Pedido</button>
                    <a className="carrito__offcanvas__footer__limpiar" type="button">
                        <img className="carrito__offcanvas__footer__limpiar__icono" src="./img/iconos/eliminar.svg" alt="icono de eliminar" />
                        <p className="carrito__offcanvas__footer__limpiar__texto">Limpiar Carrito</p>
                    </a>
                </div>
            </div>
        </div>

    )
};

export default CarritoOffcanvas;