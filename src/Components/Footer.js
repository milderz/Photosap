import InviteLink from "./InviteLink";
import Social from "./Social";
import { StyledFooter } from "./Styles/Footer.styled";
import { Link } from "react-router-dom";
import { Logo } from "./Styles/Header.styled";
function Footer() {
  return (
    <StyledFooter>
      <section>
        <Logo className="footer-logo" src="./assets/shared/logoFooter.svg" />

        <Social className="footer-social" />

        <ul className="footer-nav">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/stories">STORIES</Link>
          </li>
          <li>
            <Link to="/features">FEATURES</Link>
          </li>
          <li>
            <Link to="/pricing">PRICING</Link>
          </li>
        </ul>

        <InviteLink className="footer-invite" version="primary" />
        <p className="footer-copy">Copyright 2019. All Rights Reserved</p>
      </section>
    </StyledFooter>
  );
}

export default Footer;
