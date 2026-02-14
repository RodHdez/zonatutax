import React from 'react'

const Producto1 = async ( { params }: { params: { id: string } }) => {
    const id = (await params).id 
  return <div> Detalles de Producto {id}</div>;
};

export default Producto1
