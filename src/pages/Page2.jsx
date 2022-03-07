import language from "../components/lang"
import matthias from "../images/matthias.JPG"
import Rating from "../components/rating.jsx"

export default function Page2(props){
    const{lang}=props
    return(
        <div>
            <h1>{language[lang].p2}</h1>
            <Rating/>
            <img src={matthias} alt="" />
        </div>
    )
}