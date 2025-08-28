"use client"

import {createContext, useState} from "react";
import { UserContextType, UserType } from "@/utils/types";


export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = (
    {children}:{children: React.ReactNode}
)=>{
    const [user, setUser] = useState<UserType | null>(null);


    return(
        <UserContext.Provider value= {{user, setUser}}>
          {children}
        </UserContext.Provider>
    )

}
//createContext: used to create a React context for global state
//useState: used to store and update local state
//useContextType: TypeScript type describing the shape of your context(user + setUser)
//UserType: TypeScript type describing a user object (name, password, favcategory, etc) 