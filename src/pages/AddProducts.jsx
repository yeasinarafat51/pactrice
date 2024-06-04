import React from 'react';
import { toast } from 'react-toastify';

const AddProducts = () => {
    // eslint-disable-next-line no-unused-vars
    const handleSubmit = async(e)=>{
        e.preventDefault();

        const form = e.target;
        const id = form.id.value;
        const title = form.title.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const image_url = form.image_url.value;
    
        const data = { id, title, brand, price, description, image_url };
        await fetch("http://localhost:5000/shoes",{
            method: "POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify(data)

        }).then(res =>res.json()).then(data => {
            console.log(data)
            toast.success("Add Product Succesfully")
            form.reset()
        })
        
    };
    return (
        <div>
          <h1 className="text-5xl font-bold text-center">Add a Product</h1>
    
          <div className="my-16">
            <form onSubmit={handleSubmit}>
              <div className="mt-2">
                <input
                  className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                  type="text"
                  name="title"
                  placeholder="Title"
                />
              </div>
              <div className="mt-2">
                <input
                  className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                  type="text"
                  name="brand"
                  placeholder="Brand"
                />
              </div>
              <div className="mt-2">
                <input
                  className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                  type="number"
                  name="price"
                  placeholder="Price"
                />
              </div>
              <div className="mt-2">
                <input
                  className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                  type="text"
                  name="description"
                  placeholder="Description"
                />
              </div>
              <div className="mt-2">
                <input
                  className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                  type="text"
                  name="image_url"
                  placeholder="Image URL"
                />
              </div>
              <div className="mt-2">
                <input
                  className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                  type="text"
                  name="id"
                  placeholder="ID"
                />
              </div>
              <label htmlFor="my_modal_6" className="btn mt-4 w-full bg-green-500 text-white p-4">Add Product</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
  <div className="mt-2 flex justify-center items-center">
              <input
                className="btn mt-4  bg-green-500 text-white p-4"
                type="submit"
                value="Add product"
              />
            </div>
    <p className="text-center text-2xl mt-8">Are you Add Product</p>
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
    

export default AddProducts;