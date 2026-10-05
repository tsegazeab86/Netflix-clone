import  { useState, useEffect } from 'react';
import axios from '../../api/axios';
import requests from '../../api/requests';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { SkeletonBanner } from '../Skeleton/Skeleton';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
      } catch (error) {
        console.error("Banner fetch error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  if (loading) return <SkeletonBanner />;

  return (
    <header
      className="banner"
     style={{
  backgroundSize: "cover",
  backgroundImage: movie?.backdrop_path 
    ? `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
    : "none",
  backgroundPosition: "center center",
}}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button play">
            <PlayArrowIcon /> Play
          </button>
          <button className="banner__button info">
            <InfoOutlinedIcon /> More Info
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 160)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;