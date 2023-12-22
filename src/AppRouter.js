import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Sharedlayout from "./Layouts/Sharedlayout";
import Myproduct from "./Pages/Myproduct";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Protected from "./components/Protected";
import Register from "./Pages/Registration";
import AuthContextProvider from "./contexts/AuthContext";
import ProductList from "./Pages/ProductList";
import ProductContextProvider from "./contexts/ProductContext";
import Grip from "./Pages/Grip";
import Online from "./components/Online";
import Home from "./Pages/Home/Home";
import DashboardLayout from "./Layouts/Dashboardlayout";

const AppRouter = () => {
     const [user, setUser] = useState(null);
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="/" element={<DashboardLayout />}>
            <Route
              path="dashboard"
              element={
                <Protected user={user}>
                  <Dashboard user={user} />
                </Protected>
              } />
          </Route>
          <Route path="online" element={<Online />} />
        </Routes>
      </ProductContextProvider>
    </AuthContextProvider>
  );
};

export default AppRouter;
