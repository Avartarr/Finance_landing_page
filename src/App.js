import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Card from "./components/Card";
import Transaction from "./components/Transaction";
import Footer from "./components/Footer";

import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Error from "./components/Error";
import Sharedlayout from "./components/Sharedlayout";
import Myproduct from "./Pages/Myproduct";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Protected from "./components/Protected";
import Register from "./Pages/Registration";
import AuthContextProvider from "./contexts/AuthContext";
import ProductList from "./Pages/ProductList";
import ProductContextProvider from "./contexts/ProductContext";
import Grip from "./Pages/Grip";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dlayout from "./components/Dlayout";
import Online from "./components/Online";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <ToastContainer />
      <AuthContextProvider>
        <ProductContextProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <div className="landing">
                    <Navbar />
                    <Hero />
                    <Section />
                    <Card />
                    <Transaction />
                    <Footer />
                  </div>
                }
              />

              <Route path="/" element={<Sharedlayout />}>
                <Route path="about" element={<About />} />
                <Route path="product" element={<Product />} />
                <Route path="product/:productId" element={<Myproduct />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<Login setUser={setUser} />} />
                <Route path="register" element={<Register />} />
                <Route path="productlist" element={<ProductList />} />
                <Route path="/grip" element={<Grip />} />
              </Route>

              <Route path="*" element={<Error />} />

              <Route path="/" element={<Dlayout />}>
                <Route
                  path="dashboard"
                  element={
                    <Protected user={user}>
                      <Dashboard user={user} />
                    </Protected>
                  }
                />
              </Route>
              <Route path="online" element = {<Online />} />
            </Routes>
          </BrowserRouter>
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
