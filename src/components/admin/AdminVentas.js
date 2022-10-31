import React from "react";

const AdminVentas = () => {
    let listaVentas = JSON.parse(localStorage.getItem("compras")); 
    if(localStorage.getItem("compras")==null){
        localStorage.setItem("compras", JSON.stringify([]))
    } else {
         listaVentas = JSON.parse(localStorage.getItem("compras"));
    }

    return (
        <table className="table" >
            <thead>
                <tr>
                    <th>id</th>
                    <th>Usuario</th>
                    <th>Detalles</th>
                    <th>Total compra</th>
                </tr>
            </thead>
            <tbody>
                {
                    listaVentas.map(
                        (venta) => {
                            return (
                                <tr>
                                    <td>{venta.idCompra}</td>
                                    <td>{venta.usuario}</td>
                                    <td>

                                    </td>
                                    <td>{venta.total}</td>
                                </tr>
                            )
                        }
                    )
                }
            </tbody>
        </table>
    )
};

export default AdminVentas;
