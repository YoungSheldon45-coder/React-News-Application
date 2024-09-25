import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import '../App.css';

const NewsBoard = ({ category, country, loading, setLoading }) => {
  const [articles, setArticles] = useState([]);
  const [isFetchSuccessful, setIsFetchSuccessful] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsFetchSuccessful(true);
        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=03f94979b1f0476e91557177790e402f`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Upgrade': 'h2c', // This indicates a request to upgrade to HTTP/2 over plain TCP
          },
        });
        const data = await response.json();
        console.log(data.articles)
        // Check if articles is an array and set it, otherwise set empty array
        if (data.articles && Array.isArray(data.articles)) {
          setArticles(data.articles);
        } else {
          setArticles([]);
        }
      } catch (error) {
        setIsFetchSuccessful(false);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };

    fetchNews();
  }, [category, country, setLoading]);

  return (
    <div className="row" style={{ paddingLeft: '2vw', paddingRight: '2vw', backgroundColor: '#030303', width: '101%', minHeight: '100vh', height: 'fit-content' }}>
      {isFetchSuccessful ? (
        <h2 className="text-center" style={{ marginTop: '10px', color: 'white' }}>
          Latest <span className="badge bg-danger">News</span>
        </h2>
      ) : (
        <div>

        </div>
      )}

      {loading && isFetchSuccessful ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        articles.length > 0 ? (
          articles.map((news, index) => (
            <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
          ))
        ) : (
            <div className="failure-info">
            <div className="alert alert-warning d-flex align-items-center" role="alert">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                viewBox="0 0 16 16"
                role="img"
                aria-label="Warning:"
              >
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <p className='alert'><strong className='error-message'>Sorry, unable to retrieve the latest articles at the moment.</strong><br/> <br/>
              <strong className='possible-reasons'>Possible reasons</strong>
              <br/>
              - This could be due to server issues <br/>
              -or network problems on your end. <br/><br/>
              <strong className='suggestions'>Suggestions</strong><br/>
              - Please check your internet connection or try again later. <br/><br/>
              Thank you for your patience.</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default NewsBoard;
