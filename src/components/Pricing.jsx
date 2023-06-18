/* eslint-disable react/prop-types */
function listItem(desc) {
  return (
    <li className="list-item">
      <img src="/src/assets/checkmark.svg"></img>
      <span>{desc}</span>
    </li>
  );
}

function Pricing(props) {
  return (
    <div className="pricing-plan pricing-plan--starter">
      <header className="plan-header">
        <p className="plan-name">{props.planName}</p>
        <p className="plan-text">{props.planDesc}</p>
        <p className="plan-price">
          <span>$</span>
          {props.cost} / Month
        </p>
      </header>
      <ul className="list">{props.features.map(listItem)}</ul>
      <div className="plan-sign-up">
        <a href="#" className="btn btn--full ">
          Get Started
        </a>
      </div>
    </div>
  );
}
export default Pricing;
