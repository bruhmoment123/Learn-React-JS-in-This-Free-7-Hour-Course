import React,{useState,createContext} from 'react';

//Context: creating something that can be used throughout the whole application


export const Context = createContext();

//Provider 
const UserProvider = ({children}) =>{
    const [state,setState] = useState(undefined);

    return (
        <Context.Provider value={[state,setState]}>
            {children}
        </Context.Provider>
    )
}

export default UserProvider;