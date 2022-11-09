import { StyledInviteBtn } from "./Styles/InviteBtn.styled";

function InviteBtn({ handleInviteBtnClick }) {
  return (
    <StyledInviteBtn onClick={handleInviteBtnClick}>
      GET AN INVITE
    </StyledInviteBtn>
  );
}

export default InviteBtn;
