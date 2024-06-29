import logo from './logo.svg';
import './App.css';
import { mockArticles } from './mock_data/mock_data';
import { formatToArray } from './utils/dataParser';
import {useState, useEffect} from 'react'
import ArticleSummaries from './components/ArticleSummaries/ArticleSummaries';

function App() {
  const [articles, setArticles] = useState(mockArticles.articles)
  const [pairedArticles, setPairedArticles] = useState([])
  const [query, setQuery] = useState('')
  
  function liveSearch(){
      const summaryFiltered = pairedArticles[0].filter((article)=> article.searchString.includes(query.toLowerCase()))
      let detailsFiltered = []
      summaryFiltered.forEach(article => {
        const match = pairedArticles[1].find((detail) => detail.title == article.title)
        if(match){
        detailsFiltered.push(match)
        }
      })
      return ([summaryFiltered, detailsFiltered])
    }
  
  useEffect(()=>{
    setPairedArticles(formatToArray(articles))
    if(query){
    const filtered = liveSearch(query)
    setPairedArticles(filtered)
    }
  },[articles,query])


  return (
    <main>
      <input placeholder='search for article' onChange={(e)=>{setQuery(e.target.value)}}></input>
      <ArticleSummaries pairedArticles = {pairedArticles}/>
    </main>
  );
}

export default App;
