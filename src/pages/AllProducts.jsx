import React, { useEffect, useState } from 'react';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/shoes/')
        .then(res =>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
              <h1 className="text-5xl font-bold text-center">All Produts</h1>
        </div>
    );
};

export default AllProducts;