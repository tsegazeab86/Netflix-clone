import   { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Header.css';

const Header = () => {
  const [show, handleShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className={`header ${show && "header__black"}`}>
      <div className="header__contents">
        <div className="header__left">
          <Link to="/">
            <img
              className="header__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix Logo"
            />
          </Link>
          <ul className="header__navigation">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tv-shows">TV Shows</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/latest">New & Popular</Link></li>
            <li><Link to="/my-list">My List</Link></li>
          </ul>
        </div>

        <div className="header__right">
          {/* Search Bar Section */}
          <div className={`header__searchContainer ${showSearch ? 'active' : ''}`}>
            <SearchIcon 
              className="header__icon" 
              onClick={() => setShowSearch(!showSearch)} 
            />
            {showSearch && (
              <input
                type="text"
                placeholder="Titles, people, genres"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchSubmit}
                className="header__searchInput"
                autoFocus
              />
            )}
          </div>

          <Link to="/kids" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>KIDS</span>
          </Link>
          <NotificationsNoneIcon className="header__icon" />

          {/* User Account Dropdown Section */}
          <div 
            className="header__avatarContainer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="header__avatarGroup">
              <AccountBoxIcon className="header__avatar" />
              <ArrowDropDownIcon className={`header__icon ${showDropdown ? 'rotate' : ''}`} />
            </div>

            {showDropdown && (
              <div className="header__dropdown">
                <div className="header__dropdownOption">
                  <AccountBoxIcon /> <span>User Profile</span>
                </div>
                <div className="header__dropdownOption">Account</div>
                <div className="header__dropdownOption">Help Center</div>
                <hr />
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;