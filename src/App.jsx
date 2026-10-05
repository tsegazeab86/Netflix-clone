// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import requests from './api/requests';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/tv-shows" 
          element={<CategoryPage title="TV Shows" fetchUrl={requests.fetchNetflixOriginals} />} 
        />
        <Route path="/search" element={<SearchPage />} />
        <Route 
          path="/movies" 
          element={<CategoryPage title="Action Movies" fetchUrl={requests.fetchActionMovies} />} 
        />
        <Route 
          path="/latest" 
          element={<CategoryPage title="New & Popular" fetchUrl={requests.fetchTrending} />} 
        />
        <Route 
          path="/my-list" 
          element={<CategoryPage title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />} 
        />
        <Route 
          path="/kids" 
          element={<CategoryPage title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />} 
        />
      </Routes>
    </div>
  );
}

export default App;