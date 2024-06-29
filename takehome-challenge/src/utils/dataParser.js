function formatToArray(articles){
    const articleSummaries = articles.map((article)=>
        {
            const reformatted = {
                title: article.title,
                image: article.urlToImage,
                description: article.description? article.description: "No description available.",
                date: formatDate(article.publishedAt),
            }
            return reformatted
        })
    const articleDetails = articles.map((article)=>
        {
            const reformatted = {
                title: article.title,
                image: article.urlToImage,
                date: formatDate(article.publishedAt),
                content: article.content,
                source: {
                    id: article.source.id,
                    name: article.source.name,
                    url: article.url
                }
            }
            return reformatted
        })
    const pairedArticles = [articleSummaries, articleDetails]
    return pairedArticles
}
function formatDate(date){
    let dateArray = date.split('-')
    dateArray[2] = dateArray[2].substring(0,2)
    return`${dateArray[1]}-${dateArray[2]}-${dateArray[0]}`
}
export {
    formatToArray,
}