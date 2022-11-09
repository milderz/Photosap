import styled from "styled-components";

export const StyledComparisonChartMobile = styled.table`
  display: none;
  width: 80%;
  margin: auto;

  .plan-features {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .plan-feature {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
  }

  thead {
    tr {
      th {
        font-weight: 700;
        font-size: 12px;
        text-align: left;
        height: 3.9rem;
        border-bottom: 1px solid #000;
      }
    }
  }

  tbody {
    tr {
      td {
        height: 11.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-bottom: 1px solid #7f7f7f;
        h4 {
          font-weight: 700;
          font-size: 12px;
        }

        p {
          color: #7f7f7f;
          padding-bottom: 0.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 586px) {
    display: table;
  }
`;
