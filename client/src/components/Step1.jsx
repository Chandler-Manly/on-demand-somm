import React from "react";
import "./Step1.css";

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-group-1">
      <h2>Appearance</h2>
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
      <input
        className="create-clarity"
        id="clarity"
        name="clarity"
        type="text"
        placeholder="Enter clarity"
        value={props.clarity}
        onChange={props.handleChange}
        required
        // save to local storage after each step

      />
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
          Select color
        </option>
        <option selected={props.color==="salmon"} value="salmon">salmon</option>
        <option selected={props.color==="brick"} value="brick">brick</option>
        <option selected={props.color==="garnet"} value="garnet">garnet</option>
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
        <option selected={props.observations==="tears"} value="tears">tears</option>
        <option selected={props.observations==="bubbles"} value="bubbles">bubbles</option>
        <option selected={props.observations==="deposits"} value="deposits">deposits</option>
        </select>
    </div>
  );
}
export default Step1;
