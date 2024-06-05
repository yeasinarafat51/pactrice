import React from 'react';
import Cover from '../components/Cover';
import cos1 from '../assets/cos1.png'
import cos2 from '../assets/cos2.png'
import cos3 from '../assets/cos3.png'
import cos4 from '../assets/cos4.png'
import cos5 from '../assets/cos5.png'
import Disply from '../components/home/Disply';
import { Link } from 'react-router-dom';
import Cataswip from '../components/home/Cataswip';

const Cosmatic = () => {
    return (
        <div>
            <Cover img={cos1} title="Harlan"/>
            <Disply  img1={cos4} img2={cos5} title="Cosmatic Model"  btn={<Link to={"dashboard/all-products"}>All Cosmatic</Link>}/>
            <Cover img={cos2} title="Nexus"/>
            <Disply  img1={cos1} img2={cos3} title="Cosmatic Model"  btn={<Link to={"dashboard/all-products"}>All Cosmatic</Link>}/>
            {/* <Cataswip/> */}
            <Cover img={cos3} title="Lokius"/>
        </div>
    );
};

export default Cosmatic;