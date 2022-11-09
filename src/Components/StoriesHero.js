import { useState } from "react";
import ReadStoryBtn from "./ReadStoryBtn";
import { StyledStoriesHero } from "./Styles/StoriesHero.styled";

function StoriesHero() {
  const [effectVisible, setEffectVisible] = useState(false);

  const handleMouseEnter = () => {
    setEffectVisible(true);
  };
  const handleMouseLeave = () => {
    setEffectVisible(false);
  };

  return (
    <StyledStoriesHero effect={effectVisible}>
      <div className="container">
        <p className="last-month">LAST MONTH'S FEATURED STORY</p>
        <h3 className="title">HAZY FULL MOON OF APPALACHIA</h3>
        <p className="published">March 2nd 2020 by John Appleseed</p>
        <p className="main-text">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
        <ReadStoryBtn
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          version="secondary"
        />
      </div>

      <div className="stories-effect"></div>
    </StyledStoriesHero>
  );
}

export default StoriesHero;
