import React from 'react';

import shoe1 from '../../assets/shoe1.jpg'
import shoe2 from '../../assets/shoe2.jpg'
import { Link } from 'react-router-dom';

const Disply = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex'>
    <img src={shoe1} className="max-w-sm  shadow-2xl" />
    <img src={shoe2} className="max-w-sm  shadow-2xl" />
    </div>
    <div>
      <h1 className="text-3xl text-info font-bold pr-12">SHOWES MODEL!</h1>
      {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      <button className="btn btn-secondary mt-4"><Link to={"dashboard/all-products"}>All Shoe</Link></button>
    </div>
  </div>
</div>
    );
};

export default Disply;