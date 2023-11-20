import React, {createContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ProductContext = createContext();


const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([
    {item: 'Shoes', quantity: '10', id: 1},
    {item: 'Shirts', quantity: '10', id: 2},
    {item: 'Books', quantity: '10', id: 3}
    ])
    const addProduct = (item, quantity) => {
      setProducts([...products, {item, quantity, id: uuidv4()}])
    }
    const removeProduct = (id) => {
      setProducts(products.filter(product => product.id !== id));
    }
  return (
    <ProductContext.Provider value={{products, addProduct, removeProduct}}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
