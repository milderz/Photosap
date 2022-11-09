import { StyledPriceCard } from "./Styles/PriceCard.styled";

function PriceCard({ checked, planType, planDesc, planPrice }) {
  return (
    <StyledPriceCard>
      <h4 className="plan-title">{planType}</h4>
      <p className="plan-description">{planDesc}</p>
      <div className="price">
        <p className="plan-price">
          {checked
            ? `${"$" + planPrice * 10 + ".00"}`
            : `${"$" + planPrice + ".00"}`}
        </p>
        <p className="plan-type">per {checked ? "year" : "month"}</p>
      </div>

      <button>PICK PLAN</button>
      <div className="gradient-line"></div>
    </StyledPriceCard>
  );
}

export default PriceCard;
