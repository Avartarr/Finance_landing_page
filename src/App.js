import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <AppRouter setUser={setUser} />
      </BrowserRouter>
    </>
  );
}

export default App;
