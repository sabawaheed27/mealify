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
