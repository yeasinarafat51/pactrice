import React, { useEffect, useState } from 'react';

import SingleProductCardDashboard from './SingleProductCardDashboard';
// import SearchProduct from './SearchProduct';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/shoes/')
        .then(res =>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleDleteProduct = (id) =>{
        setProducts(products.filter(product => product._id !== id))
    }
    return (
        <div>
              <h1 className="text-5xl font-bold text-center">All Produts</h1>
              {/* <SearchProduct onDelete={handleDleteProduct}/> */}
              <div className='my-16 flex flex-wrap gap-4'>
                {
                    products.map(shoe=>(
                        <SingleProductCardDashboard key={shoe.id} shoe={shoe} onDelete={handleDleteProduct}/>
                    ))
                }

              </div>
        </div>
    );
};

export default AllProducts;