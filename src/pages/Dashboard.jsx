import useAuth from "../Hooks/useAuth";


const Dashboard = () => {
    const data= useAuth()
    const {email,photoURL}=data.user
    return (
        <div className="card w-96 bg-green-400 shadow-xl m-auto">
  <figure><img src={photoURL} alt="/" /></figure>
  <div className="card-body">
    <h2 className=" text-center text-2xl">{email}</h2>
    
  </div>
</div>
    );
};

export default Dashboard;