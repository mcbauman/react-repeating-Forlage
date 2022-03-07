import language from "../components/lang.js"
import cynthia from "../images/cynthia.JPG"
import Rating from "../components/rating.jsx"

export default function Page1(props){
    const{lang}=props
    return(
       <div>
            <h1>{language[lang].p1}</h1>
            <Rating/>
            <img src={cynthia} alt="" />
       </div>
    )
}
