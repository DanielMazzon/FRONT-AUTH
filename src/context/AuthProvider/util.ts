import { Api } from "../../services/api";
import { IUser } from "./types";

// Insere o usuário no localstorage como "u"
export function setUserLocalStorage (user : IUser | null) {
    localStorage.setItem('u', JSON.stringify(user))
}

// Retorna o usuário armazenado no localstorage
export function getUserLocalStorage () {
    const json = localStorage.getItem('u');

    // Verifica se ele existe
    if (!json) {
        return null;
    }
    const user = JSON.parse(json);

    return user ?? null;
}

// Realiza a autenticação do usuário
export async function LoginRequest (email : string, password : string) {
    try {
        const request = await Api.post('login/', {
            login: email,
            pass: password
        })
        return request.data;
    } catch (error) {
        return null;
    }
}