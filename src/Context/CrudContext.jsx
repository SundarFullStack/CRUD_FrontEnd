import { createContext, useContext, useState } from "react";


const CrudContext = createContext({
    CrudData: [],
    setCrudData: () => Promise,

})

export const useCrudData = ()=> useContext(CrudContext);

export default function CrudContextProvider({ children }) {
    
    let [CrudData, setCrudData] = useState([]);

    // console.log("CurdData", CrudData);
 



    let value = {
        CrudData,
        setCrudData,
 
    }

    return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>
    
} 