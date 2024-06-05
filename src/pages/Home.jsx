import { Link, useLoaderData } from "react-router-dom";
import Accordian from "../components/home/Accordian";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import Disply from "../components/home/Disply";
import Coursel from "../components/home/Coursel";
import Cataswip from "../components/home/Cataswip";
import shoe1 from '../assets/shoe1.jpg';
import shoe2 from '../assets/shoe2.jpg'
import Sectiontitle from "../components/Sectiontitle";


const Home = () => {
  const data = useLoaderData()
  return (
    <div>
      {/* <Paralax/> */}
      <Coursel/>
      <Banner />
      <Products data={data}/>
      <Disply img1={shoe1} img2={shoe2} title="Shoes Model" btn={<Link to={"dashboard/all-products"}>All shoe</Link>}/>
      <Sectiontitle heading="Ladies Bag"/>
      <Cataswip/>
      {/* <Accordian /> */}
    </div>
  );
};

export default Home;
