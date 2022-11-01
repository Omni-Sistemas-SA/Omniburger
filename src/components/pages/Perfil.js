import React from 'react';
import CarritoOffcanvas from '../carrito/CarritoOffcanvas';
import Admin from '../admin/Admin';
import AddProducto from '../addProducto/AddProducto';
import AdminVentas from '../admin/AdminVentas';

const Perfil = () => {

  return (
    <div>
      <h2 className="pages__titulo">Perfil de Usuario</h2>
      <div className='container border border-secondary rounded-5'>
        <h3 className='p-5'>Administrar Productos</h3>
        <Admin></Admin>
        <AddProducto />
      </div>
      <div className='container border border-secondary rounded-5 mt-5 mb-5'>
        <h3 className='p-5'>Administrar Ventas</h3>
        <AdminVentas />
      </div>
      <CarritoOffcanvas />
    </div>
  )
};
export default Perfil;
