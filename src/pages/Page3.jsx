import language from "../components/lang"

export default function Page3(props){
    const{lang}=props
    return (
        <h1>{language[lang].p3}</h1>
    )
}