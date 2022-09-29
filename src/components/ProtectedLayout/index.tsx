//import { useAuth } from "../../context/AuthProvider/useAuth"
import { Navigate, Outlet, useOutlet } from "react-router-dom";
import { getUserLocalStorage } from "../../context/AuthProvider/util";

// Resposável por envolver toda a aplicação e validar as rotas
export const ProtectedLayout = () => {
    
    //const auth = useAuth();
    const user = getUserLocalStorage();
    const outlet = useOutlet();
    
    // Se não tem um componente filho que será renderizado
    if (!outlet) {
        
        return <Navigate to="/home"/>
    } else {
        
        // Se não existe um usuário no localstorage
        if (!user) {
            return <Navigate to="/login"/>
        }
    
        // Se o usuário não tem email
        //if (!auth.email) {
        if (!user.email) {
            return <Navigate to="/login"/>
        }
        
        // Caso tenha filho que será renderizado, e um usuário reconhecido, pode renderizar
        return <Outlet />
    }

}