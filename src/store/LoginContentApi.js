import { createContext, useState, useContext } from 'react';

const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

const LoginContextProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const value = { loggedIn, setLoggedIn };
    return (
        <LoginContext.Provider value={value}>
            {props.children}
        </LoginContext.Provider>
    );
}

export default LoginContextProvider;