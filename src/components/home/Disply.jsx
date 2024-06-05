

import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types, no-unused-vars
const Disply = ({title,btn,img1,img2}) => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex flex-wrap ml-4'>
    <img src={img1} className="max-w-sm  shadow-2xl" />
    <img src={img2} className="max-w-sm  shadow-2xl" />
    </div>
    <div>
      <h1 className="text-3xl text-info font-bold pr-12">SHOWES MODEL!</h1>
      {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      <button className="btn btn-secondary mt-4">{btn}</button>
    </div>
  </div>
</div>
    );
};

export default Disply;