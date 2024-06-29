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

  useEffect(()=>{
    let formatted = formatToArray(articles)
    if(query){
    formatted[0] = formatted[0].filter((article)=> article.searchString.includes(query.toLowerCase()))
    }
    setPairedArticles(formatted)
  },[articles, query])


  return (
    <main>
      <input placeholder='search for article' onChange={(e)=>{setQuery(e.target.value)}}></input>
      <ArticleSummaries pairedArticles = {pairedArticles}/>
    </main>
  );
}

export default App;
