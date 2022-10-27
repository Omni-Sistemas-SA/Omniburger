import React from "react";
import productos from "./productos.css"
import { Link } from "react-router-dom";
const Card = (props) => {
    let key = props.id
    console.log(key)
    return (
        <div className="card productos__card">
            <img src={props.imagen} className="card-img-top productos__card__imagen" alt="Imagebn producto" />
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.descripcion}</p>
                <p className="card-text"><span className="productos__card__precio">Precio: </span>{props.precio} COP</p>
                <button type="button" className="btn btn-warning productos__card__boton" onClick={() => {
                    let lista = JSON.parse(localStorage.getItem("lista"));
                    if(lista==null){
                        lista = [];
                    }
                    lista.push(props);
                    localStorage.setItem(
                        "lista",
                        JSON.stringify(lista)
                    );
                    localStorage.setItem('numProd',lista.length)
                    // console.log(JSON.parse(localStorage.getItem("lista")));
                }}>
                    <span className='glyphicon .glyphicon-shopping-cart'></span>Añadir al Carrito
                </button>
            </div>
        </div>
    )
};


export default Card;