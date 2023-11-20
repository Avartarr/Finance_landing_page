import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import product from '../Data';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import ThemeToggle from '../components/ThemeToggle';

const Product = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const {isAuthenticated, toggleAuth} = useContext(AuthContext)
  const theme = isLightTheme ? light : dark;
  return (
    <section style={{ background: theme.ui, color: theme.syntax }}>
       <ThemeToggle />
        <h1 className='text-5xl font-bold text-center'>Our Services</h1>
        <div>
          <div onClick={toggleAuth}>{isAuthenticated ? 'Logged in' : 'Logged Out' }</div>
            {product.map((product)=>{
                return (
                <article key={product.id} className='m-5'>
                    <h5>{product.name}</h5>
                    <Link to={`/product/${product.id}`}>More Info</Link>
                    <hr />
                </article>
                );
            })}
        </div>
    </section>
  );
}

export default Product

