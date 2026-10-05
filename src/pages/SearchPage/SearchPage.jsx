import   { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from '../../api/axios';
import requests from '../../api/requests';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './SearchPage.css';

const base_url = "https://image.tmdb.org/t/p/original/";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSearch() {
      if (!query) return;
      setLoading(true);
      try {
        const request = await axios.get(`${requests.searchMovies}${encodeURIComponent(query)}`);
        setSearchResults(request.data.results);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSearch();
  }, [query]);

  return (
    <div className="searchPage">
      <Header />
      <div className="searchPage__results">
        <h2>Results for: "{query}"</h2>
        {loading ? (
          <p>Loading...</p>
        ) : searchResults.length === 0 ? (
          <p>No titles found matching "{query}".</p>
        ) : (
          <div className="searchPage__grid">
            {searchResults.map((movie) => (
              (movie.poster_path || movie.backdrop_path) && (
                <div key={movie.id} className="searchPage__card">
                  <img
                    src={`${base_url}${movie.poster_path || movie.backdrop_path}`}
                    alt={movie.title || movie.name}
                  />
                  <span>{movie.title || movie.name}</span>
                </div>
              )
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;