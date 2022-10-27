import React from "react";
import carritoCSS from "./carrito.css";

const CarritoCantidad = (props) => {
    let cantidad = props.cantidad;
    return (
        <div className="carrito__offcanvas__cantidad">
            <button className="btn btn-warning carrito__offcanvas__cantidad__boton" type="button" onClick={()=>restar(cantidad)}>-</button>
            <input className="carrito__offcanvas__cantidad__input" value={cantidad}></input>
            <button className="btn btn-warning carrito__offcanvas__cantidad__boton" type="button" onClick={(cantidad)=>{
                cantidad+=1
            }}>+</button>
        </div>
    )
};

function restar(cantidad){
    return cantidad -= 1;
}

export default CarritoCantidad;