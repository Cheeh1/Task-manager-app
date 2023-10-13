import { Navigate } from "react-router-dom";
import { useContext, ReactNode } from "react";
import { AuthContext } from '../context/AuthContext'

// interface ProtectedProps {
//     children: ReactNode;
// }

const Protected = ({children}: { children: ReactNode}) => {
     const {user} = useContext(AuthContext)

     if(!user){
        return <Navigate to="/" replace/>
     } else {
        return children;
     }
}
export default Protected