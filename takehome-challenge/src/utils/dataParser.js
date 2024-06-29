function formatToArray(articles){
    const articleSummaries = articles.map((article)=>
        {
            const reformatted = {
                title: article.title,
                image: article.urlToImage,
                description: article.description? article.description: "No description available.",
                date: article.publishedAt
            }
            return reformatted
        })
    const articleDetails = articles.map((article)=>
        {
            const reformatted = {
                title: article.title,
                image: article.urlToImage,
                date: article.publishedAt,
                content: article.content,
                source: {
                    id: article.source.id,
                    name: article.source.name,
                    url: article.url
                }
            }
            return reformatted
        })
}
export {
    formatToArray,
}