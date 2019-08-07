import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import "./signin.styles.scss";
import CustomButton from "../custom-button/custom.component";
import { signinGoogle } from "../../firebase/firebase.utils";
export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>i already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            id=""
            value={this.state.email}
            label="Email"
            required
            handleChange={this.handleChange}
          />

          <FormInput
            type="password"
            name="password"
            id=""
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signinGoogle} isGoogleSignIn>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
