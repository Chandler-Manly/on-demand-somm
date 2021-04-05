import React from "react";
import "../assets/Step1.css";

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-group-1">
      <label>Name:</label>
      <input
        className="create-name"
        id="name"
        name="name"
        type="text"
        placeholder="Enter Wine Name"
        value={props.name}
        onChange={props.handleChange}
        autoFocus
        required
        />

        <h2>Appearance</h2>
      <div className="create-clarity">
        <select
          required
          className="create-clarity"
          name="create-clarity"
          onChange={props.handleChange}
          id="dropdown"
        >
          <option value="" disable selected>
            Select Clarity
          </option>
          <option selected={props.clarity === "clear"} value="clear">
            Clear
          </option>
          <option selected={props.clarity === "hazy"} value="hazy">
            Hazy
          </option>
        </select>
      </div>

      <input
        className="create-intensity-aromatics"
        id="intensity_aromatics"
        name="intensity_aromatics"
        type="text"
        placeholder="Enter intensity_aromatics"
        value={props.intensity_aromatics}
        onChange={props.handleChange}
        required
      />

      <div className="select-create-color">
        <select
          required
          className="create-color"
          name="color"
          onChange={props.handleChange}
          id="dropdown"
        >
          <option value="" disable selected>
            Select Color
          </option>
          <option selected={props.color === "salmon"} value="salmon">
            Salmon
          </option>
          <option selected={props.color === "pink"} value="pink">
            Pink
          </option>
          <option selected={props.color === "garnet"} value="garnet">
            Garnet
          </option>
          <option selected={props.color === "garnet"} value="garnet">
            garnet
          </option>
          <option selected={props.color === "garnet"} value="garnet">
            garnet
          </option>
          <option selected={props.color === "garnet"} value="garnet">
            garnet
          </option>
          <option selected={props.color === "garnet"} value="garnet">
            garnet
          </option>
          <option selected={props.color === "garnet"} value="garnet">
            garnet
          </option>
          <option selected={props.color === "garnet"} value="garnet">
            garnet
          </option>
        </select>
      </div>
      <select
        required
        className="create-observations"
        name="observations"
        onChange={props.handleChange}
        id="dropdown"
      >
        <option value="" disable selected>
          Select observations
        </option>
        <option selected={props.observations === "tears"} value="tears">
          tears
        </option>
        <option selected={props.observations === "bubbles"} value="bubbles">
          bubbles
        </option>
        <option selected={props.observations === "deposits"} value="deposits">
          deposits
        </option>
      </select>
    </div>
  );
}
export default Step1;
