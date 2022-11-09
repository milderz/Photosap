import { ThemeProvider } from "styled-components";
import FeaturesSection from "./Components/FeaturesSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroCard from "./Components/HeroCard";
import HeroImage from "./Components/HeroImage";
import StoriesContainer from "./Components/StoriesContainer";
import GlobalStyles from "./Components/Styles/GlobalStyles";
import { StyledHeroSection } from "./Components/Styles/HeroSection.styled";
import { StyledSecondaryHeroSection } from "./Components/Styles/SecondaryHeroSection.styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoriesHero from "./Components/StoriesHero";
import Banner from "./Components/Banner";
import PricingSection from "./Components/PricingSection";
import InviteForm from "./Components/InviteForm";
import { useState } from "react";

const theme = {
  colors: {
    black: "hsl(0, 0%, 5%)",
    white: "hsl(0, 0%, 100%)",
    gradient: "linear-gradient(to right, #5a77ff,#bc7198,#ffc593)",
  },

  mobile: "768px",
};

function App() {
  const [formActive, setFormActive] = useState(false);

  const handleInviteBtnClick = (event) => {
    event.preventDefault();
    setFormActive(!formActive);
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Header handleInviteBtnClick={handleInviteBtnClick} />
          <InviteForm
            formActive={formActive}
            handleInviteBtnClick={handleInviteBtnClick}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <StyledHeroSection height="65rem" version="primary">
                    <HeroCard
                      version="primary"
                      title="CREATE AND SHARE YOUR PHOTO STORIES."
                      text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
                      inviteLink={true}
                    />
                    <HeroImage image="/assets/home/acreate-and-share.jpg" />
                  </StyledHeroSection>
                  <StyledSecondaryHeroSection height="65rem" version="primary">
                    <HeroImage image="/assets/home/beautiful-stories.jpg" />
                    <HeroCard
                      title="BEAUTIFUL STORIES EVERY TIME."
                      text="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
                      inviteLink={true}
                    />
                  </StyledSecondaryHeroSection>
                  <StyledSecondaryHeroSection height="65rem" reverse={true}>
                    <HeroImage image="/assets/home/designed-for-everyone.jpg" />
                    <HeroCard
                      title="DESIGNED FOR EVERYONE."
                      text="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it. "
                      inviteLink={true}
                    />
                  </StyledSecondaryHeroSection>

                  <StoriesContainer preview={true} />
                  <FeaturesSection preview={true} />
                </>
              }
            ></Route>
            <Route
              path="/stories"
              element={
                <>
                  <StoriesHero />
                  <StoriesContainer preview={false} />
                </>
              }
            ></Route>

            <Route
              path="/features"
              element={
                <>
                  <StyledHeroSection height="49rem" version="primary">
                    <HeroCard
                      version="primary"
                      title="FEATURES"
                      text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
                      inviteLink={false}
                    />
                    <HeroImage image="./assets/features/hero.jpg" />
                  </StyledHeroSection>
                  <FeaturesSection preview={false} />
                  <Banner />
                </>
              }
            ></Route>
            <Route
              path="/pricing"
              element={
                <>
                  <StyledHeroSection height="49rem" version="primary">
                    <HeroCard
                      version="primary"
                      title="PRICING"
                      text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
                      inviteLink={false}
                    />
                    <HeroImage image="./assets/pricing/hero.jpg" />
                  </StyledHeroSection>
                  <PricingSection />
                  <Banner />
                </>
              }
            ></Route>
          </Routes>

          <Footer></Footer>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
