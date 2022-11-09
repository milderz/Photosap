import { StyledReadStoryBtn } from "./Styles/ReadStoryBtn.styled";

function ReadStoryBtn({ handleMouseEnter, handleMouseLeave }) {
  return (
    <StyledReadStoryBtn
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href="/"
    >
      <p>READ STORY</p>
      <svg
        stroke="#fff"
        xmlns="http://www.w3.org/2000/svg"
        width="43"
        height="14"
        data-v-de487016=""
      >
        <g fill="none" fillRule="evenodd" data-v-de487016="">
          <path d="M0 7h41.864M35.428 1l6 6-6 6" data-v-de487016=""></path>
        </g>
      </svg>
    </StyledReadStoryBtn>
  );
}

export default ReadStoryBtn;
