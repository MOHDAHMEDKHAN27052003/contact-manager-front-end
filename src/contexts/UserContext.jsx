import { createContext, useState } from "react";

export const UserContext = createContext(); 

export function UserProvider({children}) {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
  
    const updateUser = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    return (
        <>
            <UserContext value={{user, updateUser}}>
                {children}
            </UserContext>
        </>
    );
};