import logo from './logo.svg';
import './App.css';
import { mockArticles } from './mock_data/mock_data';
import { formatToArray } from './utils/dataParser';
import {useState, useEffect} from 'react'
import ArticleSummaries from './components/ArticleSummaries/ArticleSummaries';

function App() {
  const [articles, setArticles] = useState(mockArticles.articles)
  const [pairedArticles, setPairedArticles] = useState([])

  useEffect(()=>{
    setPairedArticles(formatToArray(articles))
  },[articles])

  return (
    <main>
      <ArticleSummaries pairedArticles = {pairedArticles}/>
    </main>
  );
}

export default App;
