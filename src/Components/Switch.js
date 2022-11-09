import { StyledSwitch } from "./Styles/Swtich.styled";

function Switch({ handleChange }) {
  return (
    <StyledSwitch>
      <input type="checkbox" onChange={handleChange} />
      <span className="slider" />
    </StyledSwitch>
  );
}

export default Switch;
