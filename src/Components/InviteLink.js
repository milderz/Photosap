import { StyledInviteLink } from "./Styles/InviteLink.styled";
function InviteLink({ version }) {
  return (
    <StyledInviteLink version={version} href="#">
      GET AN INVITE{" "}
      <svg
        stroke={version === "primary" ? "#fff" : "#000"}
        xmlns="http://www.w3.org/2000/svg"
        width="43"
        height="14"
        data-v-de487016=""
      >
        <g fill="none" fillRule="evenodd" data-v-de487016="">
          <path d="M0 7h41.864M35.428 1l6 6-6 6" data-v-de487016=""></path>
        </g>
      </svg>
    </StyledInviteLink>
  );
}

export default InviteLink;
