import "../assets/Step3.css";

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div className="form-group-3">
      <h2>Palate + Conclusion</h2>
      <label>Fun fact: Greater than 14% ABV is considered High Alc</label>
      <select
        className="create-alcohol"
        required
        name="alcohol"
        onChange={props.handleChange}
        id="dropdown"
      >
        <option selected={props.alcohol === ""} value="" disable selected>
          Select alcohol level
        </option>
        <option selected={props.alcohol === "high"} value="high">
        High
        </option>
        <option selected={props.alcohol === "medium"} value="medium">
          Medium
        </option>
        <option selected={props.alcohol === "low"} value="low">
          Low
        </option>
      </select>
      
<input>Any residual sugar --</input>
      <select
        className="create-sweetness"
        required
        name="sweetness"
        onChange={props.handleChange}
        id="dropdown2"
      >
        <option selected={props.sweetness === ""} value="" disable selected>
          Select sweetness
        </option>
        <option selected={props.sweetness === "luscious"} value="luscious">
          Luscious
        </option>
        <option selected={props.sweetness === "medium-dry"} value="medium-dry">
          Medium-dry
        </option>
        <option selected={props.sweetness === "dry"} value="dry">
          Dry
        </option>
      </select>
      <input>Acidity -- PH levels</input>

      <select
        className="create-acidity"
        required
        name="acidity"
        onChange={props.handleChange}
        id="dropdown3"
      >
        <option selected={props.acidity === ""} value="" disable selected>
          Select acidity
        </option>
        <option selected={props.acidity === "high"} value="high">
          High
        </option>
        <option selected={props.acidity === "medium"} value="medium">
          Medium
        </option>
        <option selected={props.acidity === "low"} value="low">
          Low
        </option>
      </select>

      <select
        className="create-tannin"
        required
        name="tannin"
        onChange={props.handleChange}
        id="dropdown4"
      >
        <option selected={props.tannin === ""} value="" disable selected>
          Select tannin
        </option>
        <option selected={props.tannin === "high"} value="high">
          High
        </option>
        <option selected={props.tannin === "medium"} value="medium">
          Medium
        </option>
        <option selected={props.tannin === "low"} value="low">
          Low
        </option>
      </select>
      
      <select
        className="create-body"
        required
        name="body"
        onChange={props.handleChange}
        id="dropdown5"
      >
        <option selected={props.body === ""} value="" disable selected>
          Select body
        </option>
        <option selected={props.body === "full"} value="high">
          high
        </option>
        <option selected={props.body === "medium"} value="medium">
          medium
        </option>
        <option selected={props.body === "light"} value="low">
          low
        </option>
      </select>
      <select
        className="create-mousse"
        required
        name="mousse"
        onChange={props.handleChange}
        id="dropdown6"
      >
        <option selected={props.mousse === ""} value="" disable selected>
          Select mousse
        </option>
        <option selected={props.mousse === "delicate"} value="delicate">
          delicate
        </option>
        <option selected={props.mousse === "creamy"} value="creamy">
          creamy
        </option>
        <option selected={props.mousse === "aggressive"} value="aggressive">
          aggressive
        </option>
      </select>

      <select
        className="create-intensity_flavor"
        required
        name="intensity_flavor"
        onChange={props.handleChange}
        id="dropdown7"
      >
        <option
          selected={props.intensity_flavor === ""}
          value=""
          disable
          selected
        >
          Select intensity_flavor
        </option>
        <option
          selected={props.intensity_flavor === "pronounced"}
          value="pronounced"
        >
          pronounced
        </option>
        <option selected={props.intensity_flavor === "medium"} value="medium">
          medium
        </option>
        <option selected={props.intensity_flavor === "light"} value="low">
          low
        </option>
      </select>
      <select
        className="create-flavor_characteristics_primary"
        required
        name="flavor_characteristics_primary"
        onChange={props.handleChange}
        id="dropdown8"
      >
        <option
          selected={props.flavor_characteristics_primary === ""}
          value=""
          disable
          selected
        >
          Select flavor characteristics primary.
        </option>
        <option
          selected={props.flavor_characteristics_primary === "red-fruit"}
          value="red-fruit"
        >
          red-fruit
        </option>
        <option
          selected={props.flavor_characteristics_primary === "blue-fruit"}
          value="blue-fruit"
        >
          blue-fruit
        </option>
        <option
          selected={props.flavor_characteristics_primary === "black-fruit"}
          value="black-fruit"
        >
          black-fruit
        </option>
      </select>
      <select
        className="create-flavor_characteristics_secondary"
        required
        name="flavor_characteristics_secondary"
        onChange={props.handleChange}
        id="dropdown9"
      >
        <option
          selected={props.flavor_characteristics_secondary === ""}
          value=""
          disable
          selected
        >
          Select flavor characteristics secondary.
        </option>
        <option
          selected={props.flavor_characteristics_secondary === "yeast"}
          value="yeast"
        >
          Yeast
        </option>
        <option
          selected={props.flavor_characteristics_secondary === "MLF"}
          value="MLF"
        >
          MLF
        </option>
        <option
          selected={props.flavor_characteristics_secondary === "oak"}
          value="oak"
        >
          Oak
        </option>
      </select>
      <select
        className="create-flavor_characteristics_tertiary"
        required
        name="flavor_characteristics_tertiary"
        onChange={props.handleChange}
        id="dropdown10"
      >
        <option
          selected={props.flavor_characteristics_tertiary === ""}
          value=""
          disable
          selected
        >
          Select flavor_characteristics_tertiary
        </option>
        <option
          selected={props.flavor_characteristics_tertiary === "oxidation"}
          value="oxidation"
        >
          oxidation
        </option>
        <option
          selected={
            props.flavor_characteristics_tertiary === "fruit-development"
          }
          value="fruit-development"
        >
          fruit-development
        </option>
      </select>
      <select
        className="create-finish"
        required
        name="finish"
        onChange={props.handleChange}
        id="dropdown11"
      >
        <option selected={props.finish === ""} value="" disable selected>
          Select Finish.
        </option>
        <option selected={props.finish === "short"} value="short">
          Short
        </option>
        <option selected={props.finish === "medium"} value="medium">
          Medium
        </option>
        <option selected={props.finish === "long"} value="fruit">
          Long
        </option>
      </select>
      <select
        className="create-quality_level"
        required
        name="quality_level"
        onChange={props.handleChange}
        id="dropdown12"
      >
        <option selected={props.quality_level === ""} value="" disable selected>
          Select quality level.
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
export default Step3;
