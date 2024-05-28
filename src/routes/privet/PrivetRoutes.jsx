/* eslint-disable no-unused-vars */

import useAuth from '../../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loadingspiner from '../../components/Loadingspiner';

// eslint-disable-next-line react/prop-types
const PrivetRoutes = ({children}) => {
   const {user, loading} = useAuth()
   const  location = useLocation();
   if(loading){
    return <Loadingspiner/>
   }
   if(user){
    return children;
   }
   return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivetRoutes;