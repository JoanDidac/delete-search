import React, { useState } from 'react';
import './App.css';
import productData from './products.json';
import ProductCart from './components/ProductCard';
import Search from './components/Search';


const App = () => {
  const [products, setProducts] = useState(productData);
  const [search , setSearch] = useState('');
  const handleSearch = (value) => { setSearch(value);}
  const filterProducts = products.filter((product)=> product.name.toLowerCase().includes(search.toLowerCase()))

  const handleNewProduct = (newProduct) => {
   
    newProduct._id = Math.random().toString(36).substr(2, 9);
  
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };
  

  // console.log(products);
  // console.log(handleDelete);

const handleDelete = (deletionId) => {
    const deleteProducts = (deletionId) => {
    setProducts(prevProducts => prevProducts.filter(product => product._id !== deletionId)); {/*handleDelete pilla el id que invoca deleteProduct con esa id. deleteProdcut coge deletionId para filtrar el producto con esa id del products array,al final setProducts es llamada con el array filtrado dentro de la funcion deleteProduct.*/}

  }
  deleteProducts(deletionId)
}

      
  

  return (
    <>
      <h1>My shopping cart</h1>
      <Search handleSearch={handleSearch} />
      {/* <AddProductForm handleNewProduct={handleNewProduct} /> */}
      <div className="cart">
      {filterProducts.map((elem) => {
        return (
          <ProductCart product={elem} key={elem._id}  src={elem.image} handleDelete= {()=> handleDelete(elem._id)}/> 
      )})
      }
    {/*map itera sobre cada product en el array para pintar ProductCard individualmente. handleDelete como PROP CENUTRIO!!! se pasa como funcion que invoca handleDelete con el elem.id como parametro.*/}
        
   
  
  
      </div>
    </>
  );



}
export default App;
