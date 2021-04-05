import React from "react";

function Step0(props) {
  if (props.currentStep !== 0) {
    return null;
  }
  return (
  
    <div className="form-group-0">
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

      <h2>Wine Details</h2>
      <div className="create-producer">
        <input
          required
          className="producer"
          name="producer"
          onChange={props.handleChange}
          id="producer"
       />
      </div>
      <div className="create-varietal">
        <input
          required
          className="varietal"
          name="varietal"
          onChange={props.handleChange}
          id="varietal"
       />
      </div>
      </div>
 
  );

}
export default Step0;
