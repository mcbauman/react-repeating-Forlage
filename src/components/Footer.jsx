import language from "./lang"

export default function Footer(props){
    const{lang}=props
    return(
        <footer>
            {language[lang].footer}
        </footer>
    )
}