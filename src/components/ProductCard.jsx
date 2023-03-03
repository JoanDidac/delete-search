import React from 'react'

export default function ProductCard({ product, handleDelete }) {


  const { name, price, image, _id } = product;

  const handleProductDelete = () => {
    handleDelete(_id);
  }
  

  return (
    <div className="product_card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>Price: {price}$</p>
      <button className="btn_delete" onClick= {handleProductDelete} >Delete</button> {/*la funcion handleDelete se pasa como prop del componente ProductCard y handleProductDelete modifica la llamada a la funcion en lugar de llamarse a si misma. cuando el botton se clica se invoca handleProductDelete que a su vez invoca handleDelete con el id como parametro.*/}
    </div>
  )
}
