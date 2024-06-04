import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Registetion from "../pages/Registetion";
import PrivetRoutes from "./privet/PrivetRoutes";
import ProductDetails from "../pages/ProductDetails";
import AllProducts from "../pages/AllProducts";
import AddProducts from "../pages/AddProducts";
import EditProducts from "../pages/EditProducts";
import EditProfile from "../pages/EditProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:5000/shoes')
      },
      {
        path: "/products/:id",
        element: <ProductDetails/>,
        loader: ({params}) => fetch(`http://localhost:5000/shoes/${params.id}`)
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registetion/>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "home",
       element: <PrivetRoutes><Dashboard /></PrivetRoutes>,
       
       },
      { path: "profile/edit/:id",
       element: <PrivetRoutes><EditProfile/></PrivetRoutes>,
       loader:({params}) => fetch(`http://localhost:5000/user/get/${params.id}`)
       },
      { path: "all-products",
       element: <PrivetRoutes><AllProducts/></PrivetRoutes>
       },
      { path: "add-products",
       element: <PrivetRoutes><AddProducts/></PrivetRoutes>
       },
      { path: "all-products/edit/:id",
       element: <PrivetRoutes><EditProducts/></PrivetRoutes>,
       loader:({params}) => fetch(`http://localhost:5000/shoes/${params.id}`)
       },
       
      ],
  },
]);
