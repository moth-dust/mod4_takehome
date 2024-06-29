import logo from './logo.svg';
import './App.css';
import { mockArticles } from './mock_data/mock_data';
import { formatToArray } from './utils/dataParser';
import {useState, useEffect} from 'react'
import ArticleSummaries from './components/ArticleSummaries/ArticleSummaries';
import { getArticles } from './utils/API-Calls';

function App() {
  const [articles, setArticles] = useState(mockArticles.articles)
  const [pairedArticles, setPairedArticles] = useState([])
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('Loading')
  
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
  async function loadArticles(){
    try {
      const data = await getArticles()
      setArticles(data.articles)
      console.log('api call triggered, this displays to make sure sure the api is not being infinitely clalled')
      setStatus('')
    } catch (error) {
      setStatus(String(error))
    }
  }
  useEffect(()=>{
    // loadArticles() 
  },[])

  useEffect(()=>{
    if(articles[0]){
      setPairedArticles(formatToArray(articles))
      if(query){
      const filtered = liveSearch(query)
      setPairedArticles(filtered)
      }
    }
  },[articles,query])


  return (
    <main>
      <input placeholder='search for article' onChange={(e)=>{setQuery(e.target.value)}}></input>
      <ArticleSummaries 
      // status = {false}
      pairedArticles = {pairedArticles}
      />
      <div>{status}</div>
    </main>
  );
}

export default App;
