import { NavLink,Routes,Route } from "react-router-dom";
import Home from "../pages/Home"
import Page1 from "../pages/Page1.jsx"
import Page2 from "../pages/Page2.jsx"
import Page3 from "../pages/Page3.jsx"

export default function Main(props){
    const{lang}=props
    return(
        <main>
            <Routes>
                // path="/" or index
                <Route index element={<Home lang={lang}/>}/>
                <Route path="main/page1" element={<Page1 lang={lang}/>}/>
                <Route path="main/page2" element={<Page2 lang={lang}/>}/>
                <Route path="main/page3" element={<Page3 lang={lang}/>}/>
                <Route path="*" element={<h2>Element/Page not found</h2>}/>
            </Routes>
        </main>
    )
}