import React, { useState } from 'react';


const Admin = () => 
  {

    const datosProductosJson = JSON.parse(localStorage.getItem("productos"))
   
    const [datosProducto, setDatosProducto] = useState(datosProductosJson)

    const eliminarProducto = (id) => {
    const listaProductosNew = datosProducto.filter(
        (producto)=>(producto.id !== id)
      )
      setDatosProducto(listaProductosNew)
      localStorage.setItem("productos",JSON.stringify(listaProductosNew))
    }

    // const modificarProducto= (modificarProducto)=> {
    //   localStorage.setItem("productoModificar",JSON.stringify(modificarProducto))

    // }


    return (
      <div className='container'>
              
      <table className="table" >
        <thead>
          <tr>
            <th>id</th>
            <th>imagen</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        
          { 
            datosProducto.map(
              (producto,index)=>{
                return(
                  <tr className='.perfil__productos__filas'>
                    <td>{index}</td>
                    <td><img className='w-50' src={producto.urlImagen} /></td>
                    <td>{producto.nombre}</td>
                    <td  className='.perfil__productos__filas'>{producto.descripcion}</td>
                    <td>{producto.precio}</td>
                    <td><button type="button" className="btn btn-danger" onClick={
                      ()=>{
                         eliminarProducto(producto.id)
                      }
                      } >Eliminar</button>
                      {/* <button type="button" className="btn btn-warning" onClick={
                      ()=>{
                        modificarProducto(producto)
                        window.location.href="/modificar"
                      }
                      } >Modificar</button> */}
                      </td>
                  </tr>
                );
              }
            )
          }
            
        </tbody>
      </table>
      
        
      </div>

    )
  }
;


export default Admin;