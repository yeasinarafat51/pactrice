import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleProductCardDashboard from './SingleProductCardDashboard';

const SearchProduct = () => {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    // const [category, setCategory] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://assinment-server-ten.vercel.app/shoes', {
                params: { search }
            });
            setItems(result.data);
        };

        if (search) {
            fetchData();
        } else {
            setItems([]);
        }
    }, [search]);

    return (
        <div>
            <h1 className='text-2xl pb-4'>Search & Filters</h1>
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="py-2 px-1 bg-slate-500 mb-12 "
            />
            <ul>
                {items.map((item) => (
                    // <li key={item._id}>{item.name} - {item.category}</li>
                    <SingleProductCardDashboard key={item._id} shoe={item} />
                ))}
            </ul>
        </div>
    );
}

export default SearchProduct;