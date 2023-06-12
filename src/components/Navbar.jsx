import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}%`
      : "0px",
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Codding Addict" className="logo" />
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
