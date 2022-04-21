import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = function () {
  return (
    <footer>
      <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">
        <img
          src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
          alt=""
        />
      </a>
    </footer>
  );
};

export default Footer;
