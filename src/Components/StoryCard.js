import ReadStoryBtn from "./ReadStoryBtn";
import { StyledStoryCard } from "./Styles/StoryCard.styled";

function StoryCard({ cardTitle, author, image }) {
  return (
    <StyledStoryCard image={image}>
      <h4>{cardTitle}</h4>
      <p>{author}</p>
      <div className="divider"></div>
      <ReadStoryBtn href="/stories" version="primary"></ReadStoryBtn>
    </StyledStoryCard>
  );
}

export default StoryCard;
