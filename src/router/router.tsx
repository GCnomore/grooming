import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Appointment from "../pages/Appointment/Appointment";

/*
TODO:
Need to add hashed store id as basename.

function createBrowserRouter(
  routes: RouteObject[],
  opts?: {
    basename?: string;
    window?: Window;
  }
): RemixRouter;

*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Appointment />,
    // TODO: load store data
    // loader:
  },
]);

export default router;
