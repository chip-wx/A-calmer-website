import { useState, createContext, useEffect } from "react";


export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('loged')
    }

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        savedUser ? setUser(JSON.parse(savedUser)) : setUser(null);
        setLoading(false);
    }, [])

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )

}