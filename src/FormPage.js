import React, {Component} from "react";
import "./style.css";
import DisplayForm from "./DisplayForm";

class FormPage extends Component {
  state = {
    name: "",
    department: "",
    rating: "",
    display: true,
    update: [],
  };
  newData = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  submitData = (event) => {
    event.preventDefault();

    const submitNewData = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
      display: this.state.display,
    };

    const newDataUpdated = this.state.update;
    newDataUpdated.push(submitNewData);
    this.setState({
      update: newDataUpdated,
      display: !this.state.display,
    });
  };

  goBackHandler = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  render() {
    return (
      <>
        {this.state.display ? (
          <div>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <br />
            <center>
              <form onSubmit={this.submitData}>
                <br />
                <br />
                <label for="name" i>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={this.newData}
                  value={this.state.name}
                  
                />
                <br />
                <br />
                <label for="dept" >
                  Department
                </label>
                <input
                  type="text"
                  id="dept"
                  name="department"
                  onChange={this.newData}
                  placeholder=" "
                  value={this.state.department}
                  
                />
                <br />
                <br />
                <label for="rating" >
                  Rating
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  onChange={this.newData}
                  placeholder=" "
                  value={this.state.rating}
                  
                />
                <br />
                <br />
                <button id="submit" type="submit">
                  Submit
                </button>
                <br />
                <br />
              </form>
              </center>
            
          </div>
        ) : (
          <DisplayForm details={this.state.update} back={this.goBackHandler} />
        )}
      </>
    );
  }
}

export default FormPage;
