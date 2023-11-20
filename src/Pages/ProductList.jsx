import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductDetails from "./ProductDetails";
import { toast } from 'react-toastify';

const ProductList = () => {
  const { products, addProduct } = useContext(ProductContext);
  const [item, setItem] = useState();
  const [quantity, setQuantity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(item, quantity);
    setItem("");
    setQuantity("");
  };

  const handleSuccess = () => {
    toast.success('1 Item Added!');
  };

  return (
    <div className="m-10 border-2 border-gray-200 rounded-md bg-blue-50">
      <div className="p-5">
        <h2 className="text-center font-bold text-3xl text-stone-500">
          PRODUCT LIST
        </h2>
        <hr />
        <p className="text-center pt-4 text-md font-light">
          We currently have {products.length} products in the store
        </p>
      </div>
      <hr />
      <div>
        <div className="">
          <table className="table-auto m-5 ">
            <thead>
              <tr>
                <th className="px-14">S/N</th>
                <th className="px-14">Product</th>
                <th className="px-14">Quantity</th>
                <th className="px-14">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                return <ProductDetails product={product} key={product.id} index={index} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="m-4">
        <form onSubmit={handleSubmit}>
          <label htmlFor="item">Add Product: </label>
          <input
            type="text"
            required
            placeholder="Item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="ring-4 rounded-md ml-2"
          />
          <input
            type="number"
            required
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="m-3 ring-4 rounded-md"
          />
          <input type="submit" value="Add Item" onClick={handleSuccess} className="bg-[#98fb98] rounded-md p-1 font-bold"  />
        </form>
      </div>
    </div>
  );
};

export default ProductList;
