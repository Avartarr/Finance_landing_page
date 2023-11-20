import React, {useContext} from 'react'
import { ProductContext } from '../contexts/ProductContext'
import { BsFillTrashFill } from "react-icons/bs";

const ProductDetails = ({product, index}) => {
   const {removeProduct} = useContext(ProductContext); 
  return (
  
    <tr>
      <td className='px-14'>{index + 1}</td>
      <td className='px-14'>{product.item}</td>
      <td className='px-14'>{product.quantity}</td>
      <td className='px-14' onClick={() => removeProduct(product.id)}><BsFillTrashFill /></td>
    </tr>

  )
}

export default ProductDetails