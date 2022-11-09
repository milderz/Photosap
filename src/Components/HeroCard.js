import InviteLink from "./InviteLink";
import { StyledHeroCard } from "./Styles/HeroCard.styled";

function HeroCard({ inviteLink, version, title, text }) {
  return (
    <StyledHeroCard version={version}>
      <h2>{title}</h2>
      <p>{text}</p>
      {version === "primary" && <div className="card-line"></div>}

      {inviteLink && <InviteLink version={version} />}
    </StyledHeroCard>
  );
}

export default HeroCard;
