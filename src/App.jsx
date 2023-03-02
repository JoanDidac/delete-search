import React, { useState } from 'react';
import './App.css';
import productData from './products.json';
import ProductCart from './components/ProductCard';

const App = () => {
  const [products, setProducts] = useState(productData);

const handleDelete = () => {
    setProducts(prevProducts => prevProducts.filter(({id}) => id !== products.id))}
      
  

  return (
    <>
      <h1>My shopping cart</h1>
      <div className="cart">
     
        {products.map((elem) => { return <ProductCart product={elem} key={elem._id}  src={products.image}/>
         
   })
  }

      </div>
    </>
  );

console.log(`{props._id}`);

}
export default App;
