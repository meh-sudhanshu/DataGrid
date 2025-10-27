


import { createContext, useContext, useState } from "react";


export const ColumnHeaderContext = createContext()


export const ColumnHeaderProvider = ({children}) =>{
    const [currentActiveColumnFilterId,setCurrentActiveColumnFilterId] = useState(null)
    return(
        <ColumnHeaderContext.Provider
            value={
            {
                currentActiveColumnFilterId,
                setCurrentActiveColumnFilterId
            }
            }
        >
            {children}
        </ColumnHeaderContext.Provider>
    )
}