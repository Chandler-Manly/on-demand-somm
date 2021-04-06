import React from "react";
import '../assets/Step0.css';

function Step0(props) {
  if (props.currentStep !== 0) {
    return null;
  }
  return (
  
    <div className="form-group-0">

      <h2>Wine Details</h2>
      <label>Enter Wine Name</label>
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
      <div className="create-producer">
        <label>Who is the producer?</label>
        <input
          required
          className="producer"
          name="producer"
          onChange={props.handleChange}
          id="producer"
       />
      </div>
      <div className="create-varietal">
        <label>What's the primary varietal?</label>
        
        <select
            required
            className="varietal"
            name="varietal"
            onChange={props.handleChange}
            id="varietal"
          >
            <option value="" disable selected>
            Select Varietal
            </option>
            <option selected={props.varietal==="pinot-noir"} value="pinot-noir">
            Pinot Noir
          </option>

          <option selected={props.varietal==="cabernet-sauvignon"} value="cabernet-sauvignon">
          Cabernet Sauvignon
          </option>
          <option selected={props.varietal==="merlot"} value="merlot">
            Merlot
          </option>
          <option selected={props.varietal==="zinfandel"} value="zinfandel">
          Zinfandel
          </option>
          <option selected={props.varietal==="petit-syrah"} value="petit-syrah">
            Petit Syrah 
          </option>
          <option selected={props.varietal==="chardonnay"} value="chardonnay">
            Chardonnay 
          </option>
          <option selected={props.varietal==="sauvignon-blanc"} value="sauvignon-blanc">
            Sauvignon Blanc 
          </option>
          <option selected={props.varietal==="pinot-grigio"} value="pinot-grigio">
            Pinot Grigio 
          </option>
          <option selected={props.varietal==="vermentino"} value="vermentino">
            Vermentino 
          </option>
          <option selected={props.varietal==="verdejo"} value="verdejo">
            Verdejo 
          </option>
          <option selected={props.varietal==="blend"} value="blend">
            Blend 
          </option>
        </select>
      </div>
      </div>
 
  );

}
export default Step0;
