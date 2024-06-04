/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({shoe, onDelete}) => {
    const { _id, title, brand, price, description, image_url } = shoe;
    const handleDelete = async() =>{
        await fetch(`http://localhost:5000/shoes/${_id}`,{
            method:"DELETE",
        }).then(res=> res.json()).then(data =>{
            console.log(data)
            onDelete(_id)
            toast.success('Delete sucess')
            
        })
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image_url} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <h3 className="text-xl font-semibold">{brand}</h3>
            <h3 className="text-xl font-semibold">{price}</h3>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <button className="btn bg-indigo-500 text-white">
                <Link to={`/products/${_id}`}>See details</Link>
              </button>
              <button className="btn bg-green-600 text-white">
                <Link to={`edit/${_id}`}>Edit</Link>
              </button>
             
              <button className="btn btn-accent" onClick={()=>document.getElementById('my_modal_5').showModal()}>Delete</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box pr-auto pl-auto">
  <button onClick={handleDelete} className="btn bg-green-500 text-white block m-auto">
               Confirm Delete
              </button>
    <p className="text-center text-2xl mt-4">Are you Deleted</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">No</button>
      </form>
    </div>
  </div>
</dialog>
            </div>
          </div>
        </div>
      );
    };

export default SingleProductCardDashboard;