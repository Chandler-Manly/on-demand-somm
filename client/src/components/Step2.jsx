import '../assets/Step2.css'


function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="form-group-2">
      <h2>Nose</h2>
      <input
        className="create-condition"
        id="condition"
        name="condition"
        type="text"
        placeholder="Enter condition"
        value={props.condition}
        onChange={props.handleChange}
        required
      />
      <input
        className="create-intensity-palate"
        id="intensity_palate"
        name="intensity_palate"
        type="text"
        placeholder="Enter intensity palate"
        value={props.intensity_palate}
        onChange={props.handleChange}
        required
      />
            <input
        className="create-aromas-primary"
        id="aromas_primary"
        name="aromas_primary"
        type="text"
        placeholder="Enter aromas_primary"
        value={props.aromas_primary}
        onChange={props.handleChange}
        required
      />
                  <input
        className="create-aromas_secondary"
        id="aromas_secondary"
        name="aromas_secondary"
        type="text"
        placeholder="Enter aromas_secondary"
        value={props.aromas_secondary}
        onChange={props.handleChange}
        required
      />
                  <input
        className="create-aromas_tertiary"
        id="aromas_tertiary"
        name="aromas_tertiary"
        type="text"
        placeholder="Enter aromas_tertiary"
        value={props.aromas_tertiary}
        onChange={props.handleChange}
        required
      />
                  <input
        className="create-development"
        id="development"
        name="development"
        type="text"
        placeholder="Enter development"
        value={props.development}
        onChange={props.handleChange}
        required
      />
    </div>
  );
}

export default Step2;
