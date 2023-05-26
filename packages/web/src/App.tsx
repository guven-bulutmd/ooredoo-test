import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "common/dist/Register/main";
import StepOne from "common/dist/Register/stepOne";
import StepTwo from "common/dist/Register/stepTwo";
import StepThree from "common/dist/Register/stepThree";

type Props = {};

const router = createBrowserRouter([
  {
    path: "/register",
    element: (
      <div style={{ maxWidth: 400 }}>
        <Register />
      </div>
    ),
  },
  {
    path: "/registerStepOne",
    element: (
      <div style={{ maxWidth: 400 }}>
        <StepOne />
      </div>
    ),
  },
  {
    path: "/registerStepTwo",
    element: (
      <div style={{ maxWidth: 400 }}>
        <StepTwo />
      </div>
    ),
  },
  {
    path: "/registerStepThree",
    element: (
      <div style={{ maxWidth: 400 }}>
        <StepThree />
      </div>
    ),
  },
]);
const main = (props: Props) => {
  return <RouterProvider router={router} />;
};

export default main;
