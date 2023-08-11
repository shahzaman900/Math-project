import { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: {
          'X-Api-Key': 'WhmitRBUHv9LAjdRrvVfVw==QaSq4YojxGQkm1X6',
        },
      });
      const fetchedQuote = await response.json();
      setLoading(true);
      setQuote(fetchedQuote[0].quote);
    };

    fetchQuote();
  }, []);

  if (loading === false) {
    return (
      <h1>loading</h1>
    );
  }
  return (
      <div>
        {quote}
      </div>
  );
}

export default Quote;