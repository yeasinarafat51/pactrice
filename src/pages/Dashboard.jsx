import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loadingspiner from "../components/Loadingspiner";

const Dashboard = () => {
  const { user,loading } = useAuth();
  const [userInfo, setUserInfo] = useState();
  console.log(user)

  useEffect(() => {
    fetch(`https://assinment-server-ten.vercel.appuser/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
     
  }, [user]);
  if(loading){
    return <Loadingspiner/>
   }

  console.log(userInfo);
  return (
    <div className="bg-info"> 
      <div className="flex justify-between mb-7">
        <h1 className="text-3xl ">Profile Information</h1>
        <Link
          to={`/dashboard/profile/edit/${userInfo?._id}`}
          className="btn btn-accent btn-md"
        >
          Edit Profile
        </Link>
      </div>
      <div>
        <h1>{userInfo?.name}</h1>
        <h1>{userInfo?.email}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
