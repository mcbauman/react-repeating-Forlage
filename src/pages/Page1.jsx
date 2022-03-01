import language from "../components/lang.js"
import cynthia from "../images/cynthia.JPG"

export default function Page1(props){
    const{lang}=props
    return(
       <div>
            <h1>{language[lang].p1}</h1>
            <img src={cynthia} alt="" />
       </div>
    )
}