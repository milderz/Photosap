import { Link } from "react-router-dom";
import { StyledNavBar } from "./Styles/Navbar.styled";
import InviteBtn from "./InviteBtn";

function Navbar({ clicked, handleInviteBtnClick }) {
  return (
    <StyledNavBar clicked={clicked}>
      <ul>
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
      <InviteBtn handleInviteBtnClick={handleInviteBtnClick} />
    </StyledNavBar>
  );
}

export default Navbar;
