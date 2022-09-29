import { createContext, useEffect, useState } from 'react';
import { IAuthProvider, IContext, IUser } from './types';
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from './util';

// Cria uma variável que irá disponibilizar todo o contexto (atributos e métodos)
export const AuthContext = createContext<IContext> ({} as IContext)

// Cria uma variável para receber o filho que será envolvido pelo contexto acima
export const AuthProvider = ({ children } : IAuthProvider) => {
    // Define a variável usuário como contendo os atributos da interface IUser
    const [user, setUser] = useState<IUser | null>()
    
    // Realiza verificação inicial e atualiza o valor do user, caso tenha um
    useEffect(() => {
        const user = getUserLocalStorage();

        if (user) {
            const userConvert = {email: user.email, token: user.token, type: user.type};
            
            setUser(userConvert);
        }
    }, [])

    // Implementa a função authenticate da interface
    async function authenticate (email : string, password : string) {
        const response = await LoginRequest(email, password);

        const payload = {email: response[0].login, token: 'y', type: response[0].id_user_type};

        setUser(payload);
        setUserLocalStorage(payload);
    }
    
    // Implementa a função logout da interface
    function logout () {
        setUser(null);
        setUserLocalStorage(null);
    }

    return (
        // Retorna o filho (aplicação) envolvido pelo contexto
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}