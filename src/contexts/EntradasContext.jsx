import { createContext } from "react";
import useEntradas from "../hooks/useEntradas";

export const EntradasContext = createContext();

export function EntradasProvider({children}){
    const { entradas, add, remove  } = useEntradas();
    return(
        <EntradasContext.Provider value={ {entradas, add, remove} }>
            { children }
        </EntradasContext.Provider>
    )
}