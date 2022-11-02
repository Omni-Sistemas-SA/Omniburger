import React, { useState } from "react";
import carritoCSS from './carrito.css';
import CarritoLista from "./CarritoListado.js";
import { useAuth0 } from "@auth0/auth0-react";

const CarritoOffcanvas = () => {
    let subTotal = 0;
    let total = 0;
    let envio = 0;
    const listaProd = JSON.parse(localStorage.getItem("lista"));
    if (listaProd !== null && listaProd.length !== 0) {
        listaProd.map(
            (producto) => {
                subTotal += parseFloat(producto.precio);
            }
        )
        envio = 100;
        total = subTotal + envio;
    }
    const {isAuthenticated, user} = useAuth0();
    const [compraRealizada, setCompraRealizada] = useState({
        idCompra: "",
        usuario: "",
        detalles: "",
        total: ""
    })
    const realizarCompra = ()=>{
        console.log(isAuthenticated);
        console.log(user);
        if(isAuthenticated){
            let datosCompra= JSON.parse(localStorage.getItem("compras"))
            if(datosCompra==null){
               datosCompra=[];
            }
            if(listaProd.length !== 0){
                setCompraRealizada({
                    idCompra: datosCompra.length,
                    usuario: user.name,
                    detalles: listaProd,
                    total: total
                })
                console.log(compraRealizada);
                datosCompra.push(compraRealizada);
                localStorage.setItem("compras", JSON.stringify(datosCompra));
                // limpiarCarrito();
            }
        }
    }
    const limpiarCarrito = ()=>{
        
        localStorage.setItem("lista",JSON.stringify([]));
        document.location.reload();
    }
    return (

        <div class="offcanvas carrito__offcanvas" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header carrito__offcanvas__header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Carrito de Compras</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <CarritoLista />
            </div>
            <div class="offcanvas-header carrito__offcanvas__footer">
                <table className="carrito__offcanvas__footer__tabla">
                    <tbody>
                        <tr>
                            <td className="carrito__offcanvas__footer__tabla__column1">Sub total</td>
                            <td className="carrito__offcanvas__footer__tabla__column2">{subTotal}</td>
                        </tr>
                        <tr>
                            <td className="carrito__offcanvas__footer__tabla__column1">Envio</td>
                            <td className="carrito__offcanvas__footer__tabla__column2">{envio}</td>
                        </tr>
                        <tr>
                            <td className="carrito__offcanvas__footer__tabla__column1">total</td>
                            <td className="carrito__offcanvas__footer__tabla__column2">{total}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button className="btn btn-warning carrito__offcanvas__footer__boton" type="button" onClick={
                        ()=>realizarCompra()
                    }>Realizar Pedido</button>
                    <a className="carrito__offcanvas__footer__limpiar" type="button">
                        <img className="carrito__offcanvas__footer__limpiar__icono" src="./img/iconos/eliminar.svg" alt="icono de eliminar" />
                        <p className="carrito__offcanvas__footer__limpiar__texto" onClick={()=>limpiarCarrito()}>Limpiar Carrito</p>
                    </a>
                </div>
            </div>
        </div>

    )
};

export default CarritoOffcanvas;