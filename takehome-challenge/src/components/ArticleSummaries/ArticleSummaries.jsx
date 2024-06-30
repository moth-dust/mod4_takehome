import { useEffect, useState } from "react"
import Summary from "./Summary/Summary"
import Details from "./Details/Details"
import "./ArticleSummaries.css"

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
            if(detailView.title){
                return(
                <Details
                    key={`details-${i}${Date.now()}`}
                    title ={detailView.title}
                    image ={detailView.image}
                    content = {detailView.content}
                    date = {detailView.date}
                    sourceName = {detailView.source.name}
                    sourceURL = {detailView.source.url}
                    changePointer = {changePointer}
                />
                )
            } else {
                return(
                    <div key={'empty'}></div>
                )
            }

        } else {
            return <Summary
                key={`summary-${i}${Date.now()}`}
                id={i+1}
                image={summary.image}
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
return(<div></div>)
}
}

export default ArticleSummaries