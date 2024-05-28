import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const shoe = useLoaderData();

    const { brand, description, image_url, price, title } = shoe;
  
    return (
      <>
       <h1 className="text-center text-4xl m-12">{title}</h1>
       <div className="flex justify-center items-center py-8">
       
         <div className="card w-96 bg-base-100 shadow-xl ">
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {brand}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <h2 className="card-title">
          ${price}
           
          </h2>
          <p>{description}</p>
         
        </div>
      </div>
       </div></>
    );
  };

export default ProductDetails;