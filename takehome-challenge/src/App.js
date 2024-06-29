import logo from './logo.svg';
import './App.css';
import { mockArticles } from './mock_data/mock_data';
import { formatToArray } from './utils/dataParser';
import {useState, useEffect} from 'react'

function App() {
  const [articles, setArticles] = useState(mockArticles.articles)
  const [pairedArticles, setPairedArticles] = useState([])

  useEffect(()=>{
    setPairedArticles(formatToArray(articles))
    console.log(articles)
  },[articles])

  return (
    <main>
      <div>hi</div>
    </main>
  );
}

export default App;
