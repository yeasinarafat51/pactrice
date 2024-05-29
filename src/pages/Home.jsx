import { useLoaderData } from "react-router-dom";
import Accordian from "../components/home/Accordian";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import Disply from "../components/home/Disply";

const Home = () => {
  const data = useLoaderData()
  return (
    <div>
      <Banner />
      <Products data={data}/>
      <Disply/>
      <Accordian />
    </div>
  );
};

export default Home;
