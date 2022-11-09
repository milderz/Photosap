import InviteLink from "./InviteLink";
import { StyledBanner } from "./Styles/Banner.styled";

function Banner() {
  return (
    <StyledBanner>
      <div className="container">
        <h2>WE'RE IN BETA. GET YOUR INVITE TODAY!</h2>
        <InviteLink version="primary" />
        <div className="gradient-line"></div>
      </div>
    </StyledBanner>
  );
}

export default Banner;
