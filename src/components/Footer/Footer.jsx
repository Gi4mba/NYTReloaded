import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/giovanni-battista-avella-1a915633b/" target="_blank" rel="noopener noreferrer">
            <span className="social-icon"><i className="fa-brands fa-linkedin-in"></i></span>
          </a>
          <a href="https://github.com/Gi4mba" target="_blank" rel="noopener noreferrer">
            <span className="social-icon"><i className="fa-brands fa-github"></i></span>
          </a>
          <a href="https://gi4mba.github.io" target="_blank" rel="noopener noreferrer">
            <span className="social-icon"><i className="fa-solid fa-globe"></i></span>
          </a>
        </div>
        <div className="footer-text">
          &copy; {new Date().getFullYear()} Giovanni Battista Avella |
          New York Times Reloaded - All rights reserved
        </div>
      </div>
    </footer >
  );
};

export default Footer;