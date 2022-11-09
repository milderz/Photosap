import StoryCard from "./StoryCard";
import { StyledStoriesContainer } from "./Styles/StoriesContainer.styled";

function StoriesContainer({ preview }) {
  return (
    <StyledStoriesContainer>
      {preview ? (
        <>
          <StoryCard
            cardTitle="The Mountains"
            author="by John Appleseed"
            image="/assets/stories/pic1-mountains.jpg"
          ></StoryCard>
          <StoryCard
            cardTitle="Sunset Cityscapes"
            author="by Benjamin Cruz "
            image="/assets/stories/pic2-cityscapes.jpg"
          ></StoryCard>
          <StoryCard
            cardTitle="18 Days Voyage"
            author="by Alexei Borodin "
            image="/assets/stories/pic3-18days.jpg"
          ></StoryCard>
          <StoryCard
            cardTitle="Architecturals"
            author="by Samantha Brooke "
            image="/assets/stories/pic4-architecturals.jpg"
          ></StoryCard>
        </>
      ) : (
        <>
          <StoryCard
            cardTitle="The Mountains"
            author="by John Appleseed"
            image="/assets/stories/pic1-mountains.jpg"
          ></StoryCard>
          <StoryCard
            cardTitle="Sunset Cityscapes"
            author="by Benjamin Cruz "
            image="/assets/stories/pic2-cityscapes.jpg"
          ></StoryCard>
          <StoryCard
            cardTitle="18 Days Voyage"
            author="by Alexei Borodin "
            image="/assets/stories/pic3-18days.jpg"
          ></StoryCard>
          <StoryCard
            cardTitle="Architecturals"
            author="by Samantha Brooke "
            image="/assets/stories/pic4-architecturals.jpg"
          ></StoryCard>
          <StoryCard
            cardTitle="Architecturals"
            author="by Samantha Brooke "
            image="/assets/stories/pic5-world-tour.jpg"
          ></StoryCard>
          <StoryCard
            cardTitle="Architecturals"
            author="by Samantha Brooke "
            image="/assets/stories/pic7-unforeseen-corners.jpg"
          ></StoryCard>
          <StoryCard
            cardTitle="Architecturals"
            author="by Samantha Brooke "
            image="/assets/stories/pic8-king-on-africa.jpg"
          ></StoryCard>
          <StoryCard
            cardTitle="Architecturals"
            author="by Samantha Brooke "
            image="/assets/stories/pic9-trip-to-nowhere.jpg"
          ></StoryCard>
          <StoryCard
            cardTitle="Architecturals"
            author="by Samantha Brooke "
            image="/assets/stories/pict1-rage-of-the-sea.jpg"
          ></StoryCard>
          <StoryCard
            cardTitle="Architecturals"
            author="by Samantha Brooke "
            image="/assets/stories/pict2-running-free.jpg"
          ></StoryCard>
          <StoryCard
            cardTitle="Architecturals"
            author="by Samantha Brooke "
            image="/assets/stories/pict3-behind-the-waves.jpg"
          ></StoryCard>
          <StoryCard
            cardTitle="Architecturals"
            author="by Samantha Brooke "
            image="/assets/stories/pict4-calm-waters.jpg"
          ></StoryCard>
          <StoryCard
            cardTitle="Architecturals"
            author="by Samantha Brooke "
            image="/assets/stories/pict5-milky-way.jpg"
          ></StoryCard>
          <StoryCard
            cardTitle="Architecturals"
            author="by Samantha Brooke "
            image="/assets/stories/pict6-dark-forest.jpg"
          ></StoryCard>
          <StoryCard
            cardTitle="Architecturals"
            author="by Samantha Brooke "
            image="/assets/stories/pict7-land-of-dreams.jpg"
          ></StoryCard>
          <StoryCard
            cardTitle="Architecturals"
            author="by Samantha Brooke "
            image="/assets/stories/pict7-somwarpet.jpg"
          ></StoryCard>
        </>
      )}
    </StyledStoriesContainer>
  );
}

export default StoriesContainer;
