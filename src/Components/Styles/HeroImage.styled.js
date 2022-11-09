import styled from "styled-components";

export const StyledHeroImage = styled.div`
  background-image: url("${({ image }) => image}");
  background-position: center;
  background-size: cover;
`;
