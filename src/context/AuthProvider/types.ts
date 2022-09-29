export interface IUser {
    email?: string | Object;
    type?: string | Object;
    token?: string;
}

export interface IContext extends IUser {
    authenticate: (email : string, password : string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}