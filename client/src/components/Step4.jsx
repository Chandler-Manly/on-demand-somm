// import "../assets/Step3.css";

export default function Step4(props) {
  if (props.currentStep !== 4) {
    return null;
  }
  return (
    <div className="form-group-4">
      <h2>Initial and Final Conclusion</h2>
      <label>Quality Level: </label>
      <select
        className="create-quality_level"
        required
        name="quality_level"
        onChange={props.handleChange}
        id="dropdown12"
      >
        <option selected={props.quality_level === ""} value="" disable selected>
          Select Quality Level
        </option>
        <option selected={props.quality_level === "poor"} value="poor">
          Poor
        </option>
        <option
          selected={props.quality_level === "acceptable"}
          value="acceptable"
        >
          Acceptable
        </option>
        <option
          selected={props.quality_level === "outstanding"}
          value="outstanding"
        >
          Outstanding
        </option>
      </select>
      <label>Ageing Potential:</label>
      <select
        className="create-ageing_potential"
        required
        name="flavor_characteristics_secondary"
        onChange={props.handleChange}
        id="dropdown13"
      >
        <option
          selected={props.ageing_potential === ""}
          value=""
          disable
          selected
        >
          Select Ageing Potential
        </option>
        <option
          selected={props.ageing_potential === "too-young"}
          value="too-young"
        >
          Too young.
        </option>
        <option selected={props.ageing_potential === "can-drink-now-but-has-potential-for-ageing"} value="can-drink-now-but-has-potential-for-ageing">
          Can drink now. But has potential for ageing.
        </option>
        <option selected={props.ageing_potential === "drink-now-not-suitable-for-ageing-or-further-ageing"} value="drink-now-not-suitable-for-ageing-or-further-ageing">
        Drink now. Not suitable for ageing or further ageing.
        </option>
        <option selected={props.ageing_potential === "too-old"} value="too-old">
          Too old.
        </option>
      </select>
    </div>
  );
}
