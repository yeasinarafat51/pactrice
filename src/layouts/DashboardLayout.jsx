import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 bg-info min-h-screen p-12">
        <ul>
          <li className=" p-4 text font-semibold ">
            <Link to={"home"}>Dashboard</Link>
          </li>
          <li className=" p-4 text font-semibold w-full">
            <Link to={"all-products"}>All Products</Link>
          </li>
          <li className=" p-4 text font-semibold w-full">
            <Link to={"add-products"}>Add Product</Link>
          </li>
          <li className=" p-4 text font-semibold w-full">
            <Link to={"search"}>Search</Link>
          </li>
          <li className=" p-4 text font-semibold w-full">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-8 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;