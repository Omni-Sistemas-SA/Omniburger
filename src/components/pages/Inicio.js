import React from "react";
import pagesCss from './pages.css';
import Carrusel from "../carrusel/Carrusel";
import Card from "../card/Card";
import datosProductos from '../../data/productos.json'
import CarritoOffcanvas from "../carrito/CarritoOffcanvas";

const Inicio = () => {

    return (
        <div className="pages">
            <Carrusel />
            <h1 className="pages__titulo">Página de inicio</h1>
            <div className="container productos">
                {
                    datosProductos.map(
                        (producto)=>{

                            return(
                                <Card
                                    imagen={producto.urlImagen}
                                    titulo={producto.nombre}
                                    descripcion={producto.descripcion}
                                    precio={producto.precio}
                                    id={producto.id}
                                    cantidad={producto.cantidad}
                                />
                            )
                        }
                    )
                }
                

            </div>
            <CarritoOffcanvas/>
        </div>
    )
};
export default Inicio;
