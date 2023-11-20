import React from 'react'
import { Link, useParams} from 'react-router-dom';
import product from '../Data';


const Myproduct = () => {
    const {productId} = useParams();
    const products = product.find((product) => product.id === productId);
    const {image, name}=products;
  return (
    <section>
        <img src={image} alt={name} />
    <h5>{name}</h5>
    <Link to='/product'>back to products</Link>
    </section>
  )
}

export default Myproduct