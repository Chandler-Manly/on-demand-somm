import "../assets/Step2.css";

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="form-group-2">
      <h2>Nose</h2>
      <div className="create-condition">
        <label>
          Is the wine sound? Or does it smell like damp cardboard on a rainy
          day?
        </label>
        <select
          required
          className="create-condition"
          name="condition"
          onChange={props.handleChange}
          id="condition"
        >
          <option value="" disable selected>
            Select condition
          </option>
          <option selected={props.condition === "clean"} value="cleac">
            Clean
          </option>
          <option selected={props.condition === "faulty"} value="faulty">
            Faulty
          </option>
        </select>
      </div>

      <div className="create-intensity-palate">
        <label>Whoa, too much cologne/perfume? Or is it more subtle?</label>
        <select
          required
          className="create-intensity-palate"
          name="intensity_palate"
          onChange={props.handleChange}
          id="intensity_palate"
        >
          <option value="" disable selected>
            Select aromatic intensity
          </option>
          <option
            selected={props.intensity_palate === "pronounced"}
            value="pronounced"
          >
            Pronounced
          </option>
          <option selected={props.intensity_palate === "medium"} value="medium">
            Medium
          </option>
          <option selected={props.intensity_palate === "light"} value="light">
            Light
          </option>
        </select>
      </div>

      <div className="create-aromas-primary">
        <label>
          Close your eyes, take a whiff, and which foods come to mind? PRO TIP:
          A swirl of the glass will help release those gorgeous scents!
        </label>
        <select
          required
          className="create-aromas-primary"
          name="aromas_primary"
          onChange={props.handleChange}
          id="aromas_primary"
        >
          <option value="" disable selected>
            Select primary aromas
          </option>
          <option selected={props.aromas_primary === "floral"} value="floral">
            Floral
          </option>
          <option
            selected={props.aromas_primary === "green-fruit"}
            value="green-fruit"
          >
            Green fruit
          </option>
          <option
            selected={props.aromas_primary === "citrus-fruit"}
            value="citrus-fruit"
          >
            Citrus fruit
          </option>
          <option
            selected={props.aromas_primary === "stone-fruit"}
            value="stone-fruit"
          >
            Stone fruit
          </option>
          <option
            selected={props.aromas_primary === "tropical-fruit"}
            value="tropical-fruit"
          >
            Tropical fruit
          </option>
          <option
            selected={props.aromas_primary === "red-fruit"}
            value="red-fruit"
          >
            Red fruit
          </option>
          <option
            selected={props.aromas_primary === "black-fruit"}
            value="black-fruit"
          >
            Black fruit
          </option>
          <option
            selected={props.aromas_primary === "blue-fruit"}
            value="blue-fruit"
          >
            Blue fruit
          </option>
          <option
            selected={props.aromas_primary === "dried-cooked-fruit"}
            value="dried-cooked-fruit"
          >
            Dried/cooked fruit
          </option>
          <option
            selected={props.aromas_primary === "herbaceous"}
            value="herbaceous"
          >
            Herbaceous
          </option>
          <option selected={props.aromas_primary === "herbal"} value="herbal">
            Herbal
          </option>
          <option
            selected={props.aromas_primary === "pungent-spices"}
            value="pungent-spices"
          >
            Pungent spices
          </option>
          <option selected={props.aromas_primary === "other"} value="other">
            Other
          </option>
        </select>
      </div>

      <div className="create-aromas_secondary">
        <label>
          Take a moment, set the glass down, pick it back up and let's analyze.{" "}
        </label>
        <select
          required
          className="create-aromas_secondary"
          name="aromas_secondary"
          onChange={props.handleChange}
          id="aromas_secondary"
        >
          <option value="" disable selected>
            Select secondary aromatics
          </option>
          <option selected={props.aromas_secondary === "yeast"} value="yeast">
            Yeast (lees, autolysis)
          </option>
          <option selected={props.aromas_secondary === "mlf"} value="mlf">
            MLF (butter, cheese)
          </option>
          <option selected={props.aromas_secondary === "oak"} value="oak">
            Oak
          </option>
          <option selected={props.aromas_secondary === "na"} value="na">
            NA
          </option>
        </select>
      </div>

      <div className="create-tertiary">
        <label>Alright, Sherlock -- Any tertiary aromas present? </label><br/>
        <select
          required
          className="aromas_tertiary"
          name="aromas_tertiary"
          onChange={props.handleChange}
          id="aromas_tertiary"
        >
          <option value="" disable selected>
            Select tertiary aromatics
          </option>
          <option
            selected={props.aromas_tertiary === "deliberate-oxidation"}
            value="deliberate-oxidation"
          >
            Deliberate oxidation (almond, marzipan, coffee, caramel)
          </option>
          <option
            selected={props.aromas_tertiary === "fruit-development"}
            value="fruit-development"
          >
            Fruit development (dried, fig, prune, cooked)
          </option>
          <option
            selected={props.aromas_tertiary === "bottle-age"}
            value="bottle-age"
          >
            Bottle age (petrol, honey, ginger, nutmeg, toast, mushroom)
          </option>
          <option selected={props.aromas_tertiary === "na"} value="na">
            NA
          </option>
        </select>
      </div>

      <div className="create-development">
        <label>
          Are the aromatics dancing harmoniously together? Or is it still an
          awkward just arrived to the dance and wallflower kind of vibe? If the
          latter, the wine may need some time to find its groove.
        </label>
        <select
          required
          className="create-development"
          name="development"
          onChange={props.handleChange}
          id="development"
        >
          <option value="" disable selected>
            Select development
          </option>
          <option selected={props.development === "youthful"} value="youthful">
            Youthful
          </option>
          <option
            selected={props.development === "developing"}
            value="developing"
          >
            Developing
          </option>
          <option
            selected={props.development === "fully-developed"}
            value="fully-developed"
          >
            Fully developed
          </option>
          <option selected={props.development === "tired"} value="tired">
            Tired/past its best =(
          </option>
        </select>
      </div>
    </div>
  );
}

export default Step2;
