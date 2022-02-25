import react, { useState } from "react"

export ThemeContext=React.createContext(null)

export default const ThemeContextProvider=()=>{
    const [theme,setTheme]=useState("dark")
    const changeTheme=()=>{
        theme=="dark"?setTheme("light"):setTheme("dark")
    }

}