import language from "../components/lang"
import both from "../images/together.JPG"
import Rating from "../components/rating.jsx"

export default function Page3(props){
    const{lang}=props
    return (
        <div>
            <h1>{language[lang].p3}</h1>
            <Rating/>
            <img src={both} alt="" />
        </div>
    )
}