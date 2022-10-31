import React, { useState } from 'react';

const AddProducto = () => {

    const [newProducto, setNewProducto] = useState({
        id: "",
        nombre: "",
        descripcion: "",
        precio: "",
        urlImagen: ""
    })

    const modificarId = (idp) => {
        setNewProducto({ id: idp, nombre: newProducto.nombre, descripcion: newProducto.descripcion, urlImagen: newProducto.urlImagen, precio: newProducto.precio })
    }

    const modificarNombre = (nombrep) => {
        setNewProducto({ id: newProducto.id, nombre: nombrep, descripcion: newProducto.descripcion, urlImagen: newProducto.urlImagen, precio: newProducto.precio })
    }

    const modificarDescripcion = (descripcionp) => {
        setNewProducto({ id: newProducto.id, nombre: newProducto.nombre, descripcion: descripcionp, urlImagen: newProducto.urlImagen, precio: newProducto.precio })
    }
    const modificarPrecio = (preciop) => {
        setNewProducto({ id: newProducto.id, nombre: newProducto.nombre, descripcion: newProducto.descripcion, urlImagen: newProducto.urlImagen, precio: preciop })
    }
    const modificarImagen = (imagenp) => {
        setNewProducto({ id: newProducto.id, nombre: newProducto.nombre, descripcion: newProducto.descripcion, urlImagen: imagenp, precio: newProducto.precio })
    }

    const addProducto = (e) => {
        console.log(newProducto);
        const datosProducto = JSON.parse(localStorage.getItem("productos"));
        datosProducto.push(newProducto);
        localStorage.setItem("productos", JSON.stringify(datosProducto));

        try {
            e.target.elements.idnewinput.value = "";
            e.target.elements.nombrenewinput.value = "";
            e.target.elements.precionewinput.value = "";
            e.target.elements.imagennewinput.value = "";
            e.target.elements.descripcionnewinput.value = "";
        } catch (error) {
            console.error(error)
        }

    }


    return (
          <div>
            <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Nuevo
                </a>
            </p>
            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    <div className='container'>
                        <form onSubmit={
                            (e) => {
                                addProducto(e);
                                // e.preventDefault();
                            }
                        }>
                            <div className='d-flex justify-content-around'>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">Id</span>
                                    </div>
                                    <input id='idnewinput' type="text" class="form-control" placeholder="Ingrese el ID" aria-label="Username" aria-describedby="basic-addon1" onChange={
                                        (e) => { modificarId(e.target.value) }
                                    } />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">Nombre</span>
                                    </div>
                                    <input id='nombrenewinput' type="text" class="form-control" placeholder="Ingrese el ID" aria-label="Username" aria-describedby="basic-addon1" onChange={
                                        (e) => { modificarNombre(e.target.value) }
                                    } />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">Precio</span>
                                    </div>
                                    <input id='precionewinput' type="text" class="form-control" placeholder="Ingrese el ID" aria-label="Username" aria-describedby="basic-addon1" onChange={
                                        (e) => { modificarPrecio(e.target.value) }
                                    } />
                                </div>
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon3">./public/img/productos/example.png</span>
                                </div>
                                <input id='imagennewinput' type="text" class="form-control" placeholder="ingrese la ruta de la urlImagen." aria-describedby="basic-addon3" onChange={
                                    (e) => { modificarImagen(e.target.value) }
                                } />
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">Descripción</span>
                                </div>
                                <input id='descripcionnewinput' type="text" class="form-control" placeholder="Ingrese el ID" aria-label="Username" aria-describedby="basic-addon1" onChange={
                                    (e) => { modificarDescripcion(e.target.value) }
                                } />
                            </div>
                            <button className='btn btn-warning' type='submit'>Añadir</button>
                        </form>
                    </div >
                </div>
            </div>
        </div>
    )
}


export default AddProducto;