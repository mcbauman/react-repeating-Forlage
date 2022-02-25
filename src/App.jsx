import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"
import { useContext, useState } from "react"

export const lastLang=localStorage.getItem("lastLang")
const defaultLang=lastLang?JSON.parse(lastLang):"en"

export default function App() {
    const [lang,setLang]=useState(defaultLang)
    return (
        <div className="{useContext(theme)}">
            <Header lang={lang} setLang={setLang}/>
            <Main lang={lang}/>
            <Footer lang={lang}/>
        </div>
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