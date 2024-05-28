import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";

const GoogleLogin = () => {
    const { googleLogin} = useAuth()

    const handlegoogle =()=>{
        googleLogin()
    }
    return (
        <button onClick={handlegoogle} className="btn w-full">
      <div className="flex items-center gap-2">
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </button>
    );
};

export default GoogleLogin;


// tasdeewtlujli elllllllluopyeasin araaaaaaaaaaaaaaafa