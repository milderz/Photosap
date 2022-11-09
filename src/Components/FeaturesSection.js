import FeatureCard from "./FeatureCard";
import { StyledFeaturesSection } from "./Styles/FeaturesSection.styled";

function FeaturesSection({ preview }) {
  return (
    <StyledFeaturesSection>
      {preview ? (
        <>
          <div className="container">
            <FeatureCard
              title="100% Responsive"
              text="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
              img="/assets/featuresSVG/responsive.svg"
            ></FeatureCard>
            <FeatureCard
              title="No Photo Upload Limit"
              text="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go. "
              img="/assets/featuresSVG/no-limit.svg"
            ></FeatureCard>
            <FeatureCard
              title="Available to Embed"
              text="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
              img="/assets/featuresSVG/embed.svg"
            ></FeatureCard>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <FeatureCard
              title="100% Responsive"
              text="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
              img="/assets/featuresSVG/responsive.svg"
            ></FeatureCard>
            <FeatureCard
              title="No Photo Upload Limit"
              text="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go. "
              img="/assets/featuresSVG/no-limit.svg"
            ></FeatureCard>
            <FeatureCard
              title="Available to Embed"
              text="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
              img="/assets/featuresSVG/embed.svg"
            ></FeatureCard>
            <FeatureCard
              title="Custom Domain"
              text="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding! "
              img="/assets/featuresSVG/custom-domain.svg"
            ></FeatureCard>
            <FeatureCard
              title="Boost Your Exposure"
              text="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list. "
              img="/assets/featuresSVG/boost-exposure.svg"
            ></FeatureCard>
            <FeatureCard
              title="Drag & Drop Image"
              text=" Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
              img="/assets/featuresSVG/drag-drop.svg"
            ></FeatureCard>
          </div>
        </>
      )}
    </StyledFeaturesSection>
  );
}

export default FeaturesSection;
