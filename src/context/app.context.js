import { createContext, useState } from "react";

const UserContext = createContext()

function UserProviderWrapper(props){
    let name = 'Consuela'

    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={{name, user, setUser}}>
            {props.children} 
        </UserContext.Provider>
    )
}

export {UserContext, UserProviderWrapper} 