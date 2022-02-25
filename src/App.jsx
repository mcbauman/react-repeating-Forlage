import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"
import { useContext, useEffect, useState } from "react"
import {ThemeContext} from "./context/themeContext"

export const lastLang=localStorage.getItem("lastLang")
const defaultLang=lastLang?JSON.parse(lastLang):"en"

const currentTheme=localStorage.getItem("currentTheme")
const defaultTheme=currentTheme?JSON.parse(currentTheme):"dark"

export default function App() {
    const [lang,setLang]=useState(defaultLang)
    const [theme,setTheme]=useState(defaultTheme)
    const themeContext={theme,setTheme}

    useEffect(()=>{
        localStorage.setItem("currentTheme",JSON.stringify(theme))
        console.log(localStorage);
        console.log(theme);
    },[theme])

    return (
        <ThemeContext.Provider value={themeContext}>
            <div className={theme}>
                <Header lang={lang} setLang={setLang}/>
                <Main lang={lang}/>
                <Footer lang={lang}/>
            </div>
        </ThemeContext.Provider>
    )
}

// done - localStorage
// done - props!
// done - useEffect
// done - useState
// import Image
// overlay(login)
// done - language switch (Day6-TodoList)
// useContext
// ThemeSwitch
// useReducer

//fetch from API