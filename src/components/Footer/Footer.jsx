import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-text">
        &copy; {new Date().getFullYear()} Giovanni Battista Avella |
        New York Times Reloaded - All rights reserved</div>
    </footer>
  );
};

export default Footer;