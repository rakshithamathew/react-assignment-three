import React, {Component} from "react";
import "./style.css";

class DisplayForm extends Component {
  render() {
    return (
      <>
        <h1>FEEDBACK SUBMITTED</h1>
        <center>
          <div id="card">
            {this.props.details.map((value, index) => {
              return (
                <p id="card-display">
                  Name: {value.name} <br/> Department:{value.department} <br/> Rating:
                  {value.rating}
                </p>
              );
            })}
          </div>
          <button id="back" onClick={() => this.props.back()}>
            Go Back
          </button>
        </center>
      </>
    );
  }
}

export default DisplayForm;
