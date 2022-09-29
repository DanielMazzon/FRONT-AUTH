import { useContext } from "react"
import { AuthContext } from "."

// Retorna uma representação do contexto atual
export const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
}