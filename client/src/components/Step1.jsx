import React from "react";
import "../assets/Step1.css";

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-group-1">
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
        <label>Can you read your watch by looking through the glass? If so, the wine is clear.</label>
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
          <option selected={props.clarity === "faulty"} value="faulty">
            Faulty
          </option>
        </select>
      </div>

      <div className="create-intensity-aromatics">
        <label>Pale like Edward Cullen from Twilight Saga? Or deep, vibrant colors like fresh fruit at the farmer's market?</label>
        <select
          required
          className="create-intensity-aromatics"
          name="create-intensity-aromatics"
          onChange={props.handleChange}
          id="dropdown"
        >
          <option value="" disable selected>
            Select color intensity.
          </option>
          <option selected={props.intensity_aromatics === "deep"} value="deep">
            Deep
          </option>
          <option selected={props.intensity_aromatics === "medium"} value="medium">
            Medium
          </option>
          <option selected={props.intensity_aromatics === "pale"} value="pale">
            Pale
          </option>
        </select>
      </div>

      <div className="select-create-color">
      <label>Red or white? Can we take it a step further?</label>

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
          <option selected={props.color === "lemon-green"} value="lemon-green">
          Lemon-green
          </option>
          <option selected={props.color === "lemon"} value="lemon">
          Lemon
          </option>
          <option selected={props.color === "gold"} value="gold">
          Gold
          </option>
          <option selected={props.color === "amber"} value="amber">
            Amber
          </option>
          <option selected={props.color === "brown"} value="brown">
            Brown
          </option>
          <option selected={props.color === "purple"} value="purple">
            Purple
          </option>
        </select>
      </div>
      <label>Is there evidence of gas or sediment? How about tears? Staining?</label>

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
          Tears
        </option>
        <option selected={props.observations === "bubbles"} value="bubbles">
          Bubbles
        </option>
        <option selected={props.observations === "deposits"} value="deposits">
          Sediment Deposits
        </option>
        <option selected={props.observations === "staining"} value="staining">
          Staining
        </option>
        <option selected={props.observations === "na"} value="na">
          NA
        </option>
      </select>
    </div>
  );
}
export default Step1;
