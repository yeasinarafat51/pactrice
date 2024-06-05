
import Cover from '../components/Cover';
import bag1 from '../assets/bag1.png'
import bag2 from '../assets/bag2.png'
import bag3 from '../assets/bag3.png'
import bag4 from '../assets/bag4.png'
import bag5 from '../assets/bag5.png'


import Disply from '../components/home/Disply';
import Cataswip from '../components/home/Cataswip';
import { Link } from 'react-router-dom';
import Sectiontitle from '../components/Sectiontitle';

const Woman = () => {
    return (
        <div>
            <Cover img={bag1} title="Guicce"/>
            <Disply img1={bag4} img2={bag5} title="Bags Model"  btn={<Link to={"dashboard/all-products"}>All Bag</Link>}/>
            <Cover img={bag2} title="Nexus"/>
            <Sectiontitle heading="Ladies Bag"/>
            <Cataswip/>
            <Cover img={bag3} title="Cat"/>
        </div>
    );
};

export default Woman;