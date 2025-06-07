import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AVAILABLE_SECTIONS } from '/src/utils/constants';
import './Nav.css';

const Nav = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sentinelRef = useRef(null);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  // useEffect gestisce un observer per rilevare quando l'elemento di riferimento (sentinel) entra o esce dalla viewport.
  // Si utilizza il sentinel perchè prendere in considerazione il nav stesso causerebbe un loop:
  // nav esce dal viewport -> nav fixed -> nav è dinuovo nel viewport -> nav è forzato ad essere fixed...
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '0px'
      }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = (section) => {
    if (dropdownRef.current) {
      clearTimeout(dropdownRef.current);
    }
    dropdownRef.current = setTimeout(() => {
      setHoveredSection(section);
    }, 500); // 500ms delay prima di mostrare il dropdown
  };

  const handleMouseLeave = () => {
    if (dropdownRef.current) {
      clearTimeout(dropdownRef.current);
    }
    dropdownRef.current = setTimeout(() => {
      setHoveredSection(null);
    }, 150); // 150ms delay prima di nascondere il dropdown
  };

  const formatSectionName = (section) => {
    return section
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setHoveredSection(null);
  };

  //Esempio di utilizzo della funzione formatSectionName, se (section) = "t-magazine"
  // Dopo "split('-')"
  // ["t", "magazine"]

  // Dopo "map()"
  // ["T", "Magazine"]

  // Dopo "join(' ')"
  // "T Magazine"

  return (
    <>
      <nav ref={navRef} className={`${isFixed ? 'fixed' : ''} ${isOpen ? 'menu-open' : ''}`}>
        <div className="hamburger-container">
          <button
            className="hamburger-menu"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <ul className={`nav-list ${isOpen ? 'mobile-open' : ''}`}>
          {AVAILABLE_SECTIONS.map(section => (
            <li
              key={section}
              className="nav-item"
              onMouseEnter={() => handleMouseEnter(section)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="nav-link-container">
                <Link
                  to={`/section/${section}`}
                  onClick={() => setIsOpen(false)}>
                  {formatSectionName(section)}
                </Link>
                <span className="dropdown-arrow">▾</span>
              </div>
              {hoveredSection === section && (
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    <h3>{formatSectionName(section)}</h3>
                    <p>Latest news from {formatSectionName(section)}</p>
                    {/* more dropdown content */}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="sentinel" ref={sentinelRef} style={{ height: '1px' }}></div>
    </>
  );
};

export default Nav;