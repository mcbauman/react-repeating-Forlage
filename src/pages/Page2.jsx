import language from "../components/lang"

export default function Page2(props){
    const{lang}=props
    return(
        <h1>{language[lang].p2}</h1>
    )
}