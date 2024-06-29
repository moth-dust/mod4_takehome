import Summary from "./Summary/Summary"

function ArticleSummaries({pairedArticles}){
if(pairedArticles[0]){
    const summariesJSX = pairedArticles[0].map((summary, i)=>
    <Summary
        key={`summary-${i}${Date.now()}`}
        id={`summary-${i}`}
        title ={summary.title}
        description = {summary.description}
        date = {summary.date}
    />)
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