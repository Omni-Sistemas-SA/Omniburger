import React from "react";
import CarritoCantidad from "./CarritoCantidad";

const CarritoLista = () => {
    let productos = JSON.parse(localStorage.getItem("lista"));
    if(productos == null){
        productos = []
    }
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    {/* <th>Cantidad</th> */}
                    <th>Precio</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {productos.map(

                    (producto, index) => {
                        console.table(producto)
                        return (
                            producto != null &&
                            <tr>
                                {/* <td>{index}</td> */}
                                <td>
                                    <div className="carrito__offcanvas__item">
                                        <img src={producto.imagen} width='80px' />
                                        <span>{producto.titulo}</span>
                                    </div>
                                </td>
                                {/* <td>
                                    <CarritoCantidad
                                        cantidad={producto.cantidad}
                                    />
                                </td> */}
                                <td>
                                    <span>{producto.precio}</span>
                                </td>
                                <td>
                                    <button className="carrito__offcanvas__eliminar">
                                        <img className="carrito__offcanvas__eliminar__icono" src="./img/iconos/eliminar-osc.svg" />
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                )}
            </tbody>
        </table>
    )
};

const listaProductos = () => {
    let lista = []
    for (let i = 0; i < 9; i++) {
        lista.push(JSON.parse(localStorage.getItem(i)));
    };
    console.log(lista);
    return lista;
}
export default CarritoLista;