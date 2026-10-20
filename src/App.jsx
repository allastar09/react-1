import React from 'react'
  import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './layout';
import Home from './pages/Home';
import Service from './pages/Service';
import NotFound from './pages/NotFound';

const App = () => {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },{
        path:'/about',
        element:<Service/>
      },
      {
        path:'*',
        element:<NotFound/>
      }
    ]
  },
]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
