import {useReducer} from "react"

const initialState={positive:0,neutral:0,negative:0}

function reducer(previousState,action){
    switch(action.type){
        case "positive":
            return{
                ...previousState,positive:previousState.positive+1
            }
        case "neutral":
            return{
                ...previousState,neutral:previousState.neutral+1
            }
        case "negative":
            return{
                ...previousState,negative:previousState.negative+1
            }

    }
    return {
        ...previousState
    }
}

export default function Rating(){
    const [state,dispatch]=useReducer(reducer,initialState)

    return (
        <div>
            <button onClick={()=>dispatch({type:"positive"})}>+
            {state.positive}</button>
            <button onClick={()=>dispatch({type:"neutral"})}>0
            {state.neutral}</button>
            <button onClick={()=>dispatch({type:"negative"})}>-
            {state.negative}</button>
        </div>
    )
}