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
import Woman from "../pages/Woman";
import Cosmatic from "../pages/Cosmatic";
import SearchProduct from "../pages/SearchProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('https://assinment-server-ten.vercel.app/shoes')
      },
      {
        path: "/products/:id",
        element: <ProductDetails/>,
        loader: ({params}) => fetch(`https://assinment-server-ten.vercel.app/shoes/${params.id}`)
      },
      {
        path: "/woman",
        element: <Woman/>,
      },
      {
        path: "/cosmatic",
        element: <Cosmatic/>,
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
       loader:({params}) => fetch(`https://assinment-server-ten.vercel.app/user/get/${params.id}`)
       },
      { path: "all-products",
       element: <PrivetRoutes><AllProducts/></PrivetRoutes>
       },
      { path: "woman/all-products",
       element: <PrivetRoutes><AllProducts/></PrivetRoutes>
       },
      { path: "add-products",
       element: <PrivetRoutes><AddProducts/></PrivetRoutes>
       },
      { path: "search",
       element: <PrivetRoutes><SearchProduct/></PrivetRoutes>
       },
      { path: "all-products/edit/:id",
       element: <PrivetRoutes><EditProducts/></PrivetRoutes>,
       loader:({params}) => fetch(`https://assinment-server-ten.vercel.app/shoes/${params.id}`)
       },
      { path: "search/edit/:id",
       element: <PrivetRoutes><EditProducts/></PrivetRoutes>,
       loader:({params}) => fetch(`https://assinment-server-ten.vercel.app/shoes/${params.id}`)
       },
       
      ],
  },
]);
