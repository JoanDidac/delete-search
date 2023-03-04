// import React, { useState } from 'react';
// // import productData from './products.json';
// import {setProducts} from '../App';

// export default function AddProductForm() {
//   const initialState = {
//     name: '',
//     image: '',
//     price: 0
//   }
//   const [newProduct, setNewProduct] = useState(initialState)

//   const handleChange = (e) => {
//     setNewProduct({
//       ...newProduct,
//       [e.target.name]: e.target.value})
//     // ITERATION 4
    
  

//   const handleSubmit = (e) => e.preventDefault();

//   const addNewProduct = {
//     name: newProduct.name,
//     image:newProduct.image,
//     price:newProduct.price,
//   };
//   props.handleNewProduct(addNewProduct);
//   setNewProduct(initialState);
//   };
//   const handleNewProduct = (newProduct) => {
//     newProduct._id = Math.random().toString(36).substr(2, 9);
//     setProducts((prevProducts) => [...prevProducts, newProduct]);
//   };
   
  

//   return (
//     <div className="form_container">
//       <form onSubmit={handleSubmit}>
//         <label>Product name</label>
//         <input type="text" name="name" value={newProduct.name} onChange={handleChange} required />
//         <label>Product image</label>
//         <input type="text" name="image" required value={newProduct.image} onChange={handleChange} />
//         <label>Product price</label>
//         <input type="number" name="price" required value={newProduct.price} onChange={handleChange} />
//         <button type="submit" className="btn">Create</button>
//       </form>
//     </div>
//   )
// }
