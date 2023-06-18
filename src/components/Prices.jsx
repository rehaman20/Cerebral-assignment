/* eslint-disable react/jsx-key */
import Pricing from "./Pricing";
import priceData from "./priceText";

function Prices() {
  return (
    <div id="prices">
      <div className="price-title">
        <h1>Find your way forward</h1>
      </div>
      <div className="grid grid--3-cols">
        {priceData.map((price) => (
          <div>
            <Pricing
              // key={price.id}
              planName={price.planName}
              planDesc={price.planDesc}
              cost={price.cost}
              features={price.features}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prices;
