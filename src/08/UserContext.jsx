import { createContext, useState, useContext } from "react";

const UserContext = createContext({
    user: null,
    signIn: () => {
        // Mozna dodac taki blad, zeby poinformowac innych developerow o tym, ze zapomnieli wyrenderowac provider 
        // Ten blad sie wywola wtedy kiedy ktos uzyje funkcji signIn(), a provider nie bedzie wyrenderowany
        // throw new Error('Function not implemented!')
    },
    signOut: () => {}
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = login => {
        setUser( { name: login } )
    }

    const signOut = () => {
        setUser( null );
    }

    return (
        <UserContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const ctx = useContext(UserContext);

    return ctx;
}
