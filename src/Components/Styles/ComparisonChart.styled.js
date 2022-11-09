import styled from "styled-components";

export const StyledComparisonChart = styled.table`
  width: 60%;
  margin: auto;
  font-size: 1.2rem;
  letter-spacing: 0.19em;

  @media screen and (max-width: 1020px) {
    width: 90%;
  }
  thead {
    tr {
      display: grid;
      grid-template-columns: 40% 20% 20% 20%;
      border-bottom: 1px solid #000;

      th {
        height: 3.9rem;
        text-align: left;
        &:not(:first-child) {
          text-align: center;
        }
      }
    }
  }

  tbody {
    tr {
      display: grid;
      grid-template-columns: 40% 20% 20% 20%;
      border-bottom: 1px solid #737373;

      td {
        height: 6.4rem;

        display: flex;

        align-items: center;
        &:not(:first-child) {
          text-align: center;
          justify-content: center;
        }
      }
    }
  }

  @media screen and (max-width: 586px) {
    display: none;
  }
`;
