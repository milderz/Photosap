import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { StyledSocial } from "./Styles/Social.styled";

function Social() {
  return (
    <StyledSocial>
      <li>
        <a href="/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </li>
      <li>
        <a href="/">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </li>
      <li>
        <a href="/">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li>
        <a href="/">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
      </li>
      <li>
        <a href="/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
    </StyledSocial>
  );
}

export default Social;
