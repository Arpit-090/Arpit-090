import { createContext , useContext } from "react";

const ThemeContext = createContext(
    {
        theme: "dark" ,
        lightmode : ()=>{},
        darkmode : () =>{},

    }
)

export default function useTheme(){
    return(  useContext(ThemeContext))
}
export const Themeprovider = ThemeContext.Provider

