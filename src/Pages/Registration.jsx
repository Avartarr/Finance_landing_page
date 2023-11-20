import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

 const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
 };

 const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string().min(8).max(20)
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character' 
  )
  .required("password is required"),
  confirmPassword: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
  .required('Required'),
 })

 const onSubmit = async (values) => {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    if (!response.ok){
      const errorData = await response.json();
      console.error('Registration failed', errorData.errors);
    } else {
      console.log('Registration successful');
      navigate("/login");
    } 
    
  } catch (error){
    console.error('Error in registration', error.message);
  }
 };

  return (
    <section>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
            Register
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form className="space-y-6">
            <div className="">
              <label
                htmlFor="username"
                className="pb-2 block text-sm font-bold leading-4 text-black"
              >
                Username:
              </label>
              <Field
                type="text"
                name="username"
                id = "username"
                placeholder="username"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage name="username" component="div" />
            </div>
            <div className="">
              <label
                htmlFor="email"
                className="pb-2 block text-sm font-bold leading-4 text-black"
              >
                Email:
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <label
                htmlFor="password"
                className="pb-2 block text-sm font-bold leading-4 text-black"
              >
                Password
              </label>
              <Field
                type="password"
                name="password"
                placeholder="******"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              <ErrorMessage name="password" component="div" />
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
              <label
                htmlFor="confirmPassword"
                className="pb-2 block text-sm font-bold leading-4 text-black"
              >
                Confirm Password
              </label>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="*******"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
                 <ErrorMessage name="confirmPassword" component="div" />
            </div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#98fb98] px-3 py-1.5 text-sm font-bold leading-6 text-black shadow-sm hover:bg-[#78ba78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-8"
            >
              Sign up
            </button>
          </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Registration;
