import language from "../components/lang"
import both from "../images/together.JPG"

export default function Page3(props){
    const{lang}=props
    return (
        <div>
            <h1>{language[lang].p3}</h1>
            <img src={both} alt="" />
        </div>
    )
}