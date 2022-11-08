import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const FooterIcons = () => {
  return (
    <ul className="icons">
      <li>
        <a href="https://github.com/pepe199111">
          <FaGithub size={25} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/piotr-pustul/">
          <FaLinkedin size={25} />
        </a>
      </li>
      <li>
        <a href="mailto:piotrpustul1@gmail.com">
          <FaEnvelope size={25} />
        </a>
      </li>
      <li>
        <a href="https://wa.me/+447542384967">
          <FaWhatsapp size={25} />
        </a>
      </li>
    </ul>
  );
};

export default FooterIcons;
