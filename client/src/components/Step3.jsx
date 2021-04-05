import "../assets/Step3.css";

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div className="form-group-3">
      <h2>Palate</h2>
      <label>Is it boozy or balanced? Fun fact: Greater than 14% ABV is considered High Alc</label>
      <select
        className="create-alcohol"
        required
        name="alcohol"
        onChange={props.handleChange}
        id="alcohol"
      >
        <option selected={props.alcohol === ""} value="" defaultValue>
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
      
<label>Any residual sugar --</label>
      <select
        className="create-sweetness"
        required
        name="sweetness"
        onChange={props.handleChange}
        id="sweetness"
      >
        <option selected={props.sweetness === ""} value="" disable selected>
          Select sweetness
        </option>
        <option selected={props.sweetness === "luscious"} value="luscious">
          Luscious
        </option>
        <option selected={props.sweetness === "sweet"} value="sweet">
          Sweet
        </option>
        <option selected={props.sweetness === "medium-sweet"} value="medium-sweet">
          Medium Sweet
        </option>
        <option selected={props.sweetness === "medium-dry"} value="medium-dry">
          Medium
        </option>
        <option selected={props.sweetness === "off-dry"} value="off-dry">
          Off dry
        </option>
        <option selected={props.sweetness === "dry"} value="dry">
          Dry
        </option>
      </select>

      <label>Acidity -- PH levels</label>

      <select
        className="create-acidity"
        required
        name="acidity"
        onChange={props.handleChange}
        id="acidity"
      >
        <option selected={props.acidity === ""} value="" disable selected>
          Select Acidity.
        </option>
        <option selected={props.acidity === "high"} value="high">
          High
        </option>
        <option selected={props.acidity === "medium+"} value="medium+">
          Medium+
        </option>
        <option selected={props.acidity === "medium"} value="medium">
          Medium
        </option>
        <option selected={props.acidity === "medium-"} value="medium-">
          Medium-
        </option>
        <option selected={props.acidity === "low"} value="low">
          Low
        </option>
      </select>
      <label>Grippy tannins or non-existent?</label>

      <select
        className="create-tannin"
        required
        name="tannin"
        onChange={props.handleChange}
        id="tannin"
      >
        <option selected={props.tannin === ""} value="" disable selected>
          Select tannin
        </option>
        <option selected={props.tannin === "high"} value="high">
          High
        </option>
        <option selected={props.tannin === "medium+"} value="medium+">
          Medium+
        </option>

        <option selected={props.tannin === "medium"} value="medium">
          Medium
        </option>
        <option selected={props.tannin === "medium-"} value="medium-">
          Medium-
        </option>
        <option selected={props.tannin === "low"} value="low">
          Low
        </option>
      </select>
      <label>Whole milk vs Skim milk?</label>
      <select
        className="create-body"
        required
        name="body"
        onChange={props.handleChange}
        id="body"
      >
        <option selected={props.body === ""} value="" disable selected>
          Select body
        </option>
        <option selected={props.body === "full"} value="full">
          Full
        </option>
        <option selected={props.body === "medium+"} value="medium+">
          Medium+
        </option>

        <option selected={props.body === "medium"} value="medium">
          Medium
        </option>
        <option selected={props.body === "medium-"} value="medium-">
          Medium-
        </option>

        <option selected={props.body === "light"} value="low">
          Low
        </option>
      </select>

      <label>Let's talk texture</label>
      <select
        className="create-mousse"
        required
        name="mousse"
        onChange={props.handleChange}
        id="mousse"
      >
        <option selected={props.mousse === ""} value="" disable selected>
          Select mousse.
        </option>
        <option selected={props.mousse === "delicate"} value="delicate">
          Delicate
        </option>
        <option selected={props.mousse === "creamy"} value="creamy">
          Creamy
        </option>
        <option selected={props.mousse === "aggressive"} value="aggressive">
          Aggressive
        </option>
        <option selected={props.mousse === "na"} value="na">
          NA
        </option>
      </select>

      <label>Flavor intensity</label>
      <select
        className="create-intensity_flavor"
        required
        name="intensity_flavor"
        onChange={props.handleChange}
        id="intensity_flavor"
      >
        <option
          selected={props.intensity_flavor === ""}
          value=""
          disable
          selected
        >
          Select intensity flavor.
        </option>
        <option
          selected={props.intensity_flavor === "pronounced"}
          value="pronounced"
        >
          Pronounced
        </option>
        <option selected={props.intensity_flavor === "medium"} value="medium">
          Medium
        </option>
        <option selected={props.intensity_flavor === "light"} value="low">
          Low
        </option>
      </select>
      <label>Primary fruit characteristics</label>
      <select
        className="create-flavor_characteristics_primary"
        required
        name="flavor_characteristics_primary"
        onChange={props.handleChange}
        id="flavor_characteristics_primary"
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
          selected={props.flavor_characteristics_primary === "floral"}
          value="floral"
        >
          Floral
        </option>
        <option
          selected={props.flavor_characteristics_primary === "green-fruit"}
          value="green-fruit"
        >
          Green fruit (gooseberry, apple, pear)
        </option>
        <option
          selected={props.flavor_characteristics_primary === "citrus-fruit"}
          value="citrus-fruit"
        >
          Citrus fruit (grapefruit, lemon, lime)
        </option>
        <option
          selected={props.flavor_characteristics_primary === "stone-fruit"}
          value="stone-fruit"
        >
          Stone fruit
        </option>
        <option
          selected={props.flavor_characteristics_primary === "tropical-fruit"}
          value="tropical-fruit"
        >
          Tropical fruit
        </option>
        <option
          selected={props.flavor_characteristics_primary === "red-fruit"}
          value="red-fruit"
        >
          Red fruit
        </option>
        <option
          selected={props.flavor_characteristics_primary === "black-fruit"}
          value="black-fruit"
        >
          Black fruit
        </option>
        <option
          selected={props.flavor_characteristics_primary === "dried-cooked-fruit"}
          value="dried-cooked-fruit"
        >
Dried cooked fruit
        </option>

        <option
          selected={props.flavor_characteristics_primary === "herbaceous"}
          value="herbaceous"
        >
          Herbaceous
        </option>
        <option
          selected={props.flavor_characteristics_primary === "herbal"}
          value="herbal"
        >
          Herbal
        </option>
        <option
          selected={props.flavor_characteristics_primary === "pungent-spice"}
          value="pungent-spice"
        >
          Pungent spice (black/white pepper, liquorice)
        </option>
      </select>

      <label>Secondary fruit characteristics</label>

      <select
        className="create-flavor_characteristics_secondary"
        required
        name="flavor_characteristics_secondary"
        onChange={props.handleChange}
        id="flavor_characteristics_secondary"
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
        <option
          selected={props.flavor_characteristics_secondary === "na"}
          value="na"
        >
          NA
        </option>
      </select>
      <label>Tertiary fruit characteristics</label>

      <select
        className="create-flavor_characteristics_tertiary"
        required
        name="flavor_characteristics_tertiary"
        onChange={props.handleChange}
        id="flavor_characteristics_tertiary"
      >
        <option
          selected={props.flavor_characteristics_tertiary === ""}
          value=""
          disable
          selected
        >
          Select flavor characteristics tertiary
        </option>
        <option
          selected={props.flavor_characteristics_tertiary === "oxidation"}
          value="oxidation"
        >
          Oxidation
        </option>
        <option
          selected={
            props.flavor_characteristics_tertiary === "fruit-development"
          }
          value="fruit-development"
        >
          Fruit development
        </option>
      </select>
      <label>Ready, set, go! Start clocking the finish...</label>
      <select
        className="create-finish"
        required
        name="finish"
        onChange={props.handleChange}
        id="finish"
      >
        <option selected={props.finish === ""} value="" disable selected>
          Select Finish
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
      <h3>Conclusion</h3>
      <label>Quality level *PRO-TIP: Price does not necessarily correlate with quality.</label>
      <select
        className="create-quality_level"
        required
        name="quality_level"
        onChange={props.handleChange}
        id="quality_level"
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
      <label>Ageing potential</label>

      <select
        className="create-ageing_potential"
        required
        name="ageing_potential"
        onChange={props.handleChange}
        id="ageing_potential"
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
