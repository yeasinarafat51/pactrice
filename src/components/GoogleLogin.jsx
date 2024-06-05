import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";

const GoogleLogin = () => {
    const { googleLogin} = useAuth()

    const handlegoogle =()=>{
        googleLogin().then((data) => {
          if (data?.user?.email) {
            const userInfo = {
              email: data?.user?.email,
              name: data?.user?.displayName,
            };
            fetch("https://assinment-server-ten.vercel.appuser", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data)
                // localStorage.setItem("token", data?.token);
              });
          }
        });
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