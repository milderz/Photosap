import React from "react";
import { StyledFeatureCard } from "./Styles/FeatureCard.styled";

function FeatureCard({ title, text, img }) {
  return (
    <StyledFeatureCard>
      <img src={img} alt="feature-icon" srcSet="" />
      <h4>{title}</h4>
      <p>{text}</p>
    </StyledFeatureCard>
  );
}

export default FeatureCard;
