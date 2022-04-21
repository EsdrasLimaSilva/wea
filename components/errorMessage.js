import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const ErrorMsg = function () {
  return (
    <h2>
      <FontAwesomeIcon icon={faCloud} className="icon" />
      Desculpe, não pudemos localizar essa cidade. Por favor tente novamente.
      <FontAwesomeIcon icon={faCloud} className="icon" />
    </h2>
  );
};

export default ErrorMsg;
