import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProducts = () => {
    const shoe = useLoaderData();

    const [title, setTitle] = useState(shoe.title);
    const [price, setPrice] = useState(shoe.price);
    const [brand, setBrand] = useState(shoe.brand);
    const [id, setId] = useState(shoe.id);
    const [description, setDescription] = useState(shoe.description);
    const [image_url, setImageURL] = useState(shoe.image_url);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const form = e.target;
    
      const title = form.title.value;
      const brand = form.brand.value;
      const price = form.price.value;
      const description = form.description.value;
      const image_url = form.image_url.value;
  
      const data = {  title, brand, price, description, image_url };
  
      await fetch(`http://localhost:5000/shoes/${shoe._id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            toast.success("Edit Successfully")
           
            
        });
        
       
    };
  
    return (
      <div>
        <h1 className="text-5xl font-bold text-center">Edit Product</h1>
  
        <div className="my-16">
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="brand"
                placeholder="Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="number"
                name="price"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="image_url"
                placeholder="Image URL"
                value={image_url}
                onChange={(e) => setImageURL(e.target.value)}
              />
            </div>
            
            {/* The button to open modal */}
<label htmlFor="my_modal_6" className="btn mt-4 w-full bg-green-500 text-white p-4">Edit Product</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
  <div className="mt-2 flex justify-center items-center">
              <input
                className="btn mt-4  bg-green-500 text-white p-4"
                type="submit"
                value="Edit product"
              />
            </div>
    <p className="text-center text-2xl mt-8">Are you Product Edit</p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn btn-success">Close</label>
    </div>
  </div>
</div>
           
          </form>
        </div>
      </div>
    );
  };

export default EditProducts;