// import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FacebookIcon /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><InstagramIcon /></a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer"><YouTubeIcon /></a>
      </div>

      <div className="footer__links">
        <ul>
          <li><Link to="/">Audio Description</Link></li>
          <li><Link to="/">Help Center</Link></li>
          <li><Link to="/">Gift Cards</Link></li>
          <li><Link to="/">Media Center</Link></li>
          <li><Link to="/">Investor Relations</Link></li>
          <li><Link to="/">Jobs</Link></li>
          <li><Link to="/">Terms of Use</Link></li>
          <li><Link to="/">Privacy</Link></li>
          <li><Link to="/">Legal Notices</Link></li>
          <li><Link to="/">Cookie Preferences</Link></li>
          <li><Link to="/">Corporate Information</Link></li>
          <li><Link to="/">Contact Us</Link></li>
        </ul>
      </div>

      <div className="footer__serviceCode">
        <button className="footer__button">Service Code</button>
      </div>

      <div className="footer__copyright">
        <p>© 1997-2026 Netflix, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;