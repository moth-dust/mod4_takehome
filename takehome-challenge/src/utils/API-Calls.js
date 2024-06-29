async function getArticles(){
    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6251b6ebbee34be8a4b3162bbf055a98')
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        throw new Error('Something went wrong!')
    }
 
}

export {getArticles}