import language from "../components/lang.js"

export default function Page1(props){
    const{lang}=props
    return(
        <h1>{language[lang].p1}</h1>
    )
}