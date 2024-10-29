import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
      setAuthor(response.data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div id="quote-box" className="quote-box">
      <h1 id="text">{quote}</h1>
      <p id="author">- {author}</p>
      <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
      <button id="tweet-quote" onClick={tweetQuote}>Tweet Quote</button>
    </div>
  );
};

export default App;
