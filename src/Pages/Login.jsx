import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) return;
    setUser({ username: username, password: password });
    navigate("/dashboard");
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().min(8).max(20)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character'
    )
    .required("password is required"),
   })

  return (
    <section className="">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
            Login</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik>
          <Form className='space-y-6"' validationSchema={validationSchema} onSubmit={handleSubmit} >
            <div className="form-row">
              <label
                htmlFor="username"
                className="block text-sm font-bold leading-6 text-black"
              >  
                Name
              </label>
              <div className="mt-2">
                <Field
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <ErrorMessage name="username" component="div" />
              </div>
            </div>
            <div className="form-row">
              <label
                htmlFor="password"
                className="block text-sm font-bold leading-6 text-black"
              >
                Password
              </label>
              <div className="mt-2">
                <Field
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <ErrorMessage name="password" component="div" />
              </div>
            </div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#98fb98] px-3 py-1.5 text-sm font-bold leading-6 text-black shadow-sm hover:bg-[#78ba78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-8"
            >
              Login
            </button>
          </Form>
          </Formik>
          <p className="mt-10 text-center text-sm text-gray-700">
            Don't have an account?{" "}
            
            <Link to="/register" className="font-semibold leading-6 text-[#98fb98] hover:text-[#78ba78]">Register</Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Login;
