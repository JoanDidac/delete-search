import React, { useState } from 'react';
import './App.css';
import productData from './products.json';
import ProductCart from './components/ProductCard';

const App = () => {
  const [products, setProducts] = useState(productData);

  // console.log(products);
  // console.log(handleDelete);

const handleDelete = (deletionId) => {
    const deleteProducts = (deletionId) => {
    setProducts(prevProducts => prevProducts.filter(product => product._id !== deletionId)); //handleDelete pilla el id que invoca deleteProduct con esa id. deleteProdcut coge deletionId para filtrar el producto con esa id del products array,al final setProducts es llamada con el array filtrado dentro de la funcion deleteProduct.

  }
  deleteProducts(deletionId)
}

      
  

  return (
    <>
      <h1>My shopping cart</h1>
      <div className="cart">
     
        {products.map((elem) => { return <ProductCart product={elem} key={elem._id}  src={elem.image} handleDelete= {()=> handleDelete(elem._id)}/> //map itera sobre cada product en el array para pintar ProductCard individualmente. handleDelete PROP!!! se pasa como funcion que invoce handleDelete con el elem.id como parametro!!!
        
   })
  }
  
      </div>
    </>
  );

console.log(`{props._id}`);

}
export default App;
