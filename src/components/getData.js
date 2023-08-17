import { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=uasiduia', {
          headers: {
            'X-Api-Key': 'WhmitRBUHv9LAjdRrvVfVw==QaSq4YojxGQkm1X6',
          },
        });

        if (!isMounted) {
          return;
        }
        const fetchedQuote = await response.json();
        setLoading(false);
        if (fetchedQuote && fetchedQuote[0]) {
          setQuote(fetchedQuote[0].quote);
        } else {
          setQuote(true);
        }
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    };

    fetchQuote();

    return () => {
      isMounted = false;
    };
  }, []);

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  if (loading) {
    return <h1>Loading</h1>;
  }

  return <div>{quote}</div>;
}

export default Quote;
