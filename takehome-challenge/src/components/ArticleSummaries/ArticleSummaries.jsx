import { useEffect, useState } from "react"
import Summary from "./Summary/Summary"

function ArticleSummaries({pairedArticles}){
    const [pointer, setPointer] = useState(0)
    const [detailView, setDetailview] = useState({})
    function changePointer(id){
        setPointer(id)
    }
    useEffect(()=>{
        if(pointer){
            setDetailview(pairedArticles[1][pointer-1])
        }
    },[pointer])

    if(pairedArticles[0]){
        const summariesJSX = pairedArticles[0].map((summary, i)=>{
        if (pointer == i+1){
                return(<div>hi</div>)

        } else {
            return <Summary
            key={`summary-${i}${Date.now()}`}
            id={i+1}
            title ={summary.title}
            description = {summary.description}
            date = {summary.date}
            changePointer = {changePointer}

        />
    }})
    return(
        <div>
            {summariesJSX}
        </div>
    )
} else {
return(<div>loading</div>)
}
}

export default ArticleSummaries