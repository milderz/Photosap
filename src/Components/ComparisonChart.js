import { StyledComparisonChart } from "./Styles/ComparisonChart.styled";

function ComparisonChart() {
  return (
    <StyledComparisonChart>
      <thead>
        <tr>
          <th>THE FEATURES</th>
          <th>BASIC</th>
          <th>PRO</th>
          <th>BUSINESS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>UNLIMITED STORY POSTING</td>
          <td>
            <img src="./assets/pricing/check.svg" alt="" srcSet="" />
          </td>
          <td>
            <img src="./assets/pricing/check.svg" alt="" srcSet="" />
          </td>
          <td>
            <img src="./assets/pricing/check.svg" alt="" srcSet="" />
          </td>
        </tr>
        <tr>
          <td>UNLIMITED PHOTO UPLOAD</td>
          <td>
            <img src="./assets/pricing/check.svg" alt="" srcSet="" />
          </td>
          <td>
            <img src="./assets/pricing/check.svg" alt="" srcSet="" />
          </td>
          <td>
            <img src="./assets/pricing/check.svg" alt="" srcSet="" />
          </td>
        </tr>
        <tr>
          <td>EMBEDDING CUSTOM CONTENT</td>
          <td></td>
          <td>
            <img src="./assets/pricing/check.svg" alt="" srcSet="" />
          </td>
          <td>
            <img src="./assets/pricing/check.svg" alt="" srcSet="" />
          </td>
        </tr>
        <tr>
          <td>CUSTOMIZE METADATA</td>
          <td></td>
          <td>
            <img src="./assets/pricing/check.svg" alt="" srcSet="" />
          </td>
          <td>
            <img src="./assets/pricing/check.svg" alt="" srcSet="" />
          </td>
        </tr>
        <tr>
          <td>ADVANCED METRICS</td>
          <td></td>
          <td></td>

          <td>
            <img src="./assets/pricing/check.svg" alt="" srcSet="" />
          </td>
        </tr>
        <tr>
          <td>PHOTO DOWNLOADS</td>
          <td></td>
          <td></td>

          <td>
            <img src="./assets/pricing/check.svg" alt="" srcSet="" />
          </td>
        </tr>
        <tr>
          <td>SEARCH ENGINE INDEXING</td>
          <td></td>
          <td></td>

          <td>
            <img src="./assets/pricing/check.svg" alt="" srcSet="" />
          </td>
        </tr>
        <tr>
          <td>CUSTOM ANALYTICS</td>
          <td></td>
          <td></td>

          <td>
            <img src="./assets/pricing/check.svg" alt="" srcSet="" />
          </td>
        </tr>
      </tbody>
    </StyledComparisonChart>
  );
}

export default ComparisonChart;
