import React, { useState } from "react";
import { StyledInviteForm } from "./Styles/InviteForm.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

function InviteForm({ formActive, handleInviteBtnClick }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [formSent, setFormSent] = useState(false);

  const handleInviteFormSubmit = (event) => {
    event.preventDefault();
    setFormSent(true);
  };
  return (
    <StyledInviteForm formActive={formActive} onSubmit={handleInviteFormSubmit}>
      <header>
        <h4>GET AN INVITE</h4>
      </header>
      {formSent ? (
        <>
          <div className="form-sent-message">
            <FontAwesomeIcon icon={faCheckSquare} />
            <p>
              Thank you <span>{name}</span> The invitation request was
              sucessfully sent, check your email: <span>{email}</span> for more
              details
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter your name"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button className="send-invite">SEND INVITE REQUEST</button>
        </>
      )}

      <button className="close-modal" onClick={handleInviteBtnClick}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </StyledInviteForm>
  );
}

export default InviteForm;
