import React, {createContext, useState} from 'react';



interface TypeUser {
    name: string,
    email: string,
    password: string
}

interface TypeHooks {
    user:  null
    setUser: React.Dispatch<React.SetStateAction<null>>,
    register: (user: TypeUser, callback: () => void) => void;
    logOut: (callback: () => void) => void;
    category: string,
    setCategory: React.Dispatch<React.SetStateAction<string>>
}


export const CustomContext = createContext<TypeHooks | null>(null)
const Context = ({children}: any) => {

    const [user, setUser] = useState(null);
    const [category, setCategory] = useState('')


    const register = (user : any, callback: Function) => {
        setUser(user)
        callback()
    }

    const logOut = (callback: () => void) => {
        setUser(null)
        callback()
    }

    const value = {
        user,
        register,
        logOut,
        setUser,
        category,
        setCategory
    }
    return (
        <CustomContext.Provider value={value}>
            {children}
        </CustomContext.Provider>
    );
};

export default Context;