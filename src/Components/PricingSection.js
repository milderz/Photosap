import { useState } from "react";
import ComparisonChart from "./ComparisonChart";
import ComparisonChartMobile from "./ComparisonChartMobile";
import PriceCard from "./PriceCard";
import { StyledPricingSection } from "./Styles/PricingSection.styled";
import Switch from "./Switch";

function PricingSection() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.checked);
    setIsChecked(e.target.checked);
  };

  return (
    <StyledPricingSection checked={isChecked}>
      <div className="container">
        <header>
          <p className="price-monthly">Monthly</p>
          <Switch handleChange={handleChange} />
          <p className="price-yearly">Yearly</p>
        </header>
        <div className="price-card-container">
          <PriceCard
            checked={isChecked}
            planType="Basic"
            planDesc="Includes basic usage of our platform. Recommended for new and aspiring photographers."
            planPrice={19}
          />
          <PriceCard
            checked={isChecked}
            planType="Pro"
            planDesc="More advanced features available. Recommended for photography veterans and professionals."
            planPrice={39}
          />
          <PriceCard
            checked={isChecked}
            planType="Business"
            planDesc="Additional features available such as more detailed metrics. Recommended for business owners."
            planPrice={99}
          />
        </div>
        <div className="comparison-chart-container">
          <h3>COMPARE</h3>
          <ComparisonChart />
          <ComparisonChartMobile />
        </div>
      </div>
    </StyledPricingSection>
  );
}

export default PricingSection;
