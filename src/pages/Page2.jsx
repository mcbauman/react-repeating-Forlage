import language from "../components/lang"
import matthias from "../images/matthias.JPG"

export default function Page2(props){
    const{lang}=props
    return(
        <div>
            <h1>{language[lang].p2}</h1>
            <img src={matthias} alt="" />
        </div>
    )
}