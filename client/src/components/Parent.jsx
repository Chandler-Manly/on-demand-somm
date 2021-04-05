import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

import "../assets/Parent.css";
import { postWine } from "../services/wines";
import { withRouter } from "react-router-dom";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      name: "",
      clarity: "",
      intensity_aromatics: "",
      color: "",
      observations: "",
      condition: "",
      intensity_palate: "",
      aromas_primary: "",
      aromas_secondary: "",
      aromas_tertiary: "",
      development: "",
      alcohol: "",
      sweetness: "",
      acidity: "",
      tannin: "",
      body: "",
      mousse: "",
      intensity_flavor: "",
      flavor_characteristics_primary: "",
      flavor_characteristics_secondary: "",
      flavor_characteristics_tertiary: "",
      finish: "",
      quality_level: "",
      ageing_potential: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    await postWine(this.state, this.props.user.id);
    const { history } = this.props;
    if (history) history.push("/wines");
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button className="prev-secondary" type="button" onClick={this._prev}>
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button className="next-button" type="button" onClick={this._next}>
          Next
        </button>
      );
    }
    return null;
  }

  _submit = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep === 3;
    this.setState({
      currentStep: currentStep,
    });
  };

  submitButton() {
    if (this.state.currentStep === 3)
    {
      return(
    <button className="submit-button" onClick={this.handleSubmit}>Submit Tasting</button>
    )}
  }

  render() {
    return (
      <React.Fragment>
        <div className="form-header">Tasting Notes</div>
        <div className="step-count">Step {this.state.currentStep} of 3</div>
        <div className="submission-form">
          <form className="submission-form-template">
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              name={this.state.name}
              clarity={this.state.clarity}
              intensity_aromatics={this.state.intensity_aromatics}
              color={this.state.color}
              observations={this.state.observations}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              condition={this.state.condition}
              intensity_palate={this.state.intensity_palate}
              aromas_primary={this.state.aromas_primary}
              aromas_secondary={this.state.aromas_secondary}
              aromas_tertiary={this.state.aromas_tertiary}
              development={this.state.development}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              alcohol={this.state.alcohol}
              sweetness={this.state.sweetness}
              acidity={this.state.acidity}
              tannin={this.state.tannin}
              body={this.state.body}
              mousse={this.state.mousse}
              intensity_flavor={this.state.intensity_flavor}
              flavor_characteristics_primary={
                this.state.flavor_characteristics_primary
              }
              flavor_characteristics_secondary={
                this.state.flavor_characteristics_secondary
              }
              flavor_characteristics_tertiary={
                this.state.flavor_characteristics_tertiary
              }
              finish={this.state.finish}
              quality_level={this.state.quality_level}
              ageing_potential={this.state.ageing_potential}
            />
            
            <div className="form-buttons">
              {this.previousButton()}
              {this.nextButton()}
              {this.submitButton()}
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(MasterForm);
