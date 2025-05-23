import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(); 

export function UserProvider({children}) {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
  
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        }
    }, [user]);

    return (
        <>
            <UserContext value={{user, setUser}}>
                {children}
            </UserContext>
        </>
    );
};