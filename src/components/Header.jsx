import { useContext, useEffect} from "react"
import {NavLink} from "react-router-dom"
import language from "./lang"
import {ThemeContext} from "../context/themeContext.js"

export default function Header(props){
    const {lang, setLang}=props
    const changeLang=(e)=>{setLang(e.target.value)}
    useEffect(()=>{
        localStorage.setItem("lastLang",JSON.stringify(lang))
    },[lang])

    const{theme,setTheme}=useContext(ThemeContext)
    const changeTheme=(e)=>{setTheme(e.target.value)}

    return(
        <header>
            <h1>{language[lang].heading}</h1>
            <nav>
                <NavLink to="/main/page1">{language[lang].p1}</NavLink>
                <NavLink to="/main/page2">{language[lang].p2}</NavLink>
                <NavLink to="/main/page3">{language[lang].p3}</NavLink>
                <select onChange={changeTheme} name="color" id="color" defaultValue={theme}>
                    <option value="dark">{language[lang].darkTheme}</option>
                    <option value="light">{language[lang].lightTheme}</option>
                </select>
                <select onChange={changeLang} name="language" id="language" defaultValue={lang}>
                    <option value="en">🇬🇧</option>
                    <option value="de">🇩🇪</option>
                    <option value="ke">🇰🇪</option>
                </select>
            </nav>
        </header>
    )
}