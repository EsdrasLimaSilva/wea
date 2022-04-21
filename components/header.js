import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = function () {
  return (
    <header>
      <h1>WEA</h1>
      <FontAwesomeIcon icon={faSun} />
      <form id="getCityForm">
        <input type="search" placeholder="Cidade" id="city-input" />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <div>
        <a
          href="https://www.linkedin.com/in/esdras-silva-66b31520b"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a
          href="https://github.com/EsdrasLimaSilva"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
