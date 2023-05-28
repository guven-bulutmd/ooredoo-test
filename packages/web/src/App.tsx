import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "common/dist/Register/main";
import StepOne from "common/dist/Register/stepOne";
import StepTwo from "common/dist/Register/stepTwo";
import StepThree from "common/dist/Register/stepThree";
import AccountCreated from "common/dist/Register/accountCreated";
import Login from "common/dist/Login/login";
import Main from "common/dist/Main/main";

type Props = {};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div style={{ maxWidth: 400 ,margin:'auto'}}>
        <Main />
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div style={{ maxWidth: 400 ,margin:'auto'}}>
        <Register />
      </div>
    ),
  },
  {
    path: "/registerStepOne",
    element: (
      <div style={{ maxWidth: 400 ,margin:'auto'}}>
        <StepOne />
      </div>
    ),
  },
  {
    path: "/registerStepTwo",
    element: (
      <div style={{ maxWidth: 400 ,margin:'auto'}}>
        <StepTwo />
      </div>
    ),
  },
  {
    path: "/registerStepThree",
    element: (
      <div style={{ maxWidth: 400 ,margin:'auto'}}>
        <StepThree />
      </div>
    ),
  },
  {
    path: "/accountCreated",
    element: (
      <div style={{ maxWidth: 400 ,margin:'auto'}}>
        <AccountCreated />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div style={{ maxWidth: 400 ,margin:'auto'}}>
        <Login />
      </div>
    ),
  },
]);
const main = (props: Props) => {
  return <RouterProvider router={router} />;
};

export default main;
